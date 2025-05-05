
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, TableHeader, TableRow, TableHead, TableBody, TableCell 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { 
  Download, ArrowUp, ArrowDown, Filter, DollarSign, Wallet, FileText, BarChart
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ChartCard from '@/components/dashboard/ChartCard';

// Mock data for finance
const financeOverview = {
  totalRevenue: '$148,652.20',
  netProfit: '$76,325.60',
  commissionsPaid: '$42,550.40',
  operatingCosts: '$29,776.20',
  profitMargin: '51.3%',
  pendingPayouts: '$5,860.20',
  thisMonthRevenue: '$28,800.00',
  thisMonthProfit: '$14,750.40',
};

// Mock historical data
const monthlyData = [
  { name: 'Jan', revenue: 12400, profit: 6325, commission: 3720, costs: 2355 },
  { name: 'Feb', revenue: 16600, profit: 8460, commission: 4980, costs: 3160 },
  { name: 'Mar', revenue: 18800, profit: 9590, commission: 5640, costs: 3570 },
  { name: 'Apr', revenue: 21200, profit: 10815, commission: 6360, costs: 4025 },
  { name: 'May', revenue: 19000, profit: 9690, commission: 5700, costs: 3610 },
  { name: 'Jun', revenue: 25500, profit: 13005, commission: 7650, costs: 4845 },
  { name: 'Jul', revenue: 28800, profit: 14688, commission: 8640, costs: 5472 },
];

// Mock transactions
const recentTransactions = [
  {
    id: 'TRX001',
    date: '2023-07-28',
    type: 'Commission Payout',
    affiliate: 'John Doe (AF001)',
    amount: '-$1,240.50',
    status: 'Completed',
    isNegative: true
  },
  {
    id: 'TRX002',
    date: '2023-07-27',
    type: 'Subscription Revenue',
    affiliate: 'System',
    amount: '+$3,580.00',
    status: 'Completed',
    isNegative: false
  },
  {
    id: 'TRX003',
    date: '2023-07-26',
    type: 'Product Sale',
    affiliate: 'Alice Smith (AF002)',
    amount: '+$750.25',
    status: 'Completed',
    isNegative: false
  },
  {
    id: 'TRX004',
    date: '2023-07-25',
    type: 'Refund',
    affiliate: 'Mary Williams (AF004)',
    amount: '-$129.99',
    status: 'Completed',
    isNegative: true
  },
  {
    id: 'TRX005',
    date: '2023-07-24',
    type: 'Commission Payout',
    affiliate: 'James Brown (AF005)',
    amount: '-$845.30',
    status: 'Pending',
    isNegative: true
  },
  {
    id: 'TRX006',
    date: '2023-07-23',
    type: 'Subscription Revenue',
    affiliate: 'System',
    amount: '+$2,860.00',
    status: 'Completed',
    isNegative: false
  },
];

const FinanceManagement = () => {
  const [dateRange, setDateRange] = useState('lastMonth');
  const [transactionType, setTransactionType] = useState('all');

  // Filter transactions based on type
  const filteredTransactions = recentTransactions.filter((transaction) => {
    if (transactionType === 'all') return true;
    if (transactionType === 'income' && !transaction.isNegative) return true;
    if (transactionType === 'expense' && transaction.isNegative) return true;
    if (transactionType === 'commission' && transaction.type.includes('Commission')) return true;
    return false;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Financial Management</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </div>

        {/* Financial Overview */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Financial Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <DollarSign className="h-5 w-5 mr-2 text-primary" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</p>
                </div>
                <p className="text-2xl font-bold">{financeOverview.totalRevenue}</p>
                <div className="text-xs text-green-600 flex items-center mt-1">
                  <span>+15.3% vs last month</span>
                  <ArrowUp className="h-3 w-3 ml-1" />
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Wallet className="h-5 w-5 mr-2 text-emerald-500" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Net Profit</p>
                </div>
                <p className="text-2xl font-bold">{financeOverview.netProfit}</p>
                <div className="text-xs text-green-600 flex items-center mt-1">
                  <span>+12.8% vs last month</span>
                  <ArrowUp className="h-3 w-3 ml-1" />
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <FileText className="h-5 w-5 mr-2 text-orange-500" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Commissions Paid</p>
                </div>
                <p className="text-2xl font-bold">{financeOverview.commissionsPaid}</p>
                <div className="text-xs text-green-600 flex items-center mt-1">
                  <span>+8.2% vs last month</span>
                  <ArrowUp className="h-3 w-3 ml-1" />
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <BarChart className="h-5 w-5 mr-2 text-blue-500" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Profit Margin</p>
                </div>
                <p className="text-2xl font-bold">{financeOverview.profitMargin}</p>
                <div className="text-xs text-green-600 flex items-center mt-1">
                  <span>+3.5% vs last month</span>
                  <ArrowUp className="h-3 w-3 ml-1" />
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <DollarSign className="h-5 w-5 mr-2 text-primary" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">This Month Revenue</p>
                </div>
                <p className="text-2xl font-bold">{financeOverview.thisMonthRevenue}</p>
                <div className="text-xs text-green-600 flex items-center mt-1">
                  <span>+12.9% vs last month</span>
                  <ArrowUp className="h-3 w-3 ml-1" />
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Wallet className="h-5 w-5 mr-2 text-emerald-500" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">This Month Profit</p>
                </div>
                <p className="text-2xl font-bold">{financeOverview.thisMonthProfit}</p>
                <div className="text-xs text-green-600 flex items-center mt-1">
                  <span>+13.2% vs last month</span>
                  <ArrowUp className="h-3 w-3 ml-1" />
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <FileText className="h-5 w-5 mr-2 text-orange-500" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Operating Costs</p>
                </div>
                <p className="text-2xl font-bold">{financeOverview.operatingCosts}</p>
                <div className="text-xs text-red-600 flex items-center mt-1">
                  <span>+5.1% vs last month</span>
                  <ArrowUp className="h-3 w-3 ml-1" />
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <DollarSign className="h-5 w-5 mr-2 text-red-500" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Pending Payouts</p>
                </div>
                <p className="text-2xl font-bold">{financeOverview.pendingPayouts}</p>
                <div className="text-xs text-amber-600 flex items-center mt-1">
                  <span>8 pending requests</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Revenue vs Profit"
            data={monthlyData}
            dataKeys={["revenue", "profit"]}
            colors={["#8b5cf6", "#10b981"]}
          />
          
          <ChartCard
            title="Commissions vs Operating Costs"
            data={monthlyData}
            dataKeys={["commission", "costs"]}
            colors={["#f59e0b", "#ef4444"]}
          />
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <CardTitle>Recent Transactions</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2 mt-2 md:mt-0">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="lastWeek">Last 7 Days</SelectItem>
                  <SelectItem value="lastMonth">Last 30 Days</SelectItem>
                  <SelectItem value="lastQuarter">Last Quarter</SelectItem>
                  <SelectItem value="lastYear">Last Year</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={transactionType} onValueChange={setTransactionType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Transaction Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Transactions</SelectItem>
                  <SelectItem value="income">Income Only</SelectItem>
                  <SelectItem value="expense">Expenses Only</SelectItem>
                  <SelectItem value="commission">Commissions Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Affiliate</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>{transaction.affiliate}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          transaction.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {transaction.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <span className={transaction.isNegative ? 'text-red-600' : 'text-green-600'}>
                          {transaction.amount}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">
                Showing {filteredTransactions.length} of {recentTransactions.length} transactions
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">View Complete Ledger</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FinanceManagement;
