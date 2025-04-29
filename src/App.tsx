
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import AffiliateDashboard from "./pages/AffiliateDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import TeamManagement from "./pages/TeamManagement";
import EarningsWallet from "./pages/EarningsWallet";
import EpinCenter from "./pages/EpinCenter";
import HierarchyTree from "./pages/HierarchyTree";

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
            <Route path="/dashboard" element={<AffiliateDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/team" element={<TeamManagement />} />
            <Route path="/earnings" element={<EarningsWallet />} />
            <Route path="/epin" element={<EpinCenter />} />
            <Route path="/hierarchy" element={<HierarchyTree />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
