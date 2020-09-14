import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { ESButton } from "./ES_Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import * as Colors from "../config/Color.config";
import { ESRadio } from "./ES_Radio";

const ESMatrix = (props) => {
  const { id, quesId,subQuestions, isAnswer,categories,optionChoices, keys, subQuesId, _handleRadioChange } = props;

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr className="text-center">
          <th style={{ padding: 15 }} rowSpan="2">
            {categories[0].categories}
          </th>

          <th style={{ padding: 5 }} colSpan="4">
            {categories[1].categories}
          </th>
        </tr>

        <tr className="text-center">
          {optionChoices.map((v) => (
            <th style={{ padding: 5 }}>{v.option_choice_name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {subQuestions.map((v, k) => (
          <tr>
            <td style={{ padding: 5 }}>{v.sub_question_name}</td>
            {v.option_choices.map((v1) => (
              <td>
                <ESRadio
                  value={v1}
                  _handleRadioChange={_handleRadioChange}
                  quesId={quesId}
                  subQuesId={v.sub_question_id}
                  isAnswer={isAnswer}
                  keys={keys}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ESMatrix;