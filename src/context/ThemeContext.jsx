"use client"
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const MyThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode error');
  }
  return context;
};
