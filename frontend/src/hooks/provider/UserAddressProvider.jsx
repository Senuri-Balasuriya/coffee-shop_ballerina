import React from 'react';
import { UserAddressProvider as UserAddressContextProvider } from '../context/UserAddressContext';

const UserAddressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <UserAddressContextProvider>{children}</UserAddressContextProvider>;
};

export default UserAddressProvider;
