
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Shield } from 'lucide-react';
import axios from 'axios';
import { redirectBasedOnRole } from '@/hooks/redirect';
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAdmin, user } = useAuth();
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
      "http://localhost:5000/api/login", 
      { email, password }
    );
    if (response.data) {
      const { token, user } = response.data.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      toast({
        title: "Login successful",
        description: `Welcome back, ${user.name}!`,
        variant: "default",
      });

      if (user.role === "Admin") {
        navigate("/admin");
      } else {
           toast({
        title: "You are not  admin",
        description: `Please go to user Login!`,
        variant: "default",
      });

      }
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
            <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-card-foreground">
            Admin Panel Access
          </h1>
          <p className="text-muted-foreground mt-2">
            Enter your credentials to access the admin dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Admin Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-secondary border-input"
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
              className="w-full bg-secondary border-input"
            />
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Admin Login"}
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
