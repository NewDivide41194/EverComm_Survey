import React, { useState, useEffect } from "react";
import { MenuInfoFetch } from "../../../api/FetchMenuInfo";
import * as Colors from "../../../config/Color.config";
import ESTable from "../../../tools/ES_Table";

const SurveyTable = (props) => {
  const { tableData } = props;
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  useEffect(() => {
    MenuInfoFetch({ userId, token }, (err, data) => {
      console.log(
        "survey data >>>> ",
        data.payload.map((v) => v)
      );
    });
  }, []);

  return <ESTable tableData={tableData}/>;
};

export default SurveyTable;
