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


const TitleCard = (data) => {
  const arr = useSelector((state) => state.datas).data

  const prop = data.content

  const dispatch = useDispatch()
  useEffect(() => {


  },[]);
 
  const card = (
    <Card className="mainCard" variant="outlined">
    <CardContent>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          {prop.category}
        </Typography>
        <Typography sx={{ fontSize: 16 }} variant="h5" component="div">
          {prop.title}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          {prop.secTitle}
        </Typography>
        <Typography sx={{ fontSize: 9 }} variant="body2">
          {prop.misc}
        </Typography>
      </CardContent>
      <div className="min_pad">
      {prop.adComp}
      </div>
      </Card>
        );


  



  return(
    <div>
      <Card variant="outlined">{card}</Card>
    </div>
  )
}

export default TitleCard
