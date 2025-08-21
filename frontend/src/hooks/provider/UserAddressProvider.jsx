import React from 'react';
import { UserAddressProvider as UserAddressContextProvider } from '../context/UserAddressContext';

const UserAddressProvider = ({ children }) => {
  return <UserAddressContextProvider>{children}</UserAddressContextProvider>;
};

export default UserAddressProvider;

