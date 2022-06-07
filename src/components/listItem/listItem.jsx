import React from "react";
import './listItem.css'

const ListItem = ({item, index, onClick}) => {
  return (
    <div className="checkItem" onClick={() => onClick(item.active, index)}>
      <input checked={item.active} type="checkbox" readOnly/>
      <h3 className="numberId">{item.id}</h3>
      {item.active ? <strike> {item.text}</strike> : <p> {item.text}</p>}
    </div>
  )
}

export default ListItem