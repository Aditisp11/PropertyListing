import React, { createContext, useContext, useState } from 'react';


export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  description: string;
  type: string;
  coordinates: string;
}

interface AppContextType {
  properties: Property[];
  selectedProperty: Property | null;
  darkMode: boolean;
  addProperty: (property: Omit<Property, 'id'>) => void;
  selectProperty: (property: Property) => void;
  closeModal: () => void;
  toggleDarkMode: () => void;
}


const AppContext = createContext<AppContextType | undefined>(undefined);


export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const addProperty = (property: Omit<Property, 'id'>) => {
    const newProperty: Property = {
      ...property,
      id: Date.now(),
    };
    setProperties((prev) => [...prev, newProperty]);
  };

  const selectProperty = (property: Property) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        properties,
        selectedProperty,
        darkMode,
        addProperty,
        selectProperty,
        closeModal,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
