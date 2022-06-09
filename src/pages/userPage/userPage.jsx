import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Names} from '../../data/Names'
import './userPage.scss'

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
        <h1 className="title">Bienvenido a Terrenas Bingo! </h1>
        <div className="rules">
          <h2>Reglas: </h2>
          <ol>
            <li>Elige solo tu propio nombre en la app</li>
            <li>No puedes forzar a que se cumpla la condición, debe surgir de manera natural.</li>
            <li>Procura tener evidencia de lo que marques, sea un testigo que esté contigo o una foto.</li>
            <li>Nada de lo que tengas en tu tablero puede ser ocasionado por ti mismo, excepto los retos que digan TU.</li>
            <li>Podrás cambiar tu tablero solo una vez antes de empezar el juego.</li>
          </ol>
        </div>
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