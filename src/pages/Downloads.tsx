
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, FileText, Book, Video } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface DownloadItem {
  id: string;
  name: string;
  category: 'guide' | 'video' | 'ebook' | 'tool';
  description: string;
  fileSize: string;
  downloadCount: number;
  dateAdded: string;
  icon: 'guide' | 'video' | 'ebook' | 'tool';
}

const mockDownloads: DownloadItem[] = [
  {
    id: '1',
    name: 'Trading Signals Guide',
    category: 'guide',
    description: 'Learn how to interpret and use our premium trading signals',
    fileSize: '2.4 MB',
    downloadCount: 1245,
    dateAdded: '2023-10-05',
    icon: 'guide'
  },
  {
    id: '2',
    name: 'Advanced Technical Analysis',
    category: 'ebook',
    description: 'Comprehensive ebook on technical analysis methods',
    fileSize: '8.7 MB',
    downloadCount: 897,
    dateAdded: '2023-09-18',
    icon: 'ebook'
  },
  {
    id: '3',
    name: 'Forex Trading Masterclass',
    category: 'video',
    description: 'Video series covering everything about forex trading',
    fileSize: '456 MB',
    downloadCount: 1689,
    dateAdded: '2023-08-22',
    icon: 'video'
  },
  {
    id: '4',
    name: 'Risk Management Calculator',
    category: 'tool',
    description: 'Excel-based tool for calculating optimal position sizes',
    fileSize: '1.2 MB',
    downloadCount: 2341,
    dateAdded: '2023-07-15',
    icon: 'tool'
  },
  {
    id: '5',
    name: 'Cryptocurrency Market Analysis',
    category: 'guide',
    description: 'Latest insights on the cryptocurrency market trends',
    fileSize: '3.6 MB',
    downloadCount: 1056,
    dateAdded: '2023-11-01',
    icon: 'guide'
  }
];

const iconComponents = {
  guide: <FileText className="h-5 w-5 text-blue-500" />,
  video: <Video className="h-5 w-5 text-red-500" />,
  ebook: <Book className="h-5 w-5 text-green-500" />,
  tool: <Download className="h-5 w-5 text-purple-500" />
};

const Downloads = () => {
  const [downloads, setDownloads] = useState<DownloadItem[]>(mockDownloads);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { toast } = useToast();
  
  const filteredDownloads = selectedCategory === 'all'
    ? downloads
    : downloads.filter(item => item.category === selectedCategory);
    
  const handleDownload = (id: string, name: string) => {
    // In a real app, this would trigger an actual file download
    toast({
      title: "Download started",
      description: `${name} will be downloaded shortly.`
    });
    
    // Update download count
    setDownloads(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, downloadCount: item.downloadCount + 1 } 
          : item
      )
    );
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Download Center</h1>
          <p className="text-muted-foreground">
            Access all your exclusive trading resources
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
          >
            All Resources
          </Button>
          <Button
            variant={selectedCategory === 'guide' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('guide')}
          >
            <FileText className="mr-1 h-4 w-4" /> Guides
          </Button>
          <Button
            variant={selectedCategory === 'ebook' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('ebook')}
          >
            <Book className="mr-1 h-4 w-4" /> E-Books
          </Button>
          <Button
            variant={selectedCategory === 'video' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('video')}
          >
            <Video className="mr-1 h-4 w-4" /> Videos
          </Button>
          <Button
            variant={selectedCategory === 'tool' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('tool')}
          >
            <Download className="mr-1 h-4 w-4" /> Tools
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Available Resources</CardTitle>
            <CardDescription>
              Download the latest trading resources and educational materials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Resource</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Downloads</TableHead>
                  <TableHead>Date Added</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDownloads.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {iconComponents[item.icon]}
                        {item.name}
                      </div>
                    </TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.fileSize}</TableCell>
                    <TableCell>{item.downloadCount}</TableCell>
                    <TableCell>{item.dateAdded}</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        onClick={() => handleDownload(item.id, item.name)}
                        className="flex items-center gap-1"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Downloads;
