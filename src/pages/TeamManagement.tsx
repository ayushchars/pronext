
import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  UserCheck, 
  GitBranch,
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import TeamMembersList from '@/components/team/TeamMembersList';
import AddAffiliateForm from '@/components/team/AddAffiliateForm';
import PlacementAffiliateForm from '@/components/team/PlacementAffiliateForm';
import DirectAffiliates from '@/components/team/DirectAffiliates';
import LevelStructure from '@/components/team/LevelStructure';

const TeamManagement = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isPlacementDialogOpen, setIsPlacementDialogOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold">Team Management</h1>
          
          <div className="flex flex-wrap gap-2">
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <UserPlus className="h-4 w-4" />
                  <span>Add New Affiliate</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Add New Affiliate</DialogTitle>
                </DialogHeader>
                <AddAffiliateForm onSuccess={() => setIsAddDialogOpen(false)} />
              </DialogContent>
            </Dialog>

            <Dialog open={isPlacementDialogOpen} onOpenChange={setIsPlacementDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <UserCheck className="h-4 w-4" />
                  <span>Placement Affiliate</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Placement Affiliate</DialogTitle>
                </DialogHeader>
                <PlacementAffiliateForm onSuccess={() => setIsPlacementDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
            <TabsTrigger value="all">All Members</TabsTrigger>
            <TabsTrigger value="direct">Direct Affiliates</TabsTrigger>
            <TabsTrigger value="levels">Level Structure</TabsTrigger>
            <TabsTrigger value="binary">Binary Tree</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" /> 
                  Team Members
                </CardTitle>
                <CardDescription>
                  Manage all your team members and their details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TeamMembersList />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="direct">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5" /> 
                  Direct Affiliates
                </CardTitle>
                <CardDescription>
                  Members you have personally sponsored
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DirectAffiliates />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="levels">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5" /> 
                  Level Structure
                </CardTitle>
                <CardDescription>
                  Your team structure broken down by levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LevelStructure />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="binary">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5" /> 
                  Binary Tree (Left & Right)
                </CardTitle>
                <CardDescription>
                  Visualize your team structure in binary format
                </CardDescription>
              </CardHeader>
              <CardContent className="min-h-[400px] relative overflow-x-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p>Binary Tree component will be rendered here.</p>
                    <p className="text-muted-foreground mt-2">Complete binary tree visualization coming soon.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default TeamManagement;
