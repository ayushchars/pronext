
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Share2, Copy, Facebook, Twitter, Mail, LinkedinIcon, Send, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import DashboardLayout from '@/components/layout/DashboardLayout';

const Referral = () => {
  const { toast } = useToast();
  const [emailTo, setEmailTo] = useState('');
  const userId = 'AF123456'; // This would come from user context/auth in a real app
  
  // Example referral data
  const referralData = {
    code: 'PRONET-' + userId,
    link: `https://pronetsolutions.com/signup?ref=${userId}`,
    earnings: {
      total: 1250.75,
      pending: 350.25,
      available: 900.50
    },
    stats: {
      clicks: 214,
      signups: 45,
      activeUsers: 28,
      conversionRate: '21%'
    }
  };
  
  const handleCopyText = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: message
    });
  };
  
  const handleShareEmail = () => {
    if (!emailTo) {
      toast({
        title: "Email Required",
        description: "Please enter a valid email address."
      });
      return;
    }
    
    // In a real app, this would send an API request to send the email
    toast({
      title: "Invitation Sent!",
      description: `Your referral invitation has been sent to ${emailTo}`
    });
    
    setEmailTo('');
  };
  
  const handleShareSocial = (platform: string) => {
    // In a real app, this would open the respective social sharing dialog
    const shareText = `Join Pro Net Solutions and start your journey to financial freedom! Sign up using my referral code: ${referralData.code}`;
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralData.link)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(referralData.link)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralData.link)}`;
        break;
      default:
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
    
    toast({
      title: "Sharing on " + platform,
      description: "Opening share dialog..."
    });
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Referrals</h1>
            <p className="text-muted-foreground">
              Share Pro Net Solutions and earn rewards for every referral
            </p>
          </div>
          <Button className="mt-4 md:mt-0 flex items-center gap-2">
            <Share2 size={16} />
            Share Now
          </Button>
        </div>
        
        {/* Referral Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-muted-foreground">Total Earnings</span>
                <span className="text-2xl font-bold">${referralData.earnings.total}</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-muted-foreground">Pending Earnings</span>
                <span className="text-2xl font-bold">${referralData.earnings.pending}</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-muted-foreground">Available for Withdraw</span>
                <span className="text-2xl font-bold">${referralData.earnings.available}</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-muted-foreground">Conversion Rate</span>
                <span className="text-2xl font-bold">{referralData.stats.conversionRate}</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Referral Card */}
        <Card>
          <CardHeader>
            <CardTitle>Your Referral Link & Code</CardTitle>
            <CardDescription>
              Share your unique referral link or code with friends and earn a 10% commission on their purchases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Referral Code */}
              <div className="space-y-2">
                <div className="font-medium">Referral Code</div>
                <div className="flex items-center">
                  <div className="flex-grow p-3 bg-muted rounded-l-md font-mono">{referralData.code}</div>
                  <Button 
                    variant="outline" 
                    className="rounded-l-none" 
                    onClick={() => handleCopyText(referralData.code, "Referral code copied to clipboard!")}
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              </div>
              
              {/* Referral Link */}
              <div className="space-y-2">
                <div className="font-medium">Referral Link</div>
                <div className="flex items-center">
                  <Input 
                    value={referralData.link}
                    readOnly
                    className="font-mono rounded-r-none"
                  />
                  <Button 
                    variant="outline" 
                    className="rounded-l-none" 
                    onClick={() => handleCopyText(referralData.link, "Referral link copied to clipboard!")}
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Sharing Options */}
        <Card>
          <CardHeader>
            <CardTitle>Share Your Referral</CardTitle>
            <CardDescription>
              Choose how you want to share your referral link with others
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="social">
              <TabsList className="mb-6">
                <TabsTrigger value="social">Social Media</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="marketing">Marketing Materials</TabsTrigger>
              </TabsList>
              
              <TabsContent value="social" className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2" 
                    onClick={() => handleShareSocial('facebook')}
                  >
                    <Facebook size={18} />
                    Facebook
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2" 
                    onClick={() => handleShareSocial('twitter')}
                  >
                    <Twitter size={18} />
                    Twitter
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2" 
                    onClick={() => handleShareSocial('linkedin')}
                  >
                    <LinkedinIcon size={18} />
                    LinkedIn
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="email" className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your friend's email"
                    value={emailTo}
                    onChange={(e) => setEmailTo(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleShareEmail} className="flex items-center gap-2">
                    <Mail size={16} />
                    Send Invitation
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  We'll send a personalized invitation with your referral link.
                </p>
              </TabsContent>
              
              <TabsContent value="marketing" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Send size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email Templates</h4>
                        <p className="text-sm text-muted-foreground">Ready-to-send email templates</p>
                      </div>
                      <Button variant="ghost" className="ml-auto" onClick={() => handleCopyText("Email template text would go here", "Email template copied!")}>
                        <Copy size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Social Posts</h4>
                        <p className="text-sm text-muted-foreground">Pre-written social media posts</p>
                      </div>
                      <Button variant="ghost" className="ml-auto" onClick={() => handleCopyText("Social media post template would go here", "Social post copied!")}>
                        <Copy size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        {/* Referral Stats Details */}
        <Card>
          <CardHeader>
            <CardTitle>Referral Performance</CardTitle>
            <CardDescription>
              Track how your referral link is performing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Link Clicks</div>
                <div className="text-2xl font-bold">{referralData.stats.clicks}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Sign Ups</div>
                <div className="text-2xl font-bold">{referralData.stats.signups}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Active Users</div>
                <div className="text-2xl font-bold">{referralData.stats.activeUsers}</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Conversion Rate</div>
                <div className="text-2xl font-bold">{referralData.stats.conversionRate}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Referral;
