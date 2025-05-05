
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
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
  UserPlus,
  Percent,
  SendHorizontal,
  MessageSquare,
  GitFork,
  Download,
  UserX
} from 'lucide-react';

interface AdminSidebarProps {
  collapsed: boolean;
}

const AdminSidebar = ({ collapsed }: AdminSidebarProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  // Group sidebar items by category
  const dashboardItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: BarChart, label: 'Analytics', path: '/admin/analytics' },
    { icon: FileText, label: 'Reports', path: '/admin/reports' },
  ];
  
  const affiliateItems = [
    { icon: Users, label: 'Affiliates', path: '/admin/affiliates' },
    { icon: UserCheck, label: 'KYC Verification', path: '/admin/kyc' },
    { icon: UserPlus, label: 'Applications', path: '/admin/applications' },
    { icon: UserX, label: 'Blocked Affiliates', path: '/admin/blocked' },
    { icon: Network, label: 'Network', path: '/admin/network' },
    { icon: GitFork, label: 'Affiliate Tree', path: '/admin/tree' },
  ];

  const financeItems = [
    { icon: DollarSign, label: 'Finance', path: '/admin/finance' },
    { icon: Percent, label: 'Bonus Structure', path: '/admin/bonus' },
    { icon: Receipt, label: 'Commissions', path: '/admin/commissions' },
    { icon: SendHorizontal, label: 'Withdrawals', path: '/admin/withdrawals' },
    { icon: Key, label: 'EPins', path: '/admin/epins' },
    { icon: Wallet, label: 'Wallets', path: '/admin/wallets' },
  ];

  const contentItems = [
    { icon: Bell, label: 'Announcements', path: '/admin/announcements' },
    { icon: Download, label: 'Download Center', path: '/admin/downloads' },
    { icon: MessageSquare, label: 'Support', path: '/admin/support' },
  ];

  const systemItems = [
    { icon: Shield, label: 'Permissions', path: '/admin/permissions' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  // Helper function to render a group of menu items
  const renderMenuGroup = (items: typeof dashboardItems, groupTitle: string) => (
    <div className="mt-4 first:mt-0">
      {!collapsed && <div className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{groupTitle}</div>}
      {items.map((item) => (
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

  return (
    <div className="h-full p-2 overflow-y-auto">
      {renderMenuGroup(dashboardItems, 'Dashboard')}
      {renderMenuGroup(affiliateItems, 'Affiliate Management')}
      {renderMenuGroup(financeItems, 'Finance')}
      {renderMenuGroup(contentItems, 'Content')}
      {renderMenuGroup(systemItems, 'System')}
    </div>
  );
};

export default AdminSidebar;
