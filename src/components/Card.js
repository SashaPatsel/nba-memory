import React, {Component} from "react";

const Card = props => {
  return(
  <div className="card">
    <img src={props.img} alt={props.alt} className="card__img"/>
  </div>  
  )
}

export default Card;