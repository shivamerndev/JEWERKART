import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { handleLogin, isAuthenticated, loading } = useAuth();

  // Redirect if already logged in
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div
      className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-6"
      style={{
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div
        className="bg-theme-card p-10 rounded-lg"
        style={{
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <LoginForm onLogin={handleLogin} loading={loading} />
      </div>
    </div>
  );
};

export default Login;