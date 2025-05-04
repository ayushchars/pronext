
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Home } from 'lucide-react';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[#1A2A38] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/1dc005c5-1f18-4598-92dc-030b0afec31f.png" 
              alt="Pro Net Solutions Logo" 
              className="h-8 mr-2" 
            />
            <span className="text-xl font-bold">Pro Net Solutions</span>
          </div>
          <div className="space-x-4">
            <Button 
              variant="link" 
              className="text-white" 
              onClick={() => navigate('/')}
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <FileText className="h-10 w-10 text-[#4CD3C8] mr-3" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          
          <div className="bg-card rounded-lg shadow-lg p-8">
            <div className="prose prose-invert max-w-none">
              <p>Last Updated: May 4, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                Pro Net Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our financial markets platform, fantasy gaming services, and dropshipping solutions (collectively, the "Services").
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
              
              <h2>2. Information We Collect</h2>
              <h3>2.1. Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul>
                <li>Contact information (e.g., name, email address, phone number)</li>
                <li>Account information (e.g., username, password)</li>
                <li>Financial information (e.g., payment details, transaction history)</li>
                <li>Identity verification information (e.g., date of birth, government ID)</li>
                <li>Demographic information (e.g., age, gender)</li>
              </ul>
              
              <h3>2.2. Non-Personal Information</h3>
              <p>We may also collect non-personal information, including:</p>
              <ul>
                <li>Device information (e.g., device type, operating system)</li>
                <li>Usage data (e.g., pages visited, time spent on site)</li>
                <li>IP address and browser type</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including:</p>
              <ul>
                <li>Providing and maintaining our Services</li>
                <li>Processing transactions and managing your account</li>
                <li>Verifying your identity and preventing fraud</li>
                <li>Communicating with you about our Services</li>
                <li>Improving our Services and developing new features</li>
                <li>Complying with legal obligations</li>
                <li>Marketing and promotional purposes (with your consent)</li>
              </ul>
              
              <h2>4. How We Share Your Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Service providers who perform services on our behalf</li>
                <li>Financial institutions and payment processors to facilitate transactions</li>
                <li>Business partners for joint marketing efforts (with your consent)</li>
                <li>Legal authorities when required by law</li>
                <li>Other parties in connection with a merger, acquisition, or sale of assets</li>
              </ul>
              
              <h2>5. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2>6. Your Rights and Choices</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul>
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Objecting to or restricting certain processing activities</li>
                <li>Withdrawing consent for processing where applicable</li>
                <li>Requesting a copy of your personal information</li>
                <li>Opting out of marketing communications</li>
              </ul>
              
              <h2>7. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have different data protection laws. We will take appropriate measures to ensure that your personal information remains protected.
              </p>
              
              <h2>8. Children's Privacy</h2>
              <p>
                Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.
              </p>
              
              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at privacy@pronetsolutions.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#1A2A38] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Pro Net Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
