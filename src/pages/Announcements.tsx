
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Bell, Globe, Star } from 'lucide-react';

// Sample announcement data
const announcements = [
  {
    id: 1,
    title: 'New Commission Structure',
    content: 'We are excited to announce our updated commission structure which rewards affiliates with higher percentages. This change will be effective from January 1st.',
    date: '2025-03-20T10:30:00Z',
    category: 'important',
    read: false,
  },
  {
    id: 2,
    title: 'Platform Maintenance',
    content: 'Our platform will undergo scheduled maintenance on April 5th, from 1:00 AM to 3:00 AM UTC. There might be brief periods of downtime during this window.',
    date: '2025-03-15T08:15:00Z',
    category: 'system',
    read: true,
  },
  {
    id: 3,
    title: 'New Product Launch',
    content: 'We are launching a new product line next month. Join our webinar on April 10th to learn more about the products and how to promote them effectively.',
    date: '2025-03-10T14:45:00Z',
    category: 'promotion',
    read: false,
  },
  {
    id: 4,
    title: 'Updates to Affiliate Terms',
    content: 'Please review our updated affiliate terms and conditions. These changes will be effective starting May 1st.',
    date: '2025-03-05T11:20:00Z',
    category: 'important',
    read: true,
  },
  {
    id: 5,
    title: 'Holiday Schedule',
    content: 'Our support team will have limited availability during the upcoming holidays. Please check the schedule for more details.',
    date: '2025-03-01T09:00:00Z',
    category: 'general',
    read: true,
  },
];

const AnnouncementCard = ({ announcement, onToggleRead }: { 
  announcement: any;
  onToggleRead: (id: number) => void;
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'important':
        return <Star className="h-5 w-5 text-yellow-500" />;
      case 'system':
        return <Globe className="h-5 w-5 text-blue-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'important':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'system':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'promotion':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <Card className={`mb-4 overflow-hidden ${!announcement.read ? 'border-l-4 border-primary' : ''}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {getCategoryIcon(announcement.category)}
            <CardTitle className="text-lg">{announcement.title}</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getCategoryColor(announcement.category)}>
              {announcement.category.charAt(0).toUpperCase() + announcement.category.slice(1)}
            </Badge>
            {!announcement.read && (
              <Badge variant="destructive">New</Badge>
            )}
          </div>
        </div>
        <CardDescription className="text-sm">
          {formatDate(announcement.date)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{announcement.content}</p>
        <div className="flex justify-end">
          <button 
            className="text-xs text-primary hover:underline"
            onClick={() => onToggleRead(announcement.id)}
          >
            Mark as {announcement.read ? 'unread' : 'read'}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const Announcements = () => {
  const [announcementsList, setAnnouncementsList] = useState(announcements);

  const toggleReadStatus = (id: number) => {
    setAnnouncementsList(prevList => 
      prevList.map(item => 
        item.id === id ? { ...item, read: !item.read } : item
      )
    );
  };

  const unreadAnnouncements = announcementsList.filter(a => !a.read);
  const allAnnouncements = [...announcementsList];
  
  // Sort by date (newest first)
  allAnnouncements.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-1">Announcements</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Stay updated with the latest news and announcements
        </p>
      </div>

      <Tabs defaultValue="unread" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="unread">
            Unread {unreadAnnouncements.length > 0 && `(${unreadAnnouncements.length})`}
          </TabsTrigger>
          <TabsTrigger value="all">All Announcements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="unread" className="mt-0">
          {unreadAnnouncements.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-gray-500">No unread announcements</p>
            </Card>
          ) : (
            unreadAnnouncements.map(announcement => (
              <AnnouncementCard 
                key={announcement.id} 
                announcement={announcement} 
                onToggleRead={toggleReadStatus}
              />
            ))
          )}
        </TabsContent>
        
        <TabsContent value="all" className="mt-0">
          {allAnnouncements.map(announcement => (
            <AnnouncementCard 
              key={announcement.id} 
              announcement={announcement} 
              onToggleRead={toggleReadStatus}
            />
          ))}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Announcements;
