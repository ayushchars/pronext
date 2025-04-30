
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      
      toast({
        title: 'Login successful',
        description: 'Welcome back to the dashboard.',
        variant: 'default',
      });
      
      // Redirect based on login credentials
      if (email === 'admin@example.com') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      toast({
        title: 'Login failed',
        description: 'Please check your credentials and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A2A38]">
      <div className="max-w-md w-full p-8 bg-card text-card-foreground rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <img 
              src="/lovable-uploads/1dc005c5-1f18-4598-92dc-030b0afec31f.png" 
              alt="Pro Net Solutions Logo" 
              className="h-16"
            />
          </div>
          <h1 className="text-2xl font-bold text-card-foreground">
            Pro Net Solutions
          </h1>
          <p className="text-muted-foreground mt-2">
            Login to your affiliate dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <a 
                href="#" 
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div>
            <Button
              type="submit"
              className="w-full btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>
              For demo purposes: Use <span className="font-semibold">admin@example.com</span> or <span className="font-semibold">affiliate@example.com</span> with any password
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
