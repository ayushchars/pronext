
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Home } from 'lucide-react';

const OurServices = () => {
  const navigate = useNavigate();

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
          <div className="space-x-4">
            <Button 
              variant="link" 
              className="text-white" 
              onClick={() => navigate('/')}
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Users className="h-10 w-10 text-[#4CD3C8] mr-3" />
            <h1 className="text-4xl font-bold">Our Services</h1>
          </div>
          
          <div className="space-y-12">
            {/* Financial Markets Service */}
            <section className="bg-card rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-4 text-[#4CD3C8]">Financial Markets</h2>
              <p className="mb-6">
                Our Financial Markets service is designed to help you navigate the complex world of trading and investments. Whether you're a beginner or experienced trader, we provide the tools, education, and community support you need to succeed.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Features</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Professional trading signals with detailed analysis</li>
                    <li>Live market commentary and insights</li>
                    <li>Educational resources and training webinars</li>
                    <li>One-on-one mentorship opportunities</li>
                    <li>Community forums and discussion groups</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Benefits</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Learn to trade with confidence and discipline</li>
                    <li>Build consistent trading strategies</li>
                    <li>Network with successful traders</li>
                    <li>Access to premium indicators and tools</li>
                    <li>Build a passive income through our affiliate program</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className="bg-[#4CD3C8] text-[#1A2A38] hover:bg-[#3cc3b8]"
                  onClick={() => navigate('/signup')}
                >
                  Join Financial Markets
                </Button>
              </div>
            </section>
            
            {/* Fantasy Gaming Service */}
            <section className="bg-card rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-4 text-[#4CD3C8]">Fantasy Gaming & eSports</h2>
              <p className="mb-6">
                Experience the thrill of premium casino games, sports betting, and eSports competitions on our state-of-the-art gaming platform. With seamless deposits and withdrawals, you can enjoy a secure and entertaining gaming experience.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Features</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Wide range of casino games and slots</li>
                    <li>Live sports betting with competitive odds</li>
                    <li>eSports competitions and betting markets</li>
                    <li>Secure payment processing</li>
                    <li>24/7 customer support</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Benefits</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>User-friendly interface for seamless gaming</li>
                    <li>Regular promotions and bonuses</li>
                    <li>Loyalty rewards program</li>
                    <li>Mobile-responsive gaming experience</li>
                    <li>Transparent gaming policies</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className="bg-[#4CD3C8] text-[#1A2A38] hover:bg-[#3cc3b8]"
                  onClick={() => window.open('https://gaming.pronetsolutions.com', '_blank', 'noopener,noreferrer')}
                >
                  Visit Gaming Platform
                </Button>
              </div>
            </section>
            
            {/* Dropshipping Service */}
            <section className="bg-card rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-4 text-[#4CD3C8]">Dropshipping Solutions</h2>
              <p className="mb-6">
                Start your e-commerce journey with our comprehensive dropshipping solutions. We provide everything you need to launch and grow a successful online store without having to manage inventory or shipping logistics.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Features</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Curated collection of high-demand products</li>
                    <li>Seamless Shopify store integration</li>
                    <li>Marketing strategy and support</li>
                    <li>Supply chain management</li>
                    <li>Store optimization and conversion strategies</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Benefits</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Low startup costs and minimal risk</li>
                    <li>No inventory management required</li>
                    <li>Access to reliable suppliers</li>
                    <li>Technical support for your online store</li>
                    <li>Community of successful e-commerce entrepreneurs</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className="bg-[#4CD3C8] text-[#1A2A38] hover:bg-[#3cc3b8]"
                  onClick={() => window.open('https://dropship.pronetsolutions.com', '_blank', 'noopener,noreferrer')}
                >
                  Explore Dropshipping
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#1A2A38] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Pro Net Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OurServices;
