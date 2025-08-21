import React, { createContext, useContext, useReducer } from 'react';

const ModalContext = createContext(undefined);

const modalReducer = (state, action) => {
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

const initialState = {
  isOpen: false,
  type: null,
  data: undefined,
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const openModal = (type, data) => {
    dispatch({ type: 'OPEN_MODAL', payload: { type, data } });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const value = {
    ...state,
    openModal,
    closeModal,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
