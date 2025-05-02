
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LayoutDashboard, TargetIcon, FileText, Users, Globe, Mail, Instagram, Youtube, Facebook } from 'lucide-react';

const Index = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-[#1A2A38] text-white">
      {/* Header/Navigation */}
      <header className="bg-[#1A2A38]/90 backdrop-blur-sm border-b border-border/20 fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/1dc005c5-1f18-4598-92dc-030b0afec31f.png" 
              alt="PRO NET Solutions" 
              className="h-8 mr-2" 
            />
            <span className="text-xl font-bold text-white">Pro Net Solutions</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-white hover:text-primary transition-colors">Services</a>
            <a href="#" className="text-white hover:text-primary transition-colors">Articles</a>
            <a href="#" className="text-white hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <Button 
                onClick={() => navigate('/dashboard')}
                className="bg-primary text-white hover:bg-primary/90"
              >
                Dashboard
              </Button>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-primary hover:bg-transparent"
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
                <Button 
                  className="bg-primary text-white hover:bg-primary/90"
                  onClick={() => navigate('/login?signup=true')}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative pt-32 pb-20 min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26, 42, 56, 0.8), rgba(26, 42, 56, 0.95)), url('/lovable-uploads/d1a85572-d92b-476a-81af-3f6effa84fcb.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Empowering Dreams, <span className="text-[#4CD3C8]">Elevating Lives!</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300">
            Succeed in the fast-paced financial markets with Pro Net Solutions' expert guidance. Achieve financial independence through cutting-edge technology and education.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#223143] rounded-full">
              <span className="w-3 h-3 bg-[#4CD3C8] rounded-full"></span>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#223143] rounded-full">
              <span className="w-3 h-3 bg-[#4CD3C8] rounded-full"></span>
              <span>Premium Education</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#223143] rounded-full">
              <span className="w-3 h-3 bg-[#4CD3C8] rounded-full"></span>
              <span>Expert Guidance</span>
            </div>
          </div>
          <Button 
            className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6"
            onClick={() => handleNavigation('/dashboard')}
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Alert Providers Section */}
      <section className="py-16 bg-[#1A2A38]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4CD3C8]">
            ALERT PROVIDERS: GAINING AN EDGE IN THE MARKETS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#223143] p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-[#1A2A38] p-4 rounded-md">
                  <LayoutDashboard className="text-[#4CD3C8] h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center uppercase text-[#4CD3C8]">PROFITABLE WITH PATIENCE</h3>
              <p className="text-center mb-4 text-gray-300">
                Stay focused on long-term success with strategic investments.
              </p>
              <p className="text-center mb-4 text-gray-300">
                Our team of experienced traders guides you through market analysis.
              </p>
              <p className="text-center mb-4 text-gray-300">
                We assist in identifying opportunities consistently.
              </p>
              <div className="text-center">
                <Button variant="link" className="text-[#4CD3C8]">Learn More</Button>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-[#223143] p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-[#1A2A38] p-4 rounded-md">
                  <TargetIcon className="text-[#4CD3C8] h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center uppercase text-[#4CD3C8]">ACCURATE ANALYSIS</h3>
              <p className="text-center mb-4 text-gray-300">
                Timely, actionable data insights for smarter investment decisions daily.
              </p>
              <p className="text-center mb-4 text-gray-300">
                Our advanced analytics tools help you spot opportunities others miss.
              </p>
              <p className="text-center mb-4 text-gray-300">
                Visual data that's intuitive and quick to understand.
              </p>
              <div className="text-center">
                <Button variant="link" className="text-[#4CD3C8]">Learn More</Button>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-[#223143] p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-[#1A2A38] p-4 rounded-md">
                  <FileText className="text-[#4CD3C8] h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center uppercase text-[#4CD3C8]">EXPERT KNOWLEDGE</h3>
              <p className="text-center mb-4 text-gray-300">
                Access cutting-edge market insights from industry leaders.
              </p>
              <p className="text-center mb-4 text-gray-300">
                Comprehensive educational resources help you build up your expertise.
              </p>
              <p className="text-center mb-4 text-gray-300">
                Learn trading strategies that work in any market condition.
              </p>
              <div className="text-center">
                <Button variant="link" className="text-[#4CD3C8]">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-[#4CD3C8] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/lovable-uploads/796c2510-a8a2-47f5-9127-81950f4dc7fa.png" 
                alt="Pro Net Solutions Dashboard" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-[#1A2A38]">
                Access Premium Trading Resources
              </h2>
              <p className="text-lg mb-6 text-[#1A2A38]">
                Join our community to get exclusive access to professional trading signals, educational content, and mentorship from industry experts.
              </p>
              <Button 
                className="bg-[#1A2A38] text-white hover:bg-[#223143]"
                onClick={() => handleNavigation('/subscriptions')}
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16 bg-[#1A2A38]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#4CD3C8]">
            Mentorship That Guides You Forward
          </h2>
          <p className="text-center mb-12 text-gray-300 max-w-3xl mx-auto">
            Our experienced mentors are here to educate, enhance, and elevate your financial journey. Learn from the experts that guide marketers daily.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mentor 1 */}
            <div className="bg-[#223143] p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Thomas Richardson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Thomas Richardson</h3>
              <p className="text-[#4CD3C8] mb-4">Forex Strategist</p>
              <p className="text-gray-300 mb-4">
                "Personalized financial strategies designed to maximize potential in dynamic markets."
              </p>
              <p className="text-gray-300">
                15+ years in forex market coaching with proven success for thousands of traders.
              </p>
            </div>
            
            {/* Mentor 2 */}
            <div className="bg-[#223143] p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
              <p className="text-[#4CD3C8] mb-4">Gold Market Analyst</p>
              <p className="text-gray-300 mb-4">
                "Your profits are our sole focus. We succeed when you succeed."
              </p>
              <p className="text-gray-300">
                Bullion market expert with a track record of identifying key market trends before they emerge.
              </p>
            </div>
            
            {/* Mentor 3 */}
            <div className="bg-[#223143] p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/67.jpg" 
                  alt="Michael Taylor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Michael Taylor</h3>
              <p className="text-[#4CD3C8] mb-4">Crypto Trader</p>
              <p className="text-gray-300 mb-4">
                "Deeply understand your goals to craft a perfect investment approach."
              </p>
              <p className="text-gray-300">
                Blockchain enthusiast who has guided hundreds of investors through the volatile crypto landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Community Can Earn Section */}
      <section className="py-16 bg-[#1A2A38]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4CD3C8]">
            Our Community Can Earn: Multiple Avenues for Growth
          </h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {/* Avenue 1 */}
            <div className="bg-[#223143] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-[#4CD3C8]">Using Our Products & Services</h3>
              <p className="text-gray-300">
                Practical education allows traders to identify patterns, signals, and market strategies to enhance trading profitability.
              </p>
            </div>
            
            {/* Avenue 2 */}
            <div className="bg-[#223143] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-[#4CD3C8]">Promoting Our Services</h3>
              <p className="text-gray-300">
                Earn commissions by sharing Pro Net's valuable insights with others who can benefit.
              </p>
            </div>
            
            {/* Avenue 3 */}
            <div className="bg-[#223143] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-[#4CD3C8]">Growing Your Portfolio</h3>
              <p className="text-gray-300">
                Learn to trade, grow assets, and develop the skills needed to achieve financial growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Funds Section */}
      <section className="py-16 bg-[#1A2A38]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4CD3C8]">
            LIFESTYLE FUNDS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fund 1 */}
            <div className="bg-[#223143] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=1976&auto=format&fit=crop" 
                alt="Gold Bars" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sparkle Through Gold Trading</h3>
                <p className="text-gray-300 mb-4">
                  A smart money move that has proven profitable throughout economic uncertainties.
                </p>
                <Button variant="link" className="text-[#4CD3C8] px-0">Read More →</Button>
              </div>
            </div>
            
            {/* Fund 2 */}
            <div className="bg-[#223143] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2069&auto=format&fit=crop" 
                alt="Beach" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Travel the World on Earnings</h3>
                <p className="text-gray-300 mb-4">
                  Learn how our members use market knowledge to fund their worldly adventures.
                </p>
                <Button variant="link" className="text-[#4CD3C8] px-0">Read More →</Button>
              </div>
            </div>
            
            {/* Fund 3 */}
            <div className="bg-[#223143] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop" 
                alt="City Skyline" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Build Dreams, Brick by Brick</h3>
                <p className="text-gray-300 mb-4">
                  See how our top traders built their real estate portfolios with consistent market wins.
                </p>
                <Button variant="link" className="text-[#4CD3C8] px-0">Read More →</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#1A2A38]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#4CD3C8]">
            Subscribe to our Newsletter!
          </h2>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-[#223143] border-[#2c3e50] text-white"
              />
              <Button className="bg-[#4CD3C8] ml-2 text-[#1A2A38] hover:bg-[#4CD3C8]/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#223143] py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/1dc005c5-1f18-4598-92dc-030b0afec31f.png" 
              alt="Pro Net Solutions Logo" 
              className="h-10" 
            />
          </div>
          
          <p className="text-center text-gray-400 mb-8">
            Pro Net Solutions provides users access to digital market resources and investment education.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#4CD3C8]">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#4CD3C8]">Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#4CD3C8]">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#4CD3C8]">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#4CD3C8]">Trading Signals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#4CD3C8]">Education</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#4CD3C8]">Mentorship</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#4CD3C8]">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#4CD3C8]">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#4CD3C8]">Terms of Use</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#4CD3C8]">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#4CD3C8]">Legal Disclaimer</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">support@pronetsolutions.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <a href="#" className="bg-[#1A2A38] p-2 rounded-full hover:bg-[#4CD3C8] transition-colors">
              <Facebook className="h-5 w-5 text-white" />
            </a>
            <a href="#" className="bg-[#1A2A38] p-2 rounded-full hover:bg-[#4CD3C8] transition-colors">
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a href="#" className="bg-[#1A2A38] p-2 rounded-full hover:bg-[#4CD3C8] transition-colors">
              <Mail className="h-5 w-5 text-white" />
            </a>
          </div>
          
          <div className="text-center text-gray-500 border-t border-gray-700 pt-8">
            <p>Copyright © {new Date().getFullYear()} Pro Net Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
