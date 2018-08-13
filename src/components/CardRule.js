import React, {Component} from "react";

const CardRule = props => {
  return(
    <div className="card" style={props.team} onClick={() => {
      return props.memory(props.id);
    }}>
    <img src={props.img} alt={props.alt} className="card__img"/>
  </div>  
  )
}

export default CardRule;