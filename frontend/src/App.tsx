import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Application from './pages/Application';

const App: React.FC = () => {
  // Simple auth check (token in localStorage)
  const isAuthenticated = Boolean(localStorage.getItem('token'));

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/app"
          element={
            isAuthenticated ? <Application /> : <Navigate to="/signin" replace />
          }
        />
        <Route path="*" element={<Navigate to={isAuthenticated ? '/app' : '/signin'} replace />} />
      </Routes>
    </Router>
  );
};

export default App;
