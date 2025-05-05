
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Download,
  FileText,
  BarChart2,
  TrendingUp,
  Users,
  DollarSign,
  Filter,
  Calendar,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EnhancedChartCard from '@/components/dashboard/EnhancedChartCard';

const AdminReports = () => {
  const [selectedReport, setSelectedReport] = useState('financial');
  const [dateFilter, setDateFilter] = useState('this-month');

  // Financial reports dummy data
  const financialData = [
    { name: 'Jan', revenue: 42000, profit: 18900, commission: 12600 },
    { name: 'Feb', revenue: 47000, profit: 21150, commission: 14100 },
    { name: 'Mar', revenue: 53000, profit: 23850, commission: 15900 },
    { name: 'Apr', revenue: 58000, profit: 26100, commission: 17400 },
    { name: 'May', revenue: 64000, profit: 28800, commission: 19200 },
    { name: 'Jun', revenue: 72000, profit: 32400, commission: 21600 },
  ];

  // Affiliate reports dummy data
  const affiliateGrowthData = [
    { name: 'Jan', newAffiliates: 15, activeAffiliates: 120 },
    { name: 'Feb', newAffiliates: 22, activeAffiliates: 142 },
    { name: 'Mar', newAffiliates: 28, activeAffiliates: 170 },
    { name: 'Apr', newAffiliates: 35, activeAffiliates: 205 },
    { name: 'May', newAffiliates: 30, activeAffiliates: 235 },
    { name: 'Jun', newAffiliates: 42, activeAffiliates: 277 },
  ];

  // Commissions reports dummy data
  const commissionData = [
    { name: 'Jan', direct: 5400, team: 3600, monthly: 3600 },
    { name: 'Feb', direct: 6300, team: 4200, monthly: 3600 },
    { name: 'Mar', direct: 7200, team: 4800, monthly: 3900 },
    { name: 'Apr', direct: 7800, team: 5200, monthly: 4400 },
    { name: 'May', direct: 8400, team: 5600, monthly: 5200 },
    { name: 'Jun', direct: 9600, team: 6400, monthly: 5600 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Reports</h1>
          <div className="flex gap-2">
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-48">
                <Calendar className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="this-year">This Year</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Reports
            </Button>
          </div>
        </div>

        <Tabs defaultValue="financial" value={selectedReport} onValueChange={setSelectedReport} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="financial" className="flex items-center">
              <BarChart2 className="mr-2 h-4 w-4" />
              Financial Reports
            </TabsTrigger>
            <TabsTrigger value="affiliates" className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Affiliate Reports
            </TabsTrigger>
            <TabsTrigger value="commissions" className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4" />
              Commission Reports
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="financial" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-blue-50 dark:bg-blue-900/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">$336,000</p>
                  <p className="text-sm text-gray-500">+12.5% from last period</p>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 dark:bg-green-900/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Total Profit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">$151,200</p>
                  <p className="text-sm text-gray-500">+11.2% from last period</p>
                </CardContent>
              </Card>
              
              <Card className="bg-orange-50 dark:bg-orange-900/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Total Commission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">$100,800</p>
                  <p className="text-sm text-gray-500">+14.3% from last period</p>
                </CardContent>
              </Card>
            </div>
            
            <EnhancedChartCard 
              title="Financial Performance"
              data={financialData}
              dataKeys={["revenue", "profit", "commission"]} 
              colors={["#8b5cf6", "#10b981", "#f97316"]}
            />
            
            <Card>
              <CardHeader>
                <CardTitle>Financial Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Month</TableHead>
                      <TableHead className="text-right">Revenue</TableHead>
                      <TableHead className="text-right">Profit</TableHead>
                      <TableHead className="text-right">Commission</TableHead>
                      <TableHead className="text-right">Profit Margin</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {financialData.map((month) => (
                      <TableRow key={month.name}>
                        <TableCell className="font-medium">{month.name}</TableCell>
                        <TableCell className="text-right">${month.revenue.toLocaleString()}</TableCell>
                        <TableCell className="text-right">${month.profit.toLocaleString()}</TableCell>
                        <TableCell className="text-right">${month.commission.toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                          {Math.round((month.profit / month.revenue) * 100)}%
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="affiliates" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-blue-50 dark:bg-blue-900/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Total Affiliates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">277</p>
                  <p className="text-sm text-gray-500">+28.5% from last period</p>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 dark:bg-green-900/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">New Affiliates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">42</p>
                  <p className="text-sm text-gray-500">+16.7% from last period</p>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 dark:bg-red-900/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Inactive Affiliates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">18</p>
                  <p className="text-sm text-gray-500">-10.5% from last period</p>
                </CardContent>
              </Card>
            </div>
            
            <EnhancedChartCard
              title="Affiliate Growth"
              data={affiliateGrowthData}
              dataKeys={["newAffiliates", "activeAffiliates"]}
              colors={["#8b5cf6", "#10b981"]}
            />
            
            <Card>
              <CardHeader>
                <CardTitle>Affiliates by Level</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Level</TableHead>
                      <TableHead className="text-right">Affiliates</TableHead>
                      <TableHead className="text-right">Active</TableHead>
                      <TableHead className="text-right">Inactive</TableHead>
                      <TableHead className="text-right">Commission Generated</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { level: "Bronze", count: 142, active: 128, inactive: 14, commission: 28400 },
                      { level: "Silver", count: 76, active: 71, inactive: 5, commission: 38200 },
                      { level: "Gold", count: 42, active: 42, inactive: 0, commission: 59800 },
                      { level: "Platinum", count: 12, active: 12, inactive: 0, commission: 31200 },
                      { level: "Diamond", count: 5, active: 5, inactive: 0, commission: 18600 },
                    ].map((level) => (
                      <TableRow key={level.level}>
                        <TableCell className="font-medium">{level.level}</TableCell>
                        <TableCell className="text-right">{level.count}</TableCell>
                        <TableCell className="text-right">{level.active}</TableCell>
                        <TableCell className="text-right">{level.inactive}</TableCell>
                        <TableCell className="text-right">${level.commission.toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="commissions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-blue-50 dark:bg-blue-900/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Direct Bonus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">$44,700</p>
                  <p className="text-sm text-gray-500">+12.2% from last period</p>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 dark:bg-green-900/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Team Bonus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">$29,800</p>
                  <p className="text-sm text-gray-500">+14.8% from last period</p>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50 dark:bg-purple-900/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Monthly Bonus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">$26,300</p>
                  <p className="text-sm text-gray-500">+15.4% from last period</p>
                </CardContent>
              </Card>
            </div>
            
            <EnhancedChartCard
              title="Commission Distribution"
              data={commissionData}
              dataKeys={["direct", "team", "monthly"]}
              colors={["#8b5cf6", "#10b981", "#f97316"]}
            />
            
            <Card>
              <CardHeader>
                <CardTitle>Commission Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Month</TableHead>
                      <TableHead className="text-right">Direct Bonus</TableHead>
                      <TableHead className="text-right">Team Bonus</TableHead>
                      <TableHead className="text-right">Monthly Bonus</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {commissionData.map((month) => {
                      const total = month.direct + month.team + month.monthly;
                      return (
                        <TableRow key={month.name}>
                          <TableCell className="font-medium">{month.name}</TableCell>
                          <TableCell className="text-right">${month.direct.toLocaleString()}</TableCell>
                          <TableCell className="text-right">${month.team.toLocaleString()}</TableCell>
                          <TableCell className="text-right">${month.monthly.toLocaleString()}</TableCell>
                          <TableCell className="text-right">${total.toLocaleString()}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AdminReports;
