
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { User, Lock, Bell, Shield, Smartphone } from 'lucide-react';

// Mock user profile data
const mockUserProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Main St, New York, NY 10001',
  dateJoined: '2023-10-15',
  avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=John%20Doe',
};

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

const initialNotificationSettings: NotificationSetting[] = [
  {
    id: 'email-announcements',
    title: 'Email Announcements',
    description: 'Receive important announcements via email',
    enabled: true,
  },
  {
    id: 'email-commission',
    title: 'Commission Updates',
    description: 'Get notified when you earn commissions',
    enabled: true,
  },
  {
    id: 'email-newsletter',
    title: 'Monthly Newsletter',
    description: 'Receive our monthly newsletter with tips and updates',
    enabled: false,
  },
  {
    id: 'push-announcements',
    title: 'Push Notifications',
    description: 'Receive push notifications for important updates',
    enabled: true,
  },
  {
    id: 'sms-alerts',
    title: 'SMS Alerts',
    description: 'Receive critical alerts via SMS',
    enabled: false,
  },
];

const ProfileSettings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState(mockUserProfile);
  const [notificationSettings, setNotificationSettings] = useState(initialNotificationSettings);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "New password and confirmation password must match.",
        variant: "destructive",
      });
      return;
    }
    
    // Reset form
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    
    toast({
      title: "Password updated",
      description: "Your password has been updated successfully.",
    });
  };

  const toggleNotification = (id: string) => {
    setNotificationSettings(prevSettings =>
      prevSettings.map(setting =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
    
    toast({
      title: "Notification settings updated",
      description: "Your notification preferences have been saved.",
    });
  };

  const handleToggle2FA = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    
    toast({
      title: twoFactorEnabled ? "2FA disabled" : "2FA enabled",
      description: twoFactorEnabled 
        ? "Two-factor authentication has been disabled." 
        : "Two-factor authentication has been enabled.",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold">Profile Settings</h1>
            <p className="text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>
          <Card className="w-full md:w-auto p-4 flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={profile.avatarUrl} />
              <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{profile.name}</p>
              <p className="text-sm text-muted-foreground">{profile.email}</p>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="general">
              <User className="h-4 w-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger value="security">
              <Lock className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={profile.name} 
                        onChange={(e) => setProfile({...profile, name: e.target.value})} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={profile.email} 
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                        readOnly
                        disabled 
                      />
                      <p className="text-xs text-muted-foreground">Contact support to change your email</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        value={profile.phone} 
                        onChange={(e) => setProfile({...profile, phone: e.target.value})} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        value={profile.address} 
                        onChange={(e) => setProfile({...profile, address: e.target.value})} 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="avatar">Profile Picture</Label>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={profile.avatarUrl} />
                        <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <Button type="button" variant="outline">
                        Change Image
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit">Save Changes</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="mt-0 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>
                  Update your password to keep your account secure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input 
                      id="current-password" 
                      type="password" 
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input 
                      id="new-password" 
                      type="password" 
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input 
                      id="confirm-password" 
                      type="password" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" disabled={!currentPassword || !newPassword || !confirmPassword}>
                      Update Password
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>
                  Add an extra layer of security to your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-medium">
                      {twoFactorEnabled ? 'Enabled' : 'Disabled'}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {twoFactorEnabled 
                        ? 'Your account is protected with two-factor authentication.' 
                        : 'Enable two-factor authentication for enhanced security.'}
                    </p>
                  </div>
                  <Switch 
                    checked={twoFactorEnabled} 
                    onCheckedChange={handleToggle2FA} 
                  />
                </div>
                
                {twoFactorEnabled && (
                  <div className="mt-4 p-4 border rounded-md bg-muted/50">
                    <p className="text-sm">
                      Two-factor authentication is enabled. Use an authenticator app to scan the QR code below.
                    </p>
                    <div className="flex justify-center my-4">
                      <div className="w-40 h-40 bg-gray-200 flex items-center justify-center text-xs">
                        [QR Code Placeholder]
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      You can use apps like Google Authenticator or Authy to scan this code.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Device Sessions</CardTitle>
                <CardDescription>
                  Manage your active sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Current Device</p>
                        <p className="text-xs text-muted-foreground">
                          Last active: Just now
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" disabled>This Device</Button>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button variant="destructive">
                      Sign Out of All Devices
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Choose how you want to be notified
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notificationSettings.map(setting => (
                    <div key={setting.id} className="flex items-center justify-between py-2">
                      <div className="space-y-0.5">
                        <div className="font-medium">{setting.title}</div>
                        <div className="text-sm text-muted-foreground">{setting.description}</div>
                      </div>
                      <Switch 
                        checked={setting.enabled} 
                        onCheckedChange={() => toggleNotification(setting.id)} 
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ProfileSettings;
