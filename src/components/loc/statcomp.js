import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import { connect, useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  findTutorialsByTitle,
  deleteAllTutorials,
   press, squeeze, fetchVol , fetchPnl
} from "../../slices/dataFetch";
import LoadingButton from '@mui/lab/LoadingButton';


const StatComp = () => {
  const vol = useSelector((state) => state.datas.volData)
  const pnl = useSelector((state) => state.datas.pnlData)


  const date = new Date();  
  const month = date.toLocaleString('default', { month: 'long' }) 
  const mth = date.getMonth()+1

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVol(mth))
    dispatch(fetchPnl(mth))

  },[]);

 

  return(
    <Card className="inline-left" variant="outlined">
        <div className="dataCard">
          <p className="dc-title">{month}'s Processed Volume </p> 
            {vol&&vol.loading === 'true' ? <LoadingButton loading variant="">
        Submit
      </LoadingButton>: <p className="dc-val">{vol.ok&&vol.body&&vol.body.map(x => Object.values(x))*(1.0/100)} lots</p>}
        </div>

        <div className="dataCard">
          <p className="dc-title">{month}'s LIVE PNL</p> 
            {pnl&&pnl.loading === 'true' ? <LoadingButton loading variant="">
        Submit
      </LoadingButton>: <p style={{color:"green"}} className="dc-val">{pnl.ok&&pnl.body&&pnl.body.map(x => Math.round(Object.values(x) * 100) / 100)} USD</p>}
        </div>
    </Card> 
  )
}

export default StatComp
