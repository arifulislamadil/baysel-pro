import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect, useDispatch, useSelector } from "react-redux";
import "./loc.css"
import { ping,fetchData } from "../../slices/dataFetch"
import LoadingButton from '@mui/lab/LoadingButton';

const ConnectionWidget = (data) => {
  const arr = useSelector((state) => state.datas).data
  const err = useSelector((state) => state.datas.loadingPing)
  const prop = data.content

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  },[]);
 

  return(
    <div className="col">
      { arr.length>0 ? <Button variant="contained" color="success">Connected</Button> : <Button variant="contained" color="error">No Connection</Button> }
      {err&&err ? <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton> : <Button onClick={ () =>   dispatch(ping('mt4.boldprime.com'))} variant="outlined">Ping Server</Button>}
    </div>
  )
}

export default ConnectionWidget
