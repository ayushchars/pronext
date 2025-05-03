
import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle, MessageSquare } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import SubscriptionConfirmation from '@/components/subscription/SubscriptionConfirmation';
import { useSearchParams } from 'react-router-dom';

// Mock subscription data
const mockActiveSubscription = {
  id: 'sub_12345',
  plan: 'Standard Plan',
  status: 'active',
  startDate: '2025-01-15T00:00:00Z',
  endDate: '2025-02-12T00:00:00Z', // 28 days from start date
  renewalDate: '2025-02-12T00:00:00Z', // 28 days from start date
  price: 60.00,
  billingCycle: 'monthly',
  features: [
    'Live meetings and education on forex',
    'Gold (XAUUSD) trading education',
    'Access to multiple telegram channels',
    'ProNet Announcement channel',
    'ProNet Crypto Premium channel',
    'ProNet Currency channel',
    'ProNet Gold Mentor channel',
    'ProNet Gold Scalper channel',
    'ProNet I Options channel',
    'ProNet I Stocks channel',
    'ProNet Indices channel',
    'ProNet Live Sessions channel',
  ],
};

interface PlanOption {
  id: string;
  name: string;
  price: number;
  billingCycle: string;
  popular: boolean;
  features: {
    name: string;
    included: boolean;
  }[];
}

const planOptions: PlanOption[] = [
  {
    id: 'standard',
    name: 'Standard Plan',
    price: 60.00,
    billingCycle: 'monthly',
    popular: true,
    features: [
      { name: 'Live meetings and education on forex', included: true },
      { name: 'Gold (XAUUSD) trading education', included: true },
      { name: 'Access to multiple telegram channels', included: true },
      { name: 'ProNet Announcement channel', included: true },
      { name: 'ProNet Crypto Premium channel', included: true },
      { name: 'ProNet Currency channel', included: true },
      { name: 'ProNet Gold Mentor channel', included: true },
      { name: 'ProNet Gold Scalper channel', included: true },
      { name: 'ProNet I Options channel', included: true },
      { name: 'ProNet I Stocks channel', included: true },
      { name: 'ProNet Indices channel', included: true },
      { name: 'ProNet Live Sessions channel', included: true },
    ],
  },
  {
    id: 'real-estate-addon',
    name: 'Real Estate Add-on',
    price: 25.00,
    billingCycle: 'monthly',
    popular: false,
    features: [
      { name: 'Real estate investment strategies', included: true },
      { name: 'Property market analysis', included: true },
      { name: 'Weekly real estate webinars', included: true },
      { name: 'Real estate investment guides', included: true },
      { name: 'Access to ProNet Real Estate channel', included: true },
      { name: 'Property valuation tools', included: true },
    ],
  },
  {
    id: 'dropshipping-addon',
    name: 'Drop Shipping Add-on',
    price: 20.00,
    billingCycle: 'monthly',
    popular: false,
    features: [
      { name: 'Dropshipping business strategies', included: true },
      { name: 'Product sourcing guidance', included: true },
      { name: 'E-commerce platform setup help', included: true },
      { name: 'Marketing strategies for dropshipping', included: true },
      { name: 'Access to ProNet Dropshipping channel', included: true },
      { name: 'Supplier connection resources', included: true },
    ],
  },
  {
    id: 'esports-addon',
    name: 'Esports Add-on',
    price: 15.00,
    billingCycle: 'monthly',
    popular: false,
    features: [
      { name: 'Esports market analysis', included: true },
      { name: 'Gaming team investment strategies', included: true },
      { name: 'Tournament predictions and insights', included: true },
      { name: 'Weekly esports industry updates', included: true },
      { name: 'Access to ProNet Esports channel', included: true },
      { name: 'Exclusive gaming event information', included: true },
    ],
  },
  {
    id: 'fantasy-gaming-addon',
    name: 'Fantasy Gaming Add-on',
    price: 15.00,
    billingCycle: 'monthly',
    popular: false,
    features: [
      { name: 'Fantasy sports strategies', included: true },
      { name: 'Player performance analysis', included: true },
      { name: 'Weekly fantasy sports tips', included: true },
      { name: 'League-specific guides', included: true },
      { name: 'Access to ProNet Fantasy Gaming channel', included: true },
      { name: 'Exclusive odds and predictions', included: true },
    ],
  },
];

