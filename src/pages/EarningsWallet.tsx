
import React, { useState } from 'react';
import { 
  Wallet, 
  DollarSign, 
  BadgeDollarSign, 
  Award, 
  Landmark, 
  Plane, 
  Car, 
  Home 
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Progress } from '@/components/ui/progress';

const EarningsWallet = () => {
  const { toast } = useToast();
  const [payoutRequested, setPayoutRequested] = useState(false);

  const handlePayoutRequest = () => {
    // In a real application, this would call an API
    toast({
      title: "Payout Requested",
      description: "Your payout request has been submitted and is being processed.",
    });
    setPayoutRequested(true);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold">Earnings Wallet</h1>
          
          <Button 
            onClick={handlePayoutRequest} 
            disabled={payoutRequested} 
            className="gap-2"
          >
            <DollarSign className="h-4 w-4" />
            <span>Request Payout</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-5 w-5" /> 
                Available Balance
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center py-10">
              <div className="text-5xl font-bold mb-4">$1,245.80</div>
              <p className="text-muted-foreground">Available for withdrawal</p>
            </CardContent>
            <CardFooter className="border-t py-4 px-6 flex justify-between">
              <span className="text-muted-foreground">Last payout: $500.00</span>
              <span className="text-muted-foreground">April 15, 2023</span>
            </CardFooter>
          </Card>

          <Card className="border-dashed bg-muted/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BadgeDollarSign className="h-5 w-5" /> 
                Pending Bonuses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Team Bonus</span>
                  <span className="font-medium">$120.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Direct Bonus</span>
                  <span className="font-medium">$85.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Bonus</span>
                  <span className="font-medium">$210.25</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t py-4 px-6 flex justify-between">
              <span className="text-muted-foreground">Unlocks in:</span>
              <span className="font-medium">5 days</span>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="bonuses">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-6">
            <TabsTrigger value="bonuses">My Bonuses</TabsTrigger>
            <TabsTrigger value="rewards">Rewards & Achievements</TabsTrigger>
            <TabsTrigger value="lifestyle">Lifestyle Funds</TabsTrigger>
          </TabsList>

          <TabsContent value="bonuses">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" /> 
                  Bonus History
                </CardTitle>
                <CardDescription>
                  All your bonus earnings and history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { type: 'Direct Bonus', description: 'New affiliate signup - John Doe', amount: '$120.00', date: 'Apr 28, 2023' },
                    { type: 'Team Bonus', description: 'Level 3 team volume achieved', amount: '$85.50', date: 'Apr 25, 2023' },
                    { type: 'Monthly Bonus', description: 'April 2023 qualification', amount: '$250.00', date: 'Apr 05, 2023' },
                    { type: 'Direct Bonus', description: 'New affiliate signup - Sarah Williams', amount: '$120.00', date: 'Apr 02, 2023' },
                    { type: 'Team Bonus', description: 'Team structure advance', amount: '$45.75', date: 'Mar 28, 2023' },
                  ].map((bonus, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b last:border-b-0 last:pb-0">
                      <div className="mb-2 sm:mb-0">
                        <div className="font-medium">{bonus.type}</div>
                        <div className="text-muted-foreground text-sm">{bonus.description}</div>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="text-green-600 font-medium">{bonus.amount}</span>
                        <span className="text-muted-foreground text-sm">{bonus.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" /> 
                  Achievements & Rewards
                </CardTitle>
                <CardDescription>
                  Track your progress towards various achievements and rewards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { name: 'Silver Level', achieved: true, date: 'January 15, 2023' },
                    { name: 'Gold Level', achieved: false, progress: 70, remaining: '2 more direct referrals' },
                    { name: 'Platinum Level', achieved: false, progress: 35, remaining: '5 more direct referrals and $10,000 team volume' },
                    { name: '10 Direct Referrals', achieved: false, progress: 80, remaining: '2 more referrals' },
                    { name: '$50,000 Team Volume', achieved: false, progress: 60, remaining: '$20,000 more volume' },
                  ].map((achievement, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className={`h-3 w-3 rounded-full ${achievement.achieved ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                          <span className="font-medium">{achievement.name}</span>
                        </div>
                        {achievement.achieved ? (
                          <span className="text-sm text-green-600">Achieved on {achievement.date}</span>
                        ) : (
                          <span className="text-sm text-muted-foreground">{achievement.progress}% Complete</span>
                        )}
                      </div>
                      
                      {!achievement.achieved && (
                        <div className="space-y-1">
                          <Progress value={achievement.progress} className="h-2" />
                          <p className="text-sm text-muted-foreground">
                            {achievement.remaining}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lifestyle">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Landmark className="h-5 w-5" /> 
                  Lifestyle Funds
                </CardTitle>
                <CardDescription>
                  Special bonuses to enhance your lifestyle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-purple-50 to-white border-0">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Landmark className="h-4 w-4" /> 
                          Jewellery Fund
                        </CardTitle>
                        <span className="text-lg font-bold">$1,200</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress value={60} className="h-2 mb-2" />
                      <p className="text-sm text-muted-foreground">60% towards $2,000 goal</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100 via-blue-50 to-white border-0">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Plane className="h-4 w-4" /> 
                          Travel Fund
                        </CardTitle>
                        <span className="text-lg font-bold">$3,500</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress value={70} className="h-2 mb-2" />
                      <p className="text-sm text-muted-foreground">70% towards $5,000 goal</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100 via-yellow-50 to-white border-0">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Car className="h-4 w-4" /> 
                          Car Fund
                        </CardTitle>
                        <span className="text-lg font-bold">$12,500</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress value={25} className="h-2 mb-2" />
                      <p className="text-sm text-muted-foreground">25% towards $50,000 goal</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100 via-green-50 to-white border-0">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Home className="h-4 w-4" /> 
                          House Fund
                        </CardTitle>
                        <span className="text-lg font-bold">$25,000</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress value={10} className="h-2 mb-2" />
                      <p className="text-sm text-muted-foreground">10% towards $250,000 goal</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default EarningsWallet;
