import React from "react";
import "./pending.css";

function Pending({id,emname,image,dates,comment}) {
  return (
    <>
      <div className="pending-cards">
        <div className="pending-card1">
          <img src={image} alt="pic" className="pending-card-img"></img>
          <div className="ename-content">
            <div className="card-eid">#{id}</div>
            <div className="card-ename">{emname}</div>
          </div>
        </div>
        <div className="right-cont">
        <div className="edate-content">
          <div className="card-edate">Dates : {dates}</div>
          <div className="card-ecomment">Comment : {comment}</div>
        </div>
        <div className="btns">
            <button className="reject">X Reject</button>
            <button className="approve">&#10004; Approve</button>
        </div>
        </div>
      </div>
    </>
  );
}
export default Pending;