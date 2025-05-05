import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ZoomIn, ZoomOut, GitFork, Users, Network, UserPlus } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BinaryTree from '@/components/hierarchy/BinaryTree';
import OrganizationTree from '@/components/hierarchy/OrganizationTree';

const AffiliateTree = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [treeView, setTreeView] = useState('organization'); // 'organization' or 'binary'
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 10, 150));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 10, 50));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Affiliate Network Tree</h1>
          <div className="flex gap-2">
            <Select value={treeView} onValueChange={setTreeView}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tree View" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="organization">Organization Tree</SelectItem>
                <SelectItem value="binary">Binary Tree</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={handleZoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              {zoomLevel}%
            </Button>
            <Button variant="outline" onClick={handleZoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-blue-50 dark:bg-blue-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Total Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">182</p>
              <p className="text-sm text-gray-500">Affiliates in network</p>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50 dark:bg-green-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Direct Referrals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">24</p>
              <p className="text-sm text-gray-500">Level 1 affiliates</p>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-50 dark:bg-purple-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Network Depth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">7</p>
              <p className="text-sm text-gray-500">Levels deep</p>
            </CardContent>
          </Card>
          
          <Card className="bg-amber-50 dark:bg-amber-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Top Performers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">18</p>
              <p className="text-sm text-gray-500">Gold & above affiliates</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>{treeView === 'organization' ? 'Organization Tree View' : 'Binary Tree View'}</span>
              <div className="flex gap-2">
                <div className="relative w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search affiliate..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="sm">
                  Find
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900 overflow-auto min-h-[500px]" 
                 style={{transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center'}}>
              {treeView === 'organization' ? (
                <OrganizationTree />
              ) : (
                <BinaryTree />
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium flex items-center">
                <GitFork className="mr-2 h-5 w-5 text-primary" />
                Network Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full" variant="outline">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add New Affiliate
                </Button>
                <Button className="w-full" variant="outline">
                  <Network className="mr-2 h-4 w-4" />
                  Adjust Network Structure
                </Button>
                <Button className="w-full" variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  View Team Performance
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-base font-medium">Top Performing Branches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: "AF006", name: "Patricia Davis", members: 47, earnings: "$8,750.60", growth: "+12.5%" },
                  { id: "AF004", name: "Mary Williams", members: 31, earnings: "$4,280.90", growth: "+8.3%" },
                  { id: "AF001", name: "John Doe", members: 24, earnings: "$3,450.75", growth: "+5.2%" },
                ].map((branch, index) => (
                  <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{branch.name}</p>
                      <p className="text-sm text-gray-500">ID: {branch.id} | {branch.members} members</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{branch.earnings}</p>
                      <p className="text-xs text-green-600">{branch.growth}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AffiliateTree;
