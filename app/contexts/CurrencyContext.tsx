'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Currency = 'VND' | 'USD' | 'EUR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (amount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

interface CurrencyProviderProps {
  children: ReactNode;
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('VND');

  const formatPrice = (amount: number): string => {
    switch (currency) {
      case 'VND':
        return `${amount.toLocaleString('vi-VN')} VND`;
      case 'USD':
        return `${amount.toLocaleString('en-US')} USD`;
      case 'EUR':
        return `${amount.toLocaleString('de-DE')} EUR`;
      default:
        return `${amount.toLocaleString()} ${currency}`;
    }
  };

  const value = {
    currency,
    setCurrency,
    formatPrice,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};