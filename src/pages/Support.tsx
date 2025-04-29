
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LifeBuoy, MessageSquare, FileText, Clock, CheckCircle, AlertCircle, PlusCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from "@/components/ui/use-toast";

// Sample ticket data
const mockTickets = [
  {
    id: 'T-1001',
    title: 'Unable to access dashboard',
    category: 'Technical',
    status: 'Open',
    priority: 'High',
    createdAt: '2025-03-25T14:30:00Z',
    updatedAt: '2025-03-25T16:45:00Z',
    messages: [
      {
        id: 1,
        sender: 'You',
        content: 'I am unable to access the dashboard after logging in. The page keeps loading indefinitely.',
        timestamp: '2025-03-25T14:30:00Z',
      },
      {
        id: 2,
        sender: 'Support Agent',
        content: 'Thank you for reporting this issue. Could you please let us know which browser and device you are using?',
        timestamp: '2025-03-25T16:45:00Z',
      },
    ],
  },
  {
    id: 'T-1002',
    title: 'Commission calculation error',
    category: 'Billing',
    status: 'In Progress',
    priority: 'Medium',
    createdAt: '2025-03-20T09:15:00Z',
    updatedAt: '2025-03-21T11:30:00Z',
    messages: [
      {
        id: 1,
        sender: 'You',
        content: 'My commission for last month seems incorrect. The payout is lower than expected.',
        timestamp: '2025-03-20T09:15:00Z',
      },
      {
        id: 2,
        sender: 'Support Agent',
        content: 'We apologize for the confusion. We are reviewing your commission history and will get back to you shortly.',
        timestamp: '2025-03-21T11:30:00Z',
      },
    ],
  },
  {
    id: 'T-1003',
    title: 'Missing product in catalog',
    category: 'Products',
    status: 'Resolved',
    priority: 'Low',
    createdAt: '2025-03-15T10:20:00Z',
    updatedAt: '2025-03-16T15:10:00Z',
    messages: [
      {
        id: 1,
        sender: 'You',
        content: 'The product with code XYZ-123 is missing from the catalog.',
        timestamp: '2025-03-15T10:20:00Z',
      },
      {
        id: 2,
        sender: 'Support Agent',
        content: 'Thank you for bringing this to our attention. We have added the product back to the catalog.',
        timestamp: '2025-03-16T15:10:00Z',
      },
    ],
  },
];

// Define ticket categories for new ticket creation
const ticketCategories = [
  'Technical', 'Billing', 'Products', 'Account', 'Other'
];

