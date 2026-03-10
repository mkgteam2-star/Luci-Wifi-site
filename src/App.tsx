import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "@/pages/Index";
import InternetPage from "@/pages/InternetPage";
import CablePage from "@/pages/CablePage";
import BundlesPage from "@/pages/BundlesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import {
  DisclaimerPage,
  PrivacyPolicyPage,
  TermsPage,
  RefundPolicyPage,
  AdvertisingDisclosurePage,
  CookiesPolicyPage,
} from "@/pages/LegalPages";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/internet" element={<InternetPage />} />
              <Route path="/cable" element={<CablePage />} />
              <Route path="/bundles" element={<BundlesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/advertising-disclosure" element={<AdvertisingDisclosurePage />} />
              <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
