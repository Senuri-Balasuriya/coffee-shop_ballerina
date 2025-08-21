import React from 'react';
import { ShoppingCartProvider as ShoppingCartContextProvider } from '../context/ShoppingCartContext';

const ShoppingCartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ShoppingCartContextProvider>{children}</ShoppingCartContextProvider>;
};

export default ShoppingCartProvider;
