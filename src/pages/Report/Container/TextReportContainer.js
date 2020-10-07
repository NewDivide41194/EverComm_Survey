import React, { useState, useEffect } from "react";
import CompoundText from "../component/text/TextCompound";
import EgovernmentReport, { Header } from "../component/text/TextGroup.js";
import "../../../App.css";
import TextSimple from "../component/text/TextSimple";

const TextContainer = (props) => {
  const { reportData } = props;
  console.log("====>", reportData);
  const [section, setSection] = useState([]);
  const [testValue, setTestValue] = useState([]);
  const [sectName, setSectName] = useState([]);
  const [sectId, setSectId] = useState([]);
  useEffect(() => {
    console.log(
      document.getElementById("1") && document.getElementById("1").clientHeight
    );
    if (document.getElementById("1")) {
      document.getElementById("1").style.border = "1px solid gray";
    }
    // const r = reportData[0].survey_sections.map((v, k) =>
    //   v.questions.map((v1) => v1)
    // );
    // reportData[0].survey_sections.map((v, k) =>
    //   sectName.push([k, v.section_name])
    // );
    // reportData[0].survey_sections.map((v, k) =>
    //   sectId.push([k, v.survey_section_id])
    // );
    // var i,
    //   j,
    //   k,
    //   questions,
    //   chunk = 10;
    // for (k = 0; k < r.length; k++) {
    //   const array = r[k];
    //   for (i = 0, j = array.length; i < j; i += chunk) {
    //     questions = array.slice(i, i + chunk);
    //     const filterSection = sectName.filter((v) => v[0] === k);
    //     const filterSectId = sectId.filter((v) => v[0] === k);
    //     const section_name = filterSection[0][1];
    //     const survey_section_id = filterSectId[0][1];
    //     const key = k;
    //     setTestValue([]);
    //     const list = { key, survey_section_id, section_name, questions };
    //     section.push(list);
    //   }
    // }
  }, []);

  const AnswerData = reportData[0].answers;
  const QuestionData = reportData[0].survey_sections.map((v) => v.questions);

  const OtherAns = (remakeQuesId, QuesId, OptionId) => {
    return AnswerData.filter(
      (a) =>
        a.keyValue === QuesId &&
        a.optionChoiceId === OptionId &&
        a.questionId === remakeQuesId
    );
  };

  const otherOfQuestion = (index) => {
    const isOther =
      QuestionData &&
      QuestionData.map((v, k) =>
        v.option_choices === undefined ? [] : v.option_choices
      )[index].filter((d) => d.option_choice_name === "Other");

    return isOther.length > 0 ? isOther[0].option_choice_id : [];
  };
  return reportData[0].survey_header_id === 1
    ? reportData[0].survey_sections.map((v, k) =>
        reportData[0].survey_sections[k].survey_section_id === 1 ? (
          <TextSimple
            QuestionData={v.questions}
            AnswerData={reportData[0].answers}
            otherOfQuestion={otherOfQuestion}
            otherAns={OtherAns}
            sectionName={v.section_name}
            surveyTitle={reportData[0].surveyTitle}
          />
        ) : (
          <CompoundText
            QuestionData={v.questions}
            AnswerData={reportData[0].answers}
            amountOfDevice={reportData[0].amountOfDevice}
            sectionName={v.section_name}
            surveyTitle={reportData[0].surveyTitle}
          />
        )
      )
    : reportData[0].survey_sections.map((v, k) =>
        k > 0 ? (
          <div>
            <EgovernmentReport
              id={k}
              sectionName={v.section_name}
              isHeader={k === 1 ? false : true}
              AnswerData={reportData[0].answers}
              section={section}
              QuestionData={v.questions}
              surveyTitle={reportData[0].surveyTitle}
            />
            <div className="page-break">.</div>
          </div>
        ) : (
          <DataProvider
            sectionName={v.section_name}
            AnswerData={reportData[0].answers}
            QuestionData={v.questions}
            surveyTitle={reportData[0].surveyTitle}
          />
        )
      );
};

export default TextContainer;

const DataProvider = (props) => {
  const { AnswerData, QuestionData, surveyTitle, sectionName } = props;
  const countryName = localStorage.getItem("countryName");

  return (
    <div
      className="container pb-3"
      style={{
        width: "8.27in",
      }}
    >
      <Header
        sectionName={sectionName}
        surveyTitle={surveyTitle}
        countryName={countryName}
      />
      {QuestionData &&
        QuestionData.map((ques, k2) => {
          const questionId = ques.question_id.toString();
          return (
            <div className="px-3 row">
              <div className="col-3">{ques && ques.question_name} :</div>
              <div className="col-7 text-primary">
                {questionId
                  ? AnswerData.filter((d) => d.questionId === questionId).map(
                      (v, k) => v.other
                    )
                  : null}
              </div>
            </div>
          );
        })}
    </div>
  );
};
