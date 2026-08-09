import React, { createContext, useContext, useState } from 'react';

interface QuoteContextType {
  isQuoteModalOpen: boolean;
  selectedProductName: string;
  openQuoteModal: (productName?: string) => void;
  closeQuoteModal: () => void;
  isSearchOpen: boolean;
  openSearchModal: () => void;
  closeSearchModal: () => void;
  isAuthModalOpen: boolean;
  openAuthModal: (initialView?: 'register' | 'login' | 'forgot') => void;
  closeAuthModal: () => void;
  authModalView: 'register' | 'login' | 'forgot';
  setAuthModalView: (view: 'register' | 'login' | 'forgot') => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState<'register' | 'login' | 'forgot'>('register');

  const openQuoteModal = (productName?: string) => {
    if (productName) {
      setSelectedProductName(productName);
    } else {
      setSelectedProductName('');
    }
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProductName('');
  };

  const openSearchModal = () => setIsSearchOpen(true);
  const closeSearchModal = () => setIsSearchOpen(false);

  const openAuthModal = (initialView: 'register' | 'login' | 'forgot' = 'register') => {
    setAuthModalView(initialView);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <QuoteContext.Provider
      value={{
        isQuoteModalOpen,
        selectedProductName,
        openQuoteModal,
        closeQuoteModal,
        isSearchOpen,
        openSearchModal,
        closeSearchModal,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        authModalView,
        setAuthModalView,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};
