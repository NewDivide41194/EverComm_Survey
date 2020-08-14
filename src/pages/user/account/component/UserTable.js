import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { ESButton } from "../../../../tools/ES_Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import * as Colors from "../../../../config/Color.config";
import { render } from "@testing-library/react";

export default function UserTable(props) {
  const { userData, handleIsAdd, isAdd, isEdit, handleIsEdit,handleEdit } = props;

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
      { title: "Active", field: "active" },
    ],
    data: userData
  });
  const actionButtons = (
    <div className="row w-100 px-3">
      <div className="w-100 pb-1">
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
      </div>
    </div>
  );
console.log(handleEdit);
  return (
    <MuiThemeProvider theme={theme}>
      <MaterialTable
        onRowClick={isEdit?(event, rowData) => handleEdit(tableData.data[rowData.tableData.id]):null
        }
        padding
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
        }}
      />
    </MuiThemeProvider>
  );
}
