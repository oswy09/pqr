import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import {
  ChevronDown, AlertCircle, CheckCircle2, Check,
  ChevronLeft, Mail, Home, User, Users,
  Paperclip, X, Send,
  ClipboardList, MessageCircleWarning, Scale, Star, Lightbulb,
  HardHat, Heart, Car, UserCheck, Package,
} from "lucide-react";
import { Annotate } from "./wireframe/Annotate";
import { PresenterControls } from "./wireframe/PresenterControls";
import { SNAPSHOTS } from "./wireframe/snapshots";

// AXA logo mark — from DS import (svg path matches axa-mini-switch)
function AxaLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size * (32 / 35.75)} viewBox="0 0 35.7531 32" fill="none">
      <path
        d="M17.877 0L0 32h7.77l10.107-19.188L27.984 32h7.769L17.877 0z"
        fill="#FF1721"
      />
    </svg>
  );
}

// ── Constants ────────────────────────────────────────────────────────────────

const PRODUCTOS = ["ARL", "Salud", "Autos", "SOAT", "Vida", "Otros Seguros"];

// Lista de productos del prototipo a color (nombres actualizados, orden alfabético) —
// el modo wireframe sigue usando PRODUCTOS sin tocar.
const PRODUCTOS_COLOR = ["ARL", "Salud", "Automóviles", "SOAT", "Vida", "Generales", "Otros seguros", "Títulos de Capitalización"]
  .sort((a, b) => a.localeCompare(b, "es"));

// Líneas de negocio por producto, para mostrar como subtexto en el desplegable
// de producto del prototipo a color.
const PRODUCTO_LINEAS_MAP: Record<string, string> = {
  "ARL": "Riesgos laborales",
  "Salud": "Póliza de salud · MPP",
  "Automóviles": "Automóviles · Responsabilidad Civil",
  "SOAT": "SOAT",
  "Vida": "Vida individual · Vida deudor · Grupo deudor",
  "Generales": "Hogar · Incendio · Sustracción · AP · Otros",
};
const TIPOS_SOLICITUD = ["Petición", "Queja", "Reclamo", "Felicitaciones", "Sugerencias"];
const TIPOS_ID = [
  "Cédula de ciudadanía",
  "Cédula de extranjería",
  "NIT",
  "Pasaporte",
  "Tarjeta de identidad",
  "Registro civil",
];
const SEXOS = ["Femenino", "Masculino", "No Binario", "Trans"];
const GRUPOS_ESPECIALES = [
  "Ninguno",
  "Persona en situación de discapacidad",
  "Adulto mayor",
  "Mujer gestante o lactante",
  "Víctima del conflicto armado",
  "Población LGBTIQ+",
  "Otra",
];

// ── Conditional logic helpers ────────────────────────────────────────────────

// Tipos que requieren sección "afectado" y checkbox de misma persona
// Felicitaciones y Sugerencias quedan excluidas
const TIPOS_CON_AFECTADO_SET = new Set(["Petición", "Queja", "Reclamo"]);

// Tipologías por producto (demo data)
const TIPOLOGIAS_POR_PRODUCTO: Record<string, string[]> = {
  ARL: [
    "Accidente de trabajo no reconocido",
    "Demoras en atención médica",
    "Cotización incorrecta",
    "Incapacidad laboral no pagada",
    "Otro motivo ARL",
  ],
  Salud: [
    "Negación de servicio médico",
    "Demora en autorización",
    "Cobro de copago incorrecto",
    "Red de prestadores insuficiente",
    "Otro motivo Salud",
  ],
  Autos: [
    "Demora en proceso de siniestro",
    "Liquidación incorrecta del siniestro",
    "Cobro indebido de prima",
    "Cancelación no solicitada",
    "Otro motivo Autos",
  ],
  SOAT: [
    "Negación de cobertura SOAT",
    "Error en datos del vehículo",
    "Demora en indemnización",
    "Duplicidad de cobro",
    "Otro motivo SOAT",
  ],
  Vida: [
    "Demora en pago de siniestro",
    "Exclusión no informada",
    "Modificación de póliza sin consentimiento",
    "Error en beneficiarios",
    "Otro motivo Vida",
  ],
  "Otros Seguros": [
    "Demoras en el proceso",
    "Inconformidad con la respuesta",
    "Cobro indebido",
    "Información incorrecta o incompleta",
    "Atención al cliente deficiente",
    "Otro motivo",
  ],
};
// Alias para los nombres de producto del prototipo a color (mismos motivos que su equivalente).
TIPOLOGIAS_POR_PRODUCTO["Automóviles"] = TIPOLOGIAS_POR_PRODUCTO.Autos;
TIPOLOGIAS_POR_PRODUCTO["Generales"] = TIPOLOGIAS_POR_PRODUCTO["Otros Seguros"];

// Subtipologías por tipología (demo data, compartidas)
// Tipología / Subtipología — datos demo
const TIPOLOGIAS: Record<string, string[]> = {
  default: [
    "Demoras en el proceso",
    "Inconformidad con la respuesta",
    "Cobro indebido",
    "Información incorrecta o incompleta",
    "Atención al cliente deficiente",
    "Proceso de reclamación",
    "Cancelación de póliza",
    "Otro motivo",
  ],
};
const SUBTIPOLOGIAS: Record<string, string[]> = {
  "Demoras en el proceso": [
    "Tiempo de respuesta excedido",
    "Trámite sin actualización",
    "Demora en desembolso",
    "Espera en línea de atención",
  ],
  "Cobro indebido": [
    "Error en facturación",
    "Débito no autorizado",
    "Prima incorrecta",
    "Cobro duplicado",
  ],
  "Inconformidad con la respuesta": [
    "Respuesta fuera de término",
    "Respuesta incompleta",
    "Respuesta no corresponde a la solicitud",
  ],
  "Información incorrecta o incompleta": [
    "Datos del asegurado incorrectos",
    "Información de póliza desactualizada",
    "Documentación requerida no informada",
  ],
  "Atención al cliente deficiente": [
    "Trato inadecuado",
    "Asesoría incorrecta",
    "Agente sin capacitación",
  ],
  "Proceso de reclamación": [
    "Reclamación negada injustamente",
    "Documentos extraviados",
    "Proceso incompleto",
  ],
  "Cancelación de póliza": [
    "Cancelación no solicitada",
    "Error en fecha de cancelación",
    "Sin previo aviso",
  ],
  "Otro motivo": ["Otro"],
};

const TIPOS_CON_AFECTADO = [...TIPOS_CON_AFECTADO_SET];

// ── Geo data (demo) ──────────────────────────────────────────────────────────

const DEPARTAMENTOS: Record<string, string[]> = {
  "Bogotá D.C.": ["Bogotá"],
  "Antioquia": ["Medellín", "Bello", "Envigado", "Itagüí", "Sabaneta"],
  "Valle del Cauca": ["Cali", "Buenaventura", "Palmira", "Tuluá"],
  "Atlántico": ["Barranquilla", "Soledad", "Malambo"],
  "Santander": ["Bucaramanga", "Floridablanca", "Girón", "Piedecuesta"],
  "Bolívar": ["Cartagena", "Magangué"],
  "Cundinamarca": ["Soacha", "Facatativá", "Zipaquirá", "Chía"],
  "Nariño": ["Pasto", "Tumaco", "Ipiales"],
  "Córdoba": ["Montería", "Lorica"],
  "Norte de Santander": ["Cúcuta", "Ocaña", "Pamplona"],
  "Risaralda": ["Pereira", "Dosquebradas"],
  "Caldas": ["Manizales", "La Dorada"],
  "Huila": ["Neiva", "Pitalito"],
  "Tolima": ["Ibagué", "Espinal"],
  "Meta": ["Villavicencio", "Acacías"],
};

const LUGARES_SERVICIO_SALUD = [
  "Hospital",
  "Clínica",
  "Centro de salud",
  "Consultorio médico",
  "Farmacia / Droguería",
  "Urgencias",
  "Laboratorio clínico",
  "No aplica",
  "Otro",
];

const PASOS = [
  { num: 1, label: "Tipo de solicitud" },
  { num: 2, label: "Datos personales" },
  { num: 3, label: "Detalle de solicitud" },
  { num: 4, label: "Confirmación" },
];

