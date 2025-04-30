
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AdminSidebar from './AdminSidebar';
import AffiliateSidebar from './AffiliateSidebar';
import TopBar from './TopBar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { isAdmin } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <div 
          className={`transition-all duration-300 bg-sidebar ${
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
    </div>
  );
};

export default DashboardLayout;
