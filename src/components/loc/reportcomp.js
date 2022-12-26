import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

import { connect, useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  findTutorialsByTitle,
  deleteAllTutorials,
   press, squeeze 
} from "../../slices/dataFetch";


const Reportcomp = () => {
  const arr = useSelector((state) => state.datas).data
  const ok = useSelector((state) => state.datas.dataOk)

  const dispatch = useDispatch()
  useEffect(() => {
  },[]);



  return(
    <div className="scroll-table">
                <Table striped bordered hover>
        <thead className="sticky">
          <td>Config ID</td>
          <td>Ruleset / Status</td>
     



        </thead>
        <tbody>

      <tr>
         <td>Off-market Quote Protection <b></b></td>
         <td><Chip avatar={<Avatar>10</Avatar>}  color="success" label="ACTIVE" /></td>

      </tr>

      <tr>
         <td>Anti-slippage <b></b></td>
         <td><Chip avatar={<Avatar>6</Avatar>}  color="primary" label="MINIMAL" /></td>

      </tr>

      <tr>
         <td>A Book / Hybrid Dealing <b> <Chip size="small" avatar={<Avatar>B</Avatar>}   color="primary" label="FULL B BOOK" /></b></td>
         <td><Chip avatar={<Avatar>0</Avatar>}   color="error" label="NONE" /></td>

      </tr>

      <tr>
         <td>Master Spread Operator <b> <Chip size="small" avatar={<Avatar>.lmx</Avatar>}   color="primary" label="PASSTHROUGH" /></b> </td>
         <td><Chip avatar={<Avatar>3</Avatar>}   color="primary" label="MINIMAL" /></td>

      </tr>

      <tr>
         <td>DD Mode <b></b> </td>
         <td><Chip avatar={<Avatar>1</Avatar>}   color="warning" label="ERR" /></td>

      </tr>
      <tr>
         <td>API Health<b></b> </td>
         <td><Chip avatar={<Avatar>10</Avatar>}   color="success" label="ACTIVE" /></td>

      </tr>
      </tbody>
                </Table>

              


          </div>
  )
}

export default Reportcomp
