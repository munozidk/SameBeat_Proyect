import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface FilterContextType {
  selectedGenres: string[];
  toggleGenre: (genre: string) => void;
  allGenres: string[];
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const ALL_GENRES = [
  'Rock', 'Electronica', 'Indie', 'Pop', 'Techno', 
  'Reguetón', 'Salsa', 'Jazz', 'Hip-Hop', 'Metal', 
  'Clásica', 'Cumbia', 'Trap', 'Punk', 'Funk', 
  'Bachata', 'Vallenato'
];

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  return (
    <FilterContext.Provider value={{ selectedGenres, toggleGenre, allGenres: ALL_GENRES }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
