
import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
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
    id: 'forex-addon',
    name: 'Forex Add-on',
    price: 20.00,
    billingCycle: 'monthly',
    popular: false,
    features: [
      { name: 'Advanced forex signals', included: true },
      { name: 'Exclusive forex webinars', included: true },
      { name: 'One-on-one forex mentoring session', included: true },
      { name: 'Forex strategy guides', included: true },
      { name: 'Daily market analysis', included: true },
      { name: 'Access to ProNet Forex Pro channel', included: true },
    ],
  },
  {
    id: 'gold-addon',
    name: 'Gold Trading Add-on',
    price: 25.00,
    billingCycle: 'monthly',
    popular: false,
    features: [
      { name: 'Premium XAUUSD signals', included: true },
      { name: 'Gold market analysis', included: true },
      { name: 'Weekly gold trading webinars', included: true },
      { name: 'Gold trading strategy guides', included: true },
      { name: 'Access to Gold Pro channel', included: true },
      { name: 'Gold trading indicators', included: true },
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

  const daysRemaining = calculateDaysRemaining();
  const percentComplete = 100 - ((daysRemaining / 28) * 100); // Changed from 365 to 28 days

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
                    {activeSubscription.billingCycle === 'yearly' ? 'Annual' : 'Monthly'} billing
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
                  <CardDescription>${plan.price} / {plan.billingCycle}</CardDescription>
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
