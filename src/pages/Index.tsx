
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
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-trading-blue">Trade</span>
          <span className="text-trading-purple">Central</span>
        </h1>
        <p className="text-xl text-gray-600">Loading your dashboard...</p>
      </div>
    </div>
  );
};

export default Index;
