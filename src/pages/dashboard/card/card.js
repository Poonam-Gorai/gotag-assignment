import React from "react";
import "./card.css"


//console.log(CardList[0])

function Card({title,image,no1,no2,tagname1,tagname2,month}) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={image} alt="pic" className="card-img"></img>
          <div className="title-content">
            <div className="card-title">{title}</div>
            <div className="tagname1">{month}</div>
          </div>
        </div>
        <div className="info">
            <span className="num1">{no1}</span> &nbsp;
            <span className="tagname1">{tagname1}</span> &nbsp;
            <span className="num2">{no2}</span> &nbsp;
            <span className="tagname1">{tagname2}</span>
        </div>
      </div>
    </>
  );
}
export default Card;
