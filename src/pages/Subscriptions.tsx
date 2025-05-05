
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, ArrowRight, Download } from 'lucide-react';
import SubscriptionConfirmation from '@/components/subscription/SubscriptionConfirmation';

const Subscriptions = () => {
  const [planPeriod, setPlanPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setShowConfirmation(true);
  };

  const handleToggleAddOn = (addon: string) => {
    if (selectedAddOns.includes(addon)) {
      setSelectedAddOns(selectedAddOns.filter(item => item !== addon));
    } else {
      setSelectedAddOns([...selectedAddOns, addon]);
    }
  };
  
  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        'Up to 5 active affiliates',
        'Basic commission structure',
        'Standard dashboard',
        'Email support',
      ],
      notIncluded: [
        'Advanced analytics',
        'Multi-level commissions',
        'Priority support',
        'Custom branding',
      ],
    },
    {
      name: 'Professional',
      monthlyPrice: 99,
      yearlyPrice: 990,
      popular: true,
      features: [
        'Up to 50 active affiliates',
        'Multi-level commissions',
        'Advanced dashboard',
        'Priority email support',
        'Performance reports',
        'Team management tools',
      ],
      notIncluded: [
        'Custom branding',
        'API access',
        'Dedicated account manager',
      ],
    },
    {
      name: 'Enterprise',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'Unlimited affiliates',
        'Custom commission structures',
        'Premium dashboard',
        'Priority 24/7 support',
        'Advanced analytics',
        'White-label solution',
        'API access',
        'Dedicated account manager',
      ],
      notIncluded: [],
    },
  ];
  
  const addOns = [
    {
      name: 'AI Trading Bot',
      description: 'Automated trading solutions with advanced algorithms',
      monthlyPrice: 59,
      yearlyPrice: 590,
      icon: '🤖',
    },
    {
      name: 'Money Managers',
      description: 'Professional fund managers to optimize your portfolio',
      monthlyPrice: 79,
      yearlyPrice: 790,
      icon: '💼',
    },
    {
      name: 'Copy Trading',
      description: 'Automatically copy trades from successful traders',
      monthlyPrice: 39,
      yearlyPrice: 390,
      icon: '🔄',
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto py-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Subscription Plans</h1>
          <p className="text-muted-foreground mt-2">Choose the perfect plan for your affiliate business needs</p>
        </div>
        
        <div className="flex justify-center pb-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
            <Button
              variant={planPeriod === 'monthly' ? 'default' : 'ghost'}
              className={`rounded-full ${planPeriod === 'monthly' ? '' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              onClick={() => setPlanPeriod('monthly')}
            >
              Monthly
            </Button>
            <Button
              variant={planPeriod === 'yearly' ? 'default' : 'ghost'}
              className={`rounded-full ${planPeriod === 'yearly' ? '' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              onClick={() => setPlanPeriod('yearly')}
            >
              Yearly <Badge variant="outline" className="ml-2 bg-primary/20">Save 15%</Badge>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <Badge className="bg-primary hover:bg-primary">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-bold">
                      ${planPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="ml-1 text-muted-foreground">/{planPeriod === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, index) => (
                      <div key={index} className="flex items-center text-muted-foreground">
                        <X className="mr-2 h-4 w-4" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={() => handleSelectPlan(plan.name)}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.name === selectedPlan ? 'Current Plan' : 'Subscribe'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Available Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon) => (
              <Card key={addon.name} className={selectedAddOns.includes(addon.name) ? 'border-primary' : ''}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-2xl mr-2">{addon.icon}</span>
                    {addon.name}
                  </CardTitle>
                  <CardDescription>
                    {addon.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">
                      ${planPeriod === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice}
                    </span>
                    <span className="ml-1 text-muted-foreground">
                      /{planPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={selectedAddOns.includes(addon.name) ? 'default' : 'outline'} 
                    className="w-full"
                    onClick={() => handleToggleAddOn(addon.name)}
                  >
                    {selectedAddOns.includes(addon.name) ? 'Selected' : 'Add to Subscription'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        <Card className="bg-gray-50 dark:bg-gray-900 mt-6">
          <CardHeader>
            <CardTitle>Compare All Plans</CardTitle>
            <CardDescription>Detailed feature comparison for all subscription plans</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left">Feature</th>
                    <th className="py-2 px-4 text-center">Starter</th>
                    <th className="py-2 px-4 text-center">Professional</th>
                    <th className="py-2 px-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">Affiliate Limit</td>
                    <td className="py-2 px-4 text-center">5</td>
                    <td className="py-2 px-4 text-center">50</td>
                    <td className="py-2 px-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Commission Levels</td>
                    <td className="py-2 px-4 text-center">1 level</td>
                    <td className="py-2 px-4 text-center">3 levels</td>
                    <td className="py-2 px-4 text-center">Unlimited levels</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Analytics</td>
                    <td className="py-2 px-4 text-center">Basic</td>
                    <td className="py-2 px-4 text-center">Advanced</td>
                    <td className="py-2 px-4 text-center">Enterprise-grade</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Support</td>
                    <td className="py-2 px-4 text-center">Email only</td>
                    <td className="py-2 px-4 text-center">Priority email</td>
                    <td className="py-2 px-4 text-center">24/7 dedicated</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Custom Branding</td>
                    <td className="py-2 px-4 text-center"><X className="mx-auto h-4 w-4" /></td>
                    <td className="py-2 px-4 text-center"><X className="mx-auto h-4 w-4" /></td>
                    <td className="py-2 px-4 text-center"><Check className="mx-auto h-4 w-4 text-green-500" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">API Access</td>
                    <td className="py-2 px-4 text-center"><X className="mx-auto h-4 w-4" /></td>
                    <td className="py-2 px-4 text-center"><X className="mx-auto h-4 w-4" /></td>
                    <td className="py-2 px-4 text-center"><Check className="mx-auto h-4 w-4 text-green-500" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download Full Plan Comparison
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Display confirmation dialog when a plan is selected */}
        <SubscriptionConfirmation
          open={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          plan={plans.find(p => p.name === selectedPlan)}
          addons={addOns.filter(addon => selectedAddOns.includes(addon.name))}
          period={planPeriod}
        />
      </div>
    </DashboardLayout>
  );
};

export default Subscriptions;
