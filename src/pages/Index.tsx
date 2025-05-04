
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Performance Bonuses</h3>
              <p className="text-gray-300">
                Qualify for additional monthly bonuses based on team growth and subscription sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Fund Section */}
      <section className="py-16 bg-[#1E2E3C]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Lifestyle Fund
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              See how our members are using their earnings to fund the lifestyle of their dreams.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1A2A38] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" 
                alt="Gold Trading" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#4CD3C8]">Sparkle Through Gold Trading</h3>
                <p className="text-gray-300 mb-4">
                  A smart money move that has proven profitable throughout economic uncertainties.
                </p>
                <Button 
                  className="bg-[#4CD3C8] text-[#1A2A38] hover:bg-[#3cc3b8]"
                  onClick={() => handleNavigation('/signup')}
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-[#1A2A38] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" 
                alt="Travel" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#4CD3C8]">Travel the World on Earnings</h3>
                <p className="text-gray-300 mb-4">
                  Learn how our members use market knowledge to fund their worldly adventures.
                </p>
                <Button 
                  className="bg-[#4CD3C8] text-[#1A2A38] hover:bg-[#3cc3b8]"
                  onClick={() => handleNavigation('/signup')}
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-[#1A2A38] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" 
                alt="Real Estate" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#4CD3C8]">Build Dreams, Brick by Brick</h3>
                <p className="text-gray-300 mb-4">
                  See how our top traders built their real estate portfolios with consistent market wins.
                </p>
                <Button 
                  className="bg-[#4CD3C8] text-[#1A2A38] hover:bg-[#3cc3b8]"
                  onClick={() => handleNavigation('/signup')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get Weekly Market Insights
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Subscribe to our newsletter for free trading tips and market analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-md border border-input"
              />
              <Button className="bg-[#4CD3C8] text-[#1A2A38] hover:bg-[#3cc3b8] px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2A38] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/1dc005c5-1f18-4598-92dc-030b0afec31f.png" 
                  alt="Pro Net Solutions Logo" 
                  className="h-8 mr-2" 
                />
                <span className="text-xl font-bold">Pro Net Solutions</span>
              </div>
              <p className="text-gray-300">
                Empowering dreams and elevating lives through financial education and opportunities.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-[#4CD3C8]">About Us</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-[#4CD3C8]">Our Services</a></li>
                <li><a href="/testimonials" className="text-gray-300 hover:text-[#4CD3C8]">Testimonials</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-[#4CD3C8]">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/terms" className="text-gray-300 hover:text-[#4CD3C8]">Terms of Service</a></li>
                <li><a href="/privacy" className="text-gray-300 hover:text-[#4CD3C8]">Privacy Policy</a></li>
                <li><a href="/refund" className="text-gray-300 hover:text-[#4CD3C8]">Refund Policy</a></li>
                <li><a href="/disclaimer" className="text-gray-300 hover:text-[#4CD3C8]">Disclaimer</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-gray-300">support@pronetsolutions.com</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#4CD3C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-[#4CD3C8] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-gray-300">
                    123 Trading Street<br />
                    Financial District<br />
                    New York, NY 10001
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
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
