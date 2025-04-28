
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BarChart, 
  Users,
  Network,
  Key,
  Settings,
  HelpCircle
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
    { icon: Users, label: 'Manage Affiliates', path: '/admin/affiliates' },
    { icon: Network, label: 'Network Manage', path: '/admin/network' },
    { icon: Key, label: 'Manage EPins', path: '/admin/epins' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
    { icon: HelpCircle, label: 'Support', path: '/admin/support' },
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
