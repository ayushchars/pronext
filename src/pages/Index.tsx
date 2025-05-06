
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A2A38] text-white">
      {/* Hero section */}
      <header className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Pro Net Solutions</h1>
              <p className="text-xl md:text-2xl text-[#4CD3C8] mb-8">
                The Future of Affiliate Marketing & Network Growth
              </p>
              <p className="text-lg mb-8 opacity-80">
                Join our platform to expand your network, increase your earnings, and access exclusive tools for affiliate success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/login">
                  <button className="bg-[#4CD3C8] hover:bg-[#3BA89E] text-white font-bold py-3 px-6 rounded-md">
                    Login as Affiliate
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-transparent hover:bg-white/10 border border-white text-white font-bold py-3 px-6 rounded-md">
                    Join Now
                  </button>
                </Link>
                <Link to="/admin-login">
                  <button className="bg-[#1A2A38] hover:bg-[#2C3E50] text-white font-bold py-3 px-6 rounded-md border border-[#4CD3C8]">
                    Admin Login
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src="/lovable-uploads/796c2510-a8a2-47f5-9127-81950f4dc7fa.png" 
                alt="Pro Net Solutions Dashboard Preview" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Pro Net Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card p-6 rounded-lg shadow-md bg-[#2C3E50] hover:bg-[#34495E]">
              <h3 className="text-xl font-bold mb-4">Advanced Tools</h3>
              <p className="text-gray-300">Access cutting-edge tools and resources to optimize your affiliate campaigns.</p>
            </div>
            <div className="feature-card p-6 rounded-lg shadow-md bg-[#2C3E50] hover:bg-[#34495E]">
              <h3 className="text-xl font-bold mb-4">Extensive Network</h3>
              <p className="text-gray-300">Connect with a vast network of affiliates and industry leaders to expand your reach.</p>
            </div>
            <div className="feature-card p-6 rounded-lg shadow-md bg-[#2C3E50] hover:bg-[#34495E]">
              <h3 className="text-xl font-bold mb-4">Dedicated Support</h3>
              <p className="text-gray-300">Receive personalized support and guidance from our team of experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-16 bg-[#2C3E50]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-md bg-[#34495E] hover:bg-[#4A6572]">
              <h3 className="text-xl font-bold mb-4">Affiliate Marketing</h3>
              <p className="text-gray-300">Maximize your earnings through our high-converting affiliate programs.</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-[#34495E] hover:bg-[#4A6572]">
              <h3 className="text-xl font-bold mb-4">Network Growth</h3>
              <p className="text-gray-300">Expand your network and build valuable connections with like-minded professionals.</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-[#34495E] hover:bg-[#4A6572]">
              <h3 className="text-xl font-bold mb-4">Exclusive Tools</h3>
              <p className="text-gray-300">Utilize our exclusive tools and resources to gain a competitive edge in the market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4 text-[#4CD3C8]">About Us</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white">Our Story</Link></li>
                <li><Link to="/testimonials" className="text-gray-300 hover:text-white">Testimonials</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4 text-[#4CD3C8]">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-gray-300 hover:text-white">Our Services</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4 text-[#4CD3C8]">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/dashboard" className="text-gray-300 hover:text-white">Affiliate Dashboard</Link></li>
                <li><Link to="/admin" className="text-gray-300 hover:text-white">Admin Portal</Link></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4 text-[#4CD3C8]">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/refund" className="text-gray-300 hover:text-white">Refund Policy</Link></li>
                <li><Link to="/disclaimer" className="text-gray-300 hover:text-white">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A2A38] py-8 text-center border-t border-gray-800">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Pro Net Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
