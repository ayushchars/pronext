
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import { 
  Share2, 
  Copy, 
  Users, 
  Mail, 
  MessageSquare, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ChevronUp, 
  ChevronDown 
} from 'lucide-react';

interface Referral {
  id: string;
  name: string;
  email: string;
  date: string;
  status: 'active' | 'pending';
  commission: number;
  level: number;
}

const mockReferrals: Referral[] = [
  {
    id: 'ref-001',
    name: 'John Smith',
    email: 'john.smith@example.com',
    date: '2023-10-12',
    status: 'active',
    commission: 150.00,
    level: 1
  },
  {
    id: 'ref-002',
    name: 'Emma Wilson',
    email: 'emma.wilson@example.com',
    date: '2023-10-15',
    status: 'active',
    commission: 120.00,
    level: 1
  },
  {
    id: 'ref-003',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    date: '2023-11-01',
    status: 'pending',
    commission: 0,
    level: 1
  },
  {
    id: 'ref-004',
    name: 'Sarah Davis',
    email: 'sarah.davis@example.com',
    date: '2023-11-10',
    status: 'active',
    commission: 85.00,
    level: 2
  },
  {
    id: 'ref-005',
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    date: '2023-11-15',
    status: 'pending',
    commission: 0,
    level: 1
  }
];

interface CommissionTier {
  level: number;
  percentage: number;
}

const commissionTiers: CommissionTier[] = [
  { level: 1, percentage: 10 },
  { level: 2, percentage: 5 },
  { level: 3, percentage: 3 },
  { level: 4, percentage: 2 },
  { level: 5, percentage: 1 }
];

