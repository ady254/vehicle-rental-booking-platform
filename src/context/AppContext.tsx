import { createContext, useContext, useState, ReactNode } from 'react';
import { Page, Booking } from '../types';

interface AppContextType {
  currentPage: Page;
  selectedBikeId: string | null;
  booking: Booking | null;
  searchParams: {
    pickupDate: string;
    returnDate: string;
    location: string;
  };
  navigate: (page: Page, bikeId?: string) => void;
  setBooking: (booking: Booking | null) => void;
  setSearchParams: (params: { pickupDate: string; returnDate: string; location: string }) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedBikeId, setSelectedBikeId] = useState<string | null>(null);
  const [booking, setBooking] = useState<Booking | null>(null);
  const [searchParams, setSearchParams] = useState({
    pickupDate: '',
    returnDate: '',
    location: '',
  });

  const navigate = (page: Page, bikeId?: string) => {
    setCurrentPage(page);
    if (bikeId !== undefined) {
      setSelectedBikeId(bikeId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        selectedBikeId,
        booking,
        searchParams,
        navigate,
        setBooking,
        setSearchParams,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
