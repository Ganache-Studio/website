'use client';

import { usePathname } from 'next/navigation';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

type StudioContextType = {
  isDrawerOpen: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;

  isMainContentFullScreen: boolean;
};

const StudioContext = createContext<StudioContextType | null>(null);

export const useStudioContext = () => {
  const context = useContext(StudioContext);

  if (!context) {
    throw new Error('useStudioContext must be used within a StudioProvider');
  }

  return context;
};

export const StudioProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isMainContentFullScreen = ['/film-pub'].includes(pathname);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleMediaQueryChange = (
      e: MediaQueryListEvent | MediaQueryList,
    ) => {
      if (e.matches) {
        setIsDrawerOpen(false);
      }
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <StudioContext.Provider
      value={{
        isDrawerOpen,
        handleDrawerOpen,
        handleDrawerClose,

        isMainContentFullScreen,
      }}
    >
      {children}
    </StudioContext.Provider>
  );
};
