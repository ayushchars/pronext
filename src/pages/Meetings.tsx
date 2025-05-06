
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Calendar, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';

// Mock data for meetings
const upcomingMeetings = [
  { 
    id: 'M001', 
    title: 'Monthly Team Update', 
    date: '2025-05-15T10:00:00', 
    duration: 60,
    host: 'Admin User',
    type: 'group',
    link: 'https://meet.google.com/abc-defg-hij'
  },
  { 
    id: 'M002', 
    title: 'Onboarding Call: New Affiliates', 
    date: '2025-05-16T14:30:00', 
    duration: 45,
    host: 'Admin User',
    type: 'group',
    link: 'https://meet.google.com/klm-nopq-rst'
  },
  { 
    id: 'M004', 
    title: 'Product Update Training', 
    date: '2025-05-20T11:00:00', 
    duration: 60,
    host: 'Admin User',
    type: 'webinar',
    link: 'https://meet.google.com/456-789-abc'
  }
];

const pastMeetings = [
  { 
    id: 'M003', 
    title: 'Strategy Discussion with Top Performers', 
    date: '2025-05-10T09:00:00', 
    duration: 90,
    host: 'Admin User',
    type: 'private',
    link: 'https://meet.google.com/uvw-xyz-123'
  },
  { 
    id: 'M005', 
    title: 'New Bonus Structure Review', 
    date: '2025-05-05T15:00:00', 
    duration: 30,
    host: 'Admin User',
    type: 'group',
    link: 'https://meet.google.com/def-ghi-jkl'
  },
];

// Format meeting date and time
const formatMeetingDateTime = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "MMM d, yyyy 'at' h:mm a");
};

const Meetings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Meetings</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingMeetings.length > 0 ? (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Join</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingMeetings.map((meeting) => (
                      <TableRow key={meeting.id}>
                        <TableCell className="font-medium">{meeting.title}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            {formatMeetingDateTime(meeting.date)}
                          </div>
                        </TableCell>
                        <TableCell>{meeting.duration} min</TableCell>
                        <TableCell>
                          <Badge variant={meeting.type === 'webinar' ? 'secondary' : 'outline'}>
                            {meeting.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <a 
                            href={meeting.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-primary hover:underline"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Join
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-10 text-muted-foreground">
                No upcoming meetings scheduled
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Past Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            {pastMeetings.length > 0 ? (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastMeetings.map((meeting) => (
                      <TableRow key={meeting.id}>
                        <TableCell className="font-medium">{meeting.title}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            {formatMeetingDateTime(meeting.date)}
                          </div>
                        </TableCell>
                        <TableCell>{meeting.duration} min</TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {meeting.type}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-10 text-muted-foreground">
                No past meetings found
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Meetings;
