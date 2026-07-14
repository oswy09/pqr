import type { FormState, DatosPersona } from "../App";

export interface Snapshot {
  id: string;
  paso: number;
  label: string;
  form: FormState;
}

const EMPTY_PERSONA: DatosPersona = {
  tipoId: "", numId: "", nombre: "", celular: "", telefono: "", correo: "",
};

const EMPTY_FORM: FormState = {
  producto: "", tipoSolicitud: "", tipologia: "", subtipologia: "",
  medio: "", presenter: EMPTY_PERSONA, direccion: "", sexo: "", grupoEspecial: "",
  placa: "", terceroAfectado: "", placaTercero: "",
  pais: "", departamento: "", ciudad: "", lugarServicio: "", lugarServicioOtro: "",
  vidaAsociadaCredito: null, numCredito: "",
  archivos: [], captchaOk: false, aceptaTratamiento: false,
  mismaPersonaAfectada: null, afectado: EMPTY_PERSONA, descripcion: "",
};

const SAMPLE_PERSONA: DatosPersona = {
  tipoId: "Cédula de ciudadanía",
  numId: "1032456789",
  nombre: "María Fernanda Gómez Rodríguez",
  celular: "3104567890",
  telefono: "",
  correo: "maria.gomez@example.com",
};

const PASO1_FORM: FormState = {
  ...EMPTY_FORM,
  producto: "Autos",
  tipoSolicitud: "Reclamo",
  tipologia: "Demoras en el proceso",
  subtipologia: "Tiempo de respuesta excedido",
};

const PASO2_FORM: FormState = {
  ...PASO1_FORM,
  medio: "Correo electrónico",
  presenter: SAMPLE_PERSONA,
  sexo: "Femenino",
  grupoEspecial: "Ninguno",
  mismaPersonaAfectada: true,
  afectado: SAMPLE_PERSONA,
};

const PASO3_FORM: FormState = {
  ...PASO2_FORM,
  descripcion:
    "El día 12 de junio reporté un siniestro de mi vehículo placa ABC123 por un choque leve. Han pasado más de 15 días hábiles y no he recibido respuesta sobre el estado de mi reclamación.",
  placa: "ABC123",
  captchaOk: true,
  aceptaTratamiento: true,
};

const PASO4_FORM: FormState = { ...PASO3_FORM };

export const SNAPSHOTS: Snapshot[] = [
  { id: "landing", paso: 1, label: "Pantalla inicial", form: EMPTY_FORM },
  { id: "paso1", paso: 1, label: "Paso 1 — Tipo de solicitud", form: PASO1_FORM },
  { id: "paso2", paso: 2, label: "Paso 2 — Datos personales", form: PASO2_FORM },
  { id: "paso3", paso: 3, label: "Paso 3 — Detalle de la solicitud", form: PASO3_FORM },
  { id: "paso4", paso: 4, label: "Paso 4 — Confirmación", form: PASO4_FORM },
];
