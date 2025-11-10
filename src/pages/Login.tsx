
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import axios from "axios"
import { redirectBasedOnRole } from '@/hooks/redirect';
import OtpVerificationModal from '@/components/ui/otp-dialog';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [otpModal, setOtpModal] = useState(false);
  

  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();


  useEffect(() => {
    redirectBasedOnRole(navigate);
  }, [navigate]);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/login`, 
      { email, password }
    );
    console.log(response,"SDDSdsds")
    if (response.data) {
      const { token, user } = response.data.data;


      toast({
        title: "Login successful",
        description: `Welcome back, ${user.name}!`,
        variant: "default",
      });

      setOtpModal(true)
 
    } else {
      toast({
        title: "Login failed",
        description: response.data?.message || "Invalid credentials",
        variant: "destructive",
      });
    }
  } catch (error: any) {
    console.error("Login error:", error);
    toast({
      title: "Login failed",
      description: error.response?.data?.message || "Something went wrong",
      variant: "destructive",
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
 <p className="text-sm text-muted-foreground">
    Don’t have an account?{" "}
    <Link to="/signup" className="text-primary hover:underline">
      Sign up
    </Link>
  </p>
          <div className="text-center mt-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-2">Are you an administrator?</p>
            <Link to="/admin-login">
              <Button variant="outline" size="sm" className="w-full">
                Go to Admin Login
              </Button>
            </Link>
          </div>
        </form>
      </div>
        <OtpVerificationModal
        open={otpModal}
        onClose={() => setOtpModal(false)}
        email={email}
      />
    </div>
  );
};

export default Login;
