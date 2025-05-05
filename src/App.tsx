
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AffiliateDashboard from "./pages/AffiliateDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import TeamManagement from "./pages/TeamManagement";
import EarningsWallet from "./pages/EarningsWallet";
import EpinCenter from "./pages/EpinCenter";
import HierarchyTree from "./pages/HierarchyTree";
import Announcements from "./pages/Announcements";
import Support from "./pages/Support";
import ProfileSettings from "./pages/ProfileSettings";
import Subscriptions from "./pages/Subscriptions";
import Meetings from "./pages/Meetings";
import Downloads from "./pages/Downloads";
import Payouts from "./pages/Payouts";
import Invoices from "./pages/Invoices";
import Referral from "./pages/Referral";
import FAQ from "./pages/FAQ";

// New Landing Pages
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Testimonials from "./pages/Testimonials";
import ContactUs from "./pages/ContactUs";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Disclaimer from "./pages/Disclaimer";

// Admin Pages
import AffiliateManagement from "./pages/admin/AffiliateManagement";
import FinanceManagement from "./pages/admin/FinanceManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<AffiliateDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/team" element={<TeamManagement />} />
            <Route path="/earnings" element={<EarningsWallet />} />
            <Route path="/epin" element={<EpinCenter />} />
            <Route path="/hierarchy" element={<HierarchyTree />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/support" element={<Support />} />
            <Route path="/profile/settings" element={<ProfileSettings />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/payouts" element={<Payouts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* New Landing Pages */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            
            {/* Admin Routes */}
            <Route path="/admin/affiliates" element={<AffiliateManagement />} />
            <Route path="/admin/finance" element={<FinanceManagement />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
