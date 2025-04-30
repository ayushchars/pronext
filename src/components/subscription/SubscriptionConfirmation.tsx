
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PartyPopper } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface SubscriptionConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  subscriptionData: {
    plan: string;
    price: number;
  };
}

const SubscriptionConfirmation: React.FC<SubscriptionConfirmationProps> = ({
  isOpen,
  onClose,
  subscriptionData
}) => {
  const { user } = useAuth();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-[#1A2A38] text-white border-none sm:max-w-[500px] p-8">
        <div className="text-center">
          <DialogHeader className="space-y-2">
            <div className="flex items-center justify-center mb-4">
              <PartyPopper className="h-6 w-6 text-[#4CD3C8] mr-2" />
              <DialogTitle className="text-2xl font-bold text-[#4CD3C8]">Congratulations, {user?.name?.split(' ')[0] || 'Affiliate'}!</DialogTitle>
            </div>
            <DialogDescription className="text-white text-lg">
              You have successfully subscribed to Pro Net Solutions.
              <p className="mt-2">Your subscription is now active.</p>
            </DialogDescription>
          </DialogHeader>
          
          <div className="my-6 pt-4 border-t border-gray-600">
            <div className="space-y-3">
              <p className="flex justify-between">
                <span className="text-gray-300">Subscription Amount:</span>
                <span className="font-semibold">${subscriptionData.price}</span>
              </p>
              
              <p className="flex justify-between">
                <span className="text-gray-300">Email:</span>
                <span className="font-semibold">{user?.email || 'user@example.com'}</span>
              </p>
              
              <p className="flex justify-between">
                <span className="text-gray-300">Phone:</span>
                <span className="font-semibold">{user?.phone || 'Not provided'}</span>
              </p>
            </div>
          </div>
          
          <Button 
            onClick={onClose}
            className="w-full bg-[#2CBFB1] hover:bg-[#25A69A] text-white font-medium py-2 px-4 rounded"
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionConfirmation;
