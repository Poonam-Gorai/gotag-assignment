import React, { useState } from "react";
import "./employees.css";
import SearchIcon from "../../assets/images/search.png";
import data from "../../redux/store/data";
import TableScrollbar from "react-table-scrollbar";
// import Dropdown from "./dropdown/dropdown";
// import managers from '../../redux/store/managerlist.json';
import EmployeeList from "./employeelist/employeelist";
import BreadCrumb from "../../components/breadcrumb/breadcrumb";
import SortUp from "../../assets/images/up.png";
import Sortdown from "../../assets/images/down.png";

function Employees() {
  const [emplist, setEmpList] = useState(data);

  //breadcrumbs
  const [crumbs, setCrumbs] = useState(["Employees / ", "All Employees"]);

  const selected = (crumb) => {
    console.log(crumb);
  };

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
      const sorted = [...emplist].sort((a, b) => a[col] - b[col]);
      setEmpList(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...emplist].sort((a, b) => b[col] - a[col]);
      setEmpList(sorted);
      setOrder("ASC");
    }
  };
  function isLast(index) {
    return index === emplist.length;
  }
  // pagination
  const [visible, setVisible] = useState(10);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 10);
    console.log(setVisible);
  };

  return (
    <article className="emp_article">
      <BreadCrumb crumbs={crumbs} selected={selected} />
      {/* <div className="Breadcrums">
        <span className="blue-Emp">Employees </span>
        <span className="allEmp"> / All Employees</span>
      </div> */}
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
              <th className="empid-head" onClick={() => sortingNum("id")}>
                <div className="th-element">
                  <span className="empid-head1">EMP. ID</span>
                  <div className="sortelem">
                    <img className="sort-icon" src={SortUp} alt="sort" />
                    <img className="sort-icon" src={Sortdown} alt="sort" />
                  </div>
                </div>
              </th>
              <th onClick={() => sorting("ename")} className="empname-head">
                <div className="th-element">
                  <span className="empname-head1">NAME/EMAIL</span>
                  <div className="sortelem">
                    <img className="sort-icon" src={SortUp} alt="sort" />
                    <img className="sort-icon" src={Sortdown} alt="sort" />
                  </div>
                </div>
              </th>
              <th onClick={() => sorting("role")} className="emprole-head">
                <div className="th-element">
                  <span className="emprole-head1">ROLE</span>
                  <div className="sortelem">
                    <img className="sort-icon" src={SortUp} alt="sort" />
                    <img className="sort-icon" src={Sortdown} alt="sort" />
                  </div>
                </div>
              </th>
              <th className="empmobile-head">
                <div className="th-element">
                  <span className="emprole-head1">MOBILE</span>
                  <div className="sortelem">
                    <img className="sort-icon" src={SortUp} alt="sort" />
                    <img className="sort-icon" src={Sortdown} alt="sort" />
                  </div>
                </div>
              </th>
              <th className="empjoin-head">
                <div className="th-element">
                  <span className="emprole-head1">JOIN DATE</span>
                  <div className="sortelem">
                    <img className="sort-icon" src={SortUp} alt="sort" />
                    <img className="sort-icon" src={Sortdown} alt="sort" />
                  </div>
                </div>
              </th>
              <th className="empmanager-head">
                <div className="th-element">
                  <span className="emprole-head1">MANAGER</span>
                  <div className="sortelem">
                    <img className="sort-icon" src={SortUp} alt="sort" />
                    <img className="sort-icon" src={Sortdown} alt="sort" />
                  </div>
                </div>
              </th>
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
                .map((val) => (
                  <tr className="emprow" key={val.id}>
                    <EmployeeList
                      ename={val.ename}
                      email={val.email}
                      role={val.role}
                      mobile={val.mobile}
                      join={val.join}
                      image={val.image}
                      id={val.id}
                    />
                    {/* <td className="empid">
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
                    <td className="emp-manager" style={{width:90}}>
                      <Dropdown 
                      options={managers} 
                      prompt="Select"
                      value={value}
                      // id={val.id}
                      onChange={(empval) => setValue(empval)}
                      /></td> */}
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
