
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
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
import ManageBonusStructure from "./pages/admin/ManageBonusStructure";
import AdminReports from "./pages/admin/AdminReports";
import KYCVerification from "./pages/admin/KYCVerification";
import WithdrawalManagement from "./pages/admin/WithdrawalManagement";
import ApplicationManagement from "./pages/admin/ApplicationManagement";
import NetworkManagement from "./pages/admin/NetworkManagement";
import EpinManagement from "./pages/admin/EpinManagement";
import SupportTickets from "./pages/admin/SupportTickets";

// New Admin Pages
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminAnnouncements from "./pages/admin/AdminAnnouncements";
import AdminDownloads from "./pages/admin/AdminDownloads";
import BlockedAffiliates from "./pages/admin/BlockedAffiliates";
import AffiliateTree from "./pages/admin/AffiliateTree";
import AdminWallets from "./pages/admin/AdminWallets";
import AdminMeetings from "./pages/admin/AdminMeetings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-login" element={<AdminLogin />} />
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
            <Route path="/admin/bonus" element={<ManageBonusStructure />} />
            <Route path="/admin/reports" element={<AdminReports />} />
            <Route path="/admin/kyc" element={<KYCVerification />} />
            <Route path="/admin/withdrawals" element={<WithdrawalManagement />} />
            <Route path="/admin/applications" element={<ApplicationManagement />} />
            <Route path="/admin/network" element={<NetworkManagement />} />
            <Route path="/admin/epins" element={<EpinManagement />} />
            <Route path="/admin/support" element={<SupportTickets />} />
            
            {/* New Admin Routes */}
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
            <Route path="/admin/announcements" element={<AdminAnnouncements />} />
            <Route path="/admin/downloads" element={<AdminDownloads />} />
            <Route path="/admin/blocked" element={<BlockedAffiliates />} />
            <Route path="/admin/tree" element={<AffiliateTree />} />
            <Route path="/admin/wallets" element={<AdminWallets />} />
            <Route path="/admin/meetings" element={<AdminMeetings />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
