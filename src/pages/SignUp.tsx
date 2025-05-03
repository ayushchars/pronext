
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { UserPlus, ArrowRight } from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    referralCode: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please ensure both passwords match.",
        variant: "destructive"
      });
      return;
    }
    
    if (!agreed) {
      toast({
        title: "Agreement Required",
        description: "You must agree to the terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    try {
      // In a real app, you'd register the user with an API
      // For demo purposes, we'll simulate success and use the login function
      
      // Simulate a delay for API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Login the user
      await login(formData.email, formData.password);
      
      toast({
        title: "Account created successfully",
        description: "Welcome to Pro Net Solutions!"
      });
      
      // Navigate to the dashboard
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "There was an error creating your account. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <img 
          src="/lovable-uploads/1dc005c5-1f18-4598-92dc-030b0afec31f.png" 
          alt="Pro Net Solutions Logo" 
          className="h-12 mx-auto mb-4" 
        />
        <h1 className="text-3xl font-bold">Join Pro Net Solutions</h1>
        <p className="text-muted-foreground">Create your account to get started</p>
      </div>
      
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Sign Up
          </CardTitle>
          <CardDescription>
            Enter your details to create an account
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone"
                name="phone"
                placeholder="+1 (555) 123-4567"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input 
                id="address"
                name="address"
                placeholder="123 Main St, New York, NY 10001"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="referralCode">Referral Code (Optional)</Label>
              <Input 
                id="referralCode"
                name="referralCode"
                placeholder="Enter referral code if you have one"
                value={formData.referralCode}
                onChange={handleChange}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="agreement"
                className="rounded border-gray-300 text-primary focus:ring-primary"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
              />
              <Label htmlFor="agreement" className="text-sm cursor-pointer">
                I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </Label>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
            
            <div className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