// Etiquetas del stepper del prototipo a color — el paso 1 tiene otro nombre ahí,
// el modo wireframe sigue usando PASOS sin tocar.
const PASOS_COLOR = [
  { num: 1, label: "Detalle de tu solicitud" },
  { num: 2, label: "Datos personales" },
  { num: 3, label: "Soportes y validación" },
  { num: 4, label: "Confirmación" },
];

// ── Types ────────────────────────────────────────────────────────────────────

export interface DatosPersona {
  tipoId: string; numId: string; nombre: string;
  celular: string; telefono: string; correo: string;
}
export interface FormState {
  producto: string; tipoSolicitud: string;
  tipologia: string; subtipologia: string;
  medio: string; presenter: DatosPersona;
  direccion: string; sexo: string; grupoEspecial: string;
  mismaPersonaAfectada: boolean | null; afectado: DatosPersona;
  descripcion: string;
  // Campos específicos por producto
  placa: string;
  terceroAfectado: string;
  placaTercero: string;
  departamento: string;
  ciudad: string;
  lugarServicio: string;
  lugarServicioOtro: string;
  vidaAsociadaCredito: boolean | null;
  numCredito: string;
  archivos: File[];
  captchaOk: boolean;
  aceptaTratamiento: boolean;
}
const emptyPersona = (): DatosPersona => ({
  tipoId: "", numId: "", nombre: "", celular: "", telefono: "", correo: "",
});

// ── Shared UI ────────────────────────────────────────────────────────────────

const inputBase =
  "w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all";

function SelectField({
  id, label, placeholder, options, value, onChange, optional, hint, disabled, optionHints,
}: {
  id: string; label: string; placeholder: string; options: string[];
  value: string; onChange: (v: string) => void;
  optional?: boolean; hint?: string; disabled?: boolean; optionHints?: Record<string, string>;
}) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  // Store position imperatively — no state, no stale-render gap
  const posRef = useRef({ top: 0, left: 0, width: 0, openUp: false });

  const calcPos = () => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - r.bottom;
    const openUp = spaceBelow < 220 && r.top > 220;
    posRef.current = {
      top: openUp ? r.top - 4 : r.bottom + 4,
      left: r.left,
      width: r.width,
      openUp,
    };
  };

  const handleToggle = () => {
    if (disabled) return;
    calcPos();
    setOpen((o) => !o);
  };

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const reposition = () => { calcPos(); };
    document.addEventListener("mousedown", close);
    window.addEventListener("scroll", reposition, true);
    window.addEventListener("resize", close);
    return () => {
      document.removeEventListener("mousedown", close);
      window.removeEventListener("scroll", reposition, true);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  const { top, left, width, openUp } = posRef.current;

  const dropdown = open ? createPortal(
    <ul
      role="listbox"
      onMouseDown={(e) => e.stopPropagation()}
      style={{ position: "fixed", top, left, width, maxHeight: 220, zIndex: 99999 }}
      className={`bg-white border border-border shadow-2xl overflow-y-auto py-1
        ${openUp ? "rounded-t-xl rounded-b-md mb-1" : "rounded-xl mt-1"}`}
    >
      {options.length === 0 ? (
        <li className="px-4 py-3 text-sm text-muted-foreground italic">Sin opciones disponibles</li>
      ) : options.map((opt) => (
        <li
          key={opt} role="option" aria-selected={value === opt}
          onClick={() => { onChange(opt); setOpen(false); }}
          className={`px-4 py-2 text-sm cursor-pointer flex items-center justify-between gap-2 transition-colors
            ${value === opt ? "bg-accent font-semibold" : "text-foreground hover:bg-muted"}`}
        >
          <span className="flex flex-col min-w-0 py-0.5">
            <span className="truncate">{opt}</span>
            {optionHints?.[opt] && (
              <span className={`text-[11px] font-normal truncate ${value === opt ? "text-primary/70" : "text-muted-foreground"}`}>
                {optionHints[opt]}
              </span>
            )}
          </span>
          {value === opt && <CheckCircle2 size={13} className="text-primary shrink-0" />}
        </li>
      ))}
    </ul>,
    document.body
  ) : null;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground flex items-center gap-1">
        {label}
        {!optional && <span className="text-red-500 ml-0.5">*</span>}
        {optional && <span className="text-xs font-normal text-muted-foreground ml-1">(opcional)</span>}
      </label>
      {hint && <p className="text-xs text-muted-foreground -mt-0.5">{hint}</p>}
      <div>
        <button
          ref={btnRef} id={id} type="button"
          onClick={handleToggle}
          disabled={disabled}
          aria-haspopup="listbox" aria-expanded={open}
          className={`${inputBase} flex items-center justify-between text-left
            ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            ${value ? "text-foreground" : "text-muted-foreground"}
            ${open ? "border-primary ring-2 ring-primary/20" : !disabled ? "hover:border-primary/50" : ""}`}
        >
          <span className={value ? "text-foreground font-medium" : "text-muted-foreground"}>
            {value || placeholder}
          </span>
          <ChevronDown size={15} className={`text-muted-foreground transition-transform shrink-0 ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {dropdown}
    </div>
  );
}

function TextField({
  id, label, placeholder, value, onChange, type = "text", optional, hint,
}: {
  id: string; label: string; placeholder: string; value: string;
  onChange: (v: string) => void; type?: string; optional?: boolean; hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground flex items-center gap-1">
        {label}
        {!optional && <span className="text-red-500 ml-0.5">*</span>}
        {optional && <span className="text-xs font-normal text-muted-foreground ml-1">(opcional)</span>}
      </label>
      <input
        id={id} type={type} value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputBase}
      />
      {hint && <p className="text-xs text-muted-foreground -mt-0.5">{hint}</p>}
    </div>
  );
}

function TextAreaField({
  id, label, placeholder, value, onChange, hint,
}: {
  id: string; label: string; placeholder: string; value: string;
  onChange: (v: string) => void; hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground flex items-center gap-1">
        {label}<span className="text-red-500 ml-0.5">*</span>
      </label>
      {hint && <p className="text-xs text-muted-foreground -mt-0.5 leading-relaxed">{hint}</p>}
      <textarea
        id={id} value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={5}
        className="w-full px-4 py-3 rounded-xl border border-border bg-input-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
      />
      <p className="text-xs text-muted-foreground text-right">{value.length} caracteres</p>
    </div>
  );
}

// ── Step indicator ───────────────────────────────────────────────────────────

function StepIndicator({ current, total, label, wireframeMode }: { current: number; total: number; label: string; wireframeMode?: boolean }) {
  if (!wireframeMode) {
    // Stepper horizontal con círculos numerados y conector, estilo "Book an appointment"
    // pero con los colores de marca (navy).
    return (
      <div className="mb-8">
        <div className="flex items-start">
          {PASOS_COLOR.map((p, i) => {
            const isCompleted = p.num < current;
            const isActive = p.num === current;
            return (
              <div key={p.num} className={`flex items-center ${i < PASOS_COLOR.length - 1 ? "flex-1" : ""}`}>
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      backgroundColor: isCompleted ? "#16A34A" : isActive ? "#00008F" : "#FFFFFF",
                      border: `2px solid ${isCompleted ? "#16A34A" : isActive ? "#00008F" : "#D8DCE3"}`,
                      color: isCompleted || isActive ? "#FFFFFF" : "#9AA1AC",
                    }}
                  >
                    {isCompleted ? <Check size={15} strokeWidth={3} /> : p.num}
                  </div>
                  <p
                    className={`text-[11px] text-center leading-tight ${isActive ? "font-bold text-foreground" : "text-muted-foreground"}`}
                    style={{ width: 76 }}
                  >
                    {p.label}
                  </p>
                </div>
                {i < PASOS_COLOR.length - 1 && (
                  <div
                    className="flex-1 mx-1.5"
                    style={{
                      height: 0, marginTop: 16,
                      borderTop: isCompleted ? "2px solid #16A34A" : "2px dashed #D8DCE3",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <Annotate id="step-indicator" active={!!wireframeMode}>
      <div className="mb-7">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0" style={{ backgroundColor: "#8A8A8A" }}>
            {current}
          </div>
          <p className="text-sm font-bold text-foreground" style={{ fontFamily: "'Publico', Georgia, serif" }}>{label}</p>
        </div>
        <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(current / total) * 100}%`, backgroundColor: "#8A8A8A" }} />
        </div>
        <p className="text-[11px] text-muted-foreground mt-1.5">Paso {current} de {total}</p>
      </div>
    </Annotate>
  );
}

// ── Líneas de negocio ────────────────────────────────────────────────────────

