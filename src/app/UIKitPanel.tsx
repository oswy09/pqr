import { useState } from "react";
import { createPortal } from "react-dom";
import { Palette, X, ChevronDown, AlertCircle, CheckCircle2 } from "lucide-react";

const iBase =
  "w-full px-4 py-3 rounded-xl border border-border bg-[#F8F9FB] text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all";

// ── sub-components ────────────────────────────────────────────────────────────

function Sec({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "#00008F", background: "rgba(0,0,143,.08)", padding: "3px 10px", borderRadius: 99 }}>{label}</span>
        <div style={{ flex: 1, height: 1, background: "rgba(0,0,143,.12)" }} />
      </div>
      {children}
    </div>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: "#fff", border: "1px solid rgba(0,0,143,.1)", borderRadius: 14, padding: "22px 26px", ...style }}>
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 11, fontWeight: 700, color: "#00008F", textTransform: "uppercase", letterSpacing: ".1em", margin: "0 0 3px" }}>{children}</p>;
}
function CardNote({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 12, color: "#8089A0", margin: "0 0 18px" }}>{children}</p>;
}

function BtnState({ label, sub, children }: { label: string; sub?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
      {children}
      <span style={{ fontSize: 10, fontWeight: 700, color: "#8089A0", letterSpacing: ".04em" }}>{label}</span>
      {sub && <span style={{ fontSize: 9, fontFamily: "monospace", color: "#B0B8C8", marginTop: -4 }}>{sub}</span>}
    </div>
  );
}

function FieldState({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span style={{ fontSize: 10, fontWeight: 700, color: "#8089A0", textTransform: "uppercase", letterSpacing: ".08em", display: "block", marginBottom: 6 }}>{label}</span>
      {children}
    </div>
  );
}

function ColorChip({ name, hex, dark, bg }: { name: string; hex: string; dark: boolean; bg?: string }) {
  return (
    <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(0,0,143,.1)" }}>
      <div style={{ height: 52, background: bg ?? hex, display: "flex", alignItems: "flex-end", padding: "6px 9px" }}>
        <span style={{ fontSize: 9, fontFamily: "monospace", fontWeight: 700, color: dark ? "rgba(255,255,255,.7)" : "#8089A0" }}>{name}</span>
      </div>
      <div style={{ padding: "8px 10px", background: "#fff" }}>
        <span style={{ fontSize: 10, fontFamily: "monospace", color: "#8089A0" }}>{hex}</span>
      </div>
    </div>
  );
}

