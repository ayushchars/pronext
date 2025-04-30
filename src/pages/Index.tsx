
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import SubscriptionConfirmation from '@/components/subscription/SubscriptionConfirmation';

const Index = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [subscriptionData, setSubscriptionData] = useState({
    plan: 'Standard Plan',
    price: 60.00,
  });

  useEffect(() => {
    // Check for subscription success parameters
    const success = searchParams.get('success');
    const plan = searchParams.get('plan');
    const price = searchParams.get('price');
    
    if (success === 'true' && plan) {
      setSubscriptionData({
        plan: plan === 'standard' ? 'Standard Plan' : 
              plan === 'real-estate-addon' ? 'Real Estate Add-on' : 
              plan === 'dropshipping-addon' ? 'Drop Shipping Add-on' : 
              plan === 'esports-addon' ? 'Esports Add-on' : 
              plan === 'fantasy-gaming-addon' ? 'Fantasy Gaming Add-on' : 'Standard Plan',
        price: price ? parseFloat(price) : 60.00,
      });
      setShowConfirmation(true);
    } else {
      // Redirect to the appropriate dashboard or login page
      if (isAuthenticated) {
        navigate(isAdmin ? '/admin' : '/dashboard');
      } else {
        navigate('/login');
      }
    }
  }, [isAuthenticated, isAdmin, navigate, searchParams]);

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    // Redirect after closing the confirmation dialog
    navigate(isAdmin ? '/admin' : '/dashboard');
  };

  // This is just a placeholder while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A2A38]">
      <SubscriptionConfirmation
        isOpen={showConfirmation}
        onClose={handleCloseConfirmation}
        subscriptionData={subscriptionData}
      />
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <img 
            src="/lovable-uploads/1dc005c5-1f18-4598-92dc-030b0afec31f.png" 
            alt="Pro Net Solutions Logo" 
            className="h-20" 
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-[#4CD3C8]">
          Pro Net Solutions
        </h1>
        <p className="text-xl text-white">Loading your dashboard...</p>
      </div>
    </div>
  );
};

export default Index;
