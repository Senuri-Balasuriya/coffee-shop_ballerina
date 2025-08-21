import React from 'react';
import { ProductProvider as ProductContextProvider } from '../context/ProductContext';

const ProductProvider = ({ children }) => {
  return <ProductContextProvider>{children}</ProductContextProvider>;
};

export default ProductProvider;
