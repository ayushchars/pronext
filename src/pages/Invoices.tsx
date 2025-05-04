import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  Printer, 
  Mail, 
  CreditCard,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';

interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  description: string;
  items: {
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }[];
}

const mockInvoices: Invoice[] = [
  {
    id: 'inv-001',
    invoiceNumber: 'INV-2023-001',
    date: '2023-10-01',
    dueDate: '2023-10-15',
    amount: 60.00,
    status: 'paid',
    description: 'Monthly Subscription - Standard Plan',
    items: [
      {
        description: 'Standard Plan Subscription - 28 days',
        quantity: 1,
        unitPrice: 60.00,
        total: 60.00
      }
    ]
  },
  {
    id: 'inv-002',
    invoiceNumber: 'INV-2023-002',
    date: '2023-11-01',
    dueDate: '2023-11-15',
    amount: 60.00,
    status: 'paid',
    description: 'Monthly Subscription - Standard Plan',
    items: [
      {
        description: 'Standard Plan Subscription - 28 days',
        quantity: 1,
        unitPrice: 60.00,
        total: 60.00
      }
    ]
  },
  {
    id: 'inv-003',
    invoiceNumber: 'INV-2023-003',
    date: '2023-12-01',
    dueDate: '2023-12-15',
    amount: 60.00,
    status: 'pending',
    description: 'Monthly Subscription - Standard Plan',
    items: [
      {
        description: 'Standard Plan Subscription - 28 days',
        quantity: 1,
        unitPrice: 60.00,
        total: 60.00
      }
    ]
  },
  {
    id: 'inv-004',
    invoiceNumber: 'INV-2023-004',
    date: '2023-09-01',
    dueDate: '2023-09-15',
    amount: 100.00,
    status: 'paid',
    description: 'Advanced Trading Tools - One-time Purchase',
    items: [
      {
        description: 'Advanced Trading Tools Package',
        quantity: 1,
        unitPrice: 100.00,
        total: 100.00
      }
    ]
  },
  {
    id: 'inv-005',
    invoiceNumber: 'INV-2023-005',
    date: '2023-08-15',
    dueDate: '2023-08-30',
    amount: 45.00,
    status: 'overdue',
    description: 'One-on-One Trading Consultation',
    items: [
      {
        description: 'Trading Consultation Session - 1 hour',
        quantity: 1,
        unitPrice: 45.00,
        total: 45.00
      }
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'paid':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'overdue':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const Invoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>(mockInvoices);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [filteredAndSortedInvoices, setFilteredAndSortedInvoices] = useState<Invoice[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    const filteredInvoices = invoices.filter(invoice => 
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const sortedInvoices = [...filteredInvoices].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
    });
    
    setFilteredAndSortedInvoices(sortedInvoices);
  }, [searchTerm, sortDirection, invoices]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDownloadInvoice = (invoice: Invoice) => {
    toast({
      title: "Invoice downloaded",
      description: `Invoice ${invoice.invoiceNumber} has been downloaded.`
    });
  };
  
  const handlePrintInvoice = () => {
    toast({
      title: "Print prepared",
      description: "Your invoice is ready to print."
    });
    // In a real app, this would trigger the print dialog
    window.print();
  };
  
  const handleEmailInvoice = () => {
    toast({
      title: "Email sent",
      description: "Invoice has been emailed to your registered email address."
    });
  };
  
  const handlePayInvoice = (invoice: Invoice) => {
    if (invoice.status === 'paid') {
      toast({
        title: "Already paid",
        description: `Invoice ${invoice.invoiceNumber} has already been paid.`
      });
      return;
    }
    
    toast({
      title: "Payment initiated",
      description: `Processing payment for invoice ${invoice.invoiceNumber}.`
    });
    
    // In a real app, this would redirect to a payment gateway
    setTimeout(() => {
      setInvoices(prev => 
        prev.map(inv => 
          inv.id === invoice.id ? { ...inv, status: 'paid' } : inv
        )
      );
      
      toast({
        title: "Payment successful",
        description: `Invoice ${invoice.invoiceNumber} has been paid.`
      });
      
      // Close modal if open
      if (selectedInvoice?.id === invoice.id) {
        setIsInvoiceModalOpen(false);
      }
    }, 2000);
  };
  
  const viewInvoiceDetails = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setIsInvoiceModalOpen(true);
  };
  
  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Invoices</h1>
          <p className="text-muted-foreground">
            Manage and review your billing history
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search invoices..."
              className="pl-8"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-1 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" onClick={toggleSortDirection}>
              Sort by Date {sortDirection === 'asc' ? <ArrowUp className="ml-1 h-4 w-4" /> : <ArrowDown className="ml-1 h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Invoice History</CardTitle>
            <CardDescription>
              View and manage all your invoices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice #</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAndSortedInvoices.length > 0 ? (
                  filteredAndSortedInvoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">
                        {invoice.invoiceNumber}
                      </TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>{invoice.dueDate}</TableCell>
                      <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(invoice.status)}`}>
                          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell>{invoice.description}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => viewInvoiceDetails(invoice)}
                            title="View"
                          >
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDownloadInvoice(invoice)}
                            title="Download"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                          {invoice.status !== 'paid' && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handlePayInvoice(invoice)}
                              title="Pay"
                            >
                              <CreditCard className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4">
                      No invoices found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Dialog open={isInvoiceModalOpen} onOpenChange={setIsInvoiceModalOpen}>
          {selectedInvoice && (
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Invoice {selectedInvoice.invoiceNumber}</DialogTitle>
                <DialogDescription>
                  Issued on {selectedInvoice.date}
                </DialogDescription>
              </DialogHeader>
              
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">Pro Net Solutions</h3>
                    <p className="text-muted-foreground text-sm">
                      123 Trading Street<br />
                      Financial District<br />
                      New York, NY 10001<br />
                      support@pronetsolutions.com
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold">INVOICE</div>
                    <div className="text-muted-foreground text-sm">
                      <div><strong>Invoice Number:</strong> {selectedInvoice.invoiceNumber}</div>
                      <div><strong>Issue Date:</strong> {selectedInvoice.date}</div>
                      <div><strong>Due Date:</strong> {selectedInvoice.dueDate}</div>
                      <div>
                        <strong>Status:</strong>{" "}
                        <span className={`px-2 py-0.5 rounded-full text-xs ${getStatusColor(selectedInvoice.status)}`}>
                          {selectedInvoice.status.charAt(0).toUpperCase() + selectedInvoice.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-b py-4">
                  <h4 className="font-medium mb-2">Invoice Items</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Quantity</TableHead>
                        <TableHead className="text-right">Unit Price</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedInvoice.items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.description}</TableCell>
                          <TableCell className="text-right">{item.quantity}</TableCell>
                          <TableCell className="text-right">${item.unitPrice.toFixed(2)}</TableCell>
                          <TableCell className="text-right">${item.total.toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    Thank you for your business!
                  </div>
                  <div className="text-right">
                    <div className="mb-1 text-muted-foreground">Total Amount</div>
                    <div className="text-2xl font-bold">${selectedInvoice.amount.toFixed(2)}</div>
                  </div>
                </div>
                
                <div className="flex gap-2 justify-end">
                  <Button
                    variant="outline"
                    onClick={handlePrintInvoice}
                    className="flex items-center gap-1"
                  >
                    <Printer className="h-4 w-4" /> Print
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleEmailInvoice}
                    className="flex items-center gap-1"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleDownloadInvoice(selectedInvoice)}
                    className="flex items-center gap-1"
                  >
                    <Download className="h-4 w-4" /> Download
                  </Button>
                  {selectedInvoice.status !== 'paid' && (
                    <Button
                      onClick={() => handlePayInvoice(selectedInvoice)}
                      className="flex items-center gap-1"
                    >
                      <CreditCard className="h-4 w-4" /> Pay Now
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Invoices;
