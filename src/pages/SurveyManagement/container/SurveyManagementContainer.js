import React, { useState, useEffect } from "react";
import { MenuInfoFetch } from "../../../api/FetchMenuInfo";
import * as Colors from "../../../config/Color.config";
import SurveyTable from "../components/SurveyTable";
import ESButtonGroup from "../../../tools/ES_ButtonGroup";

const SurveyManagementContainer = (props) => {
  const { surveyData } = props;
  const userId = localStorage.getItem("userId");
  const [surveyListData, setSurveyListData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    MenuInfoFetch({ userId, token }, (err, data) => {
      setSurveyListData(data.payload);
      console.log(data.payload);
    });
  }, []);
  const tableData = {
    columns: [
      { title: "Title", field: "survey_name" },
      { title: "Response", field: "answeredUser" },
      { title: "Created Date", field: "createdDate" },
      { title: "Modified Date", field: "modifiedDate" },
      { title: "Created Date", field: "created_date" },
      {title:"Action", field:"action",render:()=><div ><ESButtonGroup/></div>}
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
  return (
    <div className="container">
      <div className="row">
        <h2 style={{ color: Colors.PrimaryColor }}>Survey Management</h2>
      </div>
      {surveyListData && surveyListData.length > 0 && (
        <SurveyTable tableData={tableData} tableAlertInfo={"Title"} />
      )}
    </div>
  );
};

export default SurveyManagementContainer;
