import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';

import { connect, useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  findTutorialsByTitle,
  deleteAllTutorials,
   press, squeeze, fetchPrice 
} from "../../slices/dataFetch";


const Ratecomp = () => {
  const arr = useSelector((state) => state.datas).data
  const prices = useSelector((state) => state.datas.priceData)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPrice())
  },[]);



  return(
    <div className="scroll-table">
                <Table striped bordered hover>
        <thead className="sticky">
          <td>Symbol</td>
          <td>Time</td>
          
          <td>Bid</td>
          <td>Ask</td>
          <td>Low</td>
          <td>High</td>

          <td>Direction</td>
          <td>Digits</td>

          <td>Spread</td>


  



        </thead>
        <tbody>

      {prices.body&&prices.ok&&prices.body.map((item,index) => {
        return(
          <>
              <tr style={{fontSize:"10px"}} key={index}>
                <td>{item.SYMBOL}</td>
                <td>{item.TIME}</td>
                <td style={{color:"red",fontWeight:"600"}}>{item.BID}</td>
                <td style={{color:"green",fontWeight:"600"}}>{item.ASK}</td>
                <td style={{color:"red",fontWeight:"600"}}>{item.LOW}</td>


                <td style={{color:"green",fontWeight:"600"}}>{item.HIGH}</td>
                <td >{item.DIRECTION}</td>
                <td><b>{item.DIGITS}</b></td>
                <td>{item.SPREAD}</td>



              </tr>

          </>
        )
      })}
      </tbody>
                </Table>

              


          </div>
  )
}

export default Ratecomp
