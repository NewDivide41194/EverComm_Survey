import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { ESButton } from "./ES_Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import * as Colors from "../config/Color.config";
import shadows from "@material-ui/core/styles/shadows";

const  ES_Table=(props)=> {
  const {
    tableData,
    tableAlertInfo,
    isAdd,
    isEdit,
    handleIsEdit,
    handleEdit,
    rowsPerPage,
  } = props;

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: Colors.PrimaryColor,
        
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <MaterialTable
      style={{paddingBottom:20,boxShadow:"none"}}
        onRowClick={
          isEdit
            ? (event, rowData) =>
                handleEdit(tableData.data[rowData.tableData.id])
            : null
        }
        title={tableAlertInfo}
        columns={tableData.columns}        
        data={tableData.data}
        options={{
          headerStyle: {
            backgroundColor: Colors.PrimaryColor,
            color: "#FFF",
          },
          rowStyle: (rowData) => ({
            lineHeight: 0,
          }),
          padding: "dense",    
        }}
      />
    </MuiThemeProvider>
  );
}

export default ES_Table