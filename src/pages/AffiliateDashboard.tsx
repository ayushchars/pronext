
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, DollarSign, TrendingUp, Award, Wallet, 
  UserCheck, AlertCircle, FileCheck, UploadCloud
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

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

  // KYC status - in a real app this would come from API
  const [kycStatus, setKycStatus] = useState('pending');

  const renderKYCStatus = () => {
    switch (kycStatus) {
      case 'verified':
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 p-3 rounded-full mb-3">
              <UserCheck className="h-8 w-8" />
            </div>
            <h3 className="font-medium text-lg text-center">KYC Verified</h3>
            <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 mt-2">Verified</Badge>
            <p className="text-sm text-gray-500 mt-2 text-center">Your identity has been verified. You have full access to all platform features.</p>
          </div>
        );
      case 'rejected':
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 p-3 rounded-full mb-3">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h3 className="font-medium text-lg text-center">KYC Rejected</h3>
            <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 mt-2">Rejected</Badge>
            <p className="text-sm text-gray-500 mt-2 text-center">Your verification was declined. Please review the feedback and submit again.</p>
            <Button className="mt-4">Resubmit Documents</Button>
          </div>
        );
      case 'pending':
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 p-3 rounded-full mb-3">
              <FileCheck className="h-8 w-8" />
            </div>
            <h3 className="font-medium text-lg text-center">KYC In Review</h3>
            <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 mt-2">Pending</Badge>
            <p className="text-sm text-gray-500 mt-2 text-center">Your documents are being reviewed. This usually takes 24-48 hours.</p>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-3 rounded-full mb-3">
              <UploadCloud className="h-8 w-8" />
            </div>
            <h3 className="font-medium text-lg text-center">Submit KYC Documents</h3>
            <p className="text-sm text-gray-500 mt-2 text-center">Please upload your identity documents to verify your account.</p>
            <Button className="mt-4">Upload Documents</Button>
          </div>
        );
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Affiliate Dashboard</h1>
          <div className="space-x-2">
            <Link to="/meetings">
              <Button variant="outline">View Meetings</Button>
            </Link>
          </div>
        </div>
        
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
                <Link to="/payouts">
                  <Button className="mt-4">Request Payout</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-base font-medium">KYC Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-4">
                {renderKYCStatus()}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AffiliateDashboard;
