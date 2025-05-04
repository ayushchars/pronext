
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Home } from 'lucide-react';

const TermsOfService = () => {
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
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>
          
          <div className="bg-card rounded-lg shadow-lg p-8">
            <div className="prose prose-invert max-w-none">
              <p>Last Updated: May 4, 2025</p>
              
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services offered by Pro Net Solutions, including but not limited to our financial markets platform, fantasy gaming services, and dropshipping solutions (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
              </p>
              
              <h2>2. Eligibility</h2>
              <p>
                You must be at least 18 years old and able to form legally binding contracts to use our Services. By accessing or using our Services, you represent and warrant that you meet these requirements. If you are using the Services on behalf of a business entity, you represent and warrant that you have the authority to bind that entity to these Terms.
              </p>
              
              <h2>3. Account Registration</h2>
              <p>
                To access certain features of our Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account credentials and for any activities or actions under your account. We reserve the right to disable any user account at any time if we believe that you have violated these Terms.
              </p>
              
              <h2>4. Financial Markets Services</h2>
              <p>
                4.1. <strong>Trading Signals and Analysis</strong>: Our trading signals and analysis are provided for informational purposes only and do not constitute financial advice. All trading decisions should be made independently, and you are solely responsible for any trades you execute.
              </p>
              <p>
                4.2. <strong>Risk Disclosure</strong>: Trading in financial markets involves significant risk and may not be suitable for all investors. The value of investments can go down as well as up, and you may lose more than your initial investment. Past performance is not indicative of future results.
              </p>
              
              <h2>5. Fantasy Gaming Services</h2>
              <p>
                5.1. <strong>Compliance with Laws</strong>: You are responsible for ensuring that your participation in our fantasy gaming services is legal in your jurisdiction. We do not guarantee the legality of our services in your location.
              </p>
              <p>
                5.2. <strong>Responsible Gaming</strong>: We promote responsible gaming. You are responsible for managing your gaming activity and ensuring it does not negatively impact your financial situation or well-being.
              </p>
              
              <h2>6. Dropshipping Services</h2>
              <p>
                6.1. <strong>Product Quality</strong>: While we curate products for our dropshipping platform, we do not guarantee the quality or suitability of these products for any specific purpose.
              </p>
              <p>
                6.2. <strong>Business Success</strong>: We do not guarantee success in e-commerce or dropshipping. Your results may vary based on multiple factors including but not limited to market conditions, marketing efforts, and customer service.
              </p>
              
              <h2>7. Payments and Subscriptions</h2>
              <p>
                7.1. <strong>Fees</strong>: You agree to pay all fees associated with the Services you select. All fees are non-refundable unless explicitly stated otherwise.
              </p>
              <p>
                7.2. <strong>Subscription Services</strong>: Subscription Services will automatically renew at the end of each subscription period unless you cancel your subscription before the renewal date.
              </p>
              
              <h2>8. Intellectual Property</h2>
              <p>
                All content on our platform, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of Pro Net Solutions or its content suppliers and is protected by international copyright laws.
              </p>
              
              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Pro Net Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use or inability to use the service.
              </p>
              
              <h2>10. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              
              <h2>11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
              </p>
              
              <h2>12. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <h2>13. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at legal@pronetsolutions.com.
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

export default TermsOfService;
