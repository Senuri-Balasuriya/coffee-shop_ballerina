import React from 'react';
import { ModalProvider as ModalContextProvider } from '../../context/ModalContext';

const ModalProvider = ({ children }) => {
  return <ModalContextProvider>{children}</ModalContextProvider>;
};

export default ModalProvider;
