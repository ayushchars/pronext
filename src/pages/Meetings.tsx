
import React, { useState, useRef, useEffect } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Users, 
  MessageSquare, 
  Calendar, 
  Clock, 
  Plus, 
  Share2, 
  Settings,
  Copy
} from 'lucide-react';

// Mock scheduled meetings data
const scheduledMeetings = [
  {
    id: 'm1',
    title: 'Team Strategy Discussion',
    description: 'Monthly meeting to discuss sales strategy and team performance',
    date: '2025-04-30T14:30:00Z',
    duration: 60, // minutes
    participants: ['john@example.com', 'sarah@example.com', 'mark@example.com'],
    joinUrl: 'https://zoom.us/j/123456789',
    host: 'You',
  },
  {
    id: 'm2',
    title: 'Product Training Session',
    description: 'Training on new product features for affiliates',
    date: '2025-05-02T10:00:00Z',
    duration: 90, // minutes
    participants: ['team@example.com'],
    joinUrl: 'https://zoom.us/j/987654321',
    host: 'Sarah Johnson',
  },
  {
    id: 'm3',
    title: 'Q1 Performance Review',
    description: 'Review of Q1 performance and goal setting for Q2',
    date: '2025-05-05T16:00:00Z',
    duration: 45, // minutes
    participants: ['john@example.com', 'admin@example.com'],
    joinUrl: 'https://zoom.us/j/555666777',
    host: 'Admin',
  },
];

