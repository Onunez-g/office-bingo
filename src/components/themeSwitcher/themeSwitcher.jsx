import React from "react";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import './themeSwitcher.scss'

const ThemeOptions = [
  {value: 'lightTheme', name: 'light'},
  {value: 'darkTheme', name: 'dark'},
  {value: 'pastelTheme', name: 'pastel'},
  {value: 'greenTheme', name: 'green'},
  {value: 'pinkTheme', name: 'pink'},
  {value: 'redTheme', name: 'red'}
]

const ThemeSwitcher = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <select className="themeSwitcher" value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
      {ThemeOptions.map((x, i) => <option value={x.value} key={i}>{x.name}</option>)}
    </select>
  )
}

export default ThemeSwitcher;