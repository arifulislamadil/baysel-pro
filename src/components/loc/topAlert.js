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


const TopAlert = () => {
  const vol = useSelector((state) => state.datas.volData)
  const pnl = useSelector((state) => state.datas.pnlData)

  const datas = useSelector((state) => state.datas)
  const err = datas.pingRes
  const date = new Date();  
  const month = date.toLocaleString('default', { month: 'long' }) 
  const mth = date.getMonth()+1

  const dispatch = useDispatch()

  useEffect(() => {

  },[]);

 

  return(<>
    {err.status.length > 0 && err.status === 'success'? 
      <div style={err.status === 'success' ? {backgroundColor:'green',color:'white',padding:'10px'}: {backgroundColor:'red',color:'white',padding:'10px'}}>
        <h5>{datas.pingRes.msg}</h5>
        <p style={{fontSize:'9px'}}>{datas.pingRes.body}</p>
      </div> 
       :''}
       </>
  )
}

export default TopAlert
