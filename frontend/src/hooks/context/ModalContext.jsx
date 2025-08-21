import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { ModalState } from '@/types';

interface ModalContextType extends ModalState {
  openModal: (type: string, data?: any) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

type ModalAction =
  | { type: 'OPEN_MODAL'; payload: { type: string; data?: any } }
  | { type: 'CLOSE_MODAL' };

const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isOpen: true,
        type: action.payload.type,
        data: action.payload.data,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false,
        type: null,
        data: undefined,
      };
    default:
      return state;
  }
};

const initialState: ModalState = {
  isOpen: false,
  type: null,
  data: undefined,
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const openModal = (type: string, data?: any) => {
    dispatch({ type: 'OPEN_MODAL', payload: { type, data } });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const value: ModalContextType = {
    ...state,
    openModal,
    closeModal,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
