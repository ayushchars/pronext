
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, TrendingUp, Award, Wallet } from 'lucide-react';

const AffiliateDashboard = () => {
  // Mock data
  const earningsData = [
    { name: 'Jan', amount: 400 },
    { name: 'Feb', amount: 600 },
    { name: 'Mar', amount: 800 },
    { name: 'Apr', amount: 1200 },
    { name: 'May', amount: 1000 },
    { name: 'Jun', amount: 1500 },
    { name: 'Jul', amount: 1800 },
  ];

  const teamGrowthData = [
    { name: 'Jan', count: 5 },
    { name: 'Feb', count: 8 },
    { name: 'Mar', count: 12 },
    { name: 'Apr', count: 15 },
    { name: 'May', count: 20 },
    { name: 'Jun', count: 25 },
    { name: 'Jul', count: 30 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Affiliate Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Earnings"
            value="$6,240.00"
            icon={<DollarSign className="h-5 w-5 text-primary" />}
            trend={{ value: 12.5, isPositive: true }}
          />
          
          <StatCard
            title="Team Members"
            value="32"
            icon={<Users className="h-5 w-5 text-primary" />}
            trend={{ value: 8.2, isPositive: true }}
          />
          
          <StatCard
            title="Direct Referrals"
            value="8"
            icon={<TrendingUp className="h-5 w-5 text-primary" />}
            trend={{ value: 4.1, isPositive: true }}
          />
          
          <StatCard
            title="Current Level"
            value="Silver"
            icon={<Award className="h-5 w-5 text-primary" />}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Monthly Earnings"
            data={earningsData}
            dataKey="amount"
          />
          
          <ChartCard
            title="Team Growth"
            data={teamGrowthData}
            dataKey="count"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-base font-medium">Latest Bonuses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: 'Direct Bonus', amount: '$120.00', date: 'Jul 28' },
                  { type: 'Team Bonus', amount: '$85.50', date: 'Jul 25' },
                  { type: 'Monthly Bonus', amount: '$250.00', date: 'Jul 01' },
                ].map((bonus, index) => (
                  <div key={index} className="flex justify-between items-center pb-2 border-b last:border-b-0">
                    <div>
                      <p className="font-medium">{bonus.type}</p>
                      <p className="text-sm text-gray-500">{bonus.date}</p>
                    </div>
                    <span className="text-green-600 font-medium">{bonus.amount}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-base font-medium">Wallet Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center h-full">
                <Wallet className="h-12 w-12 text-primary mb-4" />
                <div className="text-3xl font-bold">$1,245.80</div>
                <p className="text-gray-500 mt-1">Available for withdrawal</p>
                <button className="mt-4 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md">
                  Request Payout
                </button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-base font-medium">Next Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Gold Level', progress: 70, remaining: '2 more direct referrals' },
                  { name: 'Car Fund', progress: 45, remaining: '$5,000 more in team volume' },
                  { name: 'Travel Bonus', progress: 20, remaining: '10 more team members' },
                ].map((achievement, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{achievement.name}</span>
                      <span>{achievement.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">{achievement.remaining}</p>
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

export default AffiliateDashboard;
