
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  DollarSign, 
  CreditCard, 
  Download, 
  Check, 
  Clock, 
  AlertCircle, 
  ArrowDown, 
  ArrowUp, 
  Calendar 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/use-toast';

interface Payout {
  id: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  date: string;
  method: string;
  description: string;
  reference: string;
}

const mockPayouts: Payout[] = [
  {
    id: 'pay-123456',
    amount: 350.75,
    status: 'completed',
    date: '2023-11-15',
    method: 'Bank Transfer',
    description: 'Commission payout - November 2023',
    reference: 'REF-NOV-2023-01'
  },
  {
    id: 'pay-123457',
    amount: 215.30,
    status: 'completed',
    date: '2023-10-15',
    method: 'Bank Transfer',
    description: 'Commission payout - October 2023',
    reference: 'REF-OCT-2023-01'
  },
  {
    id: 'pay-123458',
    amount: 180.00,
    status: 'pending',
    date: '2023-12-15',
    method: 'Bank Transfer',
    description: 'Commission payout - December 2023',
    reference: 'REF-DEC-2023-01'
  },
  {
    id: 'pay-123459',
    amount: 95.50,
    status: 'completed',
    date: '2023-09-15',
    method: 'PayPal',
    description: 'Commission payout - September 2023',
    reference: 'REF-SEP-2023-01'
  },
  {
    id: 'pay-123460',
    amount: 420.85,
    status: 'failed',
    date: '2023-08-15',
    method: 'Bank Transfer',
    description: 'Commission payout - August 2023 (Failed: Incorrect bank details)',
    reference: 'REF-AUG-2023-01'
  },
];

const statusIcons = {
  completed: <Check className="h-4 w-4 text-green-500" />,
  pending: <Clock className="h-4 w-4 text-amber-500" />,
  failed: <AlertCircle className="h-4 w-4 text-red-500" />
};

const statusText = {
  completed: 'Completed',
  pending: 'Pending',
  failed: 'Failed'
};

const Payouts = () => {
  const [payouts, setPayouts] = useState<Payout[]>(mockPayouts);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const { toast } = useToast();
  
  const handleDownloadReceipt = (id: string) => {
    toast({
      title: "Receipt downloaded",
      description: `Receipt for payout ${id} has been downloaded.`
    });
  };
  
  const handleRetryPayout = (id: string) => {
    toast({
      title: "Payout retry initiated",
      description: "Our team will process your request shortly."
    });
  };
  
  const sortedPayouts = [...payouts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
  });
  
  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };
  
  const calculateTotalEarnings = () => {
    return payouts
      .filter(p => p.status === 'completed')
      .reduce((sum, payout) => sum + payout.amount, 0)
      .toFixed(2);
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Payouts</h1>
          <p className="text-muted-foreground">
            Manage and track your commission payouts
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Earnings
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${calculateTotalEarnings()}</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Payouts
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${payouts.filter(p => p.status === 'pending').reduce((sum, p) => sum + p.amount, 0).toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">
                To be processed on the 15th
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Next Payout Date
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Dec 15, 2023</div>
              <p className="text-xs text-muted-foreground">
                Estimated amount: $250.00
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Payouts</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="failed">Failed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payout History</CardTitle>
                <CardDescription>
                  View all your past and upcoming payouts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Reference</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>
                        <Button 
                          variant="ghost" 
                          className="flex items-center gap-1 p-0"
                          onClick={toggleSortDirection}
                        >
                          Date {sortDirection === 'asc' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                        </Button>
                      </TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedPayouts.map((payout) => (
                      <TableRow key={payout.id}>
                        <TableCell className="font-medium">
                          {payout.reference}
                        </TableCell>
                        <TableCell>{payout.description}</TableCell>
                        <TableCell>${payout.amount.toFixed(2)}</TableCell>
                        <TableCell>{payout.date}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {statusIcons[payout.status]}
                            <span>{statusText[payout.status]}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                Actions
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              {payout.status === 'completed' && (
                                <DropdownMenuItem onClick={() => handleDownloadReceipt(payout.id)}>
                                  <Download className="mr-2 h-4 w-4" />
                                  Download Receipt
                                </DropdownMenuItem>
                              )}
                              {payout.status === 'failed' && (
                                <DropdownMenuItem onClick={() => handleRetryPayout(payout.id)}>
                                  <CreditCard className="mr-2 h-4 w-4" />
                                  Retry Payout
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem onClick={() => toast({
                                title: "Payout details",
                                description: `${payout.description} - ${payout.method}`
                              })}>
                                <CreditCard className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="completed">
            <Card>
              <CardHeader>
                <CardTitle>Completed Payouts</CardTitle>
                <CardDescription>
                  All your successfully processed payouts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Reference</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedPayouts
                      .filter(payout => payout.status === 'completed')
                      .map((payout) => (
                        <TableRow key={payout.id}>
                          <TableCell className="font-medium">
                            {payout.reference}
                          </TableCell>
                          <TableCell>{payout.description}</TableCell>
                          <TableCell>${payout.amount.toFixed(2)}</TableCell>
                          <TableCell>{payout.date}</TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDownloadReceipt(payout.id)}
                            >
                              <Download className="mr-1 h-4 w-4" />
                              Receipt
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Payouts</CardTitle>
                <CardDescription>
                  Payouts that are currently being processed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Reference</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Expected Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedPayouts
                      .filter(payout => payout.status === 'pending')
                      .map((payout) => (
                        <TableRow key={payout.id}>
                          <TableCell className="font-medium">
                            {payout.reference}
                          </TableCell>
                          <TableCell>{payout.description}</TableCell>
                          <TableCell>${payout.amount.toFixed(2)}</TableCell>
                          <TableCell>{payout.date}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="failed">
            <Card>
              <CardHeader>
                <CardTitle>Failed Payouts</CardTitle>
                <CardDescription>
                  Payouts that could not be processed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Reference</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedPayouts
                      .filter(payout => payout.status === 'failed')
                      .map((payout) => (
                        <TableRow key={payout.id}>
                          <TableCell className="font-medium">
                            {payout.reference}
                          </TableCell>
                          <TableCell>{payout.description}</TableCell>
                          <TableCell>${payout.amount.toFixed(2)}</TableCell>
                          <TableCell>{payout.date}</TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRetryPayout(payout.id)}
                            >
                              <CreditCard className="mr-1 h-4 w-4" />
                              Retry
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
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

export default Payouts;
