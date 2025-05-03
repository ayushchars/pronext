
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ReferralHeader from '@/components/referral/ReferralHeader';
import ReferralStats from '@/components/referral/ReferralStats';
import ReferralCodes from '@/components/referral/ReferralCodes';
import SharingOptions from '@/components/referral/SharingOptions';
import PerformanceStats from '@/components/referral/PerformanceStats';

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
        <ReferralHeader />
        
        <ReferralStats 
          total={referralData.earnings.total} 
          pending={referralData.earnings.pending}
          available={referralData.earnings.available}
          conversionRate={referralData.stats.conversionRate}
        />
        
        <ReferralCodes 
          code={referralData.code}
          link={referralData.link}
          onCopyText={handleCopyText}
        />
        
        <SharingOptions 
          emailTo={emailTo}
          onEmailChange={(e) => setEmailTo(e.target.value)}
          onShareEmail={handleShareEmail}
          onShareSocial={handleShareSocial}
          onCopyText={handleCopyText}
        />
        
        <PerformanceStats 
          clicks={referralData.stats.clicks}
          signups={referralData.stats.signups}
          activeUsers={referralData.stats.activeUsers}
          conversionRate={referralData.stats.conversionRate}
        />
      </div>
    </DashboardLayout>
  );
};

export default Referral;
