import React from "react";
import { ESTextArea } from "./ES_TextArea";

export const ESTableInput = (props) => {
  const {
    AnswerData,
    _handleInputChange,
    quesId,
    subQuesId,
    quesName,
    reportText,
    keyValue,
    data,
  } = props;
  const subQuestions = data.sub_questions;
  const addedQuestionId = 1000;
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr className="text-center">
          <th>Serial No.</th>
          {subQuesId.map((a, b) => (
            <th className="align-middle" key={b}>
              {a.sub_question_name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {new Array(10).fill(null).map((v, k) => (
          <tr className="text-center" key={k}>
            <td>{k + 1}</td>
            {subQuesId.map((v1, k1) => {
              const remakeQuestionId =
                addedQuestionId + v1.sub_question_id + k.toString();
              return (
                v1.input_type_id === 4 && (
                  <td key={k1}>
                    {reportText ? (
                        <span
                          className="text-primary text-left"
                          
                        >
                          {AnswerData.filter(
                            (d) => d.questionId === remakeQuestionId
                          ).length && AnswerData.length
                            ? AnswerData.filter(
                                (d) => d.questionId === remakeQuestionId
                              ).map((v, k) => v.other)[0]
                            : undefined}
                        </span>
                    ) : (
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
                            : undefined
                        }
                        onChange={(e) => {
                          _handleInputChange(
                            e,
                            remakeQuestionId,
                            v1.sub_question_id,
                            keyValue
                          );
                        }}
                      />
                    )}
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
