import React from 'react';
import { ShoppingCartProvider as ShoppingCartContextProvider } from '../context/ShoppingCartContext';

const ShoppingCartProvider = ({ children }) => {
  return <ShoppingCartContextProvider>{children}</ShoppingCartContextProvider>;
};

export default ShoppingCartProvider;
