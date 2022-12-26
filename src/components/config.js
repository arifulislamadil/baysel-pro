import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import ListComp from "./loc/listcomp";
import TitleCard from "./loc/titleCard";
import Button from '@mui/material/Button';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  findTutorialsByTitle,
  deleteAllTutorials,
   press, squeeze , clearPing
} from "../slices/dataFetch";
import ConnectionWidget from "./loc/connectionWidget";
import StatComp from "./loc/statcomp";
import Ratecomp from "./loc/ratecomp";
import Checkbox from '@mui/material/Checkbox';
import TopAlert from "./loc/topAlert";
import Divider from '@mui/material/Divider';
import Loading from "./loc/loading";

const Config = () => {
  const datas = useSelector((state) => state.datas)
  const err = datas.pingRes
  const arr = datas.data
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearPing())

  },[]);

  const dateNow = new Date();

  const titleProp ={
    category:'Main Conn.',
    title:'mt4.boldprime.com:443',
    secTitle:',!BPL-CENT,BPL*,BBPL*,',
    desc:' this is the desc',
    misc: JSON.stringify(dateNow),
    adComp: <ConnectionWidget/>
  }

  const cardProp1 ={
    category:'Fix Session',
    title:'rates.gbePrime220.net',
    secTitle:',*,',
    desc:' this is the desc',
    misc: <b>SESSION ID: {Date.now()}</b>,
    adComp: <><Button variant="outlined" disabled>
    Configure
  </Button> <div style={{    justifyContent: 'flex-end'}} className="inline"> <p style={{fontSize:'9px',fontWeight:'700'}}>ONLINE</p> <Checkbox {...label} disabled defaultChecked /></div></>
  }

  const cardProp2 ={
    category:'Fix Session',
    title:'rt.lmx.net',
    secTitle:',*,',
    desc:' this is the desc',
    misc: <b>SESSION ID: 234235DF12334</b>,
    adComp: <><Button variant="outlined" disabled>
    Configure
  </Button> <div style={{    justifyContent: 'flex-end'}} className="inline"> <p style={{fontSize:'9px',fontWeight:'700'}}>ONLINE</p> <Checkbox {...label} disabled defaultChecked /></div></>
  }
 
  return(
    <div style={{marginBottom:'20px'}}>
               <TopAlert/>

        <TitleCard content={titleProp}/>
        <TitleCard content={cardProp1}/>
        <TitleCard content={cardProp2}/>


        <h5 style={{padding:"10px 0px"}}>Live Quotes</h5>
        <Divider light />
        <p style={{padding:"0px 0px 10px 0px",fontSize:'10px'}}>2-5 Second Polling Rate</p>

        <Ratecomp />
    </div>
  )
}

export default withAuthenticationRequired(Config, {
  onRedirecting: () => <Loading/>,
});
