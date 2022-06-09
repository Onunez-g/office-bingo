import React from "react";
import './bingoItem.scss'

const BingoItem = ({item, index, onClick}) => {
  return (
    <div className={item.active ? "bingoItem itemChecked" : "bingoItem"} onClick={() => onClick(item.active, index)}>
      {item.id}
    </div>
  )
}

export default BingoItem;