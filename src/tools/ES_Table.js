import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { ESButton } from "./ES_Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import * as Colors from "../config/Color.config";

const ESTable = (props) => {
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
    <MuiThemeProvider theme={theme}>
      <MaterialTable
        actions={actions}
        style={{ paddingBottom: 20, boxShadow: "none" }}
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
          actionsColumnIndex: -1,
        }}
      />
    </MuiThemeProvider>
  );
};

export default ESTable;
