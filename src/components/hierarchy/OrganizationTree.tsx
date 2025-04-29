
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

// Sample tree data
const mockTreeData = {
  id: 'user-1',
  name: 'You',
  role: 'Gold Member',
  status: 'active',
  children: [
    {
      id: 'user-2',
      name: 'John Doe',
      role: 'Silver Member',
      status: 'active',
      children: [
        {
          id: 'user-5',
          name: 'Robert Brown',
          role: 'Starter',
          status: 'active',
          children: []
        },
        {
          id: 'user-6',
          name: 'Emily White',
          role: 'Starter',
          status: 'inactive',
          children: []
        }
      ]
    },
    {
      id: 'user-3',
      name: 'Alice Smith',
      role: 'Silver Member',
      status: 'active',
      children: [
        {
          id: 'user-7',
          name: 'Michael Lee',
          role: 'Starter',
          status: 'active',
          children: [
            {
              id: 'user-9',
              name: 'Sarah Johnson',
              role: 'Starter',
              status: 'active',
              children: []
            }
          ]
        },
        {
          id: 'user-8',
          name: 'David Wilson',
          role: 'Starter',
          status: 'active',
          children: []
        }
      ]
    },
    {
      id: 'user-4',
      name: 'James Taylor',
      role: 'Bronze Member',
      status: 'active',
      children: []
    }
  ]
};

interface TreeNodeProps {
  node: any;
  level?: number;
}

const TreeNode = ({ node, level = 0 }: TreeNodeProps) => {
  const hasChildren = node.children && node.children.length > 0;
  
  return (
    <div className={`relative ${level > 0 ? 'ml-12 mt-4' : ''} ${hasChildren ? 'has-children' : ''}`}>
      <Card className={`tree-node p-3 flex items-center gap-3 ${node.status === 'inactive' ? 'bg-gray-100 dark:bg-gray-800 opacity-70' : ''}`}>
        <Avatar className="h-10 w-10">
          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${node.name}`} />
          <AvatarFallback>{node.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium leading-none mb-1">{node.name}</div>
          <div className="text-xs text-muted-foreground">{node.role}</div>
        </div>
        {node.status === 'inactive' && (
          <span className="ml-auto px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">
            Inactive
          </span>
        )}
      </Card>
      
      {hasChildren && (
        <div className="tree-children pl-6 mt-2 border-l-2 border-dashed border-gray-300 dark:border-gray-700">
          {node.children.map((child: any) => (
            <TreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const OrganizationTree = () => {
  return (
    <div className="organization-tree p-6 relative overflow-x-auto min-w-[800px] pt-8">
      <TreeNode node={mockTreeData} />
      
      {/* Custom CSS for organization tree structure moved to className above */}
    </div>
  );
};

export default OrganizationTree;
