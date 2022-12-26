import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "../src/components/loc/Footer.js"

import Tutorial from "./components/tutorial.component";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/loc/navbar";
import Config from "./components/config"
import { connect, useDispatch, useSelector } from "react-redux";
import {clearPing} from "./slices/dataFetch"
import Reports from "./components/reports";
import ProductSingle from "./components/productSingle/ProductSingle";
import Profile from "./components/profile/Profile";
import EditProfile from "./components/editProfile/EditProfile";
import UpdateProfile from "./components/updateProfile/UpdateProfile";
import ChangePassword from "./components/changePassword/ChangePassword";
import Sell from "./components/sell/Sell";
import Mylike from "./components/mylike/Mylike";
import Message from "./components/message/Message";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearPing())
    
  },[]);

    return (
      <Router>
        <Navbar/>
        <div className="container mt-3">
          <Routes>
            <Route exact path="/" element={<Home/>} end/>
            <Route exact path="/productSingle" element={<ProductSingle/>} end/>
            <Route exact path="/config" element={<Config/>} end/>
            <Route exact path="/profile" element={<Profile/>} end/>
            <Route exact path="/sell" element={<Sell/>} end/>
            <Route exact path="/mylike" element={<Mylike/>} end/>
            <Route exact path="/message" element={<Message/>} end/>
            <Route exact path="/settings" element={<EditProfile/>} end/>
            <Route exact path="/editProfile" element={<EditProfile/>}>
                   <Route exact path="updateProfile" element={<UpdateProfile/>}/>
                   <Route exact path="changePassword" element={<ChangePassword/>}/>
            </Route>
            <Route exact path="/reports" element={<Reports/>} end/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    );
  
}

export default App;
