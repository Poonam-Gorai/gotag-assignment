import React from "react";
import "./employees.css";
import SearchIcon from "../../assets/images/search-icon.png"
function Employees() {
  return (
    <article>
      <div className="Breadcrums">
        <span className="blue-Emp">Employees </span>
        <span className="allEmp"> / All Employees</span>
      </div>
      <div className="search_emp_wrap">
        <div className="empCount">All Employees ()</div>
        <div className="search-box">
            <img src={SearchIcon}className="search-icon"></img>
            <input type="text"  className="searchfield" placeholder="Search by Employee ID,Name,Email">
            </input>  
        </div> 
      </div>
      <div className="emp-table"></div>
      <div className="footer"></div>
    </article>
  );
}
export default Employees;
