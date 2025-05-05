
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { HelpCircle, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleNavigation = (path: string) => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate(path);
    }
  };

  const handleExternalNavigation = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[#1A2A38] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/1dc005c5-1f18-4598-92dc-030b0afec31f.png" 
              alt="Pro Net Solutions Logo" 
              className="h-8 mr-2" 
            />
            <span className="text-xl font-bold">Pro Net Solutions</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <Button 
              variant="link" 
              className="text-white" 
              onClick={() => navigate('/about')}
            >
              About Us
            </Button>
            <Button 
              variant="link" 
              className="text-white" 
              onClick={() => navigate('/services')}
            >
              Our Services
            </Button>
            <Button 
              variant="link" 
              className="text-white" 
              onClick={() => navigate('/testimonials')}
            >
              Testimonials
            </Button>
            <Button 
              variant="link" 
              className="text-white" 
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
            <Button 
              variant="link" 
              className="text-white" 
              onClick={() => navigate('/faq')}
            >
              <HelpCircle className="mr-1 h-4 w-4" />
              FAQ
            </Button>
          </div>
          <div className="space-x-4">
            <Button 
              variant="link" 
              className="text-white" 
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
            <Button 
              className="bg-[#4CD3C8] text-[#1A2A38] hover:bg-[#3cc3b8]"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1964&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        <div className="hero-gradient absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-5xl font-bold text-white leading-tight mb-6">
              Pro Net Solutions - Multi-Service Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our diverse range of services - Financial Markets, Fantasy Gaming, and Dropshipping Solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Selection Section */}
      <section className="py-16 bg-[#1E2E3C]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Select the service that matches your needs and goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Financial Markets Service */}
            <div className="bg-[#1A2A38] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Financial Markets" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#4CD3C8] mb-2">Financial Markets</h3>
                <p className="text-gray-300 mb-6">
                  Access premium trading signals, expert mentorship, and build a passive income through our financial markets platform.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="bg-[#4CD3C8]/20 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-300">Trading signals & analysis</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#4CD3C8]/20 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-300">Expert mentorship</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#4CD3C8]/20 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-300">Affiliate earnings</p>
                  </div>
                </div>
                <Button 
                  className="bg-[#4CD3C8] text-[#1A2A38] hover:bg-[#3cc3b8] w-full"
                  onClick={() => handleNavigation('/signup')}
                >
                  Access Financial Services
                </Button>
              </div>
            </div>
            
            {/* Fantasy Gaming Service */}
            <div className="bg-[#1A2A38] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Fantasy Gaming & eSports" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#4CD3C8] mb-2">Fantasy Gaming & eSports</h3>
                <p className="text-gray-300 mb-6">
                  Experience premium casino games, live sports betting, eSports competitions and more on our gaming platform.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="bg-[#4CD3C8]/20 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-300">Casino games & slots</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#4CD3C8]/20 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-300">Sports & eSports betting</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#4CD3C8]/20 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-300">Easy deposits & withdrawals</p>
                  </div>
                </div>
                <Button 
                  className="bg-[#4CD3C8] text-[#1A2A38] hover:bg-[#3cc3b8] w-full"
                  onClick={() => handleExternalNavigation('https://gaming.pronetsolutions.com')}
                >
                  Visit Gaming Platform
                </Button>
              </div>
            </div>
            
            {/* Dropshipping Service */}
            <div className="bg-[#1A2A38] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Dropshipping Solutions" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#4CD3C8] mb-2">Dropshipping Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Start your e-commerce journey with our curated collection of products, tools, and Shopify integration.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="bg-[#4CD3C8]/20 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-300">Curated product collection</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#4CD3C8]/20 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-300">Shopify integration</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#4CD3C8]/20 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-300">Marketing support</p>
                  </div>
                </div>
                <Button 
                  className="bg-[#4CD3C8] text-[#1A2A38] hover:bg-[#3cc3b8] w-full"
                  onClick={() => handleExternalNavigation('https://dropship.pronetsolutions.com')}
                >
                  Explore Dropshipping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Alert Providers Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Alert Providers You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our network of experienced traders deliver accurate and timely signals that have been proven to generate consistent profits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg shadow-md p-6 text-center feature-card">
              <div className="w-16 h-16 bg-[#4CD3C8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Forex Signals</h3>
              <p className="text-muted-foreground">
                Access precise entry and exit points for major currency pairs with 85%+ accuracy.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6 text-center feature-card">
              <div className="w-16 h-16 bg-[#4CD3C8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Crypto Analysis</h3>
              <p className="text-muted-foreground">
                Stay ahead of the volatile crypto market with our trend predictions and signal alerts.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow-md p-6 text-center feature-card">
              <div className="w-16 h-16 bg-[#4CD3C8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Stock Insights</h3>
              <p className="text-muted-foreground">
                Receive detailed analysis and buy/sell recommendations for top-performing stocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16 bg-[#1A2A38]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Learn From Industry Experts
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our mentors have decades of combined experience in trading and network marketing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1E2E3C] rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Mentor" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">James Wilson</h3>
                <p className="text-sm text-[#4CD3C8] mb-4">Forex Trading Expert</p>
                <p className="text-gray-300">
                  With over 15 years of experience in forex trading, James has helped thousands of traders master the markets.
                </p>
              </div>
            </div>
            
            <div className="bg-[#1E2E3C] rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Mentor" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Sarah Johnson</h3>
                <p className="text-sm text-[#4CD3C8] mb-4">Network Marketing Specialist</p>
                <p className="text-gray-300">
                  Sarah has built multiple six-figure income streams through affiliate marketing and network building.
                </p>
              </div>
            </div>
            
            <div className="bg-[#1E2E3C] rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Mentor" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Michael Chang</h3>
                <p className="text-sm text-[#4CD3C8] mb-4">Crypto Investment Advisor</p>
                <p className="text-gray-300">
                  Michael's crypto portfolio strategies have generated returns exceeding 400% for his clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">
                Join Our Thriving Community
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Connect with like-minded individuals who are committed to financial freedom and personal growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-[#4CD3C8]/20 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="font-medium">Daily market analysis and discussion</p>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#4CD3C8]/20 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="font-medium">Weekly live training sessions and Q&A</p>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#4CD3C8]/20 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="font-medium">Networking opportunities with successful traders</p>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#4CD3C8]/20 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="font-medium">Exclusive access to our private community forum</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" 
                alt="Community" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Section */}
      <section className="py-16 bg-[#1A2A38]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Multiple Income Streams
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Diversify your earnings through our comprehensive compensation plan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1E2E3C] rounded-lg p-6 shadow-lg animate-fade-in">
              <div className="w-12 h-12 bg-[#4CD3C8]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Commissions</h3>
              <p className="text-gray-300">
                Earn up to 10% commission on all direct referrals who subscribe to any of our plans.
              </p>
            </div>
            
            <div className="bg-[#1E2E3C] rounded-lg p-6 shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-[#4CD3C8]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Team Overrides</h3>
              <p className="text-gray-300">
                Earn residual income from your entire team's performance down to 5 levels deep.
              </p>
            </div>
            
            <div className="bg-[#1E2E3C] rounded-lg p-6 shadow-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-12 h-12 bg-[#4CD3C8]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Passive Income</h3>
              <p className="text-gray-300">
                Create a sustainable income stream that continues to grow even when you're not actively working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2A38] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Pro Net Solutions</h3>
              <p className="text-gray-300 mb-4">
                Your gateway to financial freedom through multiple income streams.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-white hover:text-[#4CD3C8]">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://instagram.com" className="text-white hover:text-[#4CD3C8]">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://twitter.com" className="text-white hover:text-[#4CD3C8]">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://linkedin.com" className="text-white hover:text-[#4CD3C8]">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://youtube.com" className="text-white hover:text-[#4CD3C8]">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Button 
                    variant="link" 
                    className="text-gray-300 hover:text-white p-0"
                    onClick={() => navigate('/about')}
                  >
                    About Us
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="link" 
                    className="text-gray-300 hover:text-white p-0"
                    onClick={() => navigate('/services')}
                  >
                    Our Services
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="link" 
                    className="text-gray-300 hover:text-white p-0"
                    onClick={() => navigate('/testimonials')}
                  >
                    Testimonials
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="link" 
                    className="text-gray-300 hover:text-white p-0"
                    onClick={() => navigate('/faq')}
                  >
                    FAQ
                  </Button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Button 
                    variant="link" 
                    className="text-gray-300 hover:text-white p-0"
                    onClick={() => navigate('/terms')}
                  >
                    Terms of Service
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="link" 
                    className="text-gray-300 hover:text-white p-0"
                    onClick={() => navigate('/privacy')}
                  >
                    Privacy Policy
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="link" 
                    className="text-gray-300 hover:text-white p-0"
                    onClick={() => navigate('/refund')}
                  >
                    Refund Policy
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="link" 
                    className="text-gray-300 hover:text-white p-0"
                    onClick={() => navigate('/disclaimer')}
                  >
                    Disclaimer
                  </Button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <Button
                variant="link" 
                className="text-gray-300 hover:text-white p-0 mb-4 block"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
              <p className="text-gray-300">support@pronetsolutions.com</p>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Pro Net Solutions. All rights reserved.</p>
            <div className="space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-400 hover:text-white"
                onClick={() => navigate('/faq')}
              >
                <HelpCircle className="mr-1 h-4 w-4" />
                Help
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
