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

const HierarchyTree = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchedNodes, setSearchedNodes] = useState<string[]>([]);
  
  // This is a placeholder for the actual search functionality
  // In a real app, you would search through the actual tree data
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchedNodes([]);
      return;
    }
    
    // Simulate searching through tree nodes
    // This would be replaced with actual tree node filtering logic
    setTimeout(() => {
      console.log(`Searching for: ${searchQuery} with filter: ${filter}`);
      
      // Example: highlight matching nodes in the tree
      // This is just a placeholder - in real implementation
      // you would update the tree component with the search results
      const mockMatchingNodeIds = ['node-1', 'node-5', 'node-12'].filter(
        id => Math.random() > 0.5
      );
      
      setSearchedNodes(mockMatchingNodeIds);
    }, 300);
  }, [searchQuery, filter]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
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
          <div className="flex-grow flex items-center">
            <Search className="mr-2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search affiliates..." 
              className="max-w-sm"
              value={searchQuery}
              onChange={handleSearchChange}
            />
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

        {searchQuery && searchedNodes.length > 0 && (
          <div className="text-sm text-muted-foreground">
            Found {searchedNodes.length} matches for "{searchQuery}"
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
              {searchQuery && <span className="ml-2 text-primary">(Filtered by search: {searchQuery})</span>}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 overflow-auto">
            <div className="relative min-h-[600px] overflow-x-auto">
              <OrganizationTree />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HierarchyTree;
