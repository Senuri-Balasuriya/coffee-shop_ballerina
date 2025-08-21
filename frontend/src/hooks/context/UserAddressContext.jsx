import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Address } from '@/types';

interface UserAddressState {
  addresses: Address[];
  selectedAddress: Address | null;
  isLoading: boolean;
  error: string | null;
}

interface UserAddressContextType extends UserAddressState {
  setAddresses: (addresses: Address[]) => void;
  addAddress: (address: Address) => void;
  updateAddress: (address: Address) => void;
  removeAddress: (addressId: string) => void;
  selectAddress: (address: Address) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const UserAddressContext = createContext<UserAddressContextType | undefined>(undefined);

type UserAddressAction =
  | { type: 'SET_ADDRESSES'; payload: Address[] }
  | { type: 'ADD_ADDRESS'; payload: Address }
  | { type: 'UPDATE_ADDRESS'; payload: Address }
  | { type: 'REMOVE_ADDRESS'; payload: string }
  | { type: 'SELECT_ADDRESS'; payload: Address }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

const userAddressReducer = (state: UserAddressState, action: UserAddressAction): UserAddressState => {
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
        addresses: state.addresses.map(addr =>
          addr.id === action.payload.id ? action.payload : addr
        ),
      };
    case 'REMOVE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.filter(addr => addr.id !== action.payload),
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

const initialState: UserAddressState = {
  addresses: [],
  selectedAddress: null,
  isLoading: false,
  error: null,
};

export const UserAddressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(userAddressReducer, initialState);

  const setAddresses = (addresses: Address[]) => {
    dispatch({ type: 'SET_ADDRESSES', payload: addresses });
  };

  const addAddress = (address: Address) => {
    dispatch({ type: 'ADD_ADDRESS', payload: address });
  };

  const updateAddress = (address: Address) => {
    dispatch({ type: 'UPDATE_ADDRESS', payload: address });
  };

  const removeAddress = (addressId: string) => {
    dispatch({ type: 'REMOVE_ADDRESS', payload: addressId });
  };

  const selectAddress = (address: Address) => {
    dispatch({ type: 'SELECT_ADDRESS', payload: address });
  };

  const setLoading = (loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setError = (error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const value: UserAddressContextType = {
    ...state,
    setAddresses,
    addAddress,
    updateAddress,
    removeAddress,
    selectAddress,
    setLoading,
    setError,
  };

  return <UserAddressContext.Provider value={value}>{children}</UserAddressContext.Provider>;
};

export const useUserAddress = (): UserAddressContextType => {
  const context = useContext(UserAddressContext);
  if (context === undefined) {
    throw new Error('useUserAddress must be used within a UserAddressProvider');
  }
  return context;
};
