import React, { useState } from "react";
import "./employees.css";
import SearchIcon from "../../assets/images/search-icon.png";
import data from "../../redux/store/data";
import ReactPaginate from "react-paginate";

function Employees() {
  const [emplist, setEmpList] = useState(data);



  
  return (
    <article className="emp_article">
      <div className="Breadcrums">
        <span className="blue-Emp">Employees </span>
        <span className="allEmp"> / All Employees</span>
      </div>
      <div className="search_emp_wrap">
        <div className="empCount">All Employees ({emplist.length})</div>
        <div className="search-box">
          <img src={SearchIcon} alt="searchicon" className="search-icon"></img>
          <input
            type="text"
            className="searchfield"
            placeholder="Search by Employee ID,Name,email"
          ></input>
        </div>
      </div>
      <div className="emp-table">
        <table>
          <thead>
            <tr className="row-head">
              <th className="empid-head">EMP. ID</th>
              <th className="empname-head">NAME/EMAIL</th>
              <th className="emprole-head">ROLE</th>
              <th className="empmobile-head">MOBILE</th>
              <th className="empjoin-head">JOIN DATE</th>
              <th className="empmanager-head">MANAGER</th>
            </tr>
          </thead>
          <div className="emp-list">
            <tbody>
              {emplist.map((val, index) => (
                <tr className="emprow" key={index}>
                  <td className="empid">
                    <img src={val.image} alt="pro" className="emp-img" />#{val.id}
                  </td>
                  <td className="empname-email">
                    <div className="ename">{val.ename}</div>
                    <div className="emp-email">{val.email}</div>
                  </td>
                  <td className="emp-item">{val.role}</td>
                  <td className="emp-item1">{val.mobile}</td>
                  <td className="emp-item1">{val.join}</td>
                  <td className="emp-manager">{val.manager}</td>
                </tr>
              ))}
            </tbody>
          </div>
        </table>
      </div>
      <footer className="footer">
        <div className="footer_btn">
          <button className="cancle">CANCEL</button>
          <button className="save">SAVE</button>
        </div>
      </footer>
    </article>
  );
}
export default Employees;
