
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Star, Home } from 'lucide-react';

const Testimonials = () => {
  const navigate = useNavigate();
  
  const testimonials = [
    {
      name: "David Chen",
      role: "Financial Markets Member",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      content: "The trading signals provided by Pro Net Solutions have completely transformed my approach to the markets. I've been following their forex signals for 6 months and have seen consistent growth in my portfolio. The educational resources are outstanding and the community support is invaluable.",
      rating: 5
    },
    {
      name: "Jessica Williams",
      role: "Dropshipping Partner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      content: "Starting my e-commerce store was daunting until I discovered Pro Net Solutions. Their dropshipping platform made everything so simple - from product selection to store setup. Within two months, I was generating consistent sales. Their team is responsive and always available to help troubleshoot any issues.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "Gaming Platform User",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      content: "The gaming platform is top-notch with excellent odds and a user-friendly interface. What sets it apart is the transparency and quick withdrawals. I've tried several platforms before, but Pro Net Solutions provides the best overall experience. The customer support team is also very helpful.",
      rating: 4
    },
    {
      name: "Sophia Garcia",
      role: "Network Marketing Affiliate",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      content: "The affiliate program has allowed me to build a sustainable passive income. The compensation structure is fair, and the team provides excellent marketing materials to help grow my network. In just one year, I've managed to replace my full-time income. Forever grateful to the Pro Net Solutions team!",
      rating: 5
    },
    {
      name: "Robert Johnson",
      role: "Forex Signals Subscriber",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      content: "As someone who was skeptical about signal services, I can confidently say that Pro Net Solutions has changed my perspective. Their signals are accurate, timely, and come with detailed explanations. The weekly training sessions have also significantly improved my trading skills.",
      rating: 5
    },
    {
      name: "Emily Wu",
      role: "E-Commerce Store Owner",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      content: "The product selection in their dropshipping platform is extensive and of high quality. My customers love the products, resulting in minimal returns. The Shopify integration is seamless, and their marketing guidance helped me scale my store much faster than I expected.",
      rating: 4
    }
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-[#4CD3C8] text-[#4CD3C8]" />);
    }
    return stars;
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
            <h1 className="text-4xl font-bold">Testimonials</h1>
          </div>
          
          <p className="text-lg mb-8">
            Don't just take our word for it. Here's what our members and partners have to say about their experience with Pro Net Solutions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-16 w-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-[#4CD3C8]">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="mb-4 italic">"{testimonial.content}"</p>
                
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="mb-6">
              Experience the benefits that thousands of satisfied members enjoy every day.
            </p>
            <Button 
              className="bg-[#4CD3C8] text-[#1A2A38] hover:bg-[#3cc3b8]"
              onClick={() => navigate('/signup')}
            >
              Get Started Today
            </Button>
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

export default Testimonials;
