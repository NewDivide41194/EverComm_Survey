import React from "react";
const TextAnswers = (props) => {
  const { AnswerData, subQues, questionId, options, year } = props;

  const simpleAns = questionId
    ? AnswerData.filter(
        (d) => d.questionId === questionId && d.subQuestionId === null
      ).map((v, k) => v.other)
    : AnswerData.filter((d) => d.subQuestionId === subQues.sub_question_id).map(
        (v, k) => v.other
      );
  const yearAns =
    year &&
    AnswerData.filter((d) => d.questionId === questionId).length &&
    AnswerData.length
      ? AnswerData.filter((d) => d.questionId === questionId).map(
          (v, k) => v.other
        )[0]
      : null;
  if (options !== undefined && options.length > 0) {
    const temp = AnswerData.filter(
      (f) => f.questionId === questionId && f.subQuestionId === null
    ).filter((v) =>
      options[0].filter((vv) => vv.option_choice_id === v.option_choice_id)
    );

    const selectAns = options[0]
      .filter((v) =>
        temp.map((vv) =>
          vv.optionChoiceId === v.option_choice_id ? v.option_choice_name : null
        )
      )
      .map((k) => k.option_choice_name)[0];

    return (
      <span
        className="text-primary"
        style={{
          width: "100%",
          wordWrap: "break-word",
          display: "inline-block",
        }}
      >
        {selectAns !== "Other" ? selectAns : simpleAns}
      </span>
    );
  } else {
    return (
      <span
        className="text-primary"
        style={{
          width: "100%",
          wordWrap: "break-word",
          display: "inline-block",
        }}
      >
        {yearAns || simpleAns}
      </span>
    );
  }
};

export default TextAnswers;
