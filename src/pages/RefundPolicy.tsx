
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Home } from 'lucide-react';

const RefundPolicy = () => {
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
            <h1 className="text-4xl font-bold">Refund Policy</h1>
          </div>
          
          <div className="bg-card rounded-lg shadow-lg p-8">
            <div className="prose prose-invert max-w-none">
              <p>Last Updated: May 4, 2025</p>
              
              <h2>1. Overview</h2>
              <p>
                At Pro Net Solutions, we strive to ensure your complete satisfaction with our services. This Refund Policy outlines the circumstances under which refunds may be issued for our services, including our financial markets platform, fantasy gaming services, and dropshipping solutions (collectively, the "Services").
              </p>
              
              <h2>2. Subscription Services</h2>
              <h3>2.1. Trial Period</h3>
              <p>
                If you subscribed to our Services with a trial period and decide to cancel within that trial period, you will not be charged. Please note that some trial periods may require payment information upfront, but you will not be charged if you cancel before the trial period ends.
              </p>
              
              <h3>2.2. New Subscriptions</h3>
              <p>
                For new subscriptions, we offer a 7-day money-back guarantee from the date of purchase. If you are not satisfied with our Services for any reason, you may request a full refund within this period.
              </p>
              
              <h3>2.3. Renewal Subscriptions</h3>
              <p>
                For subscription renewals, refunds are generally not provided. However, if you contact us within 24 hours of an automatic renewal charge, we may consider a refund on a case-by-case basis.
              </p>
              
              <h2>3. Financial Markets Services</h2>
              <p>
                Due to the nature of trading signals and financial education services, once you have accessed these materials, refunds will generally not be provided. However, if you have experienced technical issues that prevented access to the services, please contact our support team within 48 hours of purchase.
              </p>
              
              <h2>4. Fantasy Gaming Services</h2>
              <p>
                Deposits made for gaming services are subject to our gaming terms and conditions. Unused deposits may be eligible for refund, subject to processing fees. Wagers that have been placed or completed are not eligible for refunds under any circumstances.
              </p>
              
              <h2>5. Dropshipping Solutions</h2>
              <p>
                For our dropshipping platform subscriptions, the standard 7-day refund policy applies. However, any products ordered through our platform are subject to the individual supplier's refund policy, which may vary.
              </p>
              
              <h2>6. How to Request a Refund</h2>
              <p>To request a refund, please:</p>
              <ol>
                <li>Contact our support team at refunds@pronetsolutions.com</li>
                <li>Include your account email address and order/transaction ID</li>
                <li>Provide the reason for your refund request</li>
                <li>Submit your request within the applicable refund period</li>
              </ol>
              
              <h2>7. Refund Processing</h2>
              <p>
                Once approved, refunds will be processed back to the original payment method used for the purchase. Processing times may vary depending on your payment provider:
              </p>
              <ul>
                <li>Credit/Debit Cards: 5-10 business days</li>
                <li>PayPal: 3-5 business days</li>
                <li>Cryptocurrency: 1-3 business days (may be subject to network confirmation times)</li>
              </ul>
              
              <h2>8. Exceptions</h2>
              <p>We reserve the right to deny refund requests in cases of:</p>
              <ul>
                <li>Suspected fraud or abuse of our refund policy</li>
                <li>Violation of our Terms of Service</li>
                <li>Requests made outside the specified refund periods</li>
                <li>Digital content that has been downloaded or accessed extensively</li>
              </ul>
              
              <h2>9. Changes to This Policy</h2>
              <p>
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. It is your responsibility to review this policy periodically for changes.
              </p>
              
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Refund Policy, please contact us at refunds@pronetsolutions.com.
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

export default RefundPolicy;
