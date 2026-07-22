export const WHATSAPP_PHONE = "5541995121583";

export type Service = "dedetizacao" | "desentupimento";

export type TrackingParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
};

const TRACKING_KEYS: (keyof TrackingParams)[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
];

const defaultMessages: Record<Service, string> = {
  dedetizacao: "Olá, gostaria de solicitar um orçamento de dedetização.",
  desentupimento: "Olá, gostaria de solicitar um orçamento de desentupimento.",
};

const serviceLabels: Record<Service, string> = {
  dedetizacao: "Dedetização",
  desentupimento: "Desentupimento",
};

export type RedirectParams = {
  servico?: Service;
  nome?: string;
  telefone?: string;
  mensagem?: string;
} & TrackingParams;

export const REDIRECT_PATH = "/redirecionando";

export const getCurrentTrackingParams = (): TrackingParams => {
  if (typeof window === "undefined") return {};
  const search = new URLSearchParams(window.location.search);
  const params: TrackingParams = {};
  TRACKING_KEYS.forEach((key) => {
    const value = search.get(key);
    if (value) params[key] = value;
  });
  return params;
};

export const buildRedirectUrl = (params: RedirectParams = {}) => {
  const search = new URLSearchParams();
  if (params.servico) search.set("servico", params.servico);
  if (params.nome) search.set("nome", params.nome);
  if (params.telefone) search.set("telefone", params.telefone);
  if (params.mensagem) search.set("mensagem", params.mensagem);

  const currentTracking = getCurrentTrackingParams();
  TRACKING_KEYS.forEach((key) => {
    const value = params[key] ?? currentTracking[key];
    if (value) search.set(key, value);
  });

  const qs = search.toString();
  return qs ? `${REDIRECT_PATH}?${qs}` : REDIRECT_PATH;
};

export const buildWhatsAppUrl = (params: RedirectParams = {}) => {
  const servico: Service = params.servico ?? "dedetizacao";
  const hasFormData = Boolean(params.nome || params.telefone || params.mensagem);

  let text: string;
  if (hasFormData) {
    const lines: string[] = [
      `Olá! Gostaria de solicitar um orçamento de ${serviceLabels[servico]}.`,
    ];
    if (params.nome) lines.push(`Nome: ${params.nome}`);
    if (params.telefone) lines.push(`Telefone: ${params.telefone}`);
    if (params.mensagem) lines.push(`Mensagem: ${params.mensagem}`);
    text = lines.join("\n");
  } else {
    text = defaultMessages[servico];
  }

  const sourceParts: string[] = [];
  if (params.utm_campaign) sourceParts.push(`Campanha: ${params.utm_campaign}`);
  if (params.utm_source) sourceParts.push(`Fonte: ${params.utm_source}/${params.utm_medium || "cpc"}`);
  if (params.utm_content) sourceParts.push(`Anúncio: ${params.utm_content}`);
  if (params.utm_term) sourceParts.push(`Termo: ${params.utm_term}`);
  if (params.gclid) sourceParts.push(`GCLID: ${params.gclid}`);

  if (sourceParts.length > 0) {
    text += "\n\nOrigem: " + sourceParts.join(" | ");
  }

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
};
