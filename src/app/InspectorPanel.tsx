import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { Layers, Code2 } from "lucide-react";

// ── CSS groups to display ─────────────────────────────────────────────────────

const PROP_GROUPS: { label: string; props: string[] }[] = [
  {
    label: "Layout",
    props: ["display", "position", "width", "height", "min-width", "max-width", "min-height", "max-height", "flex-direction", "flex-wrap", "justify-content", "align-items", "align-self", "flex", "flex-grow", "flex-shrink", "gap", "grid-template-columns", "overflow", "overflow-x", "overflow-y"],
  },
  {
    label: "Espaciado",
    props: ["padding-top", "padding-right", "padding-bottom", "padding-left", "margin-top", "margin-right", "margin-bottom", "margin-left"],
  },
  {
    label: "Tipografía",
    props: ["font-family", "font-size", "font-weight", "line-height", "letter-spacing", "text-align", "color", "text-decoration", "text-transform", "white-space"],
  },
  {
    label: "Fondo",
    props: ["background-color", "background-image", "opacity"],
  },
  {
    label: "Borde",
    props: ["border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-top-color", "border-style"],
  },
  {
    label: "Efectos",
    props: ["box-shadow", "z-index", "transform", "cursor", "pointer-events", "transition-property"],
  },
];

// Valores que no aportan información útil
const SKIP_VALUES = new Set(["", "none", "normal", "auto", "initial", "0px", "0px 0px 0px 0px", "rgba(0, 0, 0, 0)", "transparent", "inherit", "unset", "revert", "nowrap", "visible", "static", "start", "0", "1", "inline"]);

// ── Helpers ───────────────────────────────────────────────────────────────────

function getElementName(el: Element): string {
  const tag = el.tagName.toLowerCase();
  if (el.id) return `${tag}#${el.id}`;

  if (tag === "button") {
    const text = el.textContent?.trim().slice(0, 24);
    return text ? `button "${text}"` : "button";
  }
  if (tag === "input") {
    const type = (el as HTMLInputElement).type || "text";
    const ph = el.getAttribute("placeholder")?.slice(0, 24);
    return ph ? `input[${type}] "${ph}"` : `input[${type}]`;
  }
  if (tag === "label") {
    const text = el.textContent?.trim().slice(0, 24);
    return text ? `label "${text}"` : "label";
  }
  if (tag === "a") {
    const text = el.textContent?.trim().slice(0, 24) || el.getAttribute("href")?.slice(0, 24);
    return text ? `a "${text}"` : "a";
  }

  // Try React fiber for component name
  const fiberKey = Object.keys(el).find(k => k.startsWith("__reactFiber") || k.startsWith("__reactInternalInstance"));
  if (fiberKey) {
    let fiber = (el as any)[fiberKey];
    let depth = 0;
    while (fiber && depth < 12) {
      const name: string = fiber.type?.displayName || fiber.type?.name || "";
      if (name && name.length > 1 && /^[A-Z]/.test(name) && name !== "ForwardRef") {
        return `<${name}>`;
      }
      fiber = fiber.return;
      depth++;
    }
  }

  // Class hint
  const cl = (el.className || "").toString().split(/\s+/).find(c => /^[a-zA-Z][a-zA-Z-]+$/.test(c) && c.length < 20);
  return cl ? `${tag}.${cl}` : tag;
}

function isInspectorUI(el: Element | null): boolean {
  return !!el?.closest("[data-inspector-ui]");
}

function extractStyles(el: Element): Record<string, Record<string, string>> {
  const cs = window.getComputedStyle(el);
  const result: Record<string, Record<string, string>> = {};
  for (const group of PROP_GROUPS) {
    const vals: Record<string, string> = {};
    for (const prop of group.props) {
      const v = cs.getPropertyValue(prop).trim();
      if (v && !SKIP_VALUES.has(v)) vals[prop] = v;
    }
    if (Object.keys(vals).length) result[group.label] = vals;
  }
  return result;
}

// ── Component ─────────────────────────────────────────────────────────────────

interface PanelData {
  el: Element;
  name: string;
  styles: Record<string, Record<string, string>>;
  rect: DOMRect;
}

