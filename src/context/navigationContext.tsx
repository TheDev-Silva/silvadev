// contexts/NavigationContext.tsx
'use client'
import React, { createContext, useContext, ReactNode } from 'react';

interface NavigationContextProps {
   handleScrollTo: (height: number) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
   const handleScrollTo = (height: number) => {
      window.scrollTo({
         top: height,
         behavior: 'smooth',
      });
   };

   return (
      <NavigationContext.Provider value={{ handleScrollTo }}>
         {children}
      </NavigationContext.Provider>
   );
};

export const useNavigation = () => {
   const context = useContext(NavigationContext);
   if (!context) {
      throw new Error('useNavigation must be used within a NavigationProvider');
   }
   return context;
};
