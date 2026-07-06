export interface Annotation {
  id: string;
  text: string;
}

export const ANNOTATIONS: Annotation[] = [
  {
    id: "intro-text",
    text: "Este texto de bienvenida ubica al usuario antes de mostrarle el formulario: explica en una frase para qué sirve la página, antes de pedirle cualquier dato.",
  },
  {
    id: "step-indicator",
    text: "El indicador de paso reduce la ansiedad del usuario mostrando cuánto falta para terminar — clave en formularios largos de PQRS.",
  },
  {
    id: "category-cards",
    text: "Estas tarjetas educan al usuario sobre la diferencia entre Petición/Queja/Reclamo antes de elegir, reduciendo errores de clasificación.",
  },
  {
    id: "continuar-btn",
    text: "El botón Continuar permanece deshabilitado (gris) hasta completar los campos obligatorios, sin necesidad de mensajes de error agresivos.",
  },
  {
    id: "campos-completados",
    text: "Este indicador confirma en tiempo real si ya se puede avanzar, para que el usuario no descubra los campos faltantes recién al intentar continuar.",
  },
  {
    id: "campos-obligatorios",
    text: "La leyenda de campos obligatorios se repite al final de cada paso, cerca del botón Continuar, para que quede visible justo cuando el usuario decide avanzar.",
  },
  {
    id: "sidebar-lineas-negocio",
    text: "El panel lateral recuerda qué líneas de negocio están cubiertas, reduciendo radicaciones fuera de alcance. Se ubicó en una columna aparte (no apilado arriba del formulario) para que el formulario no quede tapado por contenido informativo y se sienta más corto al entrar.",
  },
  {
    id: "medio-respuesta",
    text: "Al ser solo 2 opciones, se usan botones en vez de un desplegable: se ven ambas alternativas de un vistazo y se elige con un solo clic, sin abrir un menú. Además se pregunta temprano porque condiciona qué campos son obligatorios más adelante (ej. dirección física).",
  },
  {
    id: "afectado-toggle",
    text: "Igual que el medio de respuesta: con solo 2 opciones (Sí / No) se usan botones en vez de desplegable, para elegir de un clic. Preguntar esto primero evita duplicar la captura de datos cuando el solicitante y el afectado son la misma persona.",
  },
  {
    id: "anexos-soporte",
    text: "Los anexos son opcionales para no bloquear la radicación de quien no tiene los documentos a la mano en el momento; se pueden aportar después si el proceso lo requiere.",
  },
  {
    id: "recaptcha",
    text: "Verificación anti-bots estándar (reCAPTCHA de Google) antes de enviar, para evitar radicaciones automatizadas o masivas.",
  },
  {
    id: "titulos-capitalizacion-alert",
    text: "Esta alerta desvía tempranamente a usuarios cuyo caso no se gestiona por este canal, evitando radicaciones que luego se rechazarían.",
  },
  {
    id: "confirmacion-final",
    text: "La pantalla final confirma el número de radicado y el canal/tiempo de respuesta, para que el usuario tenga con qué hacerle seguimiento a su solicitud sin llamar a preguntar.",
  },
];