export function InspectorPanel() {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState<{ el: Element; name: string; x: number; y: number; rect: DOMRect } | null>(null);
  const [locked, setLocked] = useState<PanelData | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const rafRef = useRef<number>(0);
  const isLockedRef = useRef(false);

  const buildData = useCallback((el: Element): PanelData => ({
    el,
    name: getElementName(el),
    styles: extractStyles(el),
    rect: el.getBoundingClientRect(),
  }), []);

  useEffect(() => {
    if (!active) {
      setHover(null);
      setLocked(null);
      isLockedRef.current = false;
      return;
    }

    const onMove = (e: MouseEvent) => {
      if (isLockedRef.current) return;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (!el || isInspectorUI(el)) return;
        setHover({
          el,
          name: getElementName(el),
          x: e.clientX,
          y: e.clientY,
          rect: el.getBoundingClientRect(),
        });
      });
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isInspectorUI(target)) return;
      if (!isLockedRef.current) {
        isLockedRef.current = true;
        setLocked(buildData(target));
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isLockedRef.current) {
        isLockedRef.current = false;
        setLocked(null);
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKey);
      cancelAnimationFrame(rafRef.current);
    };
  }, [active, buildData]);

  const copy = (key: string, val: string) => {
    navigator.clipboard.writeText(val).catch(() => {});
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  const display = locked ?? (hover ? { el: hover.el, name: hover.name, styles: extractStyles(hover.el), rect: hover.rect } : null);
  const highlightRect = locked ? locked.el.getBoundingClientRect() : hover?.rect;

  return createPortal(
    <>
      {/* ── ESC floating chip (visible when locked, above toggle) ── */}
      {active && locked && (
        <div
          data-inspector-ui
          style={{ fontFamily: "system-ui, sans-serif", bottom: "52px", left: "20px" }}
          className="fixed z-[9999] flex items-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-800 text-[10px] px-2.5 py-1.5 rounded-lg shadow-md pointer-events-none whitespace-nowrap"
        >
          <kbd className="bg-white border border-amber-300 text-amber-700 px-1 py-0.5 rounded text-[9px] font-mono font-bold">ESC</kbd>
          <span>para desbloquear</span>
        </div>
      )}

      {/* ── Toggle ── */}
      <button
        data-inspector-ui
        onClick={() => setActive(p => !p)}
        style={{ fontFamily: "system-ui, sans-serif" }}
        className={`fixed bottom-5 left-5 z-[9999] flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold shadow-xl border-2 transition-all select-none ${
          active
            ? "bg-[#00008F] text-white border-[#00008F]"
            : "bg-white text-[#00008F] border-[#00008F]/40 hover:border-[#00008F] hover:shadow-2xl"
        }`}
      >
        <Layers size={13} />
        {active ? "Inspectando…" : "Inspeccionar"}
      </button>

      {active && (
        <>
          {/* ── Element highlight ── */}
          {highlightRect && (
            <div
              data-inspector-ui
              style={{
                position: "fixed",
                top: highlightRect.top - 2,
                left: highlightRect.left - 2,
                width: highlightRect.width + 4,
                height: highlightRect.height + 4,
                border: `2px ${locked ? "dashed" : "solid"} #00008F`,
                borderRadius: 4,
                background: "rgba(0,0,143,0.05)",
                pointerEvents: "none",
                zIndex: 9997,
                boxSizing: "border-box",
                transition: locked ? "none" : "all 80ms ease",
              }}
            />
          )}

          {/* ── Cursor badge ── */}
          {hover && !locked && (
            <div
              data-inspector-ui
              style={{
                position: "fixed",
                top: hover.y + 18,
                left: hover.x + 14,
                zIndex: 9998,
                pointerEvents: "none",
                fontFamily: "monospace",
              }}
              className="bg-[#00008F] text-white text-[10px] px-2 py-1 rounded-md shadow-lg whitespace-nowrap leading-tight"
            >
              {hover.name}
            </div>
          )}

          {/* ── Right panel ── */}
          {display && (
            <div
              data-inspector-ui
              style={{ fontFamily: "monospace", zIndex: 9998 }}
              className="fixed top-0 right-0 h-full w-72 bg-white border-l border-gray-200 shadow-2xl flex flex-col overflow-hidden text-[11px]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-3 py-2.5 bg-[#00008F] text-white shrink-0">
                <div className="flex items-center gap-2 min-w-0">
                  <Code2 size={12} className="shrink-0" />
                  <span className="font-semibold truncate text-xs">{display.name}</span>
                </div>
              </div>

              {/* ESC hint banner (locked mode) */}
              {locked && (
                <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 border-b border-amber-200 shrink-0">
                  <kbd className="text-[9px] bg-white border border-amber-300 text-amber-700 px-1.5 py-0.5 rounded font-mono font-bold shadow-sm">ESC</kbd>
                  <span className="text-[10px] text-amber-700">para desbloquear y volver al hover</span>
                </div>
              )}

              {/* Tag line */}
              <div className="px-3 py-2 bg-gray-50 border-b border-gray-100 shrink-0">
                <p className="text-[10px] text-gray-500 break-all leading-snug">
                  {"<"}{display.el.tagName.toLowerCase()}
                  {display.el.id ? ` id="${display.el.id}"` : ""}
                  {">"}
                </p>
                {(display.el.className || "").toString().trim() && (
                  <p className="text-[9px] text-gray-400 break-all leading-snug mt-0.5">
                    {(display.el.className || "").toString().trim().slice(0, 80)}
                  </p>
                )}
              </div>

              {/* Properties */}
              <div className="flex-1 overflow-y-auto">
                {Object.entries(display.styles).map(([group, props]) => (
                  <div key={group}>
                    <div className="px-3 py-1.5 bg-gray-50 border-y border-gray-100 text-[9px] font-bold tracking-widest text-gray-400 uppercase sticky top-0">
                      {group}
                    </div>
                    {Object.entries(props).map(([key, val]) => (
                      <button
                        key={key}
                        data-inspector-ui
                        onClick={() => copy(key, val)}
                        className="w-full flex justify-between items-start px-3 py-1.5 hover:bg-blue-50 text-left gap-3 border-b border-gray-50 transition-colors cursor-copy"
                        title="Clic para copiar"
                      >
                        <span className="text-gray-400 shrink-0 text-[10px]">{key}</span>
                        <span className={`font-medium text-right break-all leading-tight text-[10px] ${copiedKey === key ? "text-green-600" : "text-gray-800"}`}>
                          {copiedKey === key ? "✓ copiado" : val}
                        </span>
                      </button>
                    ))}
                  </div>
                ))}
                {!Object.keys(display.styles).length && (
                  <p className="text-gray-400 text-center p-6 text-[10px]">Sin propiedades destacadas</p>
                )}
              </div>

              {/* Dimensions footer */}
              <div data-inspector-ui className="px-3 py-2 bg-gray-50 border-t border-gray-200 flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-gray-500 shrink-0">
                {[
                  ["W", Math.round(display.rect.width) + "px"],
                  ["H", Math.round(display.rect.height) + "px"],
                  ["X", Math.round(display.rect.left) + ""],
                  ["Y", Math.round(display.rect.top) + ""],
                ].map(([k, v]) => (
                  <span key={k}>{k}: <strong className="text-gray-700">{v}</strong></span>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>,
    document.body
  );
}
