
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const NotFound = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  
  // Determine where to redirect the user based on their authentication status
  const homeLink = isAuthenticated 
    ? (isAdmin ? '/admin' : '/dashboard')
    : '/login';
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-700 dark:text-gray-300">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button className="mt-8" asChild>
        <Link to={homeLink}>Return to Dashboard</Link>
      </Button>
    </div>
  );
};

export default NotFound;
