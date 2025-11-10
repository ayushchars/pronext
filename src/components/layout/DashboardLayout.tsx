import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import AffiliateSidebar from './AffiliateSidebar';
import TopBar from './TopBar';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      if (location.pathname.startsWith('/admin')) {
        navigate('/admin-login');
      } else {
        navigate('/login');
      }
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    if (!user) return;

    const isAdmin = user.role === 'Admin';

    if (location.pathname.startsWith('/admin') && !isAdmin) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to access admin pages.",
        variant: "destructive",
      });
      navigate('/dashboard');
    }
  }, [user, location.pathname, navigate, toast]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleFaqClick = () => navigate('/faq');

  const isAdmin = user?.role === 'Admin';


  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <div 
          className={`transition-all duration-300 bg-card border-r border-border ${
            sidebarOpen ? 'w-64' : 'w-16'
          }`}
        >
          {isAdmin ? (
            <AdminSidebar collapsed={!sidebarOpen} />
          ) : (
            <AffiliateSidebar collapsed={!sidebarOpen} />
          )}
        </div>
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="container mx-auto">
            {children}
          </div>
        </div>
      </div>
      
      <footer className="bg-[#1A2A38] text-white py-4 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Pro Net Solutions. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/20"
                onClick={handleFaqClick}
              >
                <HelpCircle className="h-5 w-5" />
                <span className="sr-only">FAQ</span>
              </Button>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4CD3C8]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4CD3C8]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4CD3C8]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4CD3C8]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4CD3C8]">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
