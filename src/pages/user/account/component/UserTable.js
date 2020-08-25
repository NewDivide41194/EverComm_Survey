import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { ESButton } from "../../../../tools/ES_Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import * as Colors from "../../../../config/Color.config";
import shadows from "@material-ui/core/styles/shadows";

export default function UserTable(props) {
  const {
    userData,
    handleIsAdd,
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

  const [tableData, setTableData] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Email", field: "email" },
      { title: "Role", field: "role" },
      { title: "Company", field: "companyName" },
      {
        title: "Active",
        render: (userData) =>
          userData.active === 1 ? (
            <i className="fas fa-check-square" style={{ color: "green" }}></i>
          ) : (
            <i className="far fa-square" style={{ color: "green" }}></i>
          ),
      },
      { title: "Created Date", render: (userData) => userData.created_date.split("-").join("/")},
    ],
    data: userData,
  });

  const actionButtons = (
    <div className="row px-3" style={{ fontSize: 13, color: "darkred" }}>
      {`${
        !isEdit
          ? 'Click "+ Add User" button to add new account'
          : "*Select a row to edit"
      }`}
    </div>
  );
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
        title={actionButtons}
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
