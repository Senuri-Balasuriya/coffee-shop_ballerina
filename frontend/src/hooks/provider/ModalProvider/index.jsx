import React from 'react';
import { ModalProvider as ModalContextProvider } from '../../context/ModalContext';

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ModalContextProvider>{children}</ModalContextProvider>;
};

export default ModalProvider;
