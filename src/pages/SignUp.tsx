import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
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
import { useToast } from '@/hooks/use-toast';
import { UserPlus } from 'lucide-react';
import OtpVerificationModal from '@/components/ui/otp-dialog';
import { redirectBasedOnRole } from '@/hooks/redirect';

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [otpModal, setOtpModal] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
    Phone: '',
    Address: '',
    ReferralCode: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  

  useEffect(() => {
    redirectBasedOnRole(navigate);
  }, [navigate]);

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
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/register`, {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        password: formData.password,
        Phone: formData.Phone,
        Address: formData.Address,
        ReferralCode: formData.ReferralCode
      });

      if (response.data?.status === 1) {
        toast({
          title: "Please Verify your Otp",
          description: "Welcome to Pro Net Solutions!"
        });
        setOtpModal(true)
        
      } else {
        toast({
          title: "Registration failed",
          description: response.data?.message || "Unable to register user.",
          variant: "destructive"
        });
      }
    } catch (error: any) {
      console.error("Registration error:", error);
      toast({
        title: "Registration failed",
        description: error.response?.data?.message || "Something went wrong.",
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
                <Label htmlFor="fname">First Name</Label>
                <Input 
                  id="fname"
                  name="fname"
                  placeholder="John"
                  required
                  value={formData.fname}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lname">Last Name</Label>
                <Input 
                  id="lname"
                  name="lname"
                  placeholder="Doe"
                  required
                  value={formData.lname}
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
              <Label htmlFor="Phone">Phone Number</Label>
              <Input 
                id="Phone"
                name="Phone"
                placeholder="+1 (555) 123-4567"
                required
                value={formData.Phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="Address">Address</Label>
              <Input 
                id="Address"
                name="Address"
                placeholder="123 Main St, New York, NY 10001"
                required
                value={formData.Address}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ReferralCode">Referral Code (Optional)</Label>
              <Input 
                id="ReferralCode"
                name="ReferralCode"
                placeholder="Enter referral code if you have one"
                value={formData.ReferralCode}
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
       <OtpVerificationModal
        open={otpModal}
        onClose={() => setOtpModal(false)}
        email={formData.email}
      />
    </div>
  );
};

export default SignUp;
