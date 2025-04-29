
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the appropriate dashboard or login page
    if (isAuthenticated) {
      navigate(isAdmin ? '/admin' : '/dashboard');
    } else {
      navigate('/login');
    }
  }, [isAuthenticated, isAdmin, navigate]);

  // This is just a placeholder while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <img 
            src="/lovable-uploads/1dc005c5-1f18-4598-92dc-030b0afec31f.png" 
            alt="Pro Net Solutions Logo" 
            className="h-20" 
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Pro Net Solutions
        </h1>
        <p className="text-xl text-gray-600">Loading your dashboard...</p>
      </div>
    </div>
  );
};

export default Index;
