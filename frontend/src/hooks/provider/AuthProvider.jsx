import React from 'react';
import { AuthProvider as AuthContextProvider } from '../context/AuthContext';

const AuthProvider = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default AuthProvider;
