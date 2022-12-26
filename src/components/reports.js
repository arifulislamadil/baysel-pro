import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import ListComp from "./loc/listcomp";
import TitleCard from "./loc/titleCard";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
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
import Reportcomp from "./loc/reportcomp";
import Loading from "./loc/loading"

const Reports = () => {
  const datas = useSelector((state) => state.datas)
  const err = datas.pingRes
  const arr = datas.data
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearPing())

  },[]);

  const dateNow = new Date();

  const cardProp2 ={
    category:'LP A Book Routing',
    title:'aggregator NOT Found',
    secTitle:',!config,',
    desc:' this is the desc',
    misc: <b>SESSION ID: NOT Found</b>,
    adComp: <><Button variant="outlined" disabled>
    Configure
  </Button> <div style={{    justifyContent: 'flex-end'}} className="inline"> <p style={{fontSize:'9px',fontWeight:'700'}}>OFFLINE</p> <Checkbox {...label} disabled /></div></>
  }

  const buttons = [
    <Button onClick={()=>alert('ERR 1330 INSUFFICIENT RIGHTS')} key="one">Edit Ruleset</Button>,
    <Button onClick={()=>alert('ERR 1330 INSUFFICIENT RIGHTS')} variant="contained" color="error" key="three">RESET Defaults</Button>,
  ];
 
  return(
    <div style={{marginBottom:'20px'}}>
        <TitleCard content={cardProp2}/>
        <h5 style={{padding:"10px 0px"}}>Conflict Report</h5>
        <Divider light />
        <p style={{padding:"0px 0px 10px 0px",fontSize:'10px'}}>Err. Msg / Dropped Connections & Bad orders</p>

        <Reportcomp/>
        <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </div>
  )
}

export default withAuthenticationRequired(Reports, {
  onRedirecting: () => <Loading/>,
});
