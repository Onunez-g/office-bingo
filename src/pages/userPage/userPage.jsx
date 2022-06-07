import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Names} from '../../data/Names'
import './userPage.css'

const UserPage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUsername(e.target.value)
  }
  const filteredNames = [
    "Daniella",
    "Anyone",
    "TU"
  ]

  useEffect(() => {
    if(username)
      window.localStorage.setItem('username', username)
  }, [username])

  const onClickContinue = () => {
    if(username)
    {
      window.localStorage.removeItem("bingo");
      navigate('/', {replace: true})
    }
  }

  return (
    <>
      <div className="userContainer">
        <h1 className="title">Selecciona tu nombre: </h1>
        <select className="selectBox" value={username} onChange={handleChange}>
          <option key={0} value="" selected disabled hidden>Selecciona tu nombre...</option>
          {Names.filter(x => !filteredNames.includes(x))
          .map(x => <option key={x} value={x}>{x}</option>)}
        </select>
        <button className="continue" onClick={onClickContinue} disabled={!username}>Continuar</button>
      </div>
    </>
  )
}

export default UserPage