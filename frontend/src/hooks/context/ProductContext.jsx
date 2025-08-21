import React, { createContext, useContext, useReducer } from 'react';

const ProductContext = createContext(undefined);

const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const setProducts = (products) => {
    dispatch({ type: 'SET_PRODUCTS', payload: products });
  };

  const setLoading = (loading) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setError = (error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const value = {
    ...state,
    setProducts,
    setLoading,
    setError,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};
