
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, TrendingUp, DollarSign, BarChart3, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0E1624] text-white">
      {/* Navigation */}
      <nav className="bg-[#1A2A38] py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/1dc005c5-1f18-4598-92dc-030b0afec31f.png" 
              alt="Pro Net Solutions Logo" 
              className="h-8 mr-2" 
            />
            <span className="text-xl font-bold">Pro Net Solutions</span>
          </div>
          <div className="flex gap-4">
            <Link to="/login" className="text-white hover:text-[#4CD3C8]">Login</Link>
            <Link to="/signup">
              <Button className="bg-[#4CD3C8] hover:bg-[#3CC3B8] text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 relative bg-[#0E1624]" style={{
        backgroundImage: "url('/lovable-uploads/b79b643b-85b5-4c32-afea-e0a3d2c61abc.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(14, 22, 36, 0.85)'
      }}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Pro Net Solutions - Multi-Service Platform
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-300">
            Choose from our diverse range of services - Financial Markets, Fantasy Gaming, and Dropshipping Solutions.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 bg-[#0E1624]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Select the service that matches your needs and goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Financial Markets */}
            <Card className="bg-[#1A2A38] border-0 overflow-hidden">
              <img 
                src="/lovable-uploads/f45804db-92eb-4f1b-9c00-8e2596c32221.png" 
                alt="Financial Markets" 
                className="w-full h-52 object-cover" 
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#4CD3C8]">Financial Markets</h3>
                <p className="text-gray-300 mb-6">
                  Access premium trading signals, expert mentorship, and build a passive income through our financial markets platform.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-[#4CD3C8]" />
                    <span>Trading signals & analysis</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-[#4CD3C8]" />
                    <span>Expert mentorship</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-[#4CD3C8]" />
                    <span>Affiliate earnings</span>
                  </div>
                </div>
                <Button className="w-full bg-[#4CD3C8] hover:bg-[#3CC3B8] text-[#1A2A38] font-bold">
                  Access Financial Services
                </Button>
              </CardContent>
            </Card>

            {/* Fantasy Gaming & eSports */}
            <Card className="bg-[#1A2A38] border-0 overflow-hidden">
              <img 
                src="/lovable-uploads/449cbb3b-5597-4a2e-a9fb-44f0a0dc059a.png" 
                alt="Fantasy Gaming & eSports" 
                className="w-full h-52 object-cover" 
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#4CD3C8]">Fantasy Gaming & eSports</h3>
                <p className="text-gray-300 mb-6">
                  Experience premium casino games, live sports betting, eSports competitions and more on our gaming platform.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-[#4CD3C8]" />
                    <span>Casino games & slots</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-[#4CD3C8]" />
                    <span>Sports & eSports betting</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-[#4CD3C8]" />
                    <span>Easy deposits & withdrawals</span>
                  </div>
                </div>
                <Button className="w-full bg-[#4CD3C8] hover:bg-[#3CC3B8] text-[#1A2A38] font-bold">
                  Visit Gaming Platform
                </Button>
              </CardContent>
            </Card>

            {/* Dropshipping Solutions */}
            <Card className="bg-[#1A2A38] border-0 overflow-hidden">
              <img 
                src="/lovable-uploads/507fa9de-7582-4b77-a24e-72f3a80ef637.png" 
                alt="Dropshipping Solutions" 
                className="w-full h-52 object-cover" 
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#4CD3C8]">Dropshipping Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Start your e-commerce journey with our curated collection of products, tools, and Shopify integration.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-[#4CD3C8]" />
                    <span>Curated product collection</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-[#4CD3C8]" />
                    <span>Shopify integration</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-[#4CD3C8]" />
                    <span>Marketing support</span>
                  </div>
                </div>
                <Button className="w-full bg-[#4CD3C8] hover:bg-[#3CC3B8] text-[#1A2A38] font-bold">
                  Explore Dropshipping
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alert Providers Section */}
      <section className="py-16 bg-[#1A2A38]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Alert Providers You Can Trust</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our network of experienced traders deliver accurate and timely signals that have been proven to generate consistent profits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Forex Signals */}
            <div className="bg-[#0E1624] p-8 rounded-lg text-center">
              <div className="bg-[#1A2A38] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-[#4CD3C8]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Forex Signals</h3>
              <p className="text-gray-300">
                Access precise entry and exit points for major currency pairs with 85%+ accuracy.
              </p>
            </div>

            {/* Crypto Analysis */}
            <div className="bg-[#0E1624] p-8 rounded-lg text-center">
              <div className="bg-[#1A2A38] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-10 w-10 text-[#4CD3C8]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Crypto Analysis</h3>
              <p className="text-gray-300">
                Stay ahead of the volatile crypto market with our trend predictions and signal alerts.
              </p>
            </div>

            {/* Stock Insights */}
            <div className="bg-[#0E1624] p-8 rounded-lg text-center">
              <div className="bg-[#1A2A38] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-10 w-10 text-[#4CD3C8]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Stock Insights</h3>
              <p className="text-gray-300">
                Receive detailed analysis and buy/sell recommendations for top-performing stocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experts Section */}
      <section className="py-16 bg-[#0E1624]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Learn From Industry Experts</h2>
            <p className="text-xl text-gray-300">
              Our mentors have decades of combined experience in trading and network marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expert 1 */}
            <Card className="bg-[#1A2A38] border-0 overflow-hidden">
              <img 
                src="/lovable-uploads/561a3e79-6879-40c5-9a77-ccc5a70eb52e.png" 
                alt="James Wilson" 
                className="w-full h-52 object-cover object-top" 
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-1">James Wilson</h3>
                <p className="text-[#4CD3C8] mb-4">Forex Trading Expert</p>
                <p className="text-gray-300">
                  With over 15 years of experience in forex trading, James has helped thousands of traders master the markets.
                </p>
              </CardContent>
            </Card>

            {/* Expert 2 */}
            <Card className="bg-[#1A2A38] border-0 overflow-hidden">
              <img 
                src="/lovable-uploads/3ad44ef9-5321-42a6-bf72-03b8e9f28de2.png" 
                alt="Sarah Johnson" 
                className="w-full h-52 object-cover object-top" 
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-[#4CD3C8] mb-4">Network Marketing Specialist</p>
                <p className="text-gray-300">
                  Sarah has built multiple six-figure income streams through affiliate marketing and network building.
                </p>
              </CardContent>
            </Card>

            {/* Expert 3 */}
            <Card className="bg-[#1A2A38] border-0 overflow-hidden">
              <img 
                src="/lovable-uploads/3243cc5d-1204-4af5-8efc-0ef8c0323b6c.png" 
                alt="Michael Chang" 
                className="w-full h-52 object-cover object-top" 
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-1">Michael Chang</h3>
                <p className="text-[#4CD3C8] mb-4">Crypto Investment Advisor</p>
                <p className="text-gray-300">
                  Michael's crypto portfolio strategies have generated returns exceeding 400% for his clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-[#1A2A38]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Join Our Thriving Community</h2>
              <p className="text-xl text-gray-300 mb-8">
                Connect with like-minded individuals who are committed to financial freedom and personal growth.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-[#0E1624] rounded-full h-10 w-10 flex items-center justify-center mr-3">
                    <Check className="h-5 w-5 text-[#4CD3C8]" />
                  </div>
                  <span>Daily market analysis and discussion</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#0E1624] rounded-full h-10 w-10 flex items-center justify-center mr-3">
                    <Check className="h-5 w-5 text-[#4CD3C8]" />
                  </div>
                  <span>Weekly live training sessions and Q&A</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#0E1624] rounded-full h-10 w-10 flex items-center justify-center mr-3">
                    <Check className="h-5 w-5 text-[#4CD3C8]" />
                  </div>
                  <span>Networking opportunities with successful traders</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#0E1624] rounded-full h-10 w-10 flex items-center justify-center mr-3">
                    <Check className="h-5 w-5 text-[#4CD3C8]" />
                  </div>
                  <span>Exclusive access to our private community forum</span>
                </div>
              </div>
              
              <Link to="/signup">
                <Button className="bg-[#4CD3C8] hover:bg-[#3CC3B8] text-[#1A2A38] font-bold px-8 py-3 text-lg">
                  Join Now
                </Button>
              </Link>
            </div>
            
            <div>
              <img 
                src="/lovable-uploads/3ad44ef9-5321-42a6-bf72-03b8e9f28de2.png" 
                alt="Community" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Income Streams Section */}
      <section className="py-16 bg-[#0E1624]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Multiple Income Streams</h2>
            <p className="text-xl text-gray-300">
              Diversify your earnings through our comprehensive compensation plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Income Stream 1 */}
            <div className="bg-[#1A2A38] p-8 rounded-lg">
              <div className="bg-[#0E1624] rounded-full h-16 w-16 flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-[#4CD3C8]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Direct Commissions</h3>
              <p className="text-gray-300">
                Earn up to 10% commission on all direct referrals who subscribe to any of our plans.
              </p>
            </div>

            {/* Income Stream 2 */}
            <div className="bg-[#1A2A38] p-8 rounded-lg">
              <div className="bg-[#0E1624] rounded-full h-16 w-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-[#4CD3C8]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Team Overrides</h3>
              <p className="text-gray-300">
                Earn residual income from your entire team's performance down to 5 levels deep.
              </p>
            </div>

            {/* Income Stream 3 */}
            <div className="bg-[#1A2A38] p-8 rounded-lg">
              <div className="bg-[#0E1624] rounded-full h-16 w-16 flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-[#4CD3C8]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Performance Bonuses</h3>
              <p className="text-gray-300">
                Qualify for additional monthly bonuses based on team growth and subscription sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Fund Section */}
      <section className="py-16 bg-[#1A2A38]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Lifestyle Fund</h2>
            <p className="text-xl text-gray-300">
              See how our members are using their earnings to fund the lifestyle of their dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lifestyle 1 */}
            <Card className="bg-[#0E1624] border-0 overflow-hidden text-center">
              <img 
                src="/lovable-uploads/1dc005c5-1f18-4598-92dc-030b0afec31f.png" 
                alt="Gold Trading" 
                className="w-full h-52 object-cover" 
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#4CD3C8]">Sparkle Through Gold Trading</h3>
                <p className="text-gray-300 mb-6">
                  A smart money move that has proven profitable throughout economic uncertainties.
                </p>
                <Button className="bg-[#4CD3C8] hover:bg-[#3CC3B8] text-[#1A2A38]">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Lifestyle 2 */}
            <Card className="bg-[#0E1624] border-0 overflow-hidden text-center">
              <img 
                src="/lovable-uploads/1dc005c5-1f18-4598-92dc-030b0afec31f.png" 
                alt="Travel the World" 
                className="w-full h-52 object-cover" 
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#4CD3C8]">Travel the World on Earnings</h3>
                <p className="text-gray-300 mb-6">
                  Learn how our members use market knowledge to fund their worldly adventures.
                </p>
                <Button className="bg-[#4CD3C8] hover:bg-[#3CC3B8] text-[#1A2A38]">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Lifestyle 3 */}
            <Card className="bg-[#0E1624] border-0 overflow-hidden text-center">
              <img 
                src="/lovable-uploads/1dc005c5-1f18-4598-92dc-030b0afec31f.png" 
                alt="Real Estate" 
                className="w-full h-52 object-cover" 
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#4CD3C8]">Build Dreams, Brick by Brick</h3>
                <p className="text-gray-300 mb-6">
                  See how our top traders built their real estate portfolios with consistent market wins.
                </p>
                <Button className="bg-[#4CD3C8] hover:bg-[#3CC3B8] text-[#1A2A38]">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0E1624]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join Pro Net Solutions today and gain access to our premium services, expert mentorship, and thriving community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-[#4CD3C8] hover:bg-[#3CC3B8] text-[#1A2A38] font-bold px-8 py-3 text-lg">
                Create Your Account
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-[#4CD3C8] text-[#4CD3C8] hover:bg-[#4CD3C8] hover:text-[#1A2A38] font-bold px-8 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2A38] py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-[#4CD3C8]">About Us</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-[#4CD3C8]">Our Story</Link></li>
                <li><Link to="/testimonials" className="text-gray-300 hover:text-[#4CD3C8]">Testimonials</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-[#4CD3C8]">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-[#4CD3C8]">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-gray-300 hover:text-[#4CD3C8]">Our Services</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-[#4CD3C8]">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-[#4CD3C8]">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/dashboard" className="text-gray-300 hover:text-[#4CD3C8]">Affiliate Dashboard</Link></li>
                <li><Link to="/admin" className="text-gray-300 hover:text-[#4CD3C8]">Admin Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-[#4CD3C8]">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-300 hover:text-[#4CD3C8]">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-[#4CD3C8]">Privacy Policy</Link></li>
                <li><Link to="/refund" className="text-gray-300 hover:text-[#4CD3C8]">Refund Policy</Link></li>
                <li><Link to="/disclaimer" className="text-gray-300 hover:text-[#4CD3C8]">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Pro Net Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
