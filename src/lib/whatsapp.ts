export const WHATSAPP_PHONE = "5541995121583";

export type Service = "dedetizacao" | "desentupimento";

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
};

export const REDIRECT_PATH = "/redirecionando";

export const buildRedirectUrl = (params: RedirectParams = {}) => {
  const search = new URLSearchParams();
  if (params.servico) search.set("servico", params.servico);
  if (params.nome) search.set("nome", params.nome);
  if (params.telefone) search.set("telefone", params.telefone);
  if (params.mensagem) search.set("mensagem", params.mensagem);
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

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
};
