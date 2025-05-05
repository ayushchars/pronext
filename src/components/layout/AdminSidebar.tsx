
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BarChart, 
  Users,
  Network,
  Key,
  Settings,
  HelpCircle,
  DollarSign,
  Receipt,
  Wallet,
  FileText,
  Bell,
  Shield,
  LifeBuoy,
  UserCheck,
  LayoutDashboard
} from 'lucide-react';

interface AdminSidebarProps {
  collapsed: boolean;
}

const AdminSidebar = ({ collapsed }: AdminSidebarProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/admin' },
    { icon: BarChart, label: 'Analytics', path: '/admin/analytics' },
    { icon: Users, label: 'Affiliates', path: '/admin/affiliates' },
    { icon: UserCheck, label: 'KYC Verification', path: '/admin/kyc' },
    { icon: DollarSign, label: 'Finance', path: '/admin/finance' },
    { icon: Receipt, label: 'Commissions', path: '/admin/commissions' },
    { icon: Wallet, label: 'Withdrawals', path: '/admin/withdrawals' },
    { icon: Network, label: 'Network', path: '/admin/network' },
    { icon: Key, label: 'EPins', path: '/admin/epins' },
    { icon: FileText, label: 'Reports', path: '/admin/reports' },
    { icon: Bell, label: 'Announcements', path: '/admin/announcements' },
    { icon: LayoutDashboard, label: 'Applications', path: '/admin/applications' },
    { icon: LifeBuoy, label: 'Support', path: '/admin/support' },
    { icon: Shield, label: 'Permissions', path: '/admin/permissions' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="h-full p-2 overflow-y-auto">
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`sidebar-link mb-1 ${isActive(item.path) ? 'active' : ''}`}
        >
          <item.icon className="h-5 w-5" />
          {!collapsed && <span>{item.label}</span>}
        </Link>
      ))}
    </div>
  );
};

export default AdminSidebar;