const LINEAS_NEGOCIO = [
  { prod: "ARL", lineas: "ARL" },
  { prod: "Salud", lineas: "Póliza de salud · MPP" },
  { prod: "Autos", lineas: "Autos · Responsabilidad Civil" },
  { prod: "SOAT", lineas: "SOAT" },
  { prod: "Vida", lineas: "Vida individual · Vida deudor · Grupo deudor" },
  { prod: "Otros Seguros", lineas: "Hogar · Incendio · Sustracción · AP · Otros" },
];

function LineasNegocioPanel({ wireframeMode }: { wireframeMode?: boolean } = {}) {
  return (
    <Annotate id="sidebar-lineas-negocio" active={!!wireframeMode}>
      <div className="rounded-xl border border-border bg-white p-4">
        <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3">Productos y líneas de negocio</p>
        <ul className="flex flex-col divide-y divide-border/60">
          {LINEAS_NEGOCIO.map(({ prod, lineas }) => (
            <li key={prod} className="py-2.5 first:pt-0 last:pb-0 flex gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: wireframeMode ? "#8A8A8A" : "#00008F" }} />
              <div>
                <p className="text-xs font-semibold text-foreground leading-tight">{prod}</p>
                <p className="text-xs text-muted-foreground leading-snug mt-0.5">{lineas}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Annotate>
  );
}

// ── Títulos de Capitalización ────────────────────────────────────────────────

function TitulosCapitalizacionAlert({ wireframeMode }: { wireframeMode?: boolean } = {}) {
  return (
    <Annotate id="titulos-capitalizacion-alert" active={!!wireframeMode}>
      <div className="flex flex-col items-center text-center gap-2 p-5 rounded-xl bg-blue-50 border border-blue-200">
        <AlertCircle size={16} className="shrink-0 text-blue-600" />
        <p className="text-xs text-blue-800 leading-6">
          <span className="font-semibold">¿Solicitud sobre Títulos de Capitalización?</span>{" "}
          Comunícate con Credicorp Capital Fiduciaria S.A.:{" "}
          <span className="font-medium">(601) 2415420</span> Bogotá ·{" "}
          <span className="font-medium">018005190969</span> resto del país ·{" "}
          <a href="mailto:suscriptoresaxacapi@credicorpcapital.com" className="underline font-medium">
            suscriptoresaxacapi@credicorpcapital.com
          </a>
        </p>
      </div>
    </Annotate>
  );
}

// ── Medio de respuesta ───────────────────────────────────────────────────────

function MedioRespuesta({ value, onChange, wireframeMode }: { value: string; onChange: (v: string) => void; wireframeMode?: boolean }) {
  const options = [
    { key: "Correo electrónico", icon: <Mail size={16} /> },
    { key: "Correo físico", icon: <Home size={16} /> },
  ];
  return (
    <Annotate id="medio-respuesta" active={!!wireframeMode}>
      <div className="flex flex-col gap-1.5">
        <p className="text-sm font-semibold text-foreground flex items-center gap-1">
          ¿Por cuál medio deseas recibir la respuesta a tu solicitud?
          <span className="text-red-500 ml-0.5">*</span>
        </p>
        <div className="flex gap-2 mt-1">
          {options.map((opt) => {
            const sel = value === opt.key;
            return (
              <button
                key={opt.key} type="button" onClick={() => onChange(opt.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm font-medium transition-all cursor-pointer
                  ${sel
                    ? "border-primary bg-accent text-primary"
                    : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}
              >
                {opt.icon}
                {opt.key}
                {sel && <CheckCircle2 size={13} className="text-primary ml-0.5" />}
              </button>
            );
          })}
        </div>
      </div>
    </Annotate>
  );
}

// ── Medio de respuesta (prototipo a color) — resumen con opción de cambiar ────
// Como casi todos eligen correo electrónico, se asume por defecto y solo se
// muestra el elegido; el detalle con las 2 opciones se abre bajo demanda.

function MedioRespuestaSmart({ value, onChange, correo }: {
  value: string; onChange: (v: string) => void; correo: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const options = [
    { key: "Correo electrónico", icon: <Mail size={16} /> },
    { key: "Correo físico", icon: <Home size={16} /> },
  ];

  if (!expanded) {
    return (
      <div className="flex flex-col gap-1.5">
        <p className="text-sm text-foreground">
          Te enviaremos la respuesta a: <span className="font-semibold">{correo || "tu correo registrado"}</span>
        </p>
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="text-xs text-primary underline text-left w-fit cursor-pointer"
        >
          ¿Prefieres recibirla en tu dirección física? Cambiar método
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-sm font-semibold text-foreground flex items-center gap-1">
        ¿Por cuál medio deseas recibir la respuesta a tu solicitud?
        <span className="text-red-500 ml-0.5">*</span>
      </p>
      <div className="flex gap-2 mt-1">
        {options.map((opt) => {
          const sel = value === opt.key;
          return (
            <button
              key={opt.key} type="button" onClick={() => onChange(opt.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm font-medium transition-all cursor-pointer
                ${sel
                  ? "border-primary bg-accent text-primary"
                  : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}
            >
              {opt.icon}
              {opt.key}
              {sel && <CheckCircle2 size={13} className="text-primary ml-0.5" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Persona fields ───────────────────────────────────────────────────────────

function PersonaFields({
  prefix, datos, onChange, showTelefono = false, celularCorreoEnFila = false,
}: {
  prefix: string; datos: DatosPersona;
  onChange: (k: keyof DatosPersona, v: string) => void;
  showTelefono?: boolean;
  celularCorreoEnFila?: boolean;
}) {
  const set = (k: keyof DatosPersona) => (v: string) => onChange(k, v);
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <SelectField id={`${prefix}-tipo-id`} label="Tipo de identificación" placeholder="Selecciona" options={TIPOS_ID} value={datos.tipoId} onChange={set("tipoId")} />
        <TextField id={`${prefix}-num-id`} label="Número de identificación" placeholder="Ej. 1234567890" value={datos.numId} onChange={set("numId")} />
      </div>
      <TextField id={`${prefix}-nombre`} label="Nombre completo o Razón Social" placeholder="Como aparece en tu documento" value={datos.nombre} onChange={set("nombre")} />

      {celularCorreoEnFila ? (
        /* Afectado: celular + correo en la misma fila */
        <div className="grid grid-cols-2 gap-4">
          <TextField id={`${prefix}-celular`} label="Número de celular" placeholder="3001234567" value={datos.celular} onChange={set("celular")} type="tel" hint="Debe iniciar por 3, 10 dígitos" />
          <TextField id={`${prefix}-correo`} label="Correo electrónico" placeholder="ejemplo@correo.com" value={datos.correo} onChange={set("correo")} type="email" />
        </div>
      ) : (
        /* Presenter: celular + teléfono, luego correo aparte */
        <>
          <div className="grid grid-cols-2 gap-4">
            <TextField id={`${prefix}-celular`} label="Número de celular" placeholder="3001234567" value={datos.celular} onChange={set("celular")} type="tel" hint="Debe iniciar por 3, 10 dígitos" />
            {showTelefono && (
              <TextField id={`${prefix}-telefono`} label="Teléfono" placeholder="6012345678" value={datos.telefono} onChange={set("telefono")} type="tel" optional hint="Inicia con 60, 10 dígitos" />
            )}
          </div>
          <TextField id={`${prefix}-correo`} label="Correo electrónico" placeholder="ejemplo@correo.com" value={datos.correo} onChange={set("correo")} type="email" />
        </>
      )}
    </div>
  );
}

// ── Nav buttons ──────────────────────────────────────────────────────────────

function NavButtons({ canContinue, onBack, onContinue, readyLabel = "Todos los campos completados", wireframeMode }: {
  canContinue: boolean; onBack?: () => void; onContinue: () => void; readyLabel?: string; wireframeMode?: boolean;
}) {
  return (
    <>
      <div className="border-t border-border mt-8 mb-6" />
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Annotate id="campos-completados" active={!!wireframeMode}>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            {canContinue
              ? <><CheckCircle2 size={13} className="text-green-500" />{readyLabel}</>
              : <><span className="w-3 h-3 rounded-full border-2 border-muted-foreground/40 inline-block" />Completa los campos</>}
          </span>
        </Annotate>
        <div className="flex items-center gap-3 ml-auto">
          {onBack && (
            <button type="button" onClick={onBack}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all cursor-pointer">
              <ChevronLeft size={14} /> Atrás
            </button>
          )}
          <Annotate id="continuar-btn" active={!!wireframeMode} display="inline-block">
            <button type="button" disabled={!canContinue} onClick={onContinue}
              className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2
                ${canContinue ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm cursor-pointer" : "bg-muted text-muted-foreground cursor-not-allowed border border-border"}`}>
              Continuar
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2.625 7h8.75M7.875 4.375 10.5 7l-2.625 2.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </Annotate>
        </div>
      </div>
    </>
  );
}

// ── Tipo de solicitud — selector en tarjetas (prototipo a color) ──────────────

const TIPO_SOLICITUD_INFO: Record<string, { icon: React.ReactNode; label: string; desc: string }> = {
  "Petición": { icon: <ClipboardList size={22} />, label: "Petición", desc: "Solicitud de información o trámite" },
  "Queja": { icon: <MessageCircleWarning size={22} />, label: "Queja", desc: "Inconformidad con el servicio" },
  "Reclamo": { icon: <Scale size={22} />, label: "Reclamo", desc: "Corregir un inconveniente" },
  "Felicitaciones": { icon: <Star size={22} />, label: "Felicitación", desc: "Reconocer un buen servicio" },
  "Sugerencias": { icon: <Lightbulb size={22} />, label: "Sugerencia", desc: "Propuesta de mejora" },
};

function TipoSolicitudCards({ options, value, onChange, disabled }: {
  options: string[]; value: string; onChange: (v: string) => void; disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-foreground flex items-center gap-1">
        ¿Qué tipo de solicitud deseas radicar?
        <span className="text-red-500 ml-0.5">*</span>
      </label>
      <p className="text-xs text-muted-foreground -mt-0.5">
        {disabled ? "Primero selecciona un producto." : "Selecciona una opción para continuar."}
      </p>
      <div className={`grid grid-cols-3 gap-3 mt-1 ${disabled ? "opacity-50 pointer-events-none" : ""}`}>
        {options.map((opt) => {
          const info = TIPO_SOLICITUD_INFO[opt];
          const sel = value === opt;
          return (
            <button
              key={opt} type="button" onClick={() => onChange(opt)}
              className={`flex flex-col items-start gap-2 p-4 rounded-xl border-2 text-left transition-all cursor-pointer
                ${sel ? "border-primary bg-accent" : "border-border bg-white hover:border-primary/40"}`}
            >
              <div className="flex items-center justify-between w-full">
                <span style={{ color: "#00008F" }}>{info?.icon}</span>
                {sel && <CheckCircle2 size={16} className="text-primary" />}
              </div>
              <p className="text-sm font-semibold text-foreground">{info?.label ?? opt}</p>
              <p className="text-xs text-muted-foreground leading-snug">{info?.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Motivo / subtipología — helpers compartidos entre Paso1 (wireframe) y Paso2 (color) ──

const SUBTIPOLOGIAS_DEMO_FALLBACK = [
  "Tiempo de respuesta excedido",
  "Información desactualizada",
  "Error en el proceso",
  "Trámite incompleto",
  "Documentación requerida",
  "Otro",
];

function getTipologiaOpts(producto: string) {
  return producto ? (TIPOLOGIAS_POR_PRODUCTO[producto] ?? TIPOLOGIAS.default) : [];
}

function getSubtipologiaOpts(tipologia: string) {
  return tipologia ? (SUBTIPOLOGIAS[tipologia] ?? SUBTIPOLOGIAS_DEMO_FALLBACK) : [];
}

// ── Step 1 ───────────────────────────────────────────────────────────────────

function Paso1({ form, setForm, onContinue, wireframeMode }: { form: FormState; setForm: (f: FormState) => void; onContinue: () => void; wireframeMode?: boolean }) {
  const showAutosAlert = form.producto === "Autos";
  const showAutomovilesAlert = form.producto === "Automóviles";
  const showTitulosAlert = form.producto === "Títulos de Capitalización";
  const tipologiaOpts = getTipologiaOpts(form.producto);
  const subtipologiaOpts = getSubtipologiaOpts(form.tipologia);

  // Tipos disponibles según producto: ARL no aplica Felicitaciones ni Sugerencias
  // (solo aplica en modo wireframe, donde producto ya se conoce en este mismo paso)
  const tiposSolicitudFiltrados = (form.producto === "ARL")
    ? TIPOS_SOLICITUD.filter((t) => !["Felicitaciones", "Sugerencias"].includes(t))
    : TIPOS_SOLICITUD;

  const canContinue = wireframeMode
    ? (form.producto !== "" && form.tipoSolicitud !== "" && form.tipologia !== "" && form.subtipologia !== "")
    : (form.tipoSolicitud !== "" && form.producto !== "");

  const handleTipologia = (v: string) =>
    setForm({ ...form, tipologia: v, subtipologia: "" });

  const resetProducto = (v: string) => ({
    ...form, producto: v, tipoSolicitud: wireframeMode ? "" : form.tipoSolicitud, tipologia: "", subtipologia: "",
    placa: "", terceroAfectado: "", placaTercero: "",
    departamento: "", ciudad: "", lugarServicio: "", lugarServicioOtro: "",
    vidaAsociadaCredito: null, numCredito: "",
  });

  return (
    <>
      <StepIndicator current={1} total={PASOS.length} label={PASOS[0].label} wireframeMode={wireframeMode} />

      <div className="flex flex-col gap-6">
        {wireframeMode && (
          <>
            <SelectField
              id="producto"
              label="¿Sobre cuál producto deseas presentar tu PQRS?"
              placeholder="Selecciona un producto"
              options={PRODUCTOS}
              value={form.producto}
              onChange={(v) => setForm(resetProducto(v))}
            />

            {showAutosAlert && (
              <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <AlertCircle size={17} className="shrink-0 mt-0.5 text-amber-600" />
                <div className="text-sm leading-relaxed text-amber-800">
                  <p className="font-semibold mb-1">¿Tu solicitud está relacionada con un siniestro?</p>
                  <p className="text-amber-700">
                    Si aún no has realizado el reporte, te invitamos a hacerlo antes de continuar.
                    Para Pérdida Total, Hurto o Responsabilidad Civil ingresa a{" "}
                    <span className="font-medium underline cursor-pointer">aplicaciones.axacolpatria.co/RadicadorSiniestros/</span>.
                    Para Pérdida Parcial, comunícate al <span className="font-medium">#247</span>.
                  </p>
                </div>
              </div>
            )}
          </>
        )}

        {wireframeMode ? (
          <SelectField
            id="tipo-solicitud"
            label="¿Qué tipo de solicitud deseas radicar?"
            placeholder="Selecciona el tipo de solicitud"
            options={tiposSolicitudFiltrados}
            value={form.tipoSolicitud}
            onChange={(v) => setForm({ ...form, tipoSolicitud: v, tipologia: "", subtipologia: "" })}
            disabled={false}
          />
        ) : (
          <TipoSolicitudCards
            options={TIPOS_SOLICITUD}
            value={form.tipoSolicitud}
            onChange={(v) => setForm({ ...form, tipoSolicitud: v })}
            disabled={false}
          />
        )}

        {wireframeMode && (
          <>
            <div className="border-t border-dashed border-border" />

            <SelectField
              id="tipologia"
              label="¿Cuál es el motivo de tu solicitud?"
              placeholder={form.producto ? "Selecciona" : "Primero selecciona un producto"}
              options={tipologiaOpts}
              value={form.tipologia}
              onChange={handleTipologia}
              disabled={!form.producto}
            />

            <SelectField
              id="subtipologia"
              label="¿Cuál de las siguientes opciones describe mejor tu solicitud?"
              placeholder={form.tipologia ? "Selecciona" : "Primero selecciona el motivo"}
              options={subtipologiaOpts}
              value={form.subtipologia}
              onChange={(v) => setForm({ ...form, subtipologia: v })}
              disabled={!form.tipologia}
            />
          </>
        )}

        {!wireframeMode && (
          <>
            <div className="border-t border-dashed border-border" />

            <SelectField
              id="producto"
              label="¿Sobre cuál producto deseas presentar tu PQRS?"
              placeholder="Selecciona un producto"
              options={PRODUCTOS_COLOR}
              optionHints={PRODUCTO_LINEAS_MAP}
              value={form.producto}
              onChange={(v) => setForm(resetProducto(v))}
            />

            {showAutomovilesAlert && (
              <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <AlertCircle size={17} className="shrink-0 mt-0.5 text-amber-600" />
                <div className="text-sm leading-relaxed text-amber-800">
                  <p className="font-semibold mb-1">¿Tu solicitud está relacionada con un siniestro?</p>
                  <p className="text-amber-700">
                    Si aún no has realizado el reporte, te invitamos a hacerlo antes de continuar.
                    Para Pérdida Total, Hurto o Responsabilidad Civil ingresa a{" "}
                    <span className="font-medium underline cursor-pointer">aplicaciones.axacolpatria.co/RadicadorSiniestros/</span>.
                    Para Pérdida Parcial, comunícate al <span className="font-medium">#247</span>.
                  </p>
                </div>
              </div>
            )}

            {showTitulosAlert && (
              <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <AlertCircle size={17} className="shrink-0 mt-0.5 text-amber-600" />
                <div className="text-sm leading-relaxed text-amber-800">
                  <p className="mb-2">
                    Si deseas radicar una solicitud relacionada con Títulos de Capitalización, por favor comunícate
                    con Credicorp Capital Fiduciaria S.A. a través de los siguientes canales de atención:
                  </p>
                  <p>Teléfono: <span className="font-medium">(601) 2415420</span> en Bogotá o al <span className="font-medium">018005190969</span> para el resto del país</p>
                  <p>Correo electrónico: <span className="font-medium">suscriptoresaxacapi@credicorpcapital.com</span></p>
                  <p className="mt-2 text-amber-700">
                    Lo anterior, teniendo en cuenta que el programa de desmonte progresivo de la operación finalizó
                    e inició su proceso de disolución y liquidación, de conformidad con la Resolución 2039 de 2023
                    emitida por la Superintendencia Financiera de Colombia.
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <Annotate id="campos-obligatorios" active={!!wireframeMode}>
        <p className="text-xs text-muted-foreground mt-6">
          <span className="text-red-500 font-bold">*</span> Campos obligatorios
        </p>
      </Annotate>
      <NavButtons canContinue={canContinue} onContinue={onContinue} wireframeMode={wireframeMode} />
    </>
  );
}

// ── Step 2 ───────────────────────────────────────────────────────────────────

function Paso2({ form, setForm, onBack, onContinue, wireframeMode }: { form: FormState; setForm: (f: FormState) => void; onBack: () => void; onContinue: () => void; wireframeMode?: boolean }) {
  const requiereAfectado = TIPOS_CON_AFECTADO.includes(form.tipoSolicitud);
  const correoFisico = form.medio === "Correo físico";

  const setPresenter = (k: keyof DatosPersona, v: string) =>
    setForm({ ...form, presenter: { ...form.presenter, [k]: v } });
  const setAfectado = (k: keyof DatosPersona, v: string) =>
    setForm({ ...form, afectado: { ...form.afectado, [k]: v } });

  const handleMismaPersona = (val: boolean) => {
    if (val) setForm({ ...form, mismaPersonaAfectada: true, afectado: { ...form.presenter, telefono: "" } });
    else setForm({ ...form, mismaPersonaAfectada: false, afectado: emptyPersona() });
  };

  const presenterOk =
    form.medio !== "" && form.presenter.tipoId !== "" && form.presenter.numId !== "" &&
    form.presenter.nombre !== "" && form.presenter.celular !== "" && form.presenter.correo !== "" &&
    form.sexo !== "" && form.grupoEspecial !== "" && (!correoFisico || form.direccion !== "");

  const afectadoOk = !requiereAfectado || form.mismaPersonaAfectada === true ||
    (form.mismaPersonaAfectada === false &&
      form.afectado.tipoId !== "" && form.afectado.numId !== "" &&
      form.afectado.nombre !== "" && form.afectado.celular !== "" && form.afectado.correo !== "");

  const canContinue = presenterOk && (!requiereAfectado || form.mismaPersonaAfectada !== null) && afectadoOk;

  return (
    <>
      <StepIndicator current={2} total={PASOS.length} label={PASOS[1].label} wireframeMode={wireframeMode} />
      <p className="text-sm text-muted-foreground leading-relaxed mb-7">
        Ingresa tus datos para que podamos gestionar y darte respuesta a tu solicitud.
      </p>

      <div className="flex flex-col gap-6">
        {wireframeMode && (
          <>
            <MedioRespuesta value={form.medio} onChange={(v) => setForm({ ...form, medio: v })} wireframeMode={wireframeMode} />
            <div className="border-t border-dashed border-border" />
          </>
        )}
        <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
          {wireframeMode ? "Datos de quien presenta" : "Datos de quien presenta la solicitud"}
        </p>
        <PersonaFields prefix="presenter" datos={form.presenter} onChange={setPresenter} celularCorreoEnFila />

        {!wireframeMode && (
          <MedioRespuestaSmart
            value={form.medio}
            onChange={(v) => setForm({ ...form, medio: v })}
            correo={form.presenter.correo}
          />
        )}

        {correoFisico && (
          <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-blue-50 border border-blue-100">
            <p className="text-xs text-blue-700 font-semibold mb-1">Requerido para respuesta por correo físico</p>
            <TextField id="direccion" label="Dirección" placeholder="Calle, carrera, barrio, ciudad" value={form.direccion} onChange={(v) => setForm({ ...form, direccion: v })} />
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <SelectField id="sexo" label="Sexo" placeholder="Selecciona" options={SEXOS} value={form.sexo} onChange={(v) => setForm({ ...form, sexo: v })} />
          <SelectField id="grupo" label="Grupo o condición especial" placeholder="Selecciona" options={GRUPOS_ESPECIALES} value={form.grupoEspecial} onChange={(v) => setForm({ ...form, grupoEspecial: v })} />
        </div>

        {requiereAfectado && (
          <>
            <div className="border-t border-dashed border-border" />
            <Annotate id="afectado-toggle" active={!!wireframeMode}>
              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-foreground flex items-center gap-1">
                  ¿La persona que presenta la solicitud es la misma persona afectada?
                  <span className="text-red-500 ml-0.5">*</span>
                </p>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { val: true, label: "Sí", icon: <User size={15} /> },
                    { val: false, label: "No, es otra persona", icon: <Users size={15} /> },
                  ].map(({ val, label, icon }) => {
                    const sel = form.mismaPersonaAfectada === val;
                    return (
                      <button key={String(val)} type="button" onClick={() => handleMismaPersona(val)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 text-sm font-semibold transition-all cursor-pointer
                          ${sel ? "border-primary bg-accent text-primary" : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}>
                        {icon} {label}
                        {sel && <CheckCircle2 size={13} className="text-primary ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Annotate>

            {form.mismaPersonaAfectada === false && (
              <>
                {!wireframeMode && (
                  <div className="flex gap-2.5 p-3.5 rounded-xl bg-blue-50 border border-blue-100">
                    <AlertCircle size={15} className="shrink-0 mt-0.5 text-blue-600" />
                    <p className="text-xs text-blue-800 leading-relaxed">
                      Si actúas en representación del asegurado, debes contar con la autorización correspondiente
                      y adjuntarla en el siguiente paso.
                    </p>
                  </div>
                )}
                <div className="flex flex-col gap-5 p-5 rounded-xl border border-border bg-secondary/30">
                  <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Datos del afectado</p>
                  <PersonaFields prefix="afectado" datos={form.afectado} onChange={setAfectado} celularCorreoEnFila />
                </div>
              </>
            )}

            {form.mismaPersonaAfectada === true && wireframeMode && (
              <div className="flex gap-2.5 p-3.5 rounded-xl bg-green-50 border border-green-200">
                <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-green-600" />
                <p className="text-xs text-green-800 leading-relaxed">
                  Los datos del afectado se han diligenciado automáticamente con tu información.
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <Annotate id="campos-obligatorios" active={!!wireframeMode}>
        <p className="text-xs text-muted-foreground mt-6">
          <span className="text-red-500 font-bold">*</span> Campos obligatorios
        </p>
      </Annotate>
      <NavButtons canContinue={canContinue} onBack={onBack} onContinue={onContinue} wireframeMode={wireframeMode} />
    </>
  );
}

// ── Product-specific fields ───────────────────────────────────────────────────

function CamposEspecificos({ form, setForm }: { form: FormState; setForm: (f: FormState) => void }) {
  const { producto, tipoSolicitud } = form;
  const requiere = TIPOS_CON_AFECTADO_SET.has(tipoSolicitud);
  if (!requiere) return null;

  const esAutos = producto === "Autos" || producto === "Automóviles";
  const esSoat = producto === "SOAT";
  const esSalud = producto === "Salud";
  const esArl = producto === "ARL";
  const esVida = producto === "Vida";
  const tieneUbicacion = esSoat || esSalud || esArl;
  const tienePlaca = esAutos || esSoat;

  if (!tienePlaca && !tieneUbicacion && !esVida) return null;

  const ciudades = form.departamento ? (DEPARTAMENTOS[form.departamento] ?? []) : [];

  const set = (k: keyof FormState) => (v: string) => setForm({ ...form, [k]: v });

  return (
    <div className="flex flex-col gap-5 p-5 rounded-xl border border-border bg-muted/20">
      <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
        Datos específicos — {producto}
      </p>

      {/* AUTOS / SOAT: placa */}
      {tienePlaca && (
        <>
          <TextField id="placa" label="Placa" placeholder="Ej. ABC123" value={form.placa} onChange={set("placa")} />
          <TextField id="tercero" label="Tercero afectado" placeholder="Nombre del tercero" value={form.terceroAfectado} onChange={set("terceroAfectado")} optional />
          <TextField id="placa-tercero" label="Placa del tercero" placeholder="Ej. XYZ789" value={form.placaTercero} onChange={set("placaTercero")} optional />
        </>
      )}

      {/* Ubicación: SOAT, SALUD, ARL */}
      {tieneUbicacion && (
        <>
          <p className="text-xs font-semibold text-muted-foreground -mb-2">Ubicación relacionada con la solicitud</p>
          <div className="grid grid-cols-2 gap-4">
            <SelectField
              id="departamento"
              label="Departamento"
              placeholder="Selecciona"
              options={Object.keys(DEPARTAMENTOS)}
              value={form.departamento}
              onChange={(v) => setForm({ ...form, departamento: v, ciudad: "" })}
            />
            <SelectField
              id="ciudad"
              label="Ciudad"
              placeholder={form.departamento ? "Selecciona" : "Primero selecciona departamento"}
              options={ciudades}
              value={form.ciudad}
              onChange={set("ciudad")}
              disabled={!form.departamento}
            />
          </div>
        </>
      )}

      {/* SALUD: lugar donde recibiste el servicio */}
      {esSalud && (
        <>
          <SelectField
            id="lugar-servicio"
            label="Lugar donde recibiste el servicio"
            placeholder="Selecciona (si no recuerdas, selecciona No aplica)"
            options={LUGARES_SERVICIO_SALUD}
            value={form.lugarServicio}
            onChange={(v) => setForm({ ...form, lugarServicio: v, lugarServicioOtro: "" })}
          />
          {form.lugarServicio === "Otro" && (
            <TextField id="lugar-otro" label="¿Cuál?" placeholder="Describe el lugar" value={form.lugarServicioOtro} onChange={set("lugarServicioOtro")} />
          )}
        </>
      )}

      {/* VIDA: asociado a crédito */}
      {esVida && (
        <>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-foreground flex items-center gap-1">
              ¿Tu seguro de vida está asociado a un crédito?
              <span className="text-red-500 ml-0.5">*</span>
            </p>
            <div className="flex gap-3">
              {[{ val: true, label: "Sí" }, { val: false, label: "No" }].map(({ val, label }) => {
                const sel = form.vidaAsociadaCredito === val;
                return (
                  <button key={String(val)} type="button"
                    onClick={() => setForm({ ...form, vidaAsociadaCredito: val, numCredito: "" })}
                    className={`px-5 py-2 rounded-full border-2 text-sm font-semibold transition-all cursor-pointer flex items-center gap-2
                      ${sel ? "border-primary bg-accent text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}>
                    {label}
                    {sel && <CheckCircle2 size={13} className="text-primary" />}
                  </button>
                );
              })}
            </div>
          </div>
          {form.vidaAsociadaCredito === true && (
            <TextField
              id="num-credito"
              label="Número del crédito y/o Entidad con la que tienes el crédito"
              placeholder="Ej. 123456789 - Banco XYZ"
              value={form.numCredito}
              onChange={set("numCredito")}
            />
          )}
        </>
      )}
    </div>
  );
}

// ── Step 3 ───────────────────────────────────────────────────────────────────

const FORMATOS_PERMITIDOS = ["application/pdf", "image/png", "image/jpeg", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
const MAX_TOTAL_MB = 25;
const MAX_TOTAL_BYTES = MAX_TOTAL_MB * 1024 * 1024;
const DEFAULT_RECAPTCHA_TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || DEFAULT_RECAPTCHA_TEST_SITE_KEY;

const formatFileSize = (bytes: number) => {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const getFileExt = (fileName: string) => {
  const ext = fileName.split(".").pop();
  return ext ? ext.toUpperCase() : "FILE";
};

function Paso3({ form, setForm, onBack, onContinue, wireframeMode }: {
  form: FormState; setForm: (f: FormState) => void; onBack: () => void; onContinue: () => void; wireframeMode?: boolean;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileFeedback, setFileFeedback] = useState("");

  const totalMB = form.archivos.reduce((acc, f) => acc + f.size, 0) / (1024 * 1024);
  const overLimit = totalMB > MAX_TOTAL_MB;

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    if (!selected.length) return;

    let skippedInvalid = 0;
    let skippedDuplicate = 0;
    let skippedBySize = 0;
    let currentBytes = form.archivos.reduce((acc, f) => acc + f.size, 0);
    const nextFiles = [...form.archivos];

    for (const file of selected) {
      if (!FORMATOS_PERMITIDOS.includes(file.type)) {
        skippedInvalid += 1;
        continue;
      }

      const duplicated = nextFiles.some(
        (existing) =>
          existing.name === file.name &&
          existing.size === file.size &&
          existing.lastModified === file.lastModified,
      );

      if (duplicated) {
        skippedDuplicate += 1;
        continue;
      }

      if (currentBytes + file.size > MAX_TOTAL_BYTES) {
        skippedBySize += 1;
        continue;
      }

      nextFiles.push(file);
      currentBytes += file.size;
    }

    setForm({ ...form, archivos: nextFiles });

    const notices: string[] = [];
    if (skippedInvalid) notices.push(`${skippedInvalid} archivo(s) no permitido(s)`);
    if (skippedDuplicate) notices.push(`${skippedDuplicate} duplicado(s)`);
    if (skippedBySize) notices.push(`${skippedBySize} supera(n) el límite de 25 MB`);
    setFileFeedback(notices.join(" · "));

    e.target.value = "";
  };

  const removeFile = (i: number) => {
    setForm({ ...form, archivos: form.archivos.filter((_, idx) => idx !== i) });
    setFileFeedback("");
  };

  const clearFiles = () => {
    setForm({ ...form, archivos: [] });
    setFileFeedback("");
  };

  const tipologiaOpts = getTipologiaOpts(form.producto);
  const subtipologiaOpts = getSubtipologiaOpts(form.tipologia);
  const handleTipologia = (v: string) =>
    setForm({ ...form, tipologia: v, subtipologia: "" });

  const canContinue =
    (wireframeMode || (form.tipologia !== "" && form.subtipologia !== "")) &&
    form.descripcion.trim().length >= 20 &&
    !overLimit &&
    form.captchaOk &&
    form.aceptaTratamiento;

  return (
    <>
      <StepIndicator current={3} total={wireframeMode ? PASOS.length : PASOS_COLOR.length} label={wireframeMode ? PASOS[2].label : PASOS_COLOR[2].label} wireframeMode={wireframeMode} />
      <p className="text-sm text-muted-foreground leading-relaxed mb-7">
        Cuéntanos con detalle tu solicitud y adjunta los documentos que la soporten.
      </p>

      <div className="flex flex-col gap-6">
        {!wireframeMode && (
          <>
            <SelectField
              id="tipologia"
              label="¿Cuál es el motivo de tu solicitud?"
              placeholder={form.producto ? "Selecciona" : "Primero selecciona un producto"}
              options={tipologiaOpts}
              value={form.tipologia}
              onChange={handleTipologia}
              disabled={!form.producto}
            />

            <SelectField
              id="subtipologia"
              label="¿Cuál de las siguientes opciones describe mejor tu solicitud?"
              placeholder={form.tipologia ? "Selecciona" : "Primero selecciona el motivo"}
              options={subtipologiaOpts}
              value={form.subtipologia}
              onChange={(v) => setForm({ ...form, subtipologia: v })}
              disabled={!form.tipologia}
            />

            <div className="border-t border-dashed border-border" />
          </>
        )}

        {/* Descripción */}
        <TextAreaField
          id="descripcion"
          label="Descripción detallada de la solicitud"
          placeholder="Describe tu solicitud de la manera más detallada posible..."
          value={form.descripcion}
          onChange={(v) => setForm({ ...form, descripcion: v })}
          hint="Incluye antecedentes, fechas, lugares, personas involucradas y cualquier información que consideres relevante para su análisis y gestión."
        />

        {/* Campos específicos por producto */}
        <CamposEspecificos form={form} setForm={setForm} />

        {/* Anexos de soporte */}
        <Annotate id="anexos-soporte" active={!!wireframeMode}>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-foreground">
              Anexos de soporte <span className="text-xs font-normal text-muted-foreground">(opcional)</span>
            </p>
            <p className="text-xs text-muted-foreground -mt-1">
              Adjunta los documentos que ayuden a soportar o complementar tu solicitud.
              Formatos permitidos: PDF, PNG, JPG y XLSX. Tamaño máximo total: 25 MB.
            </p>

            {/* Drop zone */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed border-border bg-white hover:border-primary/50 hover:bg-muted/20 transition-all cursor-pointer text-left"
            >
              <Paperclip size={18} className="text-muted-foreground shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Adjuntar archivos</p>
                <p className="text-xs text-muted-foreground">PDF, PNG, JPG, XLSX · máx. 25 MB en total</p>
              </div>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.png,.jpg,.jpeg,.xlsx"
              className="hidden"
              onChange={handleFiles}
            />

            {/* File list */}
            {form.archivos.length > 0 && (
              <div className="mt-2 rounded-xl border border-border bg-muted/20 p-3">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="text-xs font-semibold text-foreground">
                    {form.archivos.length} archivo(s) cargado(s)
                  </p>
                  <button
                    type="button"
                    onClick={clearFiles}
                    className="text-xs text-muted-foreground underline hover:text-foreground cursor-pointer"
                  >
                    Quitar todos
                  </button>
                </div>
                <ul className="flex flex-col gap-2">
                  {form.archivos.map((f, i) => (
                    <li key={i} className="flex items-center justify-between px-3 py-2 rounded-lg bg-white border border-border text-sm">
                      <div className="min-w-0 flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide bg-primary/10 text-primary shrink-0">
                          {getFileExt(f.name)}
                        </span>
                        <span className="text-foreground truncate max-w-[430px]">{f.name}</span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 ml-3">
                        <span className="text-xs text-muted-foreground">{formatFileSize(f.size)}</span>
                        <button type="button" onClick={() => removeFile(i)} className="text-muted-foreground hover:text-red-500 transition-colors cursor-pointer">
                          <X size={14} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {overLimit && (
              <p className="text-xs text-red-500 flex items-center gap-1.5">
                <AlertCircle size={13} /> El tamaño total supera los 25 MB ({totalMB.toFixed(1)} MB)
              </p>
            )}
            {form.archivos.length > 0 && !overLimit && (
              <p className="text-xs text-muted-foreground">{totalMB.toFixed(2)} MB de 25 MB utilizados</p>
            )}
            {fileFeedback && (
              <p className="text-xs text-amber-700 flex items-center gap-1.5">
                <AlertCircle size={13} /> {fileFeedback}
              </p>
            )}
          </div>
        </Annotate>

        {/* reCAPTCHA v2 */}
        <Annotate id="recaptcha" active={!!wireframeMode}>
          {wireframeMode ? (
            <div>
              <div
                className="flex items-center justify-between rounded"
                style={{
                  width: 304, height: 78, padding: "0 14px",
                  backgroundColor: "#F0F0F0",
                  border: "1px solid #BFBFBF",
                  boxShadow: "none",
                }}
              >
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <div
                    onClick={() => setForm({ ...form, captchaOk: !form.captchaOk })}
                    className="w-7 h-7 rounded border-2 flex items-center justify-center transition-all cursor-pointer"
                    style={{
                      backgroundColor: form.captchaOk ? "#6B6B6B" : "#fff",
                      borderColor: form.captchaOk ? "#6B6B6B" : "#BFBFBF",
                    }}
                  >
                    {form.captchaOk && (
                      <svg width="15" height="12" viewBox="0 0 14 11" fill="none">
                        <path d="M1.5 5.5L5.5 9.5L12.5 1.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <span style={{ fontSize: 14, color: "#1A1A1A", fontFamily: "Roboto, Arial, sans-serif", fontWeight: 400 }}>
                    No soy un robot
                  </span>
                </label>

                <div className="flex flex-col items-center gap-0.5 shrink-0">
                  <svg width="34" height="34" viewBox="0 0 64 64" fill="none">
                    <path d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4z" fill="#8A8A8A"/>
                    <path d="M44 22H32v-6l-12 10 12 10v-6h8v8H20V20h24v2z" fill="white"/>
                  </svg>
                  <span style={{ fontSize: 8, color: "#4A4A4A", fontFamily: "Roboto, Arial, sans-serif", letterSpacing: "0.05em" }}>
                    reCAPTCHA
                  </span>
                  <span style={{ fontSize: 7, color: "#7A7A7A", fontFamily: "Roboto, Arial, sans-serif" }}>
                    Privacidad · Condiciones
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold text-foreground">
                Verificación de seguridad <span className="text-red-500">*</span>
              </p>
              <div className="w-fit overflow-hidden rounded-xl border border-border bg-white p-2">
                <ReCAPTCHA
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={(token) => setForm({ ...form, captchaOk: !!token })}
                  onExpired={() => setForm({ ...form, captchaOk: false })}
                  onErrored={() => setForm({ ...form, captchaOk: false })}
                />
              </div>
              {RECAPTCHA_SITE_KEY === DEFAULT_RECAPTCHA_TEST_SITE_KEY && (
                <p className="text-xs text-amber-700">
                  Se está usando una clave de prueba de Google reCAPTCHA. Configura VITE_RECAPTCHA_SITE_KEY para producción.
                </p>
              )}
            </div>
          )}
        </Annotate>

        {/* Aceptación tratamiento de datos */}
        <label className="flex gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.aceptaTratamiento}
            onChange={(e) => setForm({ ...form, aceptaTratamiento: e.target.checked })}
            className="mt-0.5 w-4 h-4 accent-primary cursor-pointer shrink-0"
          />
          <p className="text-xs text-muted-foreground leading-relaxed">
            Al hacer clic en Enviar, se autoriza la remisión de la PQRS a AXA COLPATRIA y el
            tratamiento de los datos personales conforme a la{" "}
            <a
              href="https://www.axacolpatria.co/es/sac/tratamiento-de-datos-personales"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80"
              onClick={(e) => e.stopPropagation()}
            >
              Política de Tratamiento de Datos Personales
            </a>
            .
          </p>
        </label>
      </div>

      <Annotate id="campos-obligatorios" active={!!wireframeMode}>
        <p className="text-xs text-muted-foreground mt-6">
          <span className="text-red-500 font-bold">*</span> Campos obligatorios · Mínimo 20 caracteres en la descripción
        </p>
      </Annotate>

      {/* Nav con botón Enviar */}
      <>
        <div className="border-t border-border mt-8 mb-6" />
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Annotate id="campos-completados" active={!!wireframeMode}>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              {canContinue
                ? <><CheckCircle2 size={13} className="text-green-500" />Listo para enviar</>
                : <><span className="w-3 h-3 rounded-full border-2 border-muted-foreground/40 inline-block" />Completa todos los campos</>}
            </span>
          </Annotate>
          <div className="flex items-center gap-3 ml-auto">
            <button type="button" onClick={onBack}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all cursor-pointer">
              <ChevronLeft size={14} /> Atrás
            </button>
            <Annotate id="continuar-btn" active={!!wireframeMode} display="inline-block">
              <button
                type="button" disabled={!canContinue} onClick={onContinue}
                className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2
                  ${canContinue
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm cursor-pointer"
                    : "bg-muted text-muted-foreground cursor-not-allowed border border-border"}`}
              >
                <Send size={14} /> Enviar
              </button>
            </Annotate>
          </div>
        </div>
      </>
    </>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [paso, setPaso] = useState(1);
  const [form, setForm] = useState<FormState>({
    producto: "", tipoSolicitud: "", tipologia: "", subtipologia: "",
    medio: "Correo electrónico", presenter: emptyPersona(), direccion: "", sexo: "", grupoEspecial: "",
    placa: "", terceroAfectado: "", placaTercero: "",
    departamento: "", ciudad: "", lugarServicio: "", lugarServicioOtro: "",
    vidaAsociadaCredito: null, numCredito: "",
    archivos: [], captchaOk: false, aceptaTratamiento: false,
    mismaPersonaAfectada: null, afectado: emptyPersona(), descripcion: "",
  });

  // ── Modo wireframe de presentación ──────────────────────────────────────────
  // /wireframe muestra el wireframe en blanco y negro (para compartir "el antes").
  // La URL normal ("/") muestra el prototipo a color/interactivo completo,
  // incluyendo los cambios nuevos que se vayan agregando (para mostrar "el después").
  const [wireframeMode] = useState<boolean>(
    () => window.location.pathname.replace(/\/$/, "") === "/wireframe"
  );
  const [snapshotIndex, setSnapshotIndex] = useState(0);

  const activeSnapshot = SNAPSHOTS[snapshotIndex];
  const activeForm = wireframeMode ? activeSnapshot.form : form;
  const activePaso = wireframeMode ? activeSnapshot.paso : paso;
  const noop = () => {};

  const confirmacionJsx = (
    <Annotate id="confirmacion-final" active={wireframeMode}>
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={36} className="text-green-600" />
        </div>
        <p className="text-lg font-bold text-foreground mb-1">¡Tu solicitud fue radicada!</p>
        <p className="text-sm text-muted-foreground mb-5">
          Hemos recibido tu PQRS. Te notificaremos por{" "}
          {activeForm.medio || "correo electrónico"} cuando tengamos una respuesta.
        </p>
        <div className="inline-flex flex-col items-center gap-1 bg-muted/50 border border-border rounded-xl px-8 py-4 mb-6">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Número de radicado</p>
          <p className="text-2xl font-bold text-primary tracking-widest">
            {String(Math.floor(Math.random() * 900000) + 100000)}
          </p>
          <p className="text-xs text-muted-foreground">Guarda este número para hacer seguimiento</p>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed max-w-sm mx-auto">
          Se ha enviado una confirmación a{" "}
          <span className="font-medium text-foreground">{activeForm.presenter.correo || "tu correo registrado"}</span>.
          El tiempo de respuesta es de máximo 15 días hábiles.
        </p>
      </div>
    </Annotate>
  );

  return (
    <div className={`min-h-screen bg-background flex flex-col ${wireframeMode ? "wireframe pb-16" : ""}`} style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif", fontSize: 16 }}>

      {/* Banner header con imagen — solo en modo wireframe, se quitó del prototipo a color */}
      {wireframeMode && (
        <div className="relative w-full overflow-hidden" style={{ height: 140 }}>
          <div className="absolute inset-0" style={{ background: "#D9D9D9" }} />
          {/* Overlay gris oscuro sutil */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.38)" }} />
          <div className="relative h-full flex items-center px-4">
            <div className="max-w-[660px] mx-auto w-full">
              <p className="text-xs font-semibold text-white/60 tracking-widest uppercase mb-1">AXA Colpatria</p>
              <h1 className="text-4xl text-white" style={{ fontFamily: "'Publico', Georgia, serif", fontWeight: 700 }}>
                Radica tu PQRS
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* Intro text — between banner and form */}
      {activePaso === 1 && (
        <div className="w-full px-4 pt-5 pb-1">
          <div className="max-w-[660px] mx-auto">
            <Annotate id="intro-text" active={wireframeMode}>
              <p className="text-base text-muted-foreground leading-relaxed text-center">
                Si tienes solicitudes, quejas o reclamos, acerca de nuestros productos y servicios,
                te invitamos a diligenciar el siguiente formulario.
              </p>
            </Annotate>
          </div>
        </div>
      )}

      {/* Main */}
      <main className="flex-1 flex justify-center px-4 py-6">
        <div className="w-full max-w-[980px] flex flex-col lg:flex-row gap-6 items-start">

          <div className={wireframeMode ? "w-full max-w-[660px] mx-auto lg:mx-0" : "w-full max-w-[760px] mx-auto"}>

            {/* ¿Qué puedes radicar? — sin contenedor ni borde, solo en modo wireframe, paso 1 */}
            {wireframeMode && activePaso === 1 && (
              <Annotate id="category-cards" active={wireframeMode}>
                <div className="px-1 mb-6">
                  <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3">¿Qué puedes radicar?</p>
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { tipo: "Petición", def: "Solicitud de info o trámite", icon: <ClipboardList size={20}/> },
                      { tipo: "Queja", def: "Inconformidad con el servicio", icon: <MessageCircleWarning size={20}/> },
                      { tipo: "Reclamo", def: "Corregir un inconveniente", icon: <Scale size={20}/> },
                      { tipo: "Felicitación", def: "Reconocer un buen servicio", icon: <Star size={20}/> },
                      { tipo: "Sugerencia", def: "Propuesta de mejora", icon: <Lightbulb size={20}/> },
                    ].map(({ tipo, def, icon }) => (
                      <div key={tipo} className="flex flex-col items-center text-center gap-1.5 p-2">
                        <div style={{ color: wireframeMode ? "#8A8A8A" : "#00008F" }}>{icon}</div>
                        <p className="text-sm font-semibold text-foreground leading-tight">{tipo}</p>
                        <p className="text-xs text-muted-foreground leading-tight">{def}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Annotate>
            )}

            {/* Líneas de negocio y Títulos de Capitalización — solo modo wireframe (mobile/tablet); en desktop viven en el panel lateral. En el prototipo a color se reubican dentro del form más adelante. */}
            {wireframeMode && (
              <div className="lg:hidden flex flex-col gap-3 mb-6">
                <LineasNegocioPanel wireframeMode={wireframeMode} />
                <TitulosCapitalizacionAlert wireframeMode={wireframeMode} />
              </div>
            )}

            <div className={wireframeMode ? "pointer-events-none select-none" : ""}>
              <div className="w-full bg-white rounded-2xl border border-border shadow-sm">

                {/* Header band */}
                <div className="bg-primary px-8 py-4 rounded-t-2xl">
                  <h2 className="text-lg font-semibold text-primary-foreground" style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif" }}>
                    Formulario de radicación
                  </h2>
                </div>

                <div className="px-8 py-8">
                  {activePaso === 1 && <Paso1 form={activeForm} setForm={wireframeMode ? noop : setForm} onContinue={wireframeMode ? noop : () => setPaso(2)} wireframeMode={wireframeMode} />}
                  {activePaso === 2 && <Paso2 form={activeForm} setForm={wireframeMode ? noop : setForm} onBack={wireframeMode ? noop : () => setPaso(1)} onContinue={wireframeMode ? noop : () => setPaso(3)} wireframeMode={wireframeMode} />}
                  {activePaso === 3 && <Paso3 form={activeForm} setForm={wireframeMode ? noop : setForm} onBack={wireframeMode ? noop : () => setPaso(2)} onContinue={wireframeMode ? noop : () => setPaso(4)} wireframeMode={wireframeMode} />}
                  {activePaso === 4 && confirmacionJsx}
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-5 text-center leading-relaxed">
              De acuerdo con la Ley 1581 de 2012, tus datos personales serán tratados conforme a nuestra política de privacidad.
            </p>
          </div>

          {/* Panel lateral — Productos, líneas de negocio y Títulos de Capitalización (solo modo wireframe, desktop). En el prototipo a color se reubican dentro del form más adelante. */}
          {wireframeMode && (
            <aside className="hidden lg:flex flex-col gap-3 w-[280px] shrink-0 sticky top-6">
              <LineasNegocioPanel wireframeMode={wireframeMode} />
              <TitulosCapitalizacionAlert wireframeMode={wireframeMode} />
            </aside>
          )}
        </div>
      </main>

      {/* Controles del presentador — solo en modo wireframe, hermano del wrapper inerte */}
      {wireframeMode && (
        <PresenterControls
          index={snapshotIndex}
          total={SNAPSHOTS.length}
          label={activeSnapshot.label}
          onPrev={() => setSnapshotIndex((i) => Math.max(0, i - 1))}
          onNext={() => setSnapshotIndex((i) => Math.min(SNAPSHOTS.length - 1, i + 1))}
          onJump={(i) => setSnapshotIndex(i)}
        />
      )}
    </div>
  );
}
