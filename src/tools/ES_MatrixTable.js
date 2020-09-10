import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { ESButton } from "./ES_Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import * as Colors from "../config/Color.config";
import { ESRadio } from "./ES_Radio";


const ESMatrix = (props) => {
  const {
    tableData,
    tableAlertInfo,
    isAdd,
    isEdit,
    handleIsEdit,
    handleEdit,
    _handleDelete,
    rowsPerPage,
    actions
  } = props;
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: Colors.PrimaryColor,
      },
    },
  });
  
  return (
    <div className="container pt-2" style={{ fontSize: 14 }}>
      <table className="table table-bordered table-striped">
        <thead>
          <tr className="text-center" >
            <th style={{padding:15}} rowSpan="2">Fields of e-Government</th>
            
            <th style={{padding:5}} colSpan="4">Importance</th>
          </tr>
          <tr className="text-center">
            <th style={{padding:5}}>Low</th>
            <th style={{padding:5}}>Rather Low</th>
            <th style={{padding:5}}>Rather High</th>
            <th style={{padding:5}}>High</th>

          </tr>
        </thead>
        <tbody>
          <TableRow
            fields={"E-government organisation"}
            low={<input type='radio'/>}
            ratherLow={<input type='radio'/>}
            ratherhigh={<input type='radio'/>}
            high={<input type='radio'/>}
          />
          <TableRow
            fields={"E-government organisation"}
            low={<input type='radio'/>}
            ratherLow={<input type='radio'/>}
            ratherhigh={<input type='radio'/>}
            high={<input type='radio'/>}
          />
        </tbody>
      </table>
    </div>
  );
};
export default ESMatrix;


const TableRow = (props) => {
  const { fields, low, ratherLow, ratherhigh, high } = props;
  return (
    <tr >
      <td style={{padding:5}}>{fields}</td>      
      <td style={{padding:5,textAlign:"center"}}>{low}</td>
      <td style={{padding:5,textAlign:"center"}}>{ratherLow}</td>
      <td style={{padding:5,textAlign:"center"}}>{ratherhigh}</td>
      <td style={{padding:5,textAlign:"center"}}>{high}</td>      
    </tr>
  );
};

