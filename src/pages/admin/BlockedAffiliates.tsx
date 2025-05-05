
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, UserCheck, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from '@/components/ui/textarea';

// Mock data for blocked affiliates
const mockBlockedAffiliates = [
  { 
    id: 'AF005', 
    name: 'James Brown', 
    email: 'james@example.com', 
    phone: '+1 678-901-2345',
    level: 'Silver',
    blockedDate: '2023-06-15',
    reason: 'Violation of terms of service - spam marketing',
    blockedBy: 'Admin',
    totalEarnings: '$1,840.25',
    joinDate: '2023-02-05'
  },
  { 
    id: 'AF008', 
    name: 'Michael Wilson', 
    email: 'michael@example.com', 
    phone: '+1 234-567-8901',
    level: 'Bronze',
    blockedDate: '2023-06-20',
    reason: 'Multiple account violations',
    blockedBy: 'Admin',
    totalEarnings: '$540.15',
    joinDate: '2023-03-10'
  },
  { 
    id: 'AF012', 
    name: 'Sandra Miller', 
    email: 'sandra@example.com', 
    phone: '+1 345-678-9012',
    level: 'Gold',
    blockedDate: '2023-07-05',
    reason: 'Fraudulent activity detected',
    blockedBy: 'System',
    totalEarnings: '$2,750.80',
    joinDate: '2023-01-22'
  },
  { 
    id: 'AF015', 
    name: 'Thomas Clark', 
    email: 'thomas@example.com', 
    phone: '+1 456-789-0123',
    level: 'Bronze',
    blockedDate: '2023-07-12',
    reason: 'Payment dispute unresolved',
    blockedBy: 'Admin',
    totalEarnings: '$320.50',
    joinDate: '2023-04-18'
  },
  { 
    id: 'AF021', 
    name: 'Jessica Lee', 
    email: 'jessica@example.com', 
    phone: '+1 567-890-1234',
    level: 'Silver',
    blockedDate: '2023-07-25',
    reason: 'Request by affiliate after investigation',
    blockedBy: 'Admin',
    totalEarnings: '$1,250.30',
    joinDate: '2023-02-14'
  }
];

const BlockedAffiliates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAffiliate, setSelectedAffiliate] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  // Filter affiliates based on search term
  const filteredAffiliates = mockBlockedAffiliates.filter((affiliate) => {
    return affiliate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           affiliate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
           affiliate.id.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleUnblockAffiliate = (affiliate: any) => {
    setSelectedAffiliate(affiliate);
    setIsDialogOpen(true);
  };

  const confirmUnblock = () => {
    toast({
      title: "Affiliate Unblocked",
      description: `${selectedAffiliate.name} has been successfully unblocked and reinstated.`,
    });
    setIsDialogOpen(false);
  };

  // Get level badge color
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'platinum': return 'bg-violet-100 text-violet-800';
      case 'gold': return 'bg-yellow-100 text-yellow-800';
      case 'silver': return 'bg-blue-100 text-blue-800';
      case 'bronze': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Blocked Affiliates</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-red-50 dark:bg-red-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Total Blocked</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{mockBlockedAffiliates.length}</p>
              <p className="text-sm text-gray-500">Blocked affiliates</p>
            </CardContent>
          </Card>
          
          <Card className="bg-amber-50 dark:bg-amber-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm text-gray-500">Recently blocked</p>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50 dark:bg-blue-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Potential Revenue Loss</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$6,702.00</p>
              <p className="text-sm text-gray-500">From blocked affiliates</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Blocked Affiliate List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="w-full md:w-1/2 relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search blocked affiliates..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Affiliate</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Blocked Since</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Blocked By</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAffiliates.map((affiliate) => (
                    <TableRow key={affiliate.id}>
                      <TableCell className="font-medium">{affiliate.id}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium">{affiliate.name}</span>
                          <span className="text-xs text-gray-500">{affiliate.email}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${getLevelColor(affiliate.level)}`}>
                          {affiliate.level}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          {affiliate.blockedDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="max-w-[200px] truncate" title={affiliate.reason}>
                          {affiliate.reason}
                        </p>
                      </TableCell>
                      <TableCell>{affiliate.blockedBy}</TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleUnblockAffiliate(affiliate)}
                        >
                          <UserCheck className="h-4 w-4 mr-2" />
                          Unblock
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Unblock Affiliate</DialogTitle>
            <DialogDescription>
              Are you sure you want to unblock this affiliate? They will regain access to the platform.
            </DialogDescription>
          </DialogHeader>
          
          {selectedAffiliate && (
            <div className="py-4">
              <div className="flex flex-col space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Affiliate ID</p>
                    <p>{selectedAffiliate.id}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p>{selectedAffiliate.name}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Blocked Reason</p>
                  <p className="text-sm">{selectedAffiliate.reason}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Notes for Reinstatement</p>
                  <Textarea placeholder="Add notes about why this affiliate is being unblocked..." />
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={confirmUnblock}
              className="bg-green-600 hover:bg-green-700"
            >
              Confirm Unblock
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default BlockedAffiliates;
