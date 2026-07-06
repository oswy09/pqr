import { useState, type ReactNode } from "react";
import { Info } from "lucide-react";
import { ANNOTATIONS } from "./annotations";

export function Annotate({
  id, active, children, display = "block",
}: {
  id: string;
  active: boolean;
  children: ReactNode;
  display?: "block" | "inline-block";
}) {
  const [hover, setHover] = useState(false);

  if (!active) return <>{children}</>;

  const note = ANNOTATIONS.find((a) => a.id === id);
  if (!note) return <>{children}</>;

  return (
    <span
      data-annotation={id}
      style={{
        position: "relative",
        display,
        pointerEvents: "auto",
        outline: hover ? "2px dashed #999" : "none",
        outlineOffset: 2,
        cursor: "help",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}

      {/* Señal persistente: indica que esta sección tiene una explicación al pasar el mouse */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -8,
          right: -8,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: hover ? "#1A1A1A" : "#FFFFFF",
          border: "1.5px solid #1A1A1A",
          color: hover ? "#FFFFFF" : "#1A1A1A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9998,
          pointerEvents: "none",
        }}
      >
        <Info size={11} strokeWidth={2.5} />
      </span>

      {hover && (
        <span
          style={{
            position: "absolute",
            bottom: "calc(100% + 6px)",
            left: 0,
            zIndex: 10000,
            background: "#1A1A1A",
            color: "#fff",
            fontSize: 12,
            lineHeight: 1.4,
            padding: "8px 10px",
            borderRadius: 4,
            width: 260,
            boxShadow: "0 2px 8px rgba(0,0,0,.25)",
          }}
        >
          {note.text}
        </span>
      )}
    </span>
  );
}
