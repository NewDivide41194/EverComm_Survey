import React, { useState, useEffect } from "react";
import { MenuInfoFetch } from "../../../api/FetchMenuInfo";
import * as Colors from "../../../config/Color.config";
import ESTable from "../../../tools/ES_Table";

const SurveyTable = (props) => {
  const { tableData, tableAlertInfo,actions } = props;

  return <ESTable tableData={tableData} tableAlertInfo={tableAlertInfo} actions={actions}/>;
};

export default SurveyTable;
