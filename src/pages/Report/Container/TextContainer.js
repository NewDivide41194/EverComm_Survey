import React, { useState, useEffect } from "react";
import Text from "../component/text/textReport";
import EgovernmentReport, { Header } from "../component/EgovernmentOnlyOne.js";
import ESLoading from "../../../tools/ES_Loading";
import "../../../App.css";

const TextContainer = (props) => {
  const { reportData } = props;
  console.log("====>", reportData);
  const [section, setSection] = useState([]);
  const [testValue, setTestValue] = useState([]);
  const [sectName, setSectName] = useState([]);
  const [sectId, setSectId] = useState([]);
  useEffect(() => {
    const r = reportData[0].survey_sections.map((v, k) =>
      v.questions.map((v1) => v1)
    );
    reportData[0].survey_sections.map((v, k) =>
      sectName.push([k, v.section_name])
    );
    reportData[0].survey_sections.map((v, k) =>
      sectId.push([k, v.survey_section_id])
    );

    var i,
      j,
      k,
      questions,
      chunk = 10;
    for (k = 0; k < r.length; k++) {
      const array = r[k];
      for (i = 0, j = array.length; i < j; i += chunk) {
        questions = array.slice(i, i + chunk);
        // do whatever
        //section.push(temparray)

        const filterSection = sectName.filter((v) => v[0] === k);
        const filterSectId = sectId.filter((v) => v[0] === k);
        const section_name = filterSection[0][1];
        const survey_section_id = filterSectId[0][1];
        const key = k;

        setTestValue([]);
        const list = { key, survey_section_id, section_name, questions };
        section.push(list);
      }
    }
  }, []);

  // console.log(document.getElementById("0")&&document.getElementById("0").clientHeight);
  // const PageBreaker=()=> document.getElementById("1")&&document.getElementById("1").clientHeight < "8in" ? <div className="page-break"></div> : <div>hello</div>;
  const PageBreaker = () => <div className="page-break"></div>;
  return reportData[0].survey_header_id === 1 ? (
    <Text reportData={reportData} section={section} />
  ) : (
    reportData[0].survey_sections.map((v, k) =>
      k > 0 ? (
        <div>
          <EgovernmentReport
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
    )
  );
};

export default TextContainer;

const DataProvider = (props) => {
  const { AnswerData, QuestionData, surveyTitle, sectionName } = props;
  const countryName = localStorage.getItem("countryName");

  return (
    <div
      className="container"
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
            <div>
              {questionId
                ? AnswerData.filter((d) => d.questionId === questionId).map(
                    (v, k) => v.other
                  )
                : null}
            </div>
          );
        })}
    </div>
  );
};
