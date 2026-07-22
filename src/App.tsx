import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop.tsx";
import Index from "./pages/Index.tsx";

const Desentupidora = lazy(() => import("./pages/Desentupidora.tsx"));
const DedetizacaoComercial = lazy(() => import("./pages/DedetizacaoComercial.tsx"));
const ServicoEspecialPage = lazy(() => import("./pages/ServicoEspecialPage.tsx"));
const PragaPage = lazy(() => import("./pages/PragaPage.tsx"));
const ServicoDesentupimentoPage = lazy(() => import("./pages/ServicoDesentupimentoPage.tsx"));
const CidadePage = lazy(() => import("./pages/CidadePage.tsx"));
const BairroPage = lazy(() => import("./pages/BairroPage.tsx"));
const Emergencia24h = lazy(() => import("./pages/Emergencia24h.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const RedirectWhatsApp = lazy(() => import("./pages/RedirectWhatsApp.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/desentupidora" element={<Desentupidora />} />
          <Route path="/servicos/dedetizacao-comercial" element={<DedetizacaoComercial />} />
          <Route path="/servicos/:slug" element={<ServicoEspecialPage />} />
          <Route path="/dedetizacao/:praga" element={<PragaPage />} />
          <Route path="/desentupidora/:servico" element={<ServicoDesentupimentoPage />} />
          <Route path="/atendimento/:cidade" element={<CidadePage />} />
          <Route path="/bairros/:bairro" element={<BairroPage />} />
          <Route path="/emergencia-24h" element={<Emergencia24h />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/redirecionando" element={<RedirectWhatsApp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
