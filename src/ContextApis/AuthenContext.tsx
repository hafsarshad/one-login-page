// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface AuthContextType {
//     isAuthenticated: boolean;
//     login: () => void;
//     logout: () => void;
// }

// const AuthenContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     const login = () => setIsAuthenticated(true);
//     const logout = () => setIsAuthenticated(false);

//     return (
//         <AuthenContext.Provider value={{ isAuthenticated, login, logout }}>
//             {children}
//         </AuthenContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const context = useContext(AuthenContext);
//     if (context === undefined) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// };

// src/ContextApis/AuthenContext.tsx
// AuthenContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';

type AuthContextType = {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.error('Login failed:', error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      console.error('Logout failed:', error.message);
      throw error;
    }
  };

  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

