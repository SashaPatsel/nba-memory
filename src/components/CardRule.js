import React, {Component} from "react";

const CardRule = props => {
  return (
    <div className="rule-card" >
      <h3 className="rule-card__num">{props.num}.</h3>

      <p className="rule-card__rule">{props.rule}</p>
    </div>  
  )
}

export default CardRule;