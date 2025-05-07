import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  GitFork,
  Users,
  Search,
  UserPlus,
  Filter
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import OrganizationTree from '@/components/hierarchy/OrganizationTree';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import AffiliateProfile, { AffiliateData } from '@/components/affiliate/AffiliateProfile';

// Mock data for affiliates
const mockAffiliates = [
  { id: 'node-1', name: 'John Doe', role: 'Root Affiliate', level: 'Gold' },
  { id: 'node-2', name: 'Alice Smith', role: 'Gold Affiliate', level: 'Gold' },
  { id: 'node-3', name: 'Bob Johnson', role: 'Silver Affiliate', level: 'Silver' },
  { id: 'node-4', name: 'Carol Williams', role: 'Gold Affiliate', level: 'Gold' },
  { id: 'node-5', name: 'Dave Brown', role: 'Bronze Affiliate', level: 'Bronze' },
  { id: 'node-6', name: 'Eve Davis', role: 'Bronze Affiliate', level: 'Bronze' },
  { id: 'node-7', name: 'Frank Miller', role: 'Bronze Affiliate', level: 'Bronze' },
  { id: 'node-8', name: 'Grace Wilson', role: 'Silver Affiliate', level: 'Silver' },
  { id: 'node-9', name: 'Henry Moore', role: 'Bronze Affiliate', level: 'Bronze' },
];

const HierarchyTree = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchedNodes, setSearchedNodes] = useState<string[]>([]);
  const [selectedAffiliate, setSelectedAffiliate] = useState<AffiliateData | null>(null);
  const [searchResults, setSearchResults] = useState<typeof mockAffiliates>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setSearchedNodes([]);
      setShowSearchResults(false);
      return;
    }
    
    // Perform search based on filter and query
    const filterAffiliates = () => {
      const query = searchQuery.toLowerCase();
      let filtered = mockAffiliates.filter(
        affiliate => affiliate.name.toLowerCase().includes(query)
      );
      
      // Apply additional filtering if needed
      if (filter !== 'all') {
        filtered = filtered.filter(affiliate => {
          switch (filter) {
            case 'active':
              return true; // In a real app, check if active
            case 'inactive':
              return false; // In a real app, check if inactive
            case 'direct':
              return affiliate.id === 'node-2' || affiliate.id === 'node-3' || affiliate.id === 'node-4'; // Mock direct referrals
            case 'recent':
              return affiliate.id === 'node-8' || affiliate.id === 'node-9'; // Mock recent affiliates
            default:
              return true;
          }
        });
      }
      
      setSearchResults(filtered);
      setShowSearchResults(filtered.length > 0);
      
      // Extract node IDs for highlighting in the tree
      const nodeIds = filtered.map(a => a.id);
      setSearchedNodes(nodeIds);
    };
    
    const timeoutId = setTimeout(filterAffiliates, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, filter]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Function to show the affiliate profile when a node is clicked
  const handleNodeClick = (affiliateId: string) => {
    // Find the affiliate from our mock data
    const affiliate = mockAffiliates.find(a => a.id === affiliateId);
    
    if (!affiliate) return;
    
    // In a real app, you would fetch the affiliate data from your API
    const mockAffiliate: AffiliateData = {
      id: affiliateId,
      name: affiliate.name,
      email: `${affiliate.name.toLowerCase().replace(' ', '.')}@example.com`,
      phone: '+1987654321',
      address: '456 Oak St, Town, Country',
      joinDate: '2023-03-10',
      status: 'active',
      level: affiliate.level,
      teamSize: Math.floor(Math.random() * 20) + 1,
      directReferrals: Math.floor(Math.random() * 5) + 1,
      earnings: {
        total: Math.floor(Math.random() * 5000) + 500,
        monthly: Math.floor(Math.random() * 500) + 100,
        pending: Math.floor(Math.random() * 200)
      },
      kyc: Math.random() > 0.6 ? 'verified' : (Math.random() > 0.5 ? 'pending' : 'rejected') // Randomly assign KYC status for demo
    };
    
    setSelectedAffiliate(mockAffiliate);
  };
  
  const handleSearchResultClick = (affiliateId: string) => {
    handleNodeClick(affiliateId);
    setShowSearchResults(false);
  };

  useEffect(() => {
    // We now handle clicks directly through props in OrganizationTree
    // This useEffect is no longer needed for setting up click listeners
    return () => {};
  }, []);
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold">Hierarchy Tree</h1>
          
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            <span>Add Affiliate</span>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow flex items-center relative">
            <Search className="mr-2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search affiliates..." 
              className="max-w-sm"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            
            {showSearchResults && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 shadow-lg rounded-md z-10 max-h-60 overflow-y-auto">
                <ul className="py-1">
                  {searchResults.map((affiliate) => (
                    <li 
                      key={affiliate.id} 
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleSearchResultClick(affiliate.id)}
                    >
                      <div className="font-medium">{affiliate.name}</div>
                      <div className="text-xs text-gray-500">{affiliate.role}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex gap-2 items-center">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Members</SelectItem>
                <SelectItem value="active">Active Only</SelectItem>
                <SelectItem value="inactive">Inactive Only</SelectItem>
                <SelectItem value="direct">Direct Referrals</SelectItem>
                <SelectItem value="recent">Recently Added</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {searchQuery && searchResults.length > 0 && (
          <div className="text-sm text-muted-foreground">
            Found {searchResults.length} matches for "{searchQuery}"
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" /> 
                Total Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">182</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <GitBranch className="h-4 w-4" /> 
                Levels Deep
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <GitFork className="h-4 w-4" /> 
                Direct Referrals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitFork className="h-5 w-5" /> 
              Organization Hierarchy
            </CardTitle>
            <CardDescription>
              Visual representation of your team structure
              {searchQuery && searchedNodes.length > 0 && (
                <span className="ml-2 text-primary">(Filtered by search: {searchQuery})</span>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 overflow-auto">
            <div className="relative min-h-[600px] overflow-x-auto">
              <OrganizationTree 
                highlightNodes={searchedNodes} 
                onNodeClick={handleNodeClick}
              />
            </div>
          </CardContent>
        </Card>

        {/* Affiliate Profile Dialog */}
        <Dialog open={!!selectedAffiliate} onOpenChange={(open) => !open && setSelectedAffiliate(null)}>
          <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
            {selectedAffiliate && (
              <AffiliateProfile 
                affiliate={selectedAffiliate}
                onClose={() => setSelectedAffiliate(null)}
                isAdmin={true}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default HierarchyTree;