const Subscriptions = () => {
  const { toast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const [hasActiveSubscription] = useState(true);
  const [activeSubscription] = useState(mockActiveSubscription);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [subscribedPlan, setSubscribedPlan] = useState<PlanOption | null>(null);

  useEffect(() => {
    // Show confirmation dialog if subscription success parameter is present
    const success = searchParams.get('success');
    const planId = searchParams.get('plan');
    
    if (success === 'true' && planId) {
      const plan = planOptions.find(p => p.id === planId);
      if (plan) {
        setSubscribedPlan(plan);
        setShowConfirmation(true);
      }
    }
  }, [searchParams]);

  // Calculate days left in subscription
  const calculateDaysRemaining = () => {
    const now = new Date();
    const end = new Date(activeSubscription.endDate);
    const diffTime = Math.abs(end.getTime() - now.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  const handleRenewSubscription = () => {
    toast({
      title: "Renewal in progress",
      description: "We're processing your renewal request.",
    });
  };

  const handleManageSubscription = () => {
    toast({
      title: "Redirecting to subscription management",
      description: "You'll be redirected to manage your subscription settings.",
    });
  };

  const handleUpgradeSubscription = (planId: string) => {
    // Simulate subscription upgrade process
    const plan = planOptions.find(p => p.id === planId);
    if (plan) {
      setSubscribedPlan(plan);
      setShowConfirmation(true);
      
      // Update URL to simulate success parameter
      const newParams = new URLSearchParams(searchParams);
      newParams.set('success', 'true');
      newParams.set('plan', planId);
      setSearchParams(newParams);
      
      toast({
        title: `Subscribing to ${plan.name}`,
        description: "We're processing your subscription request.",
      });
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    
    // Remove URL parameters
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('success');
    newParams.delete('plan');
    setSearchParams(newParams, { replace: true });
  };

  const handleTelegramAccess = () => {
    window.open('https://t.me/ProNetSolutions', '_blank');
    toast({
      title: "Opening Telegram",
      description: "Redirecting you to the ProNet Solutions Telegram channels.",
    });
  };

  const daysRemaining = calculateDaysRemaining();
  const percentComplete = 100 - ((daysRemaining / 28) * 100); // 28 days cycle

  return (
    <DashboardLayout>
      {/* Subscription Confirmation Dialog */}
      {subscribedPlan && (
        <SubscriptionConfirmation 
          isOpen={showConfirmation}
          onClose={handleCloseConfirmation}
          subscriptionData={{
            plan: subscribedPlan.name,
            price: subscribedPlan.price
          }}
        />
      )}
      
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Manage Subscriptions</h1>
          <p className="text-muted-foreground">
            View and manage your subscription plans
          </p>
        </div>

        {hasActiveSubscription ? (
          <Card className="border-primary/50">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{activeSubscription.plan}</CardTitle>
                  <CardDescription>
                    Your subscription is active until {formatDate(activeSubscription.endDate)}
                  </CardDescription>
                </div>
                <Badge variant="default" className="bg-green-600">Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Subscription Progress</span>
                  <span>{daysRemaining} days remaining</span>
                </div>
                <Progress value={percentComplete} className="h-2" />
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border rounded-md p-4">
                  <div className="text-sm font-medium mb-1">Billing Details</div>
                  <div className="text-2xl font-bold">${activeSubscription.price}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    28-day billing cycle
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="text-sm font-medium mb-1">Next Renewal</div>
                  <div className="text-base font-medium">
                    {formatDate(activeSubscription.renewalDate)}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Auto-renewal is enabled
                  </div>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="text-sm font-medium mb-2">Plan Features</div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {activeSubscription.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className="w-full bg-[#229ED9] hover:bg-[#1A7AB0] flex items-center justify-center"
                onClick={handleTelegramAccess}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Access Telegram Channels
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between flex-wrap gap-2">
              <Button variant="outline" onClick={handleManageSubscription}>
                Manage Subscription
              </Button>
              <Button onClick={handleRenewSubscription}>
                Renew Subscription
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="border-yellow-500/50">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">No Active Subscription</CardTitle>
                  <CardDescription>
                    Subscribe to unlock premium features
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                  <AlertCircle className="h-4 w-4 mr-1" /> Required
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Please select a subscription plan below to access all features of our affiliate program.
              </p>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Available Plans</h2>
          
          <div className="grid gap-4 md:grid-cols-3">
            {planOptions.map((plan) => (
              <Card 
                key={plan.id}
                className={`${
                  plan.popular ? 'border-primary' : ''
                } ${
                  activeSubscription && activeSubscription.plan === plan.name
                    ? 'bg-primary/5'
                    : ''
                } relative`}
              >
                {plan.popular && (
                  <Badge className="absolute top-2 right-2">Popular</Badge>
                )}
                {activeSubscription && activeSubscription.plan === plan.name && (
                  <Badge variant="secondary" className="absolute top-2 left-2">
                    Your Plan
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>
                    ${plan.price} / {plan.id === 'standard' ? '28 days' : plan.billingCycle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        {feature.included ? (
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        ) : (
                          <XCircle className="h-4 w-4 text-gray-300 mr-2" />
                        )}
                        <span className={feature.included ? '' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={activeSubscription && activeSubscription.plan === plan.name ? 'outline' : 'default'}
                    onClick={() => handleUpgradeSubscription(plan.id)}
                    disabled={activeSubscription && activeSubscription.plan === plan.name}
                  >
                    {activeSubscription && activeSubscription.plan === plan.name ? 'Current Plan' : plan.id.includes('addon') ? 'Add to Plan' : 'Subscribe'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Subscriptions;
