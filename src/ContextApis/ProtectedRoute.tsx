import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthenContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser } = useAuth(); // Check if the user is authenticated

  console.log('ProtectedRoute - currentUser:', currentUser); // Debug log

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
