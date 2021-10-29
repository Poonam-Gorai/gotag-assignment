import React,{useState} from "react";
import "../employees.css"
import Dropdown from "../dropdown/dropdown";
import managers from '../../../redux/store/managerlist.json';

function EmployeeList({ename,email,role,mobile,join,image,id}){
    const [value, setValue] = useState(null);
    return(
        <>
        <td className="empid">
                      <img src={image} alt="img" className="emp-img" />#
                      {id}
                    </td>
                    <td className="empname-email">
                      <div className="ename">{ename}</div>
                      <div className="emp-email">{email}</div>
                    </td>
                    <td className="emp-item">{role}</td>
                    <td className="emp-item1">{mobile}</td>
                    <td className="emp-item1">{join}</td>
                    <td className="emp-manager" style={{width:90}}>
                      <Dropdown 
                      options={managers} 
                      prompt="Select"
                      value={value}
                      // id={val.id}
                      onChange={(empval) => setValue(empval)}
                      /></td>
        </>
    )
}
export default EmployeeList;