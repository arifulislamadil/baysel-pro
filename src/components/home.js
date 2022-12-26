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
  press, squeeze, clearPing
} from "../slices/dataFetch";
import ConnectionWidget from "./loc/connectionWidget";
import StatComp from "./loc/statcomp";
import TopAlert from "./loc/topAlert";
import Divider from '@mui/material/Divider';
import Loading from "./loc/loading";
import Spotlight from "./spotlight/Spotlight";
import SearchBar from "./searchBar/SearchBar";
import Banner from "./banner/Banner";
import OurProduct from "./ourproducts/OurProduct";



const HomePage = () => {
  const datas = useSelector((state) => state.datas)
  const err = datas.pingRes
  const arr = datas.data

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearPing())

  }, []);

  const dateNow = new Date();

  const titleProp = {
    category: 'Main Conn.',
    title: 'mt4.boldprime.com:443',
    secTitle: ',!BPL-CENT,BPL*,BBPL*,',
    desc: ' this is the desc',
    misc: JSON.stringify(dateNow),
    adComp: <ConnectionWidget />
  }

  return (
    <div>
      <SearchBar />
      <Banner/>
      <Spotlight />
      <OurProduct/>
      {/* <TopAlert/>
        <TitleCard content={titleProp}/>
        <StatComp/>
        <h5 style={{padding:"10px 0px 0px 0px"}}>LIVE Order Stream</h5>
        <Divider light />
        <p style={{padding:"0px 0px 10px 0px",fontSize:'10px'}}>2-5 Second Polling Rate</p>
        <ListComp/> */}
    </div>
  )
}

export default withAuthenticationRequired(HomePage, {
  onRedirecting: () => <Loading />,
});
