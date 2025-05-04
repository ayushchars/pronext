
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Info, Home } from 'lucide-react';

const AboutUs = () => {
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
            <Info className="h-10 w-10 text-[#4CD3C8] mr-3" />
            <h1 className="text-4xl font-bold">About Us</h1>
          </div>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="mb-4">
                Pro Net Solutions was founded in 2018 with a simple vision: to create a multi-service platform that empowers individuals to achieve financial freedom through various income streams. What started as a small group of traders sharing signals has evolved into a comprehensive ecosystem offering financial market education, fantasy gaming, and e-commerce solutions.
              </p>
              <p>
                Our founder, having experienced the challenges of building wealth in traditional markets, set out to create a platform where knowledge, tools, and community come together to create opportunities for everyone, regardless of their background or starting point.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p>
                At Pro Net Solutions, our mission is to democratize financial opportunities by providing accessible, educational, and profitable services. We believe in the power of community, transparent information sharing, and sustainable growth strategies. Our goal is to help individuals build multiple streams of income while developing valuable skills that last a lifetime.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Team</h2>
              <p className="mb-6">
                Our team consists of experienced professionals from diverse backgrounds including trading, network marketing, e-commerce, and software development. This cross-disciplinary expertise allows us to deliver holistic solutions that address real-world challenges.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Team Member" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold">James Wilson</h3>
                    <p className="text-sm text-[#4CD3C8]">CEO & Founder</p>
                  </div>
                </div>
                
                <div className="bg-card rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Team Member" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-[#4CD3C8]">Director of Network Marketing</p>
                  </div>
                </div>
                
                <div className="bg-card rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Team Member" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold">Michael Chang</h3>
                    <p className="text-sm text-[#4CD3C8]">Head of Trading</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Integrity:</strong> We conduct our business with honesty, transparency, and accountability.</li>
                <li><strong>Education:</strong> We believe in empowering our community through practical knowledge and skills.</li>
                <li><strong>Community:</strong> We foster a supportive environment where members help each other succeed.</li>
                <li><strong>Innovation:</strong> We continuously explore new opportunities and solutions for our community.</li>
                <li><strong>Excellence:</strong> We strive for the highest quality in all our products and services.</li>
              </ul>
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

export default AboutUs;
