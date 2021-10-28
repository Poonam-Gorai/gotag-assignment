import React, { useState } from "react";
import "./employees.css";
import SearchIcon from "../../assets/images/search-icon.png";
import data from "../../redux/store/data";
import TableScrollbar from "react-table-scrollbar";

function Employees() {
  const [emplist, setEmpList] = useState(data);

  //search
  const [searchTerm, setSearchTerm] = useState("");

  //Sorting
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    console.log("clicked");
    if (order === "ASC") {
      const sorted = [...emplist].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setEmpList(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...emplist].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setEmpList(sorted);
      setOrder("ASC");
    }
  };
  const sortingNum = (col) => {
    //console.log("clicked");
    if (order === "ASC") {
      const sorted = [...emplist].sort((a, b) =>
        a[col] - b[col]
      );
      setEmpList(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...emplist].sort((a, b) =>
      b[col] - a[col]
      );
      setEmpList(sorted);
      setOrder("ASC");
    }
  };

  // pagination
  const [visible, setVisible] = useState(10);
  const showMoreItems = () => {
    console.log("click");
    setVisible((prevValue) => prevValue + 10);
  };

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
            placeholder="Search by Employee Name,email and role"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="emp-table">
        <table>
          <thead>
            <tr className="row-head">
              <th onClick={() => sortingNum("id")}className="empid-head">EMP. ID</th>
              <th onClick={() => sorting("ename")} className="empname-head">
                NAME/EMAIL
              </th>
              <th onClick={() => sorting("role")} className="emprole-head">
                ROLE
              </th>
              <th className="empmobile-head">MOBILE</th>
              <th className="empjoin-head">JOIN DATE</th>
              <th className="empmanager-head">MANAGER</th>
            </tr>
          </thead>
        </table>
        {/* <div className="emp-list"> */}
        <TableScrollbar>
          <table>
            <tbody>
              {emplist
                // eslint-disable-next-line
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.ename.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  } else if (
                    val.email.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  } else if (
                    val.role.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  } else if (
                    val.id.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .slice(0, visible)
                .map((val, index) => (
                  <tr className="emprow" key={index}>
                    <td className="empid">
                      <img src={val.image} alt="img" className="emp-img" />#
                      {val.id}
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
            {/* </div> */}
          </table>
          <div className="btn-See-more">
            <button onClick={showMoreItems} className="btnSee">
              See more...
            </button>
          </div>
        </TableScrollbar>
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
