import React, { createContext, useContext, useReducer } from 'react';

const ShoppingCartContext = createContext(undefined);

const calculateCartTotals = (items, deliveryOption) => {
  const subtotal = items.reduce((sum, item) => {
    const price = item.size ? item.size.price : item.product.price;
    return sum + price * item.quantity;
  }, 0);

  const tax = subtotal * 0.1; // 10% tax
  const deliveryFee = deliveryOption === 'delivery' ? 5 : 0;
  const total = subtotal + tax + deliveryFee;

  return { subtotal, tax, deliveryFee, total };
};

const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity, size } = action.payload;
      const existingItemIndex = state.cart.items.findIndex(
        (item) => item.product.id === product.id && item.size?.id === size?.id
      );

      let newItems = [...state.cart.items];
      if (existingItemIndex >= 0) {
        newItems[existingItemIndex].quantity += quantity;
      } else {
        const newItem = {
          id: `${product.id}-${size?.id || 'default'}`,
          product,
          size,
          quantity,
        };
        newItems.push(newItem);
      }

      const totals = calculateCartTotals(newItems, state.cart.deliveryOption);
      return {
        ...state,
        cart: {
          ...state.cart,
          items: newItems,
          ...totals,
        },
      };
    }
    case 'REMOVE_FROM_CART': {
      const newItems = state.cart.items.filter((item) => item.id !== action.payload);
      const totals = calculateCartTotals(newItems, state.cart.deliveryOption);
      return {
        ...state,
        cart: {
          ...state.cart,
          items: newItems,
          ...totals,
        },
      };
    }
    case 'UPDATE_QUANTITY': {
      const { itemId, quantity } = action.payload;
      const newItems = state.cart.items.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
      );
      const totals = calculateCartTotals(newItems, state.cart.deliveryOption);
      return {
        ...state,
        cart: {
          ...state.cart,
          items: newItems,
          ...totals,
        },
      };
    }
    case 'CLEAR_CART':
      return {
        ...state,
        cart: {
          items: [],
          subtotal: 0,
          tax: 0,
          deliveryFee: 0,
          total: 0,
          deliveryOption: 'delivery',
        },
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case 'SET_DELIVERY_OPTION': {
      const totals = calculateCartTotals(state.cart.items, action.payload);
      return {
        ...state,
        cart: {
          ...state.cart,
          deliveryOption: action.payload,
          ...totals,
        },
      };
    }
    case 'SET_DELIVERY_ADDRESS':
      return {
        ...state,
        cart: {
          ...state.cart,
          deliveryAddress: action.payload,
        },
      };
    default:
      return state;
  }
};

const initialState = {
  cart: {
    items: [],
    subtotal: 0,
    tax: 0,
    deliveryFee: 0,
    total: 0,
    deliveryOption: 'delivery',
  },
  isOpen: false,
};

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, initialState);

  const addToCart = (product, quantity, size) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity, size } });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const updateQuantity = (itemId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const setDeliveryOption = (option) => {
    dispatch({ type: 'SET_DELIVERY_OPTION', payload: option });
  };

  const setDeliveryAddress = (address) => {
    dispatch({ type: 'SET_DELIVERY_ADDRESS', payload: address });
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    setDeliveryOption,
    setDeliveryAddress,
  };

  return <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>;
};

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};
