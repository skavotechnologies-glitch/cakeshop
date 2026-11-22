import React, { createContext, useContext, useState } from 'react';
import { Cake } from '../types';

interface OrderContextType {
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isOrderModalOpen: boolean;
  setIsOrderModalOpen: (open: boolean) => void;
  quickViewCake: Cake | null;
  setQuickViewCake: (cake: Cake | null) => void;
  selectedCakeForOrder: Cake | null;
  openOrderWithCake: (cake: Cake) => void;
  openGeneralOrder: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [quickViewCake, setQuickViewCake] = useState<Cake | null>(null);
  const [selectedCakeForOrder, setSelectedCakeForOrder] = useState<Cake | null>(null);

  const openOrderWithCake = (cake: Cake) => {
    setSelectedCakeForOrder(cake);
    setIsOrderModalOpen(true);
  };

  const openGeneralOrder = () => {
    setSelectedCakeForOrder(null);
    setIsOrderModalOpen(true);
  };

  return (
    <OrderContext.Provider
      value={{
        isSearchOpen,
        setIsSearchOpen,
        isOrderModalOpen,
        setIsOrderModalOpen,
        quickViewCake,
        setQuickViewCake,
        selectedCakeForOrder,
        openOrderWithCake,
        openGeneralOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

// Backward-compatible alias for existing imports
export const useCart = useOrder;
export const CartProvider = OrderProvider;
