'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

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

export const StudioProvider = ({
  isMainContentFullScreen,
  children,
}: {
  isMainContentFullScreen: boolean;
  children: ReactNode;
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia('(min-width: 1024px)');

    const handleMediaQueryChange = (e: MediaQueryListEvent | MediaQueryList) => {
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
