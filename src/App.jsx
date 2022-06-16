import React, { useEffect } from 'react';
import './App.scss';
import {Data} from './data/Data'
import {Names} from './data/Names'
import { Route, Routes, useNavigate } from "react-router-dom";
import BingoBoard from './components/bingoBoard/bingoBoard';
import UserPage from './pages/userPage/userPage';
import ThemeProvider from './context/ThemeProvider';
import useLocalStorage from 'react-use-localstorage'

const filteredPeople = [
  "Leanthony",
  "Daniella"
]

function App() {
  let navigate = useNavigate();
  const [item] = useLocalStorage("signedFirstTime", false)
  const countBingoItems = () => {
    const counts = {};
    Names.forEach(x => {
      let items = Data.filter(y => y.name.includes(x));
      counts[x] = {
        count: items.length,
        items: items.map(y => y.text)
      }
    })
    console.log(counts);
  }
  useEffect(() => {
    // countBingoItems();
    if(!window.localStorage.getItem("username"))
      return navigate("/login")
  }, [navigate])
  useEffect(() => {
    if(!item) {
      window.localStorage.clear();
    }
  }, [])
  return (
    <ThemeProvider>
      <div className='App'>
        <Routes>
          <Route 
            path="/" 
            element={<BingoBoard items={Data.filter(x => !x.name.some(y => filteredPeople.includes(y)))}/>}
          />
          <Route path="/login" element={<UserPage />}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
