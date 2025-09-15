import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (

    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
    
      <div className={darkMode ? "dark min-h-screen" : "min-h-screen"}>
    
        {children}
    
      </div>
    
    </ThemeContext.Provider>

  );

};

export const useTheme = () => useContext(ThemeContext);