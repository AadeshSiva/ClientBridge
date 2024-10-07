import React from "react";
import SideMenu from "./Nav/SideMenu.jsx";
import TopNav from "./Nav/TopNav.jsx";
import "./Nav/Nav.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Inbox from "./Inbox/Inbox.jsx";
import Order from "./OrderList/OrderList.jsx";
import Registration from "./Registration/FreelancerReg/FreelancerReg.jsx";
import Transaction from "./Transaction/Transaction.jsx";
const App = () => {
  return (
    <Router>
      <div className="pg">
        <SideMenu />
        <div className="right">
          <TopNav className="top" />
       
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/order" element={<Order />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes> 
      </div>
      </div>
    </Router>
  );
};

export default App;
