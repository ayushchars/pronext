
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, TrendingUp, Lock, BarChart } from 'lucide-react';

const AdminDashboard = () => {
  // Mock data
  const revenueData = [
    { name: 'Jan', amount: 12400 },
    { name: 'Feb', amount: 16600 },
    { name: 'Mar', amount: 18800 },
    { name: 'Apr', amount: 21200 },
    { name: 'May', amount: 19000 },
    { name: 'Jun', amount: 25500 },
    { name: 'Jul', amount: 28800 },
  ];

  const userGrowthData = [
    { name: 'Jan', count: 45 },
    { name: 'Feb', count: 58 },
    { name: 'Mar', count: 72 },
    { name: 'Apr', count: 95 },
    { name: 'May', count: 120 },
    { name: 'Jun', count: 155 },
    { name: 'Jul', count: 180 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Team"
            value="182"
            icon={<Users className="h-5 w-5 text-primary" />}
            trend={{ value: 12.5, isPositive: true }}
          />
          
          <StatCard
            title="Active Team"
            value="156"
            icon={<Users className="h-5 w-5 text-primary" />}
            trend={{ value: 8.2, isPositive: true }}
          />
          
          <StatCard
            title="Admin Total Income"
            value="$48,652.20"
            icon={<DollarSign className="h-5 w-5 text-primary" />}
            trend={{ value: 15.3, isPositive: true }}
          />
          
          <StatCard
            title="Locked Bonus"
            value="$5,240.50"
            icon={<Lock className="h-5 w-5 text-primary" />}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="System Revenue"
            data={revenueData}
            dataKey="amount"
          />
          
          <ChartCard
            title="Affiliate Growth"
            data={userGrowthData}
            dataKey="count"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-base font-medium">Latest Affiliates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: 'John Doe', email: 'john@example.com', date: 'Jul 28', status: 'Active' },
                  { name: 'Alice Smith', email: 'alice@example.com', date: 'Jul 27', status: 'Active' },
                  { name: 'Robert Johnson', email: 'robert@example.com', date: 'Jul 25', status: 'Pending' },
                  { name: 'Mary Williams', email: 'mary@example.com', date: 'Jul 24', status: 'Active' },
                ].map((user, index) => (
                  <div key={index} className="flex justify-between items-center pb-2 border-b last:border-b-0">
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {user.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{user.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-base font-medium">Bonus Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-4">
                <div className="w-40 h-40">
                  <BarChart className="h-full w-full text-primary opacity-80" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {[
                  { type: 'Direct Bonus', amount: '$12,450.00' },
                  { type: 'Monthly Bonus', amount: '$8,320.50' },
                  { type: 'Team Bonus', amount: '$15,840.25' },
                  { type: 'Lifestyle Fund', amount: '$6,240.00' },
                ].map((bonus, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <p className="text-sm font-medium">{bonus.type}</p>
                    <p className="font-bold text-primary">{bonus.amount}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-base font-medium">System Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { label: 'Total Members Income', value: '$124,580.75' },
                  { label: 'Net Income', value: '$48,652.20' },
                  { label: 'Deducted Charges', value: '$8,245.30' },
                  { label: 'Affiliate Wallet Amount', value: '$32,150.40' },
                  { label: 'Pending Payouts', value: '$5,860.20' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between pb-2 border-b last:border-b-0">
                    <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
