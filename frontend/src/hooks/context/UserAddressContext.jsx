import React, { createContext, useContext, useReducer } from 'react';

const UserAddressContext = createContext(undefined);

const userAddressReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ADDRESSES':
      return {
        ...state,
        addresses: action.payload,
      };
    case 'ADD_ADDRESS':
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };
    case 'UPDATE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.map((addr) =>
          addr.id === action.payload.id ? action.payload : addr
        ),
      };
    case 'REMOVE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.filter((addr) => addr.id !== action.payload),
      };
    case 'SELECT_ADDRESS':
      return {
        ...state,
        selectedAddress: action.payload,
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
  addresses: [],
  selectedAddress: null,
  isLoading: false,
  error: null,
};

export const UserAddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userAddressReducer, initialState);

  const setAddresses = (addresses) => {
    dispatch({ type: 'SET_ADDRESSES', payload: addresses });
  };

  const addAddress = (address) => {
    dispatch({ type: 'ADD_ADDRESS', payload: address });
  };

  const updateAddress = (address) => {
    dispatch({ type: 'UPDATE_ADDRESS', payload: address });
  };

  const removeAddress = (addressId) => {
    dispatch({ type: 'REMOVE_ADDRESS', payload: addressId });
  };

  const selectAddress = (address) => {
    dispatch({ type: 'SELECT_ADDRESS', payload: address });
  };

  const setLoading = (loading) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setError = (error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const value = {
    ...state,
    setAddresses,
    addAddress,
    updateAddress,
    removeAddress,
    selectAddress,
    setLoading,
    setError,
  };

  return (
    <UserAddressContext.Provider value={value}>
      {children}
    </UserAddressContext.Provider>
  );
};

export const useUserAddress = () => {
  const context = useContext(UserAddressContext);
  if (context === undefined) {
    throw new Error('useUserAddress must be used within a UserAddressProvider');
  }
  return context;
};
