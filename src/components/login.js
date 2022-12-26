import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import ListComp from "./loc/listcomp";
import TitleCard from "./loc/titleCard";
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  findTutorialsByTitle,
  deleteAllTutorials,
   press, squeeze 
} from "../slices/dataFetch";


const Login= () => {
  const datas = useSelector((state) => state.datas)
  const arr = datas.data

  const dispatch = useDispatch()
  useEffect(() => {

  },[]);

  const dateNow = new Date();

  const titleProp ={
    category:'Main Conn.',
    title:'mt4.boldprime.com:443',
    secTitle:',!BPL-CENT,BPL*,BBPL*,',
    desc:' this is the desc',
    misc: JSON.stringify(dateNow),
    adComp: <>{arr ? <Button variant="contained" color="success">Connected</Button> : <Button variant="contained" color="error">No Connection</Button>}</>
  }

  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
  };
 
  return(
    <div>
    Click Here to Log In

    <LoginButton />
    </div>
  )
}

export default Login
