import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { ESButton } from "./ES_Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import * as Colors from "../config/Color.config";
import { Edit } from "@material-ui/icons";

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
  } = props;

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: Colors.PrimaryColor,
      },
    },
  });
  console.log(tableData);
  return (
    <MuiThemeProvider theme={theme}>
      <MaterialTable
        actions={[
          {
            icon: Edit,
            onClick: (event, rowData) => handleEdit(rowData),
            disabled: isEdit,
          },
        ]}
        style={{ paddingBottom: 20, boxShadow: "none" }}
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
          actionsColumnIndex: -1,
        }}
      />
    </MuiThemeProvider>
  );
};

export default ESTable;
