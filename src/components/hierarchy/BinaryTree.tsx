
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

// Sample binary tree data
const mockBinaryTreeData = {
  id: 'user-1',
  name: 'You',
  role: 'Gold Member', 
  status: 'active',
  left: {
    id: 'user-2',
    name: 'John Doe',
    role: 'Silver Member',
    status: 'active',
    left: {
      id: 'user-5',
      name: 'Robert Brown',
      role: 'Starter',
      status: 'active',
      left: null,
      right: null
    },
    right: {
      id: 'user-6',
      name: 'Emily White',
      role: 'Starter',
      status: 'inactive',
      left: null,
      right: null
    }
  },
  right: {
    id: 'user-3',
    name: 'Alice Smith',
    role: 'Silver Member',
    status: 'active',
    left: {
      id: 'user-7',
      name: 'Michael Lee',
      role: 'Starter',
      status: 'active',
      left: null,
      right: null
    },
    right: {
      id: 'user-8',
      name: 'David Wilson',
      role: 'Starter',
      status: 'active',
      left: null,
      right: null
    }
  }
};

interface BinaryNodeProps {
  node: any;
  position?: 'root' | 'left' | 'right';
}

const BinaryNode = ({ node, position = 'root' }: BinaryNodeProps) => {
  if (!node) return null;

  const hasChildren = node.left || node.right;
  
  return (
    <div className="flex flex-col items-center">
      <Card className={`binary-node p-3 w-[200px] flex items-center gap-3 ${position === 'left' ? 'border-l-blue-500 border-l-4' : position === 'right' ? 'border-r-green-500 border-r-4' : ''} ${node.status === 'inactive' ? 'bg-gray-100 dark:bg-gray-800 opacity-70' : ''}`}>
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
        <div className="pt-4">
          <div className="relative">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-4 border-l border-gray-300 dark:border-gray-700"></div>
            <div className="flex justify-center gap-8 md:gap-16">
              <div className="relative pt-4">
                {node.left && (
                  <>
                    <div className="absolute top-0 left-1/2 h-4 border-l border-gray-300 dark:border-gray-700"></div>
                    <div className="absolute top-4 left-0 right-1/2 border-t border-gray-300 dark:border-gray-700"></div>
                    <BinaryNode node={node.left} position="left" />
                  </>
                )}
              </div>
              <div className="relative pt-4">
                {node.right && (
                  <>
                    <div className="absolute top-0 left-1/2 h-4 border-l border-gray-300 dark:border-gray-700"></div>
                    <div className="absolute top-4 right-0 left-1/2 border-t border-gray-300 dark:border-gray-700"></div>
                    <BinaryNode node={node.right} position="right" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const BinaryTree = () => {
  return (
    <div className="binary-tree p-6 overflow-auto">
      <div className="min-w-[800px] flex justify-center">
        <BinaryNode node={mockBinaryTreeData} />
      </div>
      <div className="mt-6 flex justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium">Left Team</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium">Right Team</span>
        </div>
      </div>
    </div>
  );
};

export default BinaryTree;
