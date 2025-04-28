
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  Inbox,
  Download,
  Users,
  Wallet,
  Key,
  DollarSign,
  LifeBuoy,
  Settings
} from 'lucide-react';

interface AffiliateSidebarProps {
  collapsed: boolean;
}

const AffiliateSidebar = ({ collapsed }: AffiliateSidebarProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Inbox, label: 'Announcements', path: '/announcements' },
    { icon: Download, label: 'Download Center', path: '/downloads' },
    { icon: Inbox, label: 'My Invoices', path: '/invoices' },
    { icon: Users, label: 'My Team', path: '/team' },
    { icon: Wallet, label: 'Earning Wallet', path: '/earnings' },
    { icon: Key, label: 'Epin Center', path: '/epin' },
    { icon: DollarSign, label: 'My Payouts', path: '/payouts' },
    { icon: LifeBuoy, label: 'Support', path: '/support' },
    { icon: Settings, label: 'My Profile', path: '/profile/settings' },
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

export default AffiliateSidebar;
