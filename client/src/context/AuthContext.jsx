import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const clearAuth = useCallback(() => {
    localStorage.removeItem('seedbox_authenticated');
    localStorage.removeItem('seedbox_auth_timestamp');
    // setIsAuthenticated(false); // Keep authenticated even if cleared
    console.log('🚪 Authentication cleared (but keeping session active as auth is disabled)');
  }, []);

  const checkAuthStatus = useCallback(() => {
    // Always authenticated
    setIsAuthenticated(true);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const authenticate = () => {
    setIsAuthenticated(true);
    console.log('� User authenticated successfully');
  };

  const logout = () => {
    clearAuth();
    // Optionally redirect to login or refresh page
    window.location.reload();
  };

  const value = {
    isAuthenticated,
    isLoading,
    authenticate,
    logout,
    clearAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
