import React, { createContext, useContext, useState } from 'react';
import { Cake } from '../types';

interface OrderContextType {
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isOrderModalOpen: boolean;
  setIsOrderModalOpen: (open: boolean) => void;
  isHallModalOpen: boolean;
  setIsHallModalOpen: (open: boolean) => void;
  quickViewCake: Cake | null;
  setQuickViewCake: (cake: Cake | null) => void;
  selectedCakeForOrder: Cake | null;
  openOrderWithCake: (cake: Cake) => void;
  openGeneralOrder: () => void;
  openHallBooking: (presetPackage?: string) => void;
  selectedHallPackage: string;
  setSelectedHallPackage: (pkg: string) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isHallModalOpen, setIsHallModalOpen] = useState(false);
  const [quickViewCake, setQuickViewCake] = useState<Cake | null>(null);
  const [selectedCakeForOrder, setSelectedCakeForOrder] = useState<Cake | null>(null);
  const [selectedHallPackage, setSelectedHallPackage] = useState('Grand Birthday Atelier (15-40 Guests)');

  const openOrderWithCake = (cake: Cake) => {
    setSelectedCakeForOrder(cake);
    setIsOrderModalOpen(true);
  };

  const openGeneralOrder = () => {
    setSelectedCakeForOrder(null);
    setIsOrderModalOpen(true);
  };

  const openHallBooking = (presetPackage?: string) => {
    if (presetPackage) {
      setSelectedHallPackage(presetPackage);
    }
    setIsHallModalOpen(true);
  };

  return (
    <OrderContext.Provider
      value={{
        isSearchOpen,
        setIsSearchOpen,
        isOrderModalOpen,
        setIsOrderModalOpen,
        isHallModalOpen,
        setIsHallModalOpen,
        quickViewCake,
        setQuickViewCake,
        selectedCakeForOrder,
        openOrderWithCake,
        openGeneralOrder,
        openHallBooking,
        selectedHallPackage,
        setSelectedHallPackage,
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

export const useCart = useOrder;
export const CartProvider = OrderProvider;
