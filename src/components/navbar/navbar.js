import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { MenuList } from "./menulist";
import Gotag from "../../assets/images/GOTAG.png"
import Notify from '../../assets/images/notifiy-icon.jpg';
import Profile from '../../assets/images/profile-img.jpg';

function Navbar() {
  const location = useLocation();

  const menulist = MenuList.map(({ url, title, test, id, image }, index) => {
    return (
      <li className ="nav-li"key={index} id={location.pathname === url ? "active" : " "}>
        <Link to={url}>
        {/* <Link to={`${url}?name=${test}&age=10`}> */}
         <div className="img-wid"> <img src={image} alt="alt-img"/></div>
          <span className="title">{title}</span>
        </Link>
      </li>
    );
  });
  return (
    <>
      <header>
        <Link to="/dashboard">
        <img src={Gotag} className="logo" alt="logo"/></Link>
        <div className="wrapper-profile">
          <img src={Notify} className="notify-icon" alt="notify"/>
          <div className="img-content">
            <div className="content">
              <p className="maria">Maria Gomez</p>
              <p className="admin">Admin</p>
            </div>
            <img src={Profile} className="profile-icon" alt="pro"/>
          </div>
        </div>
      </header>
      <nav>
        <ul>{menulist}</ul>
      </nav>
    </>
  );
}
export default Navbar;
