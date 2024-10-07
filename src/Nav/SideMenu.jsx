import React from "react";
import "../Nav/Nav.css";
import logo from "../assets/image/logo.svg";
import dash from "../assets/svg/dash.svg";
import registration from "../assets/svg/registration.svg";
import inbox from "../assets/svg/inbox.svg";
import list from "../assets/svg/list.svg";
import transaction from "../assets/svg/transaction.svg";
import setting from "../assets/svg/setting.svg";
import logout from "../assets/svg/logout.svg";
import { Link } from "react-router-dom";
const SideMenu = () => {
  return (
    <div className="side-bar">
      <div className="top">
        <header>
          <img src={logo} alt="profileImg" />
          <h2>CLIENTSBRIDGE</h2>
        </header>
        <div className="sideContent">
          <ul>
            <li>
              <img src={dash} alt="dash" />
              <Link to='/'>Dashboard</Link>
            </li>
            <li>
              <img src={registration} alt="registration" />
              <Link to='/registration'>Registration</Link>
            </li>
            <li>
              <img src={inbox} alt="inbox" />
              <Link to='/inbox'>Inbox</Link>
            </li>
            <li>
              <img src={list} alt="list" />
              <Link to='/order'>Order List</Link>
            </li>
            <li>
              <img src={transaction} alt="transaction" />
              <Link to='/transaction'>Transaction</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="Logout">
        <ul>
          <li>
            <img src={setting} alt="setting" />
            <p>Setting</p>
          </li>
          <li>
            <img src={logout} alt="logout" />
            <p>Log out</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
