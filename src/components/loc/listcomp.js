import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';

import { connect, useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  findTutorialsByTitle,
  deleteAllTutorials,
   press, squeeze 
} from "../../slices/dataFetch";


const ListComp = () => {
  const arr = useSelector((state) => state.datas).data
  const ok = useSelector((state) => state.datas.dataOk)

  const dispatch = useDispatch()
  useEffect(() => {
  },[]);



  return(
    <div className="scroll-table">
                <Table striped bordered hover>
        <thead className="sticky">
          <td>Ticket No.</td>
          <td>Login</td>
          <td>Symbol</td>
          <td>Volume</td>
          <td>Digits</td>



          <td>Open Price</td>
          <td>Close Price</td>
          <td>Profit</td>
          <td>Comment</td>

          <td>Open Time</td>
          <td>Close Time</td>



        </thead>
        <tbody>

      {ok&&arr.map((item,index) => {
        return(
          <>
              <tr style={{fontSize:"10px"}} key={index}>
                <td>{item.TICKET}</td>
                <td>{item.LOGIN}</td>
                <td>{item.SYMBOL}</td>
                <td>{item.VOLUME}</td>
                <td>{item.DIGITS}</td>


                <td style={{color:"green",fontWeight:"600"}}>{item.OPEN_PRICE}</td>
                <td style={{color:"red",fontWeight:"600"}}>{item.CLOSE_PRICE}</td>
                <td><b>{item.PROFIT}</b></td>
                <td>{item.COMMENT}</td>




                <td style={{fontSize:"9px"}}>{item.OPEN_TIME}</td>
                <td style={{fontSize:"9px"}}>{item.CLOSE_TIME}</td>

              </tr>

          </>
        )
      })}
      </tbody>
                </Table>

              


          </div>
  )
}

export default ListComp
