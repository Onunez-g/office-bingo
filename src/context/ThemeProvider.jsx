import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ThemeContext, {initialThemeState} from "./ThemeContext";

const ThemeProvider = ({children}) => {
  const localStorage = window.localStorage;
  const [theme, setTheme] = useState(localStorage.getItem("globalTheme") || initialThemeState.theme);


  useEffect(() => {
    const savedThemeLocal = localStorage.getItem("globalTheme");

    if(!!savedThemeLocal) {
      setTheme(savedThemeLocal)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("globalTheme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`theme-${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;