import React from "react";
import "./dashboard.css";
import Card from "../dashboard/card/card";
import CardList from "../dashboard/card/cardlist";
import Townhall from "../../assets/images/townhall.png";
import ProfileImg from "../../assets/images/profile-img.jpg";
import PendingList from "../dashboard/pending/pendingList";
import Pending from "../dashboard/pending/pending";

function Dashboard() {
  return (
    <article>
      <div className="main-content-head">
        <h4>Good Morning Maria Gomez!</h4>
        <p>Today,Thursday 11:00am</p>
      </div>
      <div className="card-view">
        {CardList.map(function ncard(val, index) {
          return (
            <Card
              key={index}
              title={val.title}
              image={val.image}
              no1={val.no1}
              tagname1={val.tagname1}
              no2={val.no2}
              tagname2={val.tagname2}
              month={val.month}
            />
          );
        })}
      </div>
      <div className="content-view">
        <div className="item1">
          <div className="content-header">
            <h4>Pending Expenses Request</h4>
            <div className="req-arrow">
            <span className="all-request">All Request </span>
            <span className="arrow">&gt;</span>
            </div>
          </div>
          <div className="empList">
            {PendingList.map(function pcard(val, index) {
              return (
                <Pending
                  key={index}
                  id={val.id}
                  emname={val.emname}
                  image={val.image}
                  dates={val.dates}
                  comment={val.comment}
                />
              );
            })}
          </div>
        </div>
        <div className="item2">
          <div className="upcomingEvents">
            <h4>Upcoming Events </h4>
            <h4 className="greaterThan">&gt;</h4>
          </div>
          <div className="Townhall-content">
            <img src={Townhall} alt="townhall-img" className="townhall" />
            <div className="townhall-meeting">
              <h3>Townhall Meeting</h3>
              <div>
                <span className="time">Time: &nbsp;</span>
                <span className="date">8 pm, 25 Dec,Friday</span>
              </div>
              <p className="time"> Location: Google Meet</p>
            </div>
          </div>
          <div className="wrap-town-pro">
            <img src={ProfileImg} alt="profile" className="town-pro" />
            <img src={ProfileImg} alt="profile" className="town-pro" />
            <img src={ProfileImg} alt="profile" className="town-pro" />
            <img src={ProfileImg} alt="profile" className="town-pro" />
            <img src={ProfileImg} alt="profile" className="town-pro" />
            <div className="bluecircle">+20</div>
          </div>
        </div>
        <div className="item3">
          <div className="item-scroll">
            <div className="upcomingHolidays">
              <h4>Upcoming Holidays </h4>
              <h4 className="greaterThan">&gt;</h4>
            </div>
            <div className="holidayCard">
              <div className="card_img">
                <div className="img_date">25</div>
                <div className="img_cont">DEC</div>
              </div>
              <div className="cont-item">
                <div className="cont_date">25 Dec,Friday</div>
                <p className="cont_day">Christmas</p>
              </div>
            </div>
            <div className="holidayCard">
              <div className="card_img">
                <div className="img_date">01</div>
                <div className="img_cont">JAN</div>
              </div>
              <div className="cont-item">
                <div className="cont_date">01 Jan,Wednesday</div>
                <p className="cont_day">New Year</p>
              </div>
            </div>
            <div className="holidayCard">
              <div className="card_img">
                <div className="img_date">26</div>
                <div className="img_cont">JAN</div>
              </div>
              <div className="cont-item">
                <div className="cont_date">26 Jan,Friday</div>
                <p className="cont_day">Republic Day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
export default Dashboard;
