import React, { createContext, useState, useContext, ReactNode } from 'react';

// Roles available in the application
export type UserRole = 'affiliate' | 'admin';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string; // Added phone property to fix TypeScript error
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
  isAdmin: false,
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  // Mock login function - in a real app, this would call an API
  const login = async (email: string, password: string) => {
    // For demo purposes, simulate a successful login
    // In a real app, this would validate credentials against an API
    const mockUser: User = {
      id: '1',
      name: email === 'admin@example.com' ? 'Admin User' : 'Affiliate User',
      email,
      role: email === 'admin@example.com' ? 'admin' : 'affiliate',
      avatar: 'https://ui-avatars.com/api/?name=User',
    };
    
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        isAdmin: user?.role === 'admin',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
