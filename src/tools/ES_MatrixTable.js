import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { ESButton } from "./ES_Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import * as Colors from "../config/Color.config";
import { ESRadio } from "./ES_Radio";
import ESCheckBox from "./ES_CheckBox";

const ESMatrix = (props) => {
  const {
    id,
    quesId,
    subQuestions,
    isAnswer,
    categories,
    optionChoices,
    keys,
    subQuesId,
    _handleRadioChange,
    _handleCheckChange,
  } = props;
  console.log(isAnswer);
  return (
    <table className="table table-bordered table-striped">
      <thead>
        {categories ? (
          <tr className="text-center">
            <th style={{ padding: 15 }} rowSpan="2">
              {categories[0].categories}
            </th>
            <th style={{ padding: 5 }} colSpan="4">
              {categories[1].categories}
            </th>
          </tr>
        ) : (
          <tr className="text-center">
            {categories.map((v) => (
              <th style={{ padding: 15 }} className="align-middle">
                {v.categories}
              </th>
            ))}
          </tr>
        )}

        {optionChoices && (
          <tr className="text-center">
            {optionChoices.map((v) => (
              <th style={{ padding: 5 }}>{v.option_choice_name}</th>
            ))}
          </tr>
        )}
      </thead>
      <tbody>
        {subQuestions.map((v, k) => (
          <tr>
            <td>{v.sub_question_name}</td>
            {v.option_choices.map((v1) => (
              <td className="p-0 text-center">
                {v.input_type_id === 1 ? (
                  <ESCheckBox value={v1} _handleChange={_handleCheckChange} quesId={quesId}
                  subQuesId={v.sub_question_id}
                  isAnswer={isAnswer}
                  keys={keys}/>
                ) : (
                  <ESRadio
                    value={v1}
                    _handleRadioChange={_handleRadioChange}
                    quesId={quesId}
                    subQuesId={v.sub_question_id}
                    isAnswer={isAnswer}
                    keys={keys}
                  />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ESMatrix;
