import React, { useState } from "react";
import "../employees.css";
import Modal from "../modal/modal";
//import managers from "../../../redux/store/managerlist.json";
import { useDispatch, useSelector } from "react-redux";
import Down from "../../../assets/images/down.png";
import SearchIcon from "../../../assets/images/search.png"

function EmployeeList({ ename, email, role, mobile, join, image, id }) {
 

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    //console.log(e.ename)
    const empdata = {
      id: id ,
      ename: ename ,
      email: email ,
      role:  role ,
      mobile:  mobile ,
      join:  join ,
      image : image,
      manager: e.ename
    };
    dispatch({ type: "EDIT_MANAGER", payload: empdata });
    setIsOpen(false);
  };
  const removespace = (search) => {
    setSearchTerm(search.trim()
    .split(/ +/)
    .join(" "));
  }
  const empList = useSelector((state) => state.SaveReducer);
//console.log(empList[id - 1].manager);
  return (
    <>
      <td className="empid">
        <img src={image} alt="img" className="emp-img" />#{id}
      </td>
      <td className="empname-email">
        <div className="ename">{ename}</div>
        <div className="emp-email">{email}</div>
      </td>
      <td className="emp-item">{role}</td>
      <td className="emp-item1">{mobile}</td>
      <td className="emp-item1">{join}</td>
      <td className="emp-manager">
        {(empList[id - 1].manager === "") ? (
          <span className="display-select" onClick={() => setIsOpen(true)}>
            Select
            <span>
              <img src={Down} alt="downicon" className="down-icon"/>
            </span>
          </span>
        ) : (
          <span
            className=" blue-man display-select"
            onClick={() => setIsOpen(true)}
          >
            {empList[id-1].manager}
            <span>
              <img src={Down} alt=" downicon"className="down-icon" />
            </span>
          </span>
        )}
        <div className="flex-wrapper">
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <div
              className="manager-model-head"
              onClick={() => setIsOpen(false)}
            >
              Select a manager
            </div>
            <div className="inputfield">
              <img
                className="searchIcon-manag"
                src={SearchIcon}
                alt="search"
              ></img>
              <input
                className="search-inputfield"
                type="text"
                value={searchTerm}
                placeholder="Search"
                onChange={(e) => removespace(e.target.value)}
              ></input>
            </div>
            <div className="manager-list">
              <div className="list_name"key={0}>none</div>
              {empList
                .filter((val) => {
                  if (
                    !(
                      val.ename?.toLowerCase() ===
                      ename.toLowerCase()
                    )
                  ) {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.ename
                        ?.toLowerCase()
                        .includes(searchTerm.toLowerCase().trim())
                    ) {
                      return val;
                    }
                  }
                  return null;
                })
                .map((emanager) => {
                  return (
                    <div className="list_name"
                      onClick={() => {
                        handleSubmit(emanager);
                        setIsOpen(false);
                      }}
                      key={emanager.id}
                    >
                      {emanager.ename} <span>+</span>
                    </div>
                  );
                })}
            </div>
          </Modal>
        </div>
      </td>
    </>
  );
}
export default EmployeeList;
