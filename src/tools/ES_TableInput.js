import React from "react";
import { ESTextArea } from "./ES_TextArea";

export const ESTableInput = (props) => {
  const { AnswerData, _handleInputChange } = props;
  const subQuestions = data.sub_questions;
  const addedQuestionId = 1000;
console.log(AnswerData);
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr className="text-center">
          <th>Serial No.</th>
          {subQuestions.map((v) => (
            <th className="align-middle">{v.sub_question_name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {new Array(10).fill(null).map((v, k) => (
          <tr className="text-center">
            <td>{k + 1}</td>
            {subQuestions.map((v1, k1) => {
              const remakeQuestionId =
                addedQuestionId + v1.sub_question_id + k.toString();
              return (
                v1.input_type_id === 4 && (
                  <td>
                    <ESTextArea
                      id={remakeQuestionId}
                      placeHolder={"Please Specify"}
                      value={
                        AnswerData.filter(
                          (d) => d.questionId === remakeQuestionId
                        ).length && AnswerData.length
                          ? AnswerData.filter(
                              (d) => d.questionId === remakeQuestionId
                            ).map((v, k) => v.other)[0]
                          : null
                      }
                      onChange={(e) => {
                        _handleInputChange(
                          e,
                          remakeQuestionId,
                          v1.sub_question_id,
                          data.question_id
                        );
                      }}
                    />
                  </td>
                )
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const data = {
  question_id: 329,
  question_name:
    "Please list the main government ICT projects implemented during the last five years, currently underway and planned. ",
  input_type_id: 12,
  option_group_id: 11,
  key: 10,
  categories: [],
  sub_questions: [
    {
      sub_question_id: 11,
      sub_question_name: "Implementation timeframe",
      input_type_id: 4,
      option_choices: [],
    },
    {
      sub_question_id: 12,
      sub_question_name: "Project title",
      input_type_id: 4,
      option_choices: [],
    },
    {
      sub_question_id: 13,
      sub_question_name: "Content summary",
      input_type_id: 4,
      option_choices: [],
    },
    {
      sub_question_id: 14,
      sub_question_name: "Responsible authority",
      input_type_id: 4,
      option_choices: [],
    },
    {
      sub_question_id: 15,
      sub_question_name: "Funded by",
      input_type_id: 4,
      option_choices: [],
    },
  ],
};
