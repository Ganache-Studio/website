'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

type FestivalContextType = {
  isDrawerOpen: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
};

const FestivalContext = createContext<FestivalContextType>({
  isDrawerOpen: false,
  handleDrawerOpen: () => {},
  handleDrawerClose: () => {},
});

export const useFestivalContext = () => {
  return useContext(FestivalContext);
};

export const FestivalProvider = ({ children }: { children: ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  // Close the drawer when the media query changes to desktop
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
    <FestivalContext.Provider
      value={{
        isDrawerOpen,
        handleDrawerOpen,
        handleDrawerClose,
      }}
    >
      {children}
    </FestivalContext.Provider>
  );
};
