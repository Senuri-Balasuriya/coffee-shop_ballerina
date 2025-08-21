import React from 'react';
import { ProductProvider as ProductContextProvider } from '../context/ProductContext';

const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ProductContextProvider>{children}</ProductContextProvider>;
};

export default ProductProvider;
