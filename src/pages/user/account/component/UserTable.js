import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { ESButton } from "../../../../tools/ES_Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import * as Colors from "../../../../config/Color.config";

export default function UserTable(props) {
  const {
    userData,
    handleIsAdd,
    isAdd,
    isEdit,
    handleIsEdit,
    handleEdit,
    rowsPerPage
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
      { title: "Active", render: userData => userData.active === 1 ? <i class="fas fa-check-square" style={{color:'green'}}></i> : <i class="far fa-square" style={{color:'green'}}></i> },
      { title: "Created Date", field: "created_date" },
    ],
    data: userData,
  });

const actionButtons = (
    <div className="row px-3" style={{fontSize:13, color:'darkred'}}>
      {`${!isEdit ? 'Click "+ Add User" button to add new account' : '*Select a row to edit' }`}
      {/* <div className="w-100 pb-1">
        <ESButton
          text={"+ Add User"}
          onClick={handleIsAdd}
          noShadow
          small
          disabled={isAdd}
        />
      </div>
      <div className="w-100">
        <ESButton
          text={"Edit"}
          onClick={(e) => handleIsEdit(e)}
          noShadow
          small
          disabled={isEdit}
          leftIcon={<i className="fa fa-edit pr-2"></i>}
        />
      </div> */}
    </div>
  );
  return (
    <MuiThemeProvider theme={theme}>
      <MaterialTable
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
            // backgroundColor: '#EEE' ,
            lineHeight: 0,
          }),
          padding: "dense",
          // pageSizeOptions: isAdd || isEdit ? [5, 10, 15] : [10, 20, 30],
          // pageSize:rows,
        }}
      />
    </MuiThemeProvider>
  );
}
