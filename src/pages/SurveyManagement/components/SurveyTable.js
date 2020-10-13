import React from "react";

import ESTable from "../../../tools/ES_Table";

const SurveyTable = (props) => {
  const { tableData, tableAlertInfo,actions } = props;

  return <ESTable tableData={tableData} tableAlertInfo={tableAlertInfo} actions={actions}/>;
};

export default SurveyTable;
