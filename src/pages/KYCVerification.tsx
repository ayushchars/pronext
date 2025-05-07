
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { 
  FileCheck, 
  Upload, 
  ShieldCheck, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  Shield 
} from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const KYCVerification = () => {
  // In a real app, this would come from API or context
  const [kycStatus, setKycStatus] = useState<'not_submitted' | 'pending' | 'verified' | 'rejected'>('not_submitted');
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File | null}>({
    idProof: null,
    addressProof: null,
    photo: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFiles(prev => ({
        ...prev,
        [type]: e.target.files![0]
      }));
    }
  };

  const simulateUploadProgress = () => {
    setProgress(0);
    setIsSubmitting(true);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSubmitting(false);
          setKycStatus('pending');
          toast({
            title: "Documents Submitted",
            description: "Your KYC documents have been submitted for verification.",
          });
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all files are uploaded
    const allFilesUploaded = Object.values(uploadedFiles).every(file => file !== null);
    
    if (!allFilesUploaded) {
      toast({
        title: "Missing Documents",
        description: "Please upload all required documents.",
        variant: "destructive",
      });
      return;
    }
    
    simulateUploadProgress();
  };

  const renderKYCContent = () => {
    switch(kycStatus) {
      case 'not_submitted':
        return (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="idProof">Government ID Proof</Label>
                <div className="mt-1 flex items-center gap-4">
                  <Input 
                    id="idProof" 
                    type="file"
                    accept="image/png, image/jpeg, application/pdf" 
                    onChange={(e) => handleFileChange(e, 'idProof')} 
                    disabled={isSubmitting}
                  />
                  {uploadedFiles.idProof && (
                    <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      <FileCheck className="mr-1 h-3 w-3" /> Selected
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">Upload a clear copy of your passport, national ID, or driver's license</p>
              </div>
              
              <div>
                <Label htmlFor="addressProof">Proof of Address</Label>
                <div className="mt-1 flex items-center gap-4">
                  <Input 
                    id="addressProof" 
                    type="file"
                    accept="image/png, image/jpeg, application/pdf" 
                    onChange={(e) => handleFileChange(e, 'addressProof')}
                    disabled={isSubmitting}
                  />
                  {uploadedFiles.addressProof && (
                    <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      <FileCheck className="mr-1 h-3 w-3" /> Selected
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">Upload a utility bill, bank statement, or official letter not older than 3 months</p>
              </div>
              
              <div>
                <Label htmlFor="photo">Recent Photograph</Label>
                <div className="mt-1 flex items-center gap-4">
                  <Input 
                    id="photo" 
                    type="file" 
                    accept="image/png, image/jpeg"
                    onChange={(e) => handleFileChange(e, 'photo')}
                    disabled={isSubmitting}
                  />
                  {uploadedFiles.photo && (
                    <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      <FileCheck className="mr-1 h-3 w-3" /> Selected
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">Upload a recent clear photo of yourself</p>
              </div>
              
              {isSubmitting && (
                <div className="space-y-2">
                  <Progress value={progress} />
                  <p className="text-sm text-center text-muted-foreground">Uploading documents... {progress}%</p>
                </div>
              )}
              
              <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Uploading...' : 'Submit Documents'}
                </Button>
              </div>
            </div>
          </form>
        );
        
      case 'pending':
        return (
          <div className="flex flex-col items-center py-6">
            <div className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 p-3 rounded-full mb-4">
              <Clock className="h-12 w-12" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Verification in Progress</h2>
            <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
              Pending Review
            </Badge>
            <p className="text-center mb-6 max-w-md">
              Your documents have been received and are currently under review by our team. 
              This process typically takes 1-3 business days.
            </p>
            <div className="w-full max-w-md">
              <div className="bg-muted p-4 rounded-md text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Submission Date:</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Completion:</span>
                  <span className="font-medium">
                    {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="mt-6"
              onClick={() => setKycStatus('verified')} // For demo only - would be handled by backend in real app
            >
              Check Status
            </Button>
          </div>
        );
        
      case 'verified':
        return (
          <div className="flex flex-col items-center py-6">
            <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 p-3 rounded-full mb-4">
              <ShieldCheck className="h-12 w-12" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Verification Complete</h2>
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
              Verified
            </Badge>
            <p className="text-center mb-6 max-w-md">
              Your identity has been successfully verified. You now have full access to all platform features.
            </p>
            <div className="w-full max-w-md">
              <div className="bg-muted p-4 rounded-md text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Verification Date:</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Verification ID:</span>
                  <span className="font-medium">KYC-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Valid Until:</span>
                  <span className="font-medium">
                    {new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex mt-6 gap-4">
              <Button variant="outline" className="gap-2">
                <FileText className="h-4 w-4" />
                Download Certificate
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => setKycStatus('rejected')} // For demo only
              >
                <Shield className="h-4 w-4" />
                View Details
              </Button>
            </div>
          </div>
        );
        
      case 'rejected':
        return (
          <div className="flex flex-col items-center py-6">
            <div className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 p-3 rounded-full mb-4">
              <AlertCircle className="h-12 w-12" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Verification Failed</h2>
            <Badge variant="destructive" className="mb-4">
              Rejected
            </Badge>
            <p className="text-center mb-6 max-w-md">
              Your verification was unsuccessful due to issues with the submitted documents. 
              Please review the feedback below and resubmit with the correct documents.
            </p>
            <div className="w-full max-w-md mb-6">
              <div className="bg-destructive/10 p-4 rounded-md text-sm space-y-2 border border-destructive/20">
                <h3 className="font-semibold">Issues with your submission:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>The ID document provided is not clearly visible</li>
                  <li>The address proof document is more than 3 months old</li>
                  <li>The face in the photograph is partially obscured</li>
                </ul>
              </div>
            </div>
            
            <Button 
              onClick={() => setKycStatus('not_submitted')} // For demo only
            >
              Resubmit Documents
            </Button>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">KYC Verification</h1>
          <KYCStatusBadge status={kycStatus} />
        </div>
        
        <Tabs defaultValue="verification" className="space-y-4">
          <TabsList>
            <TabsTrigger value="verification">Verification</TabsTrigger>
            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="verification" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Identity Verification</CardTitle>
                <CardDescription>
                  Complete your KYC verification to unlock all platform features and expedite withdrawals
                </CardDescription>
              </CardHeader>
              <CardContent>
                {renderKYCContent()}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="guidelines" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Document Guidelines</CardTitle>
                <CardDescription>
                  Follow these guidelines to ensure your verification is processed quickly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Government ID</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Must be a valid, non-expired government-issued photo ID</li>
                      <li>Acceptable documents: passport, national ID card, driver's license</li>
                      <li>All corners of the document must be visible</li>
                      <li>All text must be clearly readable</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Proof of Address</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Must be issued within the last 3 months</li>
                      <li>Must show your full name and current address</li>
                      <li>Acceptable documents: utility bill, bank statement, official government letter</li>
                      <li>Electronic statements are acceptable if they contain all required information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Photo Requirements</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Must be a recent photo (taken within the last 6 months)</li>
                      <li>Face must be clearly visible with no sunglasses or head coverings (except for religious purposes)</li>
                      <li>Plain background preferred</li>
                      <li>Good lighting conditions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Verification History</CardTitle>
                <CardDescription>
                  Review your previous verification attempts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {kycStatus !== 'not_submitted' && (
                    <div className="border rounded-md p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {kycStatus === 'verified' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                        {kycStatus === 'pending' && <Clock className="h-5 w-5 text-amber-500" />}
                        {kycStatus === 'rejected' && <XCircle className="h-5 w-5 text-red-500" />}
                        <div>
                          <p className="font-medium">KYC Submission</p>
                          <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</p>
                        </div>
                      </div>
                      <Badge
                        className={kycStatus === 'verified' ? "bg-green-100 text-green-800" : 
                                 kycStatus === 'pending' ? "bg-amber-100 text-amber-800" : 
                                 "bg-red-100 text-red-800"}
                      >
                        {kycStatus === 'verified' ? 'Approved' : 
                         kycStatus === 'pending' ? 'In Review' : 
                         'Rejected'}
                      </Badge>
                    </div>
                  )}
                  
                  {kycStatus === 'not_submitted' && (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>No verification history found</p>
                      <p className="text-sm">Submit your documents to get started</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-base">Why is KYC verification required?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              KYC (Know Your Customer) verification helps us prevent fraud, comply with regulations, and ensure a safe platform for all users. 
              Your identity information is securely stored and protected in accordance with our privacy policy.
            </p>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" size="sm" className="text-xs">
              View Privacy Policy
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

// Helper component to show KYC status badge
const KYCStatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case 'verified':
      return (
        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
          <ShieldCheck className="mr-1 h-3 w-3" /> Verified
        </Badge>
      );
    case 'pending':
      return (
        <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
          <Clock className="mr-1 h-3 w-3" /> In Review
        </Badge>
      );
    case 'rejected':
      return (
        <Badge variant="destructive">
          <AlertCircle className="mr-1 h-3 w-3" /> Verification Failed
        </Badge>
      );
    default:
      return (
        <Badge variant="outline">
          <Upload className="mr-1 h-3 w-3" /> Not Submitted
        </Badge>
      );
  }
};

export default KYCVerification;
