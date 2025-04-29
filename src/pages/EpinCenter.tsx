
import React, { useState } from 'react';
import { 
  Key, 
  KeyRound, 
  FolderKey,
  ArrowUpRight,
  Search,
  FileBarChart 
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import GenerateEpinForm from '@/components/epin/GenerateEpinForm';
import TransferEpinForm from '@/components/epin/TransferEpinForm';

const EpinCenter = () => {
  const { toast } = useToast();
  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false);
  const [isTransferDialogOpen, setIsTransferDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const mockEpins = [
    { id: 'EP12345', amount: '$100', generatedOn: '2023-04-20', status: 'Unused', expiry: '2024-04-20' },
    { id: 'EP12346', amount: '$50', generatedOn: '2023-04-18', status: 'Used', usedBy: 'John Doe', usedOn: '2023-04-19' },
    { id: 'EP12347', amount: '$200', generatedOn: '2023-04-15', status: 'Unused', expiry: '2024-04-15' },
    { id: 'EP12348', amount: '$100', generatedOn: '2023-04-12', status: 'Transferred', transferredTo: 'Alice Smith', transferredOn: '2023-04-14' },
    { id: 'EP12349', amount: '$500', generatedOn: '2023-04-10', status: 'Unused', expiry: '2024-04-10' },
  ];

  const mockTransactions = [
    { id: 'T1001', epinId: 'EP12346', type: 'Used', amount: '$50', date: '2023-04-19', by: 'John Doe' },
    { id: 'T1002', epinId: 'EP12348', type: 'Transfer', amount: '$100', date: '2023-04-14', from: 'You', to: 'Alice Smith' },
    { id: 'T1003', epinId: 'EP12345', type: 'Generated', amount: '$100', date: '2023-04-20', by: 'You' },
    { id: 'T1004', epinId: 'EP12347', type: 'Generated', amount: '$200', date: '2023-04-15', by: 'You' },
    { id: 'T1005', epinId: 'EP12349', type: 'Generated', amount: '$500', date: '2023-04-10', by: 'You' },
  ];

  const handleGenerateEpin = (data: any) => {
    // In a real app, this would call an API
    toast({
      title: "E-Pin Generated",
      description: `Successfully generated ${data.quantity} E-Pin(s) of $${data.amount} each.`,
    });
    setIsGenerateDialogOpen(false);
  };

  const handleTransferEpin = (data: any) => {
    // In a real app, this would call an API
    toast({
      title: "E-Pin Transferred",
      description: `Successfully transferred E-Pin ${data.epinId} to ${data.recipient}.`,
    });
    setIsTransferDialogOpen(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold">E-Pin Center</h1>
          
          <div className="flex flex-wrap gap-2">
            <Dialog open={isGenerateDialogOpen} onOpenChange={setIsGenerateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <KeyRound className="h-4 w-4" />
                  <span>Generate E-Pin</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Generate New E-Pin</DialogTitle>
                </DialogHeader>
                <GenerateEpinForm onSubmit={handleGenerateEpin} />
              </DialogContent>
            </Dialog>

            <Dialog open={isTransferDialogOpen} onOpenChange={setIsTransferDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>Transfer E-Pin</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Transfer E-Pin</DialogTitle>
                </DialogHeader>
                <TransferEpinForm onSubmit={handleTransferEpin} />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex items-center">
          <Search className="mr-2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search E-pins..." 
            className="max-w-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="unused">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
            <TabsTrigger value="unused">Unused E-Pins</TabsTrigger>
            <TabsTrigger value="used">Used E-Pins</TabsTrigger>
            <TabsTrigger value="all">All E-Pins</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>

          <TabsContent value="unused">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" /> 
                  Unused E-Pins
                </CardTitle>
                <CardDescription>
                  Available E-Pins ready for use or transfer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>E-Pin ID</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Generated On</TableHead>
                      <TableHead>Expiry Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockEpins.filter(epin => epin.status === 'Unused').map((epin) => (
                      <TableRow key={epin.id}>
                        <TableCell className="font-medium">{epin.id}</TableCell>
                        <TableCell>{epin.amount}</TableCell>
                        <TableCell>{epin.generatedOn}</TableCell>
                        <TableCell>{epin.expiry}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" onClick={() => setIsTransferDialogOpen(true)}>
                            Transfer
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="used">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <KeyRound className="h-5 w-5" /> 
                  Used E-Pins
                </CardTitle>
                <CardDescription>
                  E-Pins that have been used or transferred
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>E-Pin ID</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Used/Transferred By</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockEpins.filter(epin => epin.status !== 'Unused').map((epin) => (
                      <TableRow key={epin.id}>
                        <TableCell className="font-medium">{epin.id}</TableCell>
                        <TableCell>{epin.amount}</TableCell>
                        <TableCell>{epin.status}</TableCell>
                        <TableCell>{epin.usedBy || epin.transferredTo}</TableCell>
                        <TableCell>{epin.usedOn || epin.transferredOn}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FolderKey className="h-5 w-5" /> 
                  All E-Pins
                </CardTitle>
                <CardDescription>
                  Complete list of all E-Pins in your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>E-Pin ID</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Generated On</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockEpins.map((epin) => (
                      <TableRow key={epin.id}>
                        <TableCell className="font-medium">{epin.id}</TableCell>
                        <TableCell>{epin.amount}</TableCell>
                        <TableCell>{epin.generatedOn}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            epin.status === 'Unused' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                            epin.status === 'Used' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' : 
                            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          }`}>
                            {epin.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          {epin.status === 'Unused' ? epin.expiry : 
                           epin.status === 'Used' ? `Used by ${epin.usedBy} on ${epin.usedOn}` :
                           `Transferred to ${epin.transferredTo} on ${epin.transferredOn}`}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileBarChart className="h-5 w-5" /> 
                  Transaction History
                </CardTitle>
                <CardDescription>
                  Complete history of E-Pin related transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>E-Pin ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>{transaction.epinId}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            transaction.type === 'Generated' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                            transaction.type === 'Used' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' : 
                            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          }`}>
                            {transaction.type}
                          </span>
                        </TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>
                          {transaction.type === 'Generated' ? `Generated by ${transaction.by}` : 
                           transaction.type === 'Used' ? `Used by ${transaction.by}` :
                           `Transferred from ${transaction.from} to ${transaction.to}`}
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

export default EpinCenter;
