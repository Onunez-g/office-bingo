import React, { useEffect } from 'react';
import './App.scss';
import {Data} from './data/Data'
import {Names} from './data/Names'
import { Route, Routes, useNavigate } from "react-router-dom";
import BingoBoard from './components/bingoBoard/bingoBoard';
import UserPage from './pages/userPage/userPage';

function App() {
  let navigate = useNavigate();
  const countBingoItems = () => {
    const counts = {};
    Names.forEach(x => {
      counts[x] = Data.filter(y => y.name.includes(x)).length
    })
    console.log(counts);
  }
  useEffect(() => {
    countBingoItems();
    if(!window.localStorage.getItem("username"))
      return navigate("/login")
  }, [])
  return (
    <div className='App'>
      <Routes>
        <Route 
          path="/" 
          element={<BingoBoard items={Data.filter(x => !x.name.includes("Daniella"))}/>}
        />
        <Route path="/login" element={<UserPage />}/>
      </Routes>
    </div>
  );
}

export default App;
