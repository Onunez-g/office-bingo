import React from "react";

export const initialThemeState = {
  theme: 'lightTheme',
  setTheme: () => null
}

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;