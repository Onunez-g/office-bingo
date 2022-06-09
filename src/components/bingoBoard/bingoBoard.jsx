import React, { useEffect, useState } from "react";
import './bingoBoard.scss'
import BingoItem from "../bingoItem/bingoItem";
import ListItem from "../listItem/listItem";
import { useNavigate } from "react-router-dom";

const BingoBoard = ({items}) => {
  const [bingoItems, setBingoItems] = useState([])
  const navigate = useNavigate();
  let username = window.localStorage.getItem("username");

  useEffect(() => {
    let local = JSON.parse(window.localStorage.getItem('bingo') || "[]");
    setBingoItems(local.length === 0 ? createBoard() : local)
  }, [])

  useEffect(() => {
    if(bingoItems.length !== 0) {
      window.localStorage.setItem('bingo', JSON.stringify(bingoItems));
    }
  }, [bingoItems])

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const createBoard = () => {
    let arr = items.filter((x) => !x.name.includes(username));
    let anyones = shuffle(arr.filter((x) => x.name.includes("Anyone"))).slice(0, 10);
    let dare = shuffle(arr.filter((x) => x.name.includes("TU")))[0];
    let others = shuffle(arr.filter((x) => !x.name.includes("Anyone") && !x.name.includes("TU"))).slice(0, 14);
    let result = shuffle([...anyones,...others])
    result.splice(12,0, dare)
    return result;
  }
  const renderItems = () => {
    return bingoItems.map((x, i) => <BingoItem item={x} key={x.id} index={i} onClick={onListItemClick}/>)
  }

  const onListItemClick = (value, index) => {
    let array = [...bingoItems];
    array[index].active = !value;
    setBingoItems(array)
  }
  const onResetBoard = () => {
    setBingoItems(createBoard())
  }
  const changeUserClick = () => {
    navigate('/login')
  }
  return (
    <div className="box">
      <div className="header">
        <p>User: {username}</p>
        <button className="btn resetBtn" onClick={onResetBoard}>Reset board</button>
        <button className="btn loginBtn" onClick={changeUserClick}>Change user</button>
      </div>
      <div className="content">
        <h2>BINGO</h2>
        <div className="board">
          {renderItems()}
        </div>
      </div>
      <div className="list">
        {bingoItems.map((x, i) => <ListItem key={x.id} item={x} index={i} onClick={onListItemClick}/>)}
      </div>
    </div>
  )
}

export default BingoBoard