function StepPip({ num, state, connector }: { num: number; state: "done" | "active" | "pending"; connector: boolean }) {
  const on = state !== "pending";
  return (
    <div style={{ display: "flex", alignItems: "center", flex: 1, minWidth: 0 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{
          width: 30, height: 30, borderRadius: "50%",
          background: on ? "#00008F" : "#EFEFF1",
          color: on ? "#fff" : "#8089A0",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 700,
          outline: state === "active" ? "3px solid rgba(0,0,143,.2)" : "none",
          outlineOffset: 2,
        }}>
          {state === "done" ? "✓" : num}
        </div>
      </div>
      {connector && <div style={{ flex: 1, height: 2, background: state === "done" ? "#00008F" : "#EFEFF1", margin: "0 2px" }} />}
    </div>
  );
}

const STEPS = ["Solicitud", "Datos personales", "Detalle", "Confirmación"];

function Stepper({ active }: { active: number }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {STEPS.map((_, i) => (
          <StepPip key={i} num={i + 1} state={i < active ? "done" : i === active ? "active" : "pending"} connector={i < STEPS.length - 1} />
        ))}
      </div>
      <div style={{ display: "flex", marginTop: 8 }}>
        {STEPS.map((label, i) => (
          <div key={i} style={{ flex: 1, textAlign: "center", fontSize: 11, color: i <= active ? "#00008F" : "#8089A0", fontWeight: i === active ? 700 : 500, minWidth: 0, padding: "0 2px" }}>{label}</div>
        ))}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function UIKitPanel() {
  const [open, setOpen] = useState(false);

  return createPortal(
    <>
      {/* Side tab */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed", left: 0, top: "42%", transform: "translateY(-50%)",
          zIndex: 9988, background: "#00008F", color: "#fff",
          border: "none", borderRadius: "0 8px 8px 0",
          padding: "18px 8px", cursor: "pointer",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          boxShadow: "2px 0 16px rgba(0,0,143,.28)",
          fontFamily: "system-ui, sans-serif",
          transition: "background .15s",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "#0000F7")}
        onMouseLeave={e => (e.currentTarget.style.background = "#00008F")}
      >
        <Palette size={13} />
        <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: 9.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>
          UI Kit
        </span>
      </button>

      {/* Overlay */}
      {open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9989, background: "#F5F5FB", overflowY: "auto", fontFamily: "'Source Sans 3', system-ui, sans-serif" }}>

          {/* Header */}
          <div style={{ position: "sticky", top: 0, zIndex: 10, background: "#00008F", color: "#fff", padding: "16px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 20px rgba(0,0,143,.4)" }}>
            <div>
              <h1 style={{ fontSize: 17, fontWeight: 800, margin: 0, letterSpacing: "-.01em" }}>UI Kit · PQRS AXA Colpatria</h1>
              <p style={{ fontSize: 12, opacity: .65, margin: 0 }}>Referencia de componentes y estados del prototipo</p>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.25)", color: "#fff", borderRadius: 8, padding: "7px 16px", cursor: "pointer", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
              <X size={14} /> Cerrar
            </button>
          </div>

          <div style={{ maxWidth: 1040, margin: "0 auto", padding: "44px 48px 80px", display: "flex", flexDirection: "column", gap: 48 }}>

            {/* ── 01 COLORS ─────────────────────────────────────────────── */}
            <Sec label="01 · Colores">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 10 }}>
                <ColorChip name="primary" hex="#00008F" dark />
                <ColorChip name="hover" hex="#0000F7" dark />
                <ColorChip name="active" hex="#0000D2" dark />
                <ColorChip name="destructive" hex="#FF1721" dark />
                <ColorChip name="foreground" hex="#1A1D21" dark />
                <ColorChip name="secondary-fg" hex="#434956" dark />
                <ColorChip name="muted-fg" hex="#606776" dark />
                <ColorChip name="muted" hex="#EFEFF1" dark={false} />
                <ColorChip name="input-bg" hex="#F8F9FB" dark={false} />
                <ColorChip name="background" hex="#FCFCFD" dark={false} />
                <ColorChip name="accent" hex="rgba(0,0,143,.08)" dark={false} bg="#E8E8F8" />
                <ColorChip name="border" hex="rgba(0,0,0,.1)" dark={false} bg="#E6E6E6" />
                <ColorChip name="error" hex="#880727" dark />
              </div>
            </Sec>

            {/* ── 02 TYPOGRAPHY ─────────────────────────────────────────── */}
            <Sec label="02 · Tipografía">
              <Card>
                {[
                  { role: "Display", spec: "26px · 700", text: "Radica tu PQRS", size: "26px", weight: 700, color: "#1A1D21" },
                  { role: "Sección", spec: "20px · 600", text: "Formulario de radicación", size: "20px", weight: 600, color: "#1A1D21" },
                  { role: "Label / Button", spec: "15px · 500", text: "Correo electrónico *", size: "15px", weight: 500, color: "#1A1D21" },
                  { role: "Body / Input", spec: "15px · 400", text: "Describe con detalle tu solicitud...", size: "15px", weight: 400, color: "#434956" },
                  { role: "Caption / Hint", spec: "12px · 400", text: "Máx. 25 MB · PDF, PNG, JPG, XLSX", size: "12px", weight: 400, color: "#8089A0" },
                ].map((r, i, arr) => (
                  <div key={r.role} style={{ display: "flex", alignItems: "baseline", gap: 24, padding: "13px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(0,0,143,.07)" : "none" }}>
                    <div style={{ width: 140, flexShrink: 0 }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: "#8089A0", textTransform: "uppercase", letterSpacing: ".08em", margin: 0 }}>{r.role}</p>
                      <p style={{ fontSize: 10, fontFamily: "monospace", color: "#B0B8C8", margin: "2px 0 0" }}>{r.spec}</p>
                    </div>
                    <p style={{ fontSize: r.size, fontWeight: r.weight, color: r.color, margin: 0 }}>{r.text}</p>
                  </div>
                ))}
              </Card>
            </Sec>

            {/* ── 03 BUTTONS ────────────────────────────────────────────── */}
            <Sec label="03 · Botones">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

                {/* CTA Primary */}
                <Card>
                  <CardTitle>CTA Primario</CardTitle>
                  <CardNote>Acciones principales · Continuar, Enviar</CardNote>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
                    <BtnState label="Default">
                      <button className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-[#0000F7] active:bg-[#0000D2] transition-all cursor-pointer">Continuar</button>
                    </BtnState>
                    <BtnState label="Hover" sub="#0000F7">
                      <button style={{ background: "#0000F7", color: "#fff", borderRadius: 99, padding: "10px 24px", border: "none", fontSize: 14, fontWeight: 600, cursor: "default" }}>Continuar</button>
                    </BtnState>
                    <BtnState label="Pressed" sub="#0000D2">
                      <button style={{ background: "#0000D2", color: "#fff", borderRadius: 99, padding: "10px 24px", border: "none", fontSize: 14, fontWeight: 600, cursor: "default" }}>Continuar</button>
                    </BtnState>
                    <BtnState label="Disabled">
                      <button disabled style={{ background: "#00008F", color: "#fff", borderRadius: 99, padding: "10px 24px", border: "none", fontSize: 14, fontWeight: 600, opacity: .38, cursor: "not-allowed" }}>Continuar</button>
                    </BtnState>
                  </div>
                </Card>

                {/* CTA Secondary */}
                <Card>
                  <CardTitle>CTA Secundario</CardTitle>
                  <CardNote>Acciones alternativas · Volver, Cancelar</CardNote>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
                    <BtnState label="Default">
                      <button className="px-6 py-2.5 rounded-full border-2 border-primary text-primary text-sm font-semibold bg-white hover:bg-[#0000F7] hover:text-white hover:border-[#0000F7] active:bg-[#0000D2] transition-all cursor-pointer">Volver</button>
                    </BtnState>
                    <BtnState label="Hover" sub="#0000F7">
                      <button style={{ background: "#0000F7", color: "#fff", borderRadius: 99, padding: "9px 22px", border: "2px solid #0000F7", fontSize: 14, fontWeight: 600, cursor: "default" }}>Volver</button>
                    </BtnState>
                    <BtnState label="Pressed" sub="#0000D2">
                      <button style={{ background: "#0000D2", color: "#fff", borderRadius: 99, padding: "9px 22px", border: "2px solid #0000D2", fontSize: 14, fontWeight: 600, cursor: "default" }}>Volver</button>
                    </BtnState>
                    <BtnState label="Disabled">
                      <button disabled style={{ background: "#fff", color: "#00008F", borderRadius: 99, padding: "9px 22px", border: "2px solid #00008F", fontSize: 14, fontWeight: 600, opacity: .35, cursor: "not-allowed" }}>Volver</button>
                    </BtnState>
                  </div>
                </Card>

                {/* Pills */}
                <Card>
                  <CardTitle>Pills de selección</CardTitle>
                  <CardNote>Selección de motivo, Sí/No, opciones exclusivas</CardNote>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
                    <BtnState label="Seleccionado">
                      <button style={{ background: "rgba(0,0,143,.08)", color: "#00008F", borderRadius: 99, padding: "8px 20px", border: "2px solid #00008F", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
                        Queja <CheckCircle2 size={14} color="#00008F" />
                      </button>
                    </BtnState>
                    <BtnState label="Sin seleccionar">
                      <button style={{ background: "#fff", color: "#606776", borderRadius: 99, padding: "8px 20px", border: "2px solid rgba(0,0,0,.12)", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Petición</button>
                    </BtnState>
                    <BtnState label="Hover">
                      <button style={{ background: "#fff", color: "#00008F", borderRadius: 99, padding: "8px 20px", border: "2px solid rgba(0,0,143,.4)", fontSize: 14, fontWeight: 600, cursor: "default" }}>Reclamo</button>
                    </BtnState>
                  </div>
                </Card>

                {/* Destructive */}
                <Card>
                  <CardTitle>Destructivo / Alerta</CardTitle>
                  <CardNote>AXA Red — eliminación, error crítico</CardNote>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
                    <BtnState label="Default">
                      <button style={{ background: "#FF1721", color: "#fff", borderRadius: 99, padding: "10px 24px", border: "none", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Eliminar</button>
                    </BtnState>
                    <BtnState label="Secundario">
                      <button style={{ background: "#fff", color: "#FF1721", borderRadius: 99, padding: "9px 22px", border: "2px solid #FF1721", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Cancelar</button>
                    </BtnState>
                    <BtnState label="Disabled">
                      <button disabled style={{ background: "#FF1721", color: "#fff", borderRadius: 99, padding: "10px 24px", border: "none", fontSize: 14, fontWeight: 600, opacity: .35, cursor: "not-allowed" }}>Eliminar</button>
                    </BtnState>
                  </div>
                </Card>
              </div>
            </Sec>

            {/* ── 04 FORMS ──────────────────────────────────────────────── */}
            <Sec label="04 · Campos de formulario">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

                {/* Input states */}
                <Card>
                  <CardTitle>Input de texto</CardTitle>
                  <CardNote>Todos los estados del campo base</CardNote>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <FieldState label="Default">
                      <input placeholder="Escribe aquí..." className={iBase} readOnly />
                    </FieldState>
                    <FieldState label="Focus — border-primary + ring">
                      <input placeholder="Escribe aquí..." className="w-full px-4 py-3 rounded-xl border-2 border-primary bg-[#F8F9FB] text-sm outline-none ring-2 ring-primary/20" readOnly />
                    </FieldState>
                    <FieldState label="Filled">
                      <input value="Juan Pérez García" className={iBase} readOnly />
                    </FieldState>
                    <FieldState label="Error — border #880727">
                      <div>
                        <input value="invalido@correo" className="w-full px-4 py-3 rounded-xl border border-[#880727] bg-[#FFF5F5] text-sm text-foreground outline-none ring-2 ring-[#880727]/20" readOnly />
                        <span style={{ fontSize: 11, color: "#880727", display: "flex", alignItems: "center", gap: 4, marginTop: 5 }}>
                          <AlertCircle size={11} /> Formato de correo inválido
                        </span>
                      </div>
                    </FieldState>
                    <FieldState label="Disabled">
                      <input placeholder="No disponible" disabled className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-sm text-muted-foreground opacity-50 cursor-not-allowed" />
                    </FieldState>
                  </div>
                </Card>

                {/* Select states */}
                <Card>
                  <CardTitle>Select / Dropdown</CardTitle>
                  <CardNote>Portal con createPortal — detecta espacio y abre arriba/abajo</CardNote>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <FieldState label="Default (vacío)">
                      <div className={iBase + " flex items-center justify-between cursor-pointer"} style={{ padding: "12px 16px" }}>
                        <span style={{ color: "#8089A0", fontSize: 14 }}>Selecciona una opción</span>
                        <ChevronDown size={16} color="#8089A0" />
                      </div>
                    </FieldState>
                    <FieldState label="Abierto">
                      <div>
                        <div style={{ border: "2px solid #00008F", background: "#F8F9FB", borderRadius: 12, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 0 0 3px rgba(0,0,143,.12)" }}>
                          <span style={{ color: "#8089A0", fontSize: 14 }}>Selecciona una opción</span>
                          <ChevronDown size={16} color="#00008F" style={{ transform: "rotate(180deg)" }} />
                        </div>
                        <div style={{ border: "1px solid rgba(0,0,143,.12)", background: "#fff", borderRadius: 12, marginTop: 4, boxShadow: "0 8px 24px rgba(0,0,0,.12)", overflow: "hidden" }}>
                          {["Queja", "Petición", "Reclamo"].map((item, i) => (
                            <div key={item} style={{ padding: "10px 16px", fontSize: 14, background: i === 0 ? "rgba(0,0,143,.07)" : "#fff", color: i === 0 ? "#00008F" : "#1A1D21", fontWeight: i === 0 ? 700 : 400, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                              {item}
                              {i === 0 && <CheckCircle2 size={13} color="#00008F" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    </FieldState>
                    <FieldState label="Seleccionado">
                      <div className={iBase + " flex items-center justify-between cursor-pointer"} style={{ padding: "12px 16px" }}>
                        <span style={{ color: "#1A1D21", fontSize: 14, fontWeight: 500 }}>Queja</span>
                        <ChevronDown size={16} color="#8089A0" />
                      </div>
                    </FieldState>
                    <FieldState label="Disabled">
                      <div style={{ border: "1px solid rgba(0,0,0,.1)", background: "#EFEFF1", borderRadius: 12, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", opacity: .5, cursor: "not-allowed" }}>
                        <span style={{ color: "#8089A0", fontSize: 14 }}>Selecciona una opción</span>
                        <ChevronDown size={16} color="#8089A0" />
                      </div>
                    </FieldState>
                  </div>
                </Card>

                {/* Textarea */}
                <Card>
                  <CardTitle>Textarea</CardTitle>
                  <CardNote>Descripción detallada (Paso 3) · resize-none · 5 filas</CardNote>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <FieldState label="Default">
                      <textarea placeholder="Describe con detalle tu solicitud..." rows={3} className="w-full px-4 py-3 rounded-xl border border-border bg-[#F8F9FB] text-sm placeholder:text-muted-foreground resize-none outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" readOnly />
                    </FieldState>
                    <FieldState label="Filled">
                      <textarea value="El día 15 de julio presenté una solicitud de afiliación (caso #84729) que no ha sido procesada. Solicito revisión urgente del proceso." rows={3} className="w-full px-4 py-3 rounded-xl border border-border bg-[#F8F9FB] text-sm resize-none outline-none" readOnly />
                    </FieldState>
                  </div>
                </Card>

                {/* File upload */}
                <Card>
                  <CardTitle>Adjuntos</CardTitle>
                  <CardNote>PDF · PNG · JPG · XLSX · Máx. 25 MB total</CardNote>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <FieldState label="Zona vacía">
                      <div style={{ border: "2px dashed rgba(0,0,143,.22)", borderRadius: 12, padding: "24px 20px", textAlign: "center", background: "rgba(0,0,143,.02)", cursor: "pointer" }}>
                        <p style={{ fontSize: 14, color: "#00008F", fontWeight: 600, margin: 0 }}>Seleccionar archivos</p>
                        <p style={{ fontSize: 11, color: "#8089A0", margin: "4px 0 0" }}>o arrastra aquí · PDF, PNG, JPG, XLSX</p>
                      </div>
                    </FieldState>
                    <FieldState label="Archivo adjunto">
                      <div style={{ border: "1px solid rgba(0,0,143,.1)", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ background: "rgba(0,0,143,.1)", color: "#00008F", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 6, letterSpacing: ".04em" }}>PDF</span>
                          <span style={{ fontSize: 13, color: "#1A1D21" }}>contrato_afiliacion.pdf</span>
                        </div>
                        <span style={{ fontSize: 11, color: "#8089A0" }}>342 KB</span>
                      </div>
                    </FieldState>
                    <FieldState label="Error de tamaño">
                      <div style={{ border: "1px solid rgba(136,7,39,.25)", borderRadius: 10, padding: "12px 16px", background: "#FFF5F5", display: "flex", alignItems: "center", gap: 8 }}>
                        <AlertCircle size={13} color="#880727" />
                        <p style={{ fontSize: 12, color: "#880727", margin: 0 }}>El tamaño total supera los 25 MB (27.3 MB)</p>
                      </div>
                    </FieldState>
                  </div>
                </Card>
              </div>
            </Sec>

            {/* ── 05 STEP INDICATOR ─────────────────────────────────────── */}
            <Sec label="05 · Indicador de pasos">
              <Card>
                <CardTitle>Stepper — 4 pasos</CardTitle>
                <CardNote>Paso activo, completado y pendiente</CardNote>
                <div style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 8 }}>
                  {[0, 1, 2, 3].map(active => (
                    <div key={active}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: "#8089A0", textTransform: "uppercase", letterSpacing: ".08em", display: "block", marginBottom: 12 }}>
                        Paso {active + 1} activo — {STEPS[active]}
                      </span>
                      <Stepper active={active} />
                    </div>
                  ))}
                </div>
              </Card>
            </Sec>

          </div>
        </div>
      )}
    </>,
    document.body
  );
}
