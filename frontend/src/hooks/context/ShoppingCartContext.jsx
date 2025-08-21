import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Cart, CartItem, Product, ProductSize } from '@/types';

interface ShoppingCartState {
  cart: Cart;
  isOpen: boolean;
}

interface ShoppingCartContextType extends ShoppingCartState {
  addToCart: (product: Product, quantity: number, size?: ProductSize) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setDeliveryOption: (option: string) => void;
  setDeliveryAddress: (address: any) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

type ShoppingCartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number; size?: ProductSize } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'SET_DELIVERY_OPTION'; payload: string }
  | { type: 'SET_DELIVERY_ADDRESS'; payload: any };

const calculateCartTotals = (items: CartItem[], deliveryOption: string): Omit<Cart, 'items' | 'deliveryOption' | 'deliveryAddress'> => {
  const subtotal = items.reduce((sum, item) => {
    const price = item.size ? item.size.price : item.product.price;
    return sum + (price * item.quantity);
  }, 0);

  const tax = subtotal * 0.1; // 10% tax
  const deliveryFee = deliveryOption === 'delivery' ? 5 : 0;
  const total = subtotal + tax + deliveryFee;

  return { subtotal, tax, deliveryFee, total };
};

const shoppingCartReducer = (state: ShoppingCartState, action: ShoppingCartAction): ShoppingCartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity, size } = action.payload;
      const existingItemIndex = state.cart.items.findIndex(
        item => item.product.id === product.id && item.size?.id === size?.id
      );

      let newItems = [...state.cart.items];
      if (existingItemIndex >= 0) {
        newItems[existingItemIndex].quantity += quantity;
      } else {
        const newItem: CartItem = {
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
      const newItems = state.cart.items.filter(item => item.id !== action.payload);
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
      const newItems = state.cart.items.map(item =>
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

const initialState: ShoppingCartState = {
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

export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, initialState);

  const addToCart = (product: Product, quantity: number, size?: ProductSize) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity, size } });
  };

  const removeFromCart = (itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const setDeliveryOption = (option: string) => {
    dispatch({ type: 'SET_DELIVERY_OPTION', payload: option });
  };

  const setDeliveryAddress = (address: any) => {
    dispatch({ type: 'SET_DELIVERY_ADDRESS', payload: address });
  };

  const value: ShoppingCartContextType = {
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

export const useShoppingCart = (): ShoppingCartContextType => {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};
