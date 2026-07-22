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

export const getTrackingParams = (): TrackingParams => {
  if (typeof window === "undefined") return {};
  const search = new URLSearchParams(window.location.search);
  const params: TrackingParams = {};
  const keys: (keyof TrackingParams)[] = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid",
    "gbraid",
    "wbraid",
  ];
  keys.forEach((key) => {
    const value = search.get(key);
    if (value) params[key] = value;
  });
  return params;
};

export const getConversionConfig = () => {
  const cfg = (window as unknown as { __ADS_CONVERSIONS__?: { send_id: string; whatsapp_click_label: string } })
    .__ADS_CONVERSIONS__;
  const gtagFn = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  return { cfg, gtagFn };
};

export const isValidConversionConfig = (
  cfg: { send_id: string; whatsapp_click_label: string } | undefined,
) => {
  if (!cfg) return false;
  if (cfg.send_id.includes("XXXX") || cfg.whatsapp_click_label.includes("XXXX")) return false;
  return true;
};

export const fireGoogleAdsConversion = (params?: TrackingParams) => {
  const { cfg, gtagFn } = getConversionConfig();
  if (!gtagFn || !isValidConversionConfig(cfg)) return;

  gtagFn("event", "conversion", {
    send_to: `${cfg.send_id}/${cfg.whatsapp_click_label}`,
    ...(params?.utm_campaign && { campaign_id: params.utm_campaign }),
    event_callback: () => {},
  });
};

export const fireGenerateLeadEvent = (params: TrackingParams & { servico?: string }) => {
  const gtagFn = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtagFn) return;

  gtagFn("event", "generate_lead", {
    currency: "BRL",
    value: 1.0,
    ...(params.utm_campaign && { campaign: params.utm_campaign }),
    ...(params.utm_source && { source: params.utm_source }),
    ...(params.utm_medium && { medium: params.utm_medium }),
    ...(params.utm_content && { content: params.utm_content }),
    ...(params.utm_term && { term: params.utm_term }),
    ...(params.gclid && { gclid: params.gclid }),
    ...(params.servico && { servico: params.servico }),
  });
};

export const trackWhatsAppClick = (params: TrackingParams & { servico?: string }) => {
  fireGenerateLeadEvent(params);
  fireGoogleAdsConversion(params);
};
