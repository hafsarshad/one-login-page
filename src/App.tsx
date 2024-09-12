import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import { AuthProvider } from './ContextApis/AuthenContext';
import ProtectedRoute from './ContextApis/ProtectedRoute';
import ProductPage from './Pages/ProductPage';


const App: React.FC = () => {
  return (
  //   <Router>
  //   <Routes>
  //     <Route path="/" element={<LoginPage/>} />
   
  //   </Routes>
  // </Router>

<AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route
  path="/products"
  element={
    <ProtectedRoute>
      <ProductPage /> {/* Make sure this is the correct component */}
    </ProtectedRoute>
  }
/>
                </Routes>
            </Router>
        </AuthProvider>
  
  );
}

export default App;