// Mock active meeting data (for when a user joins a meeting)
const mockActiveMeeting = {
  id: 'live-1',
  title: 'Team Strategy Discussion',
  participants: [
    { id: 'p1', name: 'You', isHost: true, videoOn: true, micOn: true },
    { id: 'p2', name: 'Sarah Johnson', isHost: false, videoOn: true, micOn: false },
    { id: 'p3', name: 'Mark Williams', isHost: false, videoOn: false, micOn: true },
  ],
  chatMessages: [
    { id: 'c1', sender: 'Sarah Johnson', message: 'Hi everyone, thanks for joining!', time: '14:32' },
    { id: 'c2', sender: 'You', message: 'Hello team, excited for our discussion today.', time: '14:33' },
    { id: 'c3', sender: 'Mark Williams', message: 'I have some ideas I'd like to share regarding the new campaign.', time: '14:34' },
  ],
};

const Meetings = () => {
  const { toast } = useToast();
  const [isInMeeting, setIsInMeeting] = useState(false);
  const [activeMeeting, setActiveMeeting] = useState(mockActiveMeeting);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [isNewMeetingModalOpen, setIsNewMeetingModalOpen] = useState(false);
  const [newMeetingData, setNewMeetingData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    duration: 60,
    participants: '',
  });
  const [isJoinMeetingModalOpen, setIsJoinMeetingModalOpen] = useState(false);
  const [meetingIdToJoin, setMeetingIdToJoin] = useState('');
  const [isScheduleTabActive, setIsScheduleTabActive] = useState(true);

  const videoRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll chat to bottom
    if (chatEndRef.current && showChat) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeMeeting.chatMessages, showChat]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  };

  const handleJoinMeeting = (meetingId?: string) => {
    // Mock joining a meeting - in a real app, this would connect to Zoom SDK
    toast({
      title: "Joining meeting",
      description: `Connecting to meeting ${meetingId || meetingIdToJoin}...`,
    });
    
    // Simulate a delay before "joining" the meeting
    setTimeout(() => {
      setIsInMeeting(true);
      setIsJoinMeetingModalOpen(false);
    }, 1500);
  };

  const handleLeaveMeeting = () => {
    setIsInMeeting(false);
  };

  const toggleVideo = () => {
    setVideoEnabled(!videoEnabled);
    
    // In a real implementation, this would toggle the actual video stream
    setActiveMeeting(prev => ({
      ...prev,
      participants: prev.participants.map(p => 
        p.id === 'p1' ? { ...p, videoOn: !videoEnabled } : p
      ),
    }));
  };

  const toggleMic = () => {
    setMicEnabled(!micEnabled);
    
    // In a real implementation, this would toggle the actual audio stream
    setActiveMeeting(prev => ({
      ...prev,
      participants: prev.participants.map(p => 
        p.id === 'p1' ? { ...p, micOn: !micEnabled } : p
      ),
    }));
  };

  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (chatMessage.trim()) {
      const newMessage = {
        id: `c${activeMeeting.chatMessages.length + 1}`,
        sender: 'You',
        message: chatMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setActiveMeeting(prev => ({
        ...prev,
        chatMessages: [...prev.chatMessages, newMessage],
      }));
      
      setChatMessage('');
    }
  };

  const handleCreateMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would create a meeting via Zoom API
    toast({
      title: "Meeting scheduled",
      description: `"${newMeetingData.title}" has been scheduled successfully.`,
    });
    
    setIsNewMeetingModalOpen(false);
    
    // Reset form data
    setNewMeetingData({
      title: '',
      description: '',
      date: '',
      time: '',
      duration: 60,
      participants: '',
    });
  };

  const handleCopyMeetingLink = (meetingUrl: string) => {
    navigator.clipboard.writeText(meetingUrl);
    toast({
      title: "Link copied",
      description: "Meeting link copied to clipboard.",
    });
  };

  return (
    <DashboardLayout>
      {isInMeeting ? (
        <div className="min-h-[calc(100vh-5rem)]">
          {/* Active Meeting Interface */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full">
            <div className={`${showChat ? 'col-span-1 md:col-span-2 lg:col-span-3' : 'col-span-1 md:col-span-3 lg:col-span-4'} flex flex-col`}>
              <div className="bg-gray-900 rounded-t-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-white text-xl font-bold">{activeMeeting.title}</h2>
                  <Button variant="ghost" size="sm" className="text-white" onClick={() => setShowChat(!showChat)}>
                    <MessageSquare className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-white border-white">
                    <Users className="h-3 w-3 mr-1" /> {activeMeeting.participants.length} Participants
                  </Badge>
                  <Badge variant="outline" className="text-white border-white">
                    <Clock className="h-3 w-3 mr-1" /> Started at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </Badge>
                </div>
              </div>
              
              <div className="bg-black flex-1 relative overflow-hidden" ref={videoRef}>
                {/* Video grid */}
                <div className="grid grid-cols-2 gap-2 p-4">
                  {activeMeeting.participants.map((participant) => (
                    <div 
                      key={participant.id} 
                      className={`relative bg-gray-800 rounded-lg overflow-hidden ${
                        participant.id === 'p1' ? 'col-span-2 h-64' : 'h-48'
                      }`}
                    >
                      {participant.videoOn ? (
                        <div className="w-full h-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center">
                          {/* This would be a real video stream in a production app */}
                          <Video className="h-12 w-12 text-gray-500" />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gray-800 flex flex-col items-center justify-center">
                          <div className="h-16 w-16 rounded-full bg-gray-700 flex items-center justify-center mb-2">
                            <span className="text-2xl text-white">{participant.name.charAt(0)}</span>
                          </div>
                          <span className="text-white">{participant.name}</span>
                        </div>
                      )}
                      
                      <div className="absolute bottom-2 left-2 flex items-center">
                        {participant.isHost && (
                          <Badge className="mr-2 bg-blue-600">Host</Badge>
                        )}
                        {!participant.micOn && (
                          <Badge variant="outline" className="bg-red-600 border-red-600">
                            <MicOff className="h-3 w-3" />
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900 p-2 flex justify-center">
                  <div className="flex items-center gap-2">
                    <Button 
                      variant={micEnabled ? 'outline' : 'destructive'} 
                      size="icon" 
                      onClick={toggleMic}
                    >
                      {micEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                    </Button>
                    <Button 
                      variant={videoEnabled ? 'outline' : 'destructive'}
                      size="icon"
                      onClick={toggleVideo}
                    >
                      {videoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Settings className="h-5 w-5" />
                    </Button>
                    <Button variant="destructive" onClick={handleLeaveMeeting}>
                      Leave Meeting
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chat sidebar */}
            {showChat && (
              <div className="col-span-1 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col">
                <div className="p-3 border-b text-center">
                  <h3 className="font-medium">Meeting Chat</h3>
                </div>
                
                <div className="flex-1 p-3 overflow-auto max-h-[500px]">
                  <div className="space-y-4">
                    {activeMeeting.chatMessages.map((msg) => (
                      <div 
                        key={msg.id}
                        className={`${
                          msg.sender === 'You' 
                            ? 'ml-8 bg-primary/10' 
                            : 'mr-8 bg-gray-200 dark:bg-gray-700'
                        } p-2 rounded-lg`}
                      >
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="font-medium">{msg.sender}</span>
                          <span className="text-muted-foreground">{msg.time}</span>
                        </div>
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>
                </div>
                
                <div className="p-3 border-t">
                  <form onSubmit={handleSendChatMessage} className="flex gap-2">
                    <Input 
                      placeholder="Type a message..." 
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" size="sm" disabled={!chatMessage.trim()}>
                      Send
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Meetings</h1>
              <p className="text-muted-foreground">
                Schedule, join, and manage your video meetings
              </p>
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setIsJoinMeetingModalOpen(true)}
              >
                Join Meeting
              </Button>
              <Button onClick={() => setIsNewMeetingModalOpen(true)}>
                <Plus className="mr-2 h-4 w-4" /> Schedule Meeting
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="schedule" onValueChange={(value) => setIsScheduleTabActive(value === 'schedule')}>
            <TabsList>
              <TabsTrigger value="schedule">
                <Calendar className="h-4 w-4 mr-2" />
                Scheduled Meetings
              </TabsTrigger>
              <TabsTrigger value="recordings">
                <Video className="h-4 w-4 mr-2" />
                Recordings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="schedule" className="space-y-4 mt-4">
              {scheduledMeetings.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto mb-4 bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">No scheduled meetings</h3>
                    <p className="text-muted-foreground">
                      Schedule a new meeting to get started.
                    </p>
                    <Button 
                      className="mt-4" 
                      onClick={() => setIsNewMeetingModalOpen(true)}
                    >
                      Schedule Meeting
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                scheduledMeetings.map((meeting) => (
                  <Card key={meeting.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle>{meeting.title}</CardTitle>
                      <CardDescription>{meeting.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2 sm:grid-cols-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{formatDate(meeting.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{meeting.duration} minutes</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{meeting.participants.length + 1} participants</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Meeting Link:</span>
                        <code className="text-xs bg-muted px-2 py-1 rounded">{meeting.joinUrl}</code>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="h-7 w-7 p-0"
                          onClick={() => handleCopyMeetingLink(meeting.joinUrl)}
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-muted-foreground">
                        Host: {meeting.host}
                      </div>
                      <Button 
                        variant="default" 
                        onClick={() => handleJoinMeeting(meeting.id)}
                      >
                        Join Meeting
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              )}
            </TabsContent>
            
            <TabsContent value="recordings" className="mt-4">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4 bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <Video className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">No recordings available</h3>
                  <p className="text-muted-foreground">
                    Past meeting recordings will appear here.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Join Meeting Dialog */}
          <Dialog open={isJoinMeetingModalOpen} onOpenChange={setIsJoinMeetingModalOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Join Meeting</DialogTitle>
                <DialogDescription>
                  Enter a meeting ID or link to join an existing meeting.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div className="space-y-2">
                  <Label htmlFor="meeting-id">Meeting ID or Link</Label>
                  <Input 
                    id="meeting-id" 
                    placeholder="Enter meeting ID or paste link"
                    value={meetingIdToJoin}
                    onChange={(e) => setMeetingIdToJoin(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => setIsJoinMeetingModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => handleJoinMeeting()}>
                  Join Now
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          {/* Schedule Meeting Dialog */}
          <Dialog open={isNewMeetingModalOpen} onOpenChange={setIsNewMeetingModalOpen}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Schedule New Meeting</DialogTitle>
                <DialogDescription>
                  Fill in the details to schedule a new video meeting.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleCreateMeeting} className="space-y-4 py-2">
                <div className="space-y-2">
                  <Label htmlFor="meeting-title">Meeting Title</Label>
                  <Input 
                    id="meeting-title" 
                    placeholder="Enter meeting title"
                    value={newMeetingData.title}
                    onChange={(e) => setNewMeetingData({...newMeetingData, title: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meeting-desc">Description (Optional)</Label>
                  <Input 
                    id="meeting-desc" 
                    placeholder="Enter meeting description"
                    value={newMeetingData.description}
                    onChange={(e) => setNewMeetingData({...newMeetingData, description: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label htmlFor="meeting-date">Date</Label>
                    <Input 
                      id="meeting-date" 
                      type="date"
                      value={newMeetingData.date}
                      onChange={(e) => setNewMeetingData({...newMeetingData, date: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meeting-time">Time</Label>
                    <Input 
                      id="meeting-time" 
                      type="time"
                      value={newMeetingData.time}
                      onChange={(e) => setNewMeetingData({...newMeetingData, time: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meeting-duration">Duration (minutes)</Label>
                  <Input 
                    id="meeting-duration" 
                    type="number"
                    min="15"
                    step="15"
                    value={newMeetingData.duration}
                    onChange={(e) => setNewMeetingData({...newMeetingData, duration: parseInt(e.target.value)})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meeting-participants">Participants (Email)</Label>
                  <Input 
                    id="meeting-participants" 
                    placeholder="Enter participant emails (comma separated)"
                    value={newMeetingData.participants}
                    onChange={(e) => setNewMeetingData({...newMeetingData, participants: e.target.value})}
                  />
                  <p className="text-xs text-muted-foreground">
                    You'll be able to invite more participants after creating the meeting.
                  </p>
                </div>
                <DialogFooter className="pt-4">
                  <Button variant="outline" type="button" onClick={() => setIsNewMeetingModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    Schedule Meeting
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Meetings;
