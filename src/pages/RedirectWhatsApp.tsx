import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { fireGoogleAdsConversion, fireGenerateLeadEvent } from "@/lib/analytics";
import { buildWhatsAppUrl, type Service, type TrackingParams } from "@/lib/whatsapp";

const REDIRECT_DELAY_MS = 1500;

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

const RedirectWhatsApp = () => {
  const [searchParams] = useSearchParams();

  const whatsappUrl = useMemo(() => {
    const servicoParam = searchParams.get("servico");
    const servico: Service | undefined =
      servicoParam === "dedetizacao" || servicoParam === "desentupimento"
        ? servicoParam
        : undefined;

    const tracking: TrackingParams = {};
    TRACKING_KEYS.forEach((key) => {
      const value = searchParams.get(key);
      if (value) tracking[key] = value;
    });

    return buildWhatsAppUrl({
      servico,
      nome: searchParams.get("nome") ?? undefined,
      telefone: searchParams.get("telefone") ?? undefined,
      mensagem: searchParams.get("mensagem") ?? undefined,
      ...tracking,
    });
  }, [searchParams]);

  const trackingParams = useMemo(() => {
    const tracking: TrackingParams = {};
    TRACKING_KEYS.forEach((key) => {
      const value = searchParams.get(key);
      if (value) tracking[key] = value;
    });
    return tracking;
  }, [searchParams]);

  const servico = useMemo(() => {
    const servicoParam = searchParams.get("servico");
    return servicoParam === "dedetizacao" || servicoParam === "desentupimento"
      ? servicoParam
      : "dedetizacao";
  }, [searchParams]);

  useEffect(() => {
    fireGenerateLeadEvent({ ...trackingParams, servico });
    fireGoogleAdsConversion(trackingParams);
    const timeout = setTimeout(() => {
      window.location.replace(whatsappUrl);
    }, REDIRECT_DELAY_MS);
    return () => clearTimeout(timeout);
  }, [whatsappUrl, trackingParams, servico]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1a4a] via-primary to-primary/80 px-4">
      <div className="bg-background rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center space-y-6">
        <div className="mx-auto w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center animate-pulse">
          <WhatsAppIcon className="w-10 h-10 text-white" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Redirecionando para o WhatsApp...
          </h1>
          <p className="text-muted-foreground">
            Aguarde, estamos te conectando com nossa equipe.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
        <a
          href={whatsappUrl}
          className="inline-block text-sm text-primary hover:underline"
        >
          Clique aqui caso não seja redirecionado automaticamente
        </a>
      </div>
    </div>
  );
};

export default RedirectWhatsApp;
