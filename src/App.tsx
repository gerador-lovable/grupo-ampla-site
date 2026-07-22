import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Desentupidora from "./pages/Desentupidora.tsx";
import DedetizacaoComercial from "./pages/DedetizacaoComercial.tsx";
import PragaPage from "./pages/PragaPage.tsx";
import RedirectWhatsApp from "./pages/RedirectWhatsApp.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/desentupidora" element={<Desentupidora />} />
          <Route path="/servicos/dedetizacao-comercial" element={<DedetizacaoComercial />} />
          <Route path="/dedetizacao/:praga" element={<PragaPage />} />
          <Route path="/redirecionando" element={<RedirectWhatsApp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
