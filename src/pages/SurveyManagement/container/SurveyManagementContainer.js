import React, { useState, useEffect } from "react";
import { MenuInfoFetch } from "../../../api/FetchMenuInfo";
import * as Colors from "../../../config/Color.config";
import SurveyTable from "../components/SurveyTable";
import {Edit} from "@material-ui/icons"
const SurveyManagementContainer = () => {
  const userId = localStorage.getItem("userId");
  const [surveyListData, setSurveyListData] = useState([]);
  const token = localStorage.getItem("token");
  const [edit,isEdit]=useState(false)
  useEffect(() => {
    MenuInfoFetch({ userId, token }, (err, data) => {
      setSurveyListData(data.payload);
      console.log(data.payload);
    });
  }, []);
  const tableData = {
    columns: [
      { title: "Title", field: "survey_name" },
      { title: "Response", field: "building_count" },
      { title: "Modified Date", field: "modified_date" },
      { title: "Created Date", field: "created_date" },
    ],
    data: surveyListData,
  };

  //   const actionButtons = (
  //     <div className="row px-3" style={{ fontSize: 13, color: "darkred" }}>
  //       {`${
  //         !isEdit
  //           ? 'Click "+ Add User" button to add new account'
  //           : "*Select a row to edit"
  //       }`}
  //     </div>
  //   );
  console.log("--------->", surveyListData);
const handleEdit=()=>{
  console.log("edit");
}
  const tableActions = [
    {
      icon: Edit,
      onClick: (event, rowData) => handleEdit(rowData),
      disabled: edit,
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <h2 style={{ color: Colors.PrimaryColor }}>Survey Management</h2>
      </div>
      {surveyListData && surveyListData.length > 0 && (
        <SurveyTable
          tableData={tableData}
          tableAlertInfo={"Title"}
          actions={tableActions}
        />
      )}
    </div>
  );
};

export default SurveyManagementContainer;
