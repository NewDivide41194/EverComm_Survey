import React from "react";
import * as Colors from "../../../config/Color.config";

const Report = (props) => {
//   const { reportData } = props;
  const TotalBuilding = reportData
    ? reportData.map((v, k) => v.building_count[0].Number_of_buildings)[0]
    : null;
  const Percentage = (countAns) => ((countAns * 100) / TotalBuilding).toFixed(2);
  // const Percentage1=()=>countAns*100/
  const NotAnswered = (totalAnsCount) => TotalBuilding - totalAnsCount;
  return (
    <div className="container py-2">
      {reportData
        ? reportData.map((v, k) => (
            <div key={k}>
              <h2
                className="text-center"
                style={{ color: Colors.PrimaryColor }}
              >
                Report for {v.survey_name}
              </h2>
              <h4 className="text-center text-secondary">
                From {`April-26-2020`} to {`April-30-2020`}
              </h4>
              {v.survey_sections.map((v1, k1) => (
                <div key={k1} className="text-dark">
                  <h4 className="pt-2" style={{ color: Colors.PrimaryColor }}>
                    {v1.section_name}
                  </h4>
                  <hr />
                  <div className="d-flex flex-row flex-wrap">
                    {v1.questions
                      ? v1.questions.map((v2, k2) => (
                          <div key={k2} className="col-lg-6 pb-4">
                            <div className="row font-weight-bold pb-2">
                              {v2.question_id}. {v2.question_name}  
                            </div>
                            <div className="row font-weight-bold">
                              <div className="w-75">Total Buildings</div>
                              <div className="W-25">{`- ${TotalBuilding} (100%)`}</div>
                            </div>
                            {v2.option_choices
                              ? v2.option_choices.map((v3, k3) => (
                                  <div key={k3} className="row">
                                    <div className="w-75">
                                      {v3.option_choice_name}
                                    </div>
                                    <div className="W-25">
                                      {v3.totalAns == null
                                        ? "- 0"
                                        : `- ${v3.totalAns}`}{" "}
                                      ({Percentage(v3.totalAns)} %)
                                    </div>
                                  </div>
                                ))
                              : null}
                            <div className="row">
                              <div className="w-75">Not Answered</div>
                              <div className="W-25">
                                - {NotAnswered(v2.totalAnsCount)} (
                                {Percentage(NotAnswered(v2.totalAnsCount))} %)
                              </div>
                            </div>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              ))}
            </div>
          ))
        : null}
    </div>
  );
};
export default Report;

const reportData=[
    {
    survey_header_id: 6,
    survey_name: "Employee ",
    survey_sections: [
    {
    survey_section_id: 20,
    section_name: "Employee Satisfaction",
    questions: [
    {
    question_id: 125,
    question_name: "How meaningful is your work?",
    totalAnsCount: 4,
    option_choices: [
    {
    option_choice_name: "Slightly meaningful",
    totalAns: 3
    },
    {
    option_choice_name: "Not all meaningful",
    totalAns: 1
    },
    {
    option_choice_name: "Moderately meaningful",
    totalAns: null
    },
    {
    option_choice_name: "Very meaningful",
    totalAns: null
    },
    {
    option_choice_name: "Extremely meaningful ",
    totalAns: null
    }
    ]
    },
    {
    question_id: 129,
    question_name: "How challenging is your job?",
    totalAnsCount: 5,
    option_choices: [
    {
    option_choice_name: "Slightly challenging",
    totalAns: 4
    },
    {
    option_choice_name: "Extremely challenging",
    totalAns: 1
    },
    {
    option_choice_name: "Moderately challenging",
    totalAns: null
    },
    {
    option_choice_name: "Not all challenging",
    totalAns: null
    },
    {
    option_choice_name: "Very challenging ",
    totalAns: null
    }
    ]
    },
    {
    question_id: 130,
    question_name: "In a typical week, how often do you feel stressed at work?",
    totalAnsCount: 5,
    option_choices: [
    {
    option_choice_name: "Slightly often",
    totalAns: 4
    },
    {
    option_choice_name: "Extremely often",
    totalAns: 1
    },
    {
    option_choice_name: "Moderately often",
    totalAns: null
    },
    {
    option_choice_name: "Not at all often ",
    totalAns: null
    },
    {
    option_choice_name: "Very often",
    totalAns: null
    }
    ]
    },
    {
    question_id: 131,
    question_name: "How well are you paid for the work you do?",
    totalAnsCount: 5,
    option_choices: [
    {
    option_choice_name: "Slightly well",
    totalAns: 3
    },
    {
    option_choice_name: "Not at all well",
    totalAns: 1
    },
    {
    option_choice_name: "Extremely well",
    totalAns: 1
    },
    {
    option_choice_name: "Moderately well",
    totalAns: null
    },
    {
    option_choice_name: "Very well",
    totalAns: null
    }
    ]
    },
    {
    question_id: 132,
    question_name: "How much do your opinions about work matter your cowokers?",
    totalAnsCount: 5,
    option_choices: [
    {
    option_choice_name: "A little",
    totalAns: 4
    },
    {
    option_choice_name: "A great deal",
    totalAns: 1
    },
    {
    option_choice_name: "A lot ",
    totalAns: null
    },
    {
    option_choice_name: "A moderate amount",
    totalAns: null
    },
    {
    option_choice_name: "None at all",
    totalAns: null
    }
    ]
    },
    {
    question_id: 133,
    question_name: "How realistic are the exceptations of your supervisior?",
    totalAnsCount: 5,
    option_choices: [
    {
    option_choice_name: "Slightly realistic ",
    totalAns: 3
    },
    {
    option_choice_name: "Extremely realistic",
    totalAns: 1
    },
    {
    option_choice_name: "Not at all realistic ",
    totalAns: 1
    },
    {
    option_choice_name: "Moderately realistic",
    totalAns: null
    },
    {
    option_choice_name: "Very realistic",
    totalAns: null
    }
    ]
    },
    {
    question_id: 134,
    question_name: "How often do the tasks assigned to you by your supervisior help you grow professionally?",
    totalAnsCount: 5,
    option_choices: [
    {
    option_choice_name: "Slightly often",
    totalAns: 2
    },
    {
    option_choice_name: "Not at all often",
    totalAns: 2
    },
    {
    option_choice_name: "Extremely often",
    totalAns: 1
    },
    {
    option_choice_name: "Very often",
    totalAns: null
    },
    {
    option_choice_name: "Moderately often ",
    totalAns: null
    }
    ]
    },
    {
    question_id: 135,
    question_name: "How many opportunities do you have to get promoted where you work?",
    totalAnsCount: 5,
    option_choices: [
    {
    option_choice_name: "A few ",
    totalAns: 3
    },
    {
    option_choice_name: "None at all",
    totalAns: 1
    },
    {
    option_choice_name: "A great deal ",
    totalAns: 1
    },
    {
    option_choice_name: "A lot",
    totalAns: null
    },
    {
    option_choice_name: "A moderate amount",
    totalAns: null
    }
    ]
    },
    {
    question_id: 136,
    question_name: "Are you supervised too much at work, supervised too little,or supervised about the right amount?",
    totalAnsCount: 4,
    option_choices: [
    {
    option_choice_name: "Somewhat too little ",
    totalAns: 2
    },
    {
    option_choice_name: "Slightly too little",
    totalAns: 1
    },
    {
    option_choice_name: "Much too much ",
    totalAns: 1
    },
    {
    option_choice_name: "Somewhat too much",
    totalAns: null
    },
    {
    option_choice_name: "Slightly too much",
    totalAns: null
    },
    {
    option_choice_name: "Much too little",
    totalAns: null
    },
    {
    option_choice_name: "About the right amount",
    totalAns: null
    }
    ]
    },
    {
    question_id: 137,
    question_name: "Are you satisfied with your employee benifits, neither satisfied nor dissatisfied with them, or dissatisfied wiht them?",
    totalAnsCount: 5,
    option_choices: [
    {
    option_choice_name: "Slightly dissatisfied",
    totalAns: 2
    },
    {
    option_choice_name: "Extremely dissatisfied",
    totalAns: 2
    },
    {
    option_choice_name: "Extremely satisfied",
    totalAns: 1
    },
    {
    option_choice_name: "Moderately satisfied",
    totalAns: null
    },
    {
    option_choice_name: "Moderately dissatisfied",
    totalAns: null
    },
    {
    option_choice_name: "Slightly satisfied",
    totalAns: null
    },
    {
    option_choice_name: "Neither satisfied nor dissatisfied",
    totalAns: null
    }
    ]
    },
    {
    question_id: 138,
    question_name: "Are you satisfied with your job, neither satisfied nor dissatisfied with it, or dissatisfied with it?",
    totalAnsCount: 4,
    option_choices: [
    {
    option_choice_name: "Extremely dissatisfied",
    totalAns: 2
    },
    {
    option_choice_name: "Slightly dissatisfied",
    totalAns: 1
    },
    {
    option_choice_name: "Extremely satisfied",
    totalAns: 1
    },
    {
    option_choice_name: "Neither satisfied nor dissatisfied",
    totalAns: null
    },
    {
    option_choice_name: "Slightly satisfied",
    totalAns: null
    },
    {
    option_choice_name: "Moderately dissatisfied",
    totalAns: null
    },
    {
    option_choice_name: "Moderately satisfied",
    totalAns: null
    }
    ]
    },
    {
    question_id: 139,
    question_name: "How proud are you of your employer's brand?",
    totalAnsCount: 3,
    option_choices: [
    {
    option_choice_name: "Slightly dissatisfied",
    totalAns: 1
    },
    {
    option_choice_name: "Moderately dissatisfied",
    totalAns: 1
    },
    {
    option_choice_name: "Extremely dissatisfied",
    totalAns: 1
    },
    {
    option_choice_name: "Extremely satisfied",
    totalAns: null
    },
    {
    option_choice_name: "Moderately satisfied",
    totalAns: null
    },
    {
    option_choice_name: "Slightly satisfied",
    totalAns: null
    },
    {
    option_choice_name: "Neither satisfied nor dissatisfied",
    totalAns: null
    }
    ]
    },
    {
    question_id: 140,
    question_name: "Do you liker your employer, neither like nor dislike them, or dislike them?",
    totalAnsCount: 7,
    option_choices: [
    {
    option_choice_name: "Not at all proud",
    totalAns: 5
    },
    {
    option_choice_name: "Extremely proud",
    totalAns: 1
    },
    {
    option_choice_name: "Slightly proud",
    totalAns: 1
    },
    {
    option_choice_name: "Very proud",
    totalAns: null
    },
    {
    option_choice_name: "Moderately proud",
    totalAns: null
    }
    ]
    },
    {
    question_id: 141,
    question_name: "How likely are you to look for another job outside the company?",
    totalAnsCount: 8,
    option_choices: [
    {
    option_choice_name: "Dislike a great deal",
    totalAns: 3
    },
    {
    option_choice_name: "Dislike a little",
    totalAns: 2
    },
    {
    option_choice_name: "Dislike a moderate amount",
    totalAns: 2
    },
    {
    option_choice_name: "Like a great deal",
    totalAns: 1
    },
    {
    option_choice_name: "Neither like nor dislike",
    totalAns: null
    },
    {
    option_choice_name: "Like a moderate amount",
    totalAns: null
    },
    {
    option_choice_name: "Like a little",
    totalAns: null
    }
    ]
    }
    ]
    }
    ],
    building_count: [
    {
    survey_headers_id: 6,
    Number_of_buildings: 9
    }
    ]
    }
    ]
