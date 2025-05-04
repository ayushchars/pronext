
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Home } from 'lucide-react';

const Disclaimer = () => {
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
            <h1 className="text-4xl font-bold">Disclaimer</h1>
          </div>
          
          <div className="bg-card rounded-lg shadow-lg p-8">
            <div className="prose prose-invert max-w-none">
              <p>Last Updated: May 4, 2025</p>
              
              <h2>1. General Information</h2>
              <p>
                The information provided on Pro Net Solutions' website, platform, and associated services, including our financial markets platform, fantasy gaming services, and dropshipping solutions (collectively, the "Services") is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information provided.
              </p>
              
              <h2>2. Financial Information Disclaimer</h2>
              <p>
                2.1. <strong>Not Financial Advice</strong>: The trading signals, market analysis, and other financial content provided through our Services do not constitute financial advice, investment advice, trading advice, or any other type of advice. The information is provided for educational and informational purposes only.
              </p>
              <p>
                2.2. <strong>Risk Warning</strong>: Trading in financial markets involves substantial risk of loss and is not suitable for every investor. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose.
              </p>
              <p>
                2.3. <strong>Past Performance</strong>: Past performance of any trading system or methodology is not necessarily indicative of future results. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown.
              </p>
              
              <h2>3. Gaming Services Disclaimer</h2>
              <p>
                3.1. <strong>Age Restriction</strong>: Our fantasy gaming services are strictly for individuals who are 18 years of age or older. It is your responsibility to determine if participating in these services is legal in your jurisdiction.
              </p>
              <p>
                3.2. <strong>Gambling Addiction</strong>: Gambling can be addictive. If you have a gambling problem or know someone who does, please seek help. Various resources are available for those struggling with gambling addiction.
              </p>
              <p>
                3.3. <strong>No Guaranteed Winnings</strong>: We do not guarantee winnings from participating in our fantasy gaming services. All participation is at your own risk.
              </p>
              
              <h2>4. Dropshipping Services Disclaimer</h2>
              <p>
                4.1. <strong>No Guaranteed Income</strong>: We do not guarantee any level of income or success from using our dropshipping solutions. Success in e-commerce depends on various factors, including but not limited to market conditions, your marketing efforts, product selection, and customer service.
              </p>
              <p>
                4.2. <strong>Third-Party Suppliers</strong>: We do not directly manufacture or fulfill products offered through our dropshipping platform. Product quality, shipping times, and other factors are the responsibility of third-party suppliers. While we make efforts to curate reliable suppliers, we cannot guarantee their performance.
              </p>
              
              <h2>5. Affiliate Program Disclaimer</h2>
              <p>
                5.1. <strong>Income Potential</strong>: Any examples of income earned through our affiliate program are not to be considered average earnings. We cannot guarantee that you will make these levels of income, and you accept the risk that earnings and income can vary widely.
              </p>
              <p>
                5.2. <strong>Effort Required</strong>: Success in our affiliate program requires hard work, dedication, and good business skills. You may need to invest time and resources into marketing and building your network.
              </p>
              
              <h2>6. External Links Disclaimer</h2>
              <p>
                Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
              
              <h2>7. Professional Advice</h2>
              <p>
                The information provided through our Services should not be used as a substitute for professional financial, legal, or business advice. If you require expert advice, you should consult with a qualified professional in the relevant field.
              </p>
              
              <h2>8. Changes to This Disclaimer</h2>
              <p>
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on our website. It is your responsibility to review this disclaimer periodically for changes.
              </p>
              
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this disclaimer, please contact us at legal@pronetsolutions.com.
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

export default Disclaimer;
