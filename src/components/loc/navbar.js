import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./loc.css"
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import 'remixicon/fonts/remixicon.css'
import "./Navbar.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

const Navbar = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  return (
    <nav>

      <div className="nav-bar">
        <div>
          <Link end to={"/"} className="navbar-brand">
            <p style={{ fontWeight: '300' }}>baysel</p>
          </Link>
        </div>
        <div className="nav-menu">
          <ul>
            <li className="nav-item">
              <NavLink end to={"/"} className={({ isActive }) => (isActive ? 'nav-link activeNav' : 'nav-link')}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/fashion"} className={({ isActive }) => (isActive ? 'nav-link activeNav' : 'nav-link')}>
                Fashion
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/luxury"} className={({ isActive }) => (isActive ? 'nav-link activeNav' : 'nav-link')}>
                Luxury
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/productSingle"} className={({ isActive }) => (isActive ? 'nav-link activeNav' : 'nav-link')}>
                Single Product
              </NavLink>
            </li>


            <div className="user-info">
              <div className="dropdown">
                <span className="dropbtn">User</span>
                <div className="dropdown-content">
                  <div >
                    <Link style={{ display: "flex" }} to="/profile"><span><Person2OutlinedIcon /></span><span>Profile</span></Link>
                  </div>
                  <div>
                    <Link style={{ display: "flex" }} to="/settings"><span><SettingsOutlinedIcon /></span><span>setting</span></Link>
                  </div>
                  <div><Link style={{ display: "flex" }} to="/mypurchases"><span><ShoppingBagOutlinedIcon /></span><span>My purchases</span></Link>

                  </div>
                  <div>
                    <NavLink style={{ display: "flex" }} to="/mysales"><span><ReceiptOutlinedIcon /></span><span>My sales</span></NavLink>
                  </div>
                  <div>
                    {isAuthenticated ?
                      <div id="to-space">
                        {/* <p>{user.email}</p> */}
                        <Button style={{ marginLeft: "20px",marginTop:"10px",marginBottom:"10px" }} variant="contained" onClick={() => logout({ returnTo: window.location.origin })}>
                          Log Out
                        </Button>
                      </div>
                      : ''}
                  </div>
                </div>
              </div>

              <div className="btn-Lis">
                <div>
                 <Link to='/mylike'><FavoriteBorderIcon /></Link>
                </div>
                <div>
                 <Link to="/message"> <ChatBubbleOutlineIcon /></Link>
                </div>
                <div className="sell-btn">
                  <Link to="/sell"><button>Sell</button></Link>
                </div>
              </div>
            </div>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