const Referral = () => {
  const { toast } = useToast();
  const [referrals, setReferrals] = useState<Referral[]>(mockReferrals);
  const [showAllLevels, setShowAllLevels] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  
  // Mock data
  const referralCode = "PRONET-ABC123";
  const referralLink = `https://pronetsolutions.com/signup?ref=${referralCode}`;
  
  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: "Referral code copied!",
      description: "Your referral code has been copied to clipboard."
    });
  };
  
  const handleCopyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Referral link copied!",
      description: "Your referral link has been copied to clipboard."
    });
  };
  
  const handleEmailShare = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailInput.trim()) {
      toast({
        title: "Email required",
        description: "Please enter an email address.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Invitation sent!",
      description: `Referral invitation has been sent to ${emailInput}`
    });
    
    setEmailInput('');
  };
  
  const handleMessageShare = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!messageInput.trim()) {
      toast({
        title: "Message required",
        description: "Please enter a message.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Message ready to share",
      description: "Copy your custom message to share with friends."
    });
  };
  
  const handleSocialShare = (platform: string) => {
    let shareUrl;
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('Join Pro Net Solutions and learn how to trade like a pro! Use my referral code: ' + referralCode)}&url=${encodeURIComponent(referralLink)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
    
    toast({
      title: `Sharing on ${platform}`,
      description: "Your referral link is ready to be shared."
    });
  };
  
  const visibleCommissionTiers = showAllLevels 
    ? commissionTiers 
    : commissionTiers.slice(0, 3);
  
  const totalCommission = referrals
    .reduce((sum, referral) => sum + referral.commission, 0)
    .toFixed(2);
  
  const activeReferrals = referrals
    .filter(referral => referral.status === 'active')
    .length;
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Referrals</h1>
          <p className="text-muted-foreground">
            Share your referral link and earn commissions
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Total Commissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalCommission}</div>
              <p className="text-xs text-muted-foreground">
                From {activeReferrals} active referrals
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                My Referral Code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="text-xl font-bold font-mono bg-muted p-2 rounded-md flex-1">
                  {referralCode}
                </div>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handleCopyReferralCode}
                  title="Copy referral code"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Referral Link
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Input
                  value={referralLink}
                  readOnly
                  className="font-mono text-xs"
                />
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handleCopyReferralLink}
                  title="Copy referral link"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="share">
          <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
            <TabsTrigger value="share">Share</TabsTrigger>
            <TabsTrigger value="referrals">My Referrals</TabsTrigger>
            <TabsTrigger value="commissions">Commissions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="share" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Share Your Referral</CardTitle>
                <CardDescription>
                  Invite friends and earn commissions on their subscriptions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Social Media</h3>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleSocialShare('facebook')}
                    >
                      <Facebook className="mr-2 h-4 w-4" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleSocialShare('twitter')}
                    >
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleSocialShare('linkedin')}
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Email Invitation</h3>
                  <form onSubmit={handleEmailShare} className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="friend@example.com"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="flex-1"
                      />
                      <Button type="submit">
                        <Mail className="mr-2 h-4 w-4" />
                        Send
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      We'll send an invitation email with your referral link
                    </p>
                  </form>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Custom Message</h3>
                  <form onSubmit={handleMessageShare} className="space-y-4">
                    <Input
                      as="textarea"
                      placeholder="Write a personal message to share with your invitation..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      className="min-h-[100px] p-3"
                    />
                    <div className="flex justify-between">
                      <p className="text-xs text-muted-foreground">
                        Your referral link will be automatically added
                      </p>
                      <Button type="submit">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Create Message
                      </Button>
                    </div>
                  </form>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="referrals">
            <Card>
              <CardHeader>
                <CardTitle>My Referred Members</CardTitle>
                <CardDescription>
                  People who have signed up using your referral
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Date Joined</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead>Commission</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {referrals.length > 0 ? (
                      referrals.map((referral) => (
                        <TableRow key={referral.id}>
                          <TableCell className="font-medium">{referral.name}</TableCell>
                          <TableCell>{referral.email}</TableCell>
                          <TableCell>{referral.date}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              referral.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {referral.status === 'active' ? 'Active' : 'Pending'}
                            </span>
                          </TableCell>
                          <TableCell>Level {referral.level}</TableCell>
                          <TableCell>${referral.commission.toFixed(2)}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-4">
                          No referrals yet
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="commissions">
            <Card>
              <CardHeader>
                <CardTitle>Commission Structure</CardTitle>
                <CardDescription>
                  How you earn from your referral network
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Commission Tiers</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Level</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Commission Rate</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {visibleCommissionTiers.map((tier) => (
                        <TableRow key={tier.level}>
                          <TableCell className="font-medium">Level {tier.level}</TableCell>
                          <TableCell>
                            {tier.level === 1 
                              ? 'Direct referrals' 
                              : `Referrals of your level ${tier.level - 1} members`}
                          </TableCell>
                          <TableCell className="font-bold">{tier.percentage}%</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  {commissionTiers.length > 3 && (
                    <Button
                      variant="ghost"
                      className="mt-2 w-full"
                      onClick={() => setShowAllLevels(!showAllLevels)}
                    >
                      {showAllLevels ? (
                        <>
                          <ChevronUp className="mr-1 h-4 w-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="mr-1 h-4 w-4" />
                          Show All Levels
                        </>
                      )}
                    </Button>
                  )}
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">How It Works</h3>
                  <div className="space-y-4">
                    <div className="bg-muted rounded-lg p-4">
                      <div className="font-medium mb-2">1. Share Your Referral</div>
                      <p className="text-sm text-muted-foreground">
                        Share your unique referral code or link with friends, family, and followers.
                      </p>
                    </div>
                    
                    <div className="bg-muted rounded-lg p-4">
                      <div className="font-medium mb-2">2. They Join Pro Net Solutions</div>
                      <p className="text-sm text-muted-foreground">
                        When they sign up using your referral code, they become part of your network.
                      </p>
                    </div>
                    
                    <div className="bg-muted rounded-lg p-4">
                      <div className="font-medium mb-2">3. Earn Commissions</div>
                      <p className="text-sm text-muted-foreground">
                        You earn a percentage of their subscription fees, plus commissions from their referrals too!
                      </p>
                    </div>
                    
                    <div className="bg-muted rounded-lg p-4">
                      <div className="font-medium mb-2">4. Get Paid Monthly</div>
                      <p className="text-sm text-muted-foreground">
                        Your commissions are calculated monthly and added to your earnings wallet.
                      </p>
                    </div>
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

export default Referral;