const TicketList = ({ tickets, onViewTicket }: { tickets: any[], onViewTicket: (id: string) => void }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Open':
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Open</Badge>;
      case 'In Progress':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">In Progress</Badge>;
      case 'Resolved':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Resolved</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      {tickets.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-gray-500">No tickets found</p>
        </Card>
      ) : (
        tickets.map((ticket) => (
          <Card key={ticket.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{ticket.title}</CardTitle>
                  <div className="text-sm text-muted-foreground">#{ticket.id} · {formatDate(ticket.createdAt)}</div>
                </div>
                {getStatusBadge(ticket.status)}
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <FileText className="mr-2 h-4 w-4" /> {ticket.category}
                <Clock className="ml-4 mr-2 h-4 w-4" /> Last updated: {formatDate(ticket.updatedAt)}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" onClick={() => onViewTicket(ticket.id)}>
                <MessageSquare className="mr-2 h-4 w-4" /> View Conversation
              </Button>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
};

const TicketDetails = ({ ticket, onClose, onReply }: { ticket: any, onClose: () => void, onReply: (ticketId: string, message: string) => void }) => {
  const [replyMessage, setReplyMessage] = useState('');
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open':
        return <AlertCircle className="h-5 w-5 text-blue-500" />;
      case 'In Progress':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'Resolved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (replyMessage.trim()) {
      onReply(ticket.id, replyMessage);
      setReplyMessage('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">{ticket.title}</h2>
          <span className="ml-2">#{ticket.id}</span>
        </div>
        <Button variant="ghost" onClick={onClose}>Back to Tickets</Button>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {getStatusIcon(ticket.status)}
              <span className="ml-2">{ticket.status}</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Created: {formatDate(ticket.createdAt)}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ticket.messages.map((message: any) => (
              <div 
                key={message.id} 
                className={`p-4 rounded-lg ${
                  message.sender === 'You' 
                    ? 'bg-primary/10 ml-8' 
                    : 'bg-muted mr-8'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{message.sender}</span>
                  <span className="text-xs text-muted-foreground">{formatDate(message.timestamp)}</span>
                </div>
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSubmit} className="w-full space-y-2">
            <Textarea 
              placeholder="Type your reply here..." 
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="flex justify-end">
              <Button type="submit" disabled={!replyMessage.trim()}>
                Send Reply
              </Button>
            </div>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

const NewTicketForm = ({ onSubmit, onCancel }: { onSubmit: (data: any) => void, onCancel: () => void }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(ticketCategories[0]);
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onSubmit({
        title,
        category,
        description,
      });
      // Reset form
      setTitle('');
      setCategory(ticketCategories[0]);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          placeholder="Brief summary of the issue"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {ticketCategories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Please provide details about your issue..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="min-h-[150px]"
          required
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
        <Button type="submit" disabled={!title.trim() || !description.trim()}>Submit Ticket</Button>
      </div>
    </form>
  );
};

const Support = () => {
  const [tickets, setTickets] = useState(mockTickets);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [isNewTicketDialogOpen, setIsNewTicketDialogOpen] = useState(false);
  const { toast } = useToast();

  const selectedTicket = tickets.find(ticket => ticket.id === selectedTicketId);
  const openTickets = tickets.filter(ticket => ticket.status === 'Open');
  const inProgressTickets = tickets.filter(ticket => ticket.status === 'In Progress');
  const resolvedTickets = tickets.filter(ticket => ticket.status === 'Resolved');

  const handleViewTicket = (id: string) => {
    setSelectedTicketId(id);
  };

  const handleTicketReply = (ticketId: string, message: string) => {
    setTickets(prevTickets => 
      prevTickets.map(ticket => {
        if (ticket.id === ticketId) {
          const newMessage = {
            id: ticket.messages.length + 1,
            sender: 'You',
            content: message,
            timestamp: new Date().toISOString(),
          };
          
          return {
            ...ticket,
            messages: [...ticket.messages, newMessage],
            updatedAt: new Date().toISOString(),
          };
        }
        return ticket;
      })
    );
    
    toast({
      title: "Reply sent",
      description: "Your reply has been sent successfully.",
    });
  };

  const handleCreateTicket = (data: any) => {
    const newTicket = {
      id: `T-${1000 + tickets.length + 1}`,
      title: data.title,
      category: data.category,
      status: 'Open',
      priority: 'Medium',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messages: [
        {
          id: 1,
          sender: 'You',
          content: data.description,
          timestamp: new Date().toISOString(),
        },
      ],
    };
    
    setTickets([newTicket, ...tickets]);
    setIsNewTicketDialogOpen(false);
    
    toast({
      title: "Ticket created",
      description: `Ticket #${newTicket.id} has been created successfully.`,
    });
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold">Support</h1>
            <p className="text-muted-foreground">Get help with your account and services</p>
          </div>
          <Dialog open={isNewTicketDialogOpen} onOpenChange={setIsNewTicketDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center">
                <PlusCircle className="mr-2 h-4 w-4" /> New Ticket
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Create New Support Ticket</DialogTitle>
              </DialogHeader>
              <NewTicketForm 
                onSubmit={handleCreateTicket} 
                onCancel={() => setIsNewTicketDialogOpen(false)} 
              />
            </DialogContent>
          </Dialog>
        </div>

        {selectedTicket ? (
          <TicketDetails 
            ticket={selectedTicket} 
            onClose={() => setSelectedTicketId(null)}
            onReply={handleTicketReply}
          />
        ) : (
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Tickets</TabsTrigger>
              <TabsTrigger value="open">Open ({openTickets.length})</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress ({inProgressTickets.length})</TabsTrigger>
              <TabsTrigger value="resolved">Resolved ({resolvedTickets.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <TicketList tickets={tickets} onViewTicket={handleViewTicket} />
            </TabsContent>
            <TabsContent value="open" className="mt-0">
              <TicketList tickets={openTickets} onViewTicket={handleViewTicket} />
            </TabsContent>
            <TabsContent value="in-progress" className="mt-0">
              <TicketList tickets={inProgressTickets} onViewTicket={handleViewTicket} />
            </TabsContent>
            <TabsContent value="resolved" className="mt-0">
              <TicketList tickets={resolvedTickets} onViewTicket={handleViewTicket} />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Support;
