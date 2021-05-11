import React, { useState, useEffect } from "react";
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
    isDisable,
    _handleRadioChange,
    _handleCheckChange,
  } = props;

  return (
    <table className="table table-bordered table-striped table-sm">
      <thead>
        {categories ? (
          <tr className="text-center">
            <th style={{ padding: 15 }} rowSpan="2" className="align-middle">
              {categories[0].categories}
            </th>
            <th style={{ padding: 5 }} colSpan="4" className="align-middle">
              {categories[1].categories}
            </th>
          </tr>
        ) : (
          <tr className="text-center">
            {categories
              ? categories.map((v) => (
                  <th
                    style={{ padding: 15 }}
                    className="align-middle"
                    className="align-middle"
                  >
                    {v.categories}
                  </th>
                ))
              : null}
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
                  <ESCheckBox
                    disabled={isDisable}
                    value={v1}
                    _handleChange={_handleCheckChange}
                    quesId={quesId}
                    subQuesId={v.sub_question_id}
                    isAnswer={isAnswer}
                    keys={keys}
                  />
                ) : (
                  <ESRadio
                    isDisable={isDisable}
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
