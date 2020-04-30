import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { withRouter } from "react-router-dom";
import HMT from "../../../assets/images/HMT.gif";

const ReportMenu = (props) => {
  const { ReportData } = props;
  // const surveyTitle = ReportData.length && ReportData[0].survery_title;
  // const pageNo = ReportData.length && ReportData[0].survey_sections.length;
  const buildingId = localStorage.getItem("buildingId");
  const userId = localStorage.getItem("userId");
  const surveyHeaderId = localStorage.getItem("SurveyHeaderId");

  const _handleMenu = () => {
    props.history.push(`/menu/${userId}`);
  };

  const _handleReview = () => {
    props.history.push(`/question/${userId}/${surveyHeaderId}/${buildingId}`);
  };
  const _ViewReport=()=>{
    props.history.push(`/report`);
  }
  return (
    <div className="container py-4 text-center text-success">
      <h3>*Your Answers are Posted!</h3>
      <img style={{width:'50%'}} src={HMT} alt="Post"/>
      <div className='row justify-content-center'>
        <div className='col-md-3 col-sm-12 py-2'>
        <ESButton text={"Review Your Survey"} onClick={() => _handleReview()} style={{background:'#9945C0',minWidth:177}} small/>
        </div>
        <div className='col-md-3 col-sm-12 py-2'>
        <ESButton text={"Back to Menu"} onClick={() => _handleMenu()} style={{minWidth:177}} small/>
        </div>
        <div className='col-md-3 col-sm-12 py-2'>
        <ESButton text={"View Report"} onClick={() => _ViewReport()} style={{background:'#3a6b1b', minWidth:177}} small/>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ReportMenu);

const reportData1 = [
        {
            "survey_name": "Cooling System",
            "survey_sections": [
                {
                    "section_name": "Basic Information",
                    "Questions": [
                        {
                            "question_id": 1,
                            "question_name": "What is the type of your building?",
                            "Answers": [
                                {
                                    "option_choice_name": "Office Building",
                                    "totalAns": 1
                                },
                                {
                                    "option_choice_name": "Hotel",
                                    "totalAns": 7
                                },
                                {
                                    "option_choice_name": "Shopping Mall",
                                    "totalAns": null
                                },
                                {
                                    "option_choice_name": "Residential Building",
                                    "totalAns": 1
                                }, {
                                    "option_choice_name": "Factory",
                                    "totalAns": 2
                                }
                            ]
                        }, {
                            "question_id": 3,
                            "question_name": "What is the total area of your building?",
                            "Answers": [
                                {
                                    "option_choice_name": "below 2000",
                                    "totalAns": 3
                                },
                                {
                                    "option_choice_name": "2000-5000",
                                    "totalAns": 5
                                },
                                {
                                    "option_choice_name": "5000 - 10000",
                                    "totalAns": null
                                },
                                {
                                    "option_choice_name": "10000 - 15000",
                                    "totalAns": 1
                                }, {
                                    "option_choice_name": "Above 15000",
                                    "totalAns": null
                                }
                            ]
                        }, {
                            "question_id": 4,
                            "question_name": "What is the age of your building?",
                            "Answers": [
                                {
                                    "option_choice_name": "less than 10",
                                    "totalAns": null
                                },
                                {
                                    "option_choice_name": "10-20",
                                    "totalAns": 5
                                },
                                {
                                    "option_choice_name": "20-30",
                                    "totalAns": 1
                                },
                                {
                                    "option_choice_name": "30-40",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "40-50",
                                    "totalAns": 1
                                }, {
                                    "option_choice_name": "More than 50",
                                    "totalAns": null
                                }
                            ]
                        }, {
                            "question_id": 5,
                            "question_name": "Do you have building management system installed(BMS)?",
                            "Answers": [
                                {
                                    "option_choice_name": "Yes",
                                    "totalAns": 3
                                }, {
                                    "option_choice_name": "No",
                                    "totalAns": 6
                                }
                            ]
                        }
                    ]
                },
                {
                    "section_name": "Chiller Information",
                    "Questions": [
                        {
                            "question_id": 6,
                            "question_name": "What is the brand of chiller?",
                            "Answers": [
                                {
                                    "option_choice_name": "Daikin",
                                    "totalAns": null
                                },
                                {
                                    "option_choice_name": "York",
                                    "totalAns": 2
                                },
                                {
                                    "option_choice_name": "Trane",
                                    "totalAns": 3
                                },
                                {
                                    "option_choice_name": "Carrier",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Haier",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Mitsubishi",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Johnson Controls",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Ingersoll",
                                    "totalAns": null
                                }
                            ]
                        }, {
                            "question_id": 9,
                            "question_name": "Please select the cooling rationale of chiller #1?",
                            "Answers": [
                                {
                                    "option_choice_name": "Water-cooled Chiller",
                                    "totalAns": 4
                                }, {
                                    "option_choice_name": "Air-cooled Chiller",
                                    "totalAns": 4
                                }
                            ]
                        }, {
                            "question_id": 10,
                            "question_name": "Do you have another chiller?",
                            "Answers": [
                                {
                                    "option_choice_name": "Yes",
                                    "totalAns": 1
                                }, {
                                    "option_choice_name": "No",
                                    "totalAns": 5
                                }
                            ]
                        }
                    ]
                },
                {
                    "section_name": "Condenser Information",
                    "Questions": [
                        {
                            "question_id": 11,
                            "question_name": "What is the brand of the condenser #1?",
                            "Answers": [
                                {
                                    "option_choice_name": "Daikin",
                                    "totalAns": null
                                },
                                {
                                    "option_choice_name": "York",
                                    "totalAns": 3
                                },
                                {
                                    "option_choice_name": "Trane",
                                    "totalAns": 1
                                },
                                {
                                    "option_choice_name": "Carrier",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Haier",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Mitsubishi",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Johnson Controls",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Ingersoll Dresser",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Grundfos",
                                    "totalAns": null
                                }
                            ]
                        },
                        {
                            "question_id": 14,
                            "question_name": "Please select ther cooling rationale of Condenser #1?",
                            "Answers": [
                                {
                                    "option_choice_name": "Water-cooled",
                                    "totalAns": 3
                                }, {
                                    "option_choice_name": "Air-cooled",
                                    "totalAns": 2
                                }
                            ]
                        },
                        {
                            "question_id": 15,
                            "question_name": "Do you have VSD installed for condenser #1?",
                            "Answers": [
                                {
                                    "option_choice_name": "Yes",
                                    "totalAns": 1
                                }, {
                                    "option_choice_name": "No",
                                    "totalAns": 3
                                }
                            ]
                        },
                        {
                            "question_id": 17,
                            "question_name": "Do you have another Condenser?",
                            "Answers": [
                                {
                                    "option_choice_name": "Yes",
                                    "totalAns": 1
                                }, {
                                    "option_choice_name": "No",
                                    "totalAns": 1
                                }
                            ]
                        }, {
                            "question_id": 18,
                            "question_name": "What is the brand of Condenser #2?",
                            "Answers": [
                                {
                                    "option_choice_name": "Daikin",
                                    "totalAns": null
                                },
                                {
                                    "option_choice_name": "York",
                                    "totalAns": 1
                                },
                                {
                                    "option_choice_name": "Trane",
                                    "totalAns": null
                                },
                                {
                                    "option_choice_name": "Carrier",
                                    "totalAns": 1
                                }, {
                                    "option_choice_name": "Haier",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Mitsubishi",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Johnson Cnontrols",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Ingersoll",
                                    "totalAns": null
                                }
                            ]
                        }, {
                            "question_id": 21,
                            "question_name": "Do you have VSD installed for condenser #2?",
                            "Answers": [
                                {
                                    "option_choice_name": "Water_cooled",
                                    "totalAns": 2
                                }, {
                                    "option_choice_name": "Air-cooled",
                                    "totalAns": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "section_name": "Evaporator Information",
                    "Questions": [
                        {
                            "question_id": 22,
                            "question_name": "What is the brand of Evaporator #1?",
                            "Answers": [
                                {
                                    "option_choice_name": "Daikin",
                                    "totalAns": null
                                },
                                {
                                    "option_choice_name": "York",
                                    "totalAns": 2
                                },
                                {
                                    "option_choice_name": "Trane",
                                    "totalAns": 1
                                },
                                {
                                    "option_choice_name": "Carrier",
                                    "totalAns": 1
                                }, {
                                    "option_choice_name": "Haier",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Mitsubishi",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Johnson Controls",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Ingersoll Dresser",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Grundfos",
                                    "totalAns": null
                                }
                            ]
                        },
                        {
                            "question_id": 25,
                            "question_name": "Please select the cooling rationale of Evaporator #1?",
                            "Answers": [
                                {
                                    "option_choice_name": "Water-cooled",
                                    "totalAns": 2
                                }, {
                                    "option_choice_name": "Air-cooled",
                                    "totalAns": 1
                                }
                            ]
                        },
                        {
                            "question_id": 26,
                            "question_name": "Do you have VSD installed for Evaporator #1?",
                            "Answers": [
                                {
                                    "option_choice_name": "Yes",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "No",
                                    "totalAns": 2
                                }
                            ]
                        },
                        {
                            "question_id": 27,
                            "question_name": "Do you have another Evaporator?",
                            "Answers": [
                                {
                                    "option_choice_name": "Yes",
                                    "totalAns": 1
                                }, {
                                    "option_choice_name": "No",
                                    "totalAns": 2
                                }
                            ]
                        }, {
                            "question_id": 28,
                            "question_name": "What is the brand of Evaporator #2?",
                            "Answers": [
                                {
                                    "option_choice_name": "Daikin",
                                    "totalAns": null
                                },
                                {
                                    "option_choice_name": "York",
                                    "totalAns": 1
                                },
                                {
                                    "option_choice_name": "Trane",
                                    "totalAns": 2
                                },
                                {
                                    "option_choice_name": "Carrier",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Haier",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Mitsubishi",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Johnson Controls",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Ingersoll Dresser",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Grundfos",
                                    "totalAns": null
                                }
                            ]
                        }, {
                            "question_id": 31,
                            "question_name": "Please select the cooling rationale of Evaporator #2?",
                            "Answers": [
                                {
                                    "option_choice_name": "Water-cooled",
                                    "totalAns": 1
                                }, {
                                    "option_choice_name": "Air-Cooled",
                                    "totalAns": 1
                                }
                            ]
                        }, {
                            "question_id": 32,
                            "question_name": "Do you have VSD installed for Evaporator #2?",
                            "Answers": [
                                {
                                    "option_choice_name": "Yes",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "No",
                                    "totalAns": 2
                                }
                            ]
                        }
                    ]
                }, {
                    "section_name": "Cooling Tower Information",
                    "Questions": [
                        {
                            "question_id": 33,
                            "question_name": "What is the brand of Cooling Tower #1?",
                            "Answers": [
                                {
                                    "option_choice_name": "Daikin",
                                    "totalAns": 1
                                },
                                {
                                    "option_choice_name": "York",
                                    "totalAns": 1
                                },
                                {
                                    "option_choice_name": "Trane",
                                    "totalAns": null
                                },
                                {
                                    "option_choice_name": "Carrier",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Haier",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Mitsubishi",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Johnson Controls",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Ingersoll Dresser",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Grundfos",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Marley",
                                    "totalAns": null
                                }
                            ]
                        }, {
                            "question_id": 36,
                            "question_name": "Do you have another Cooling Tower?",
                            "Answers": [
                                {
                                    "option_choice_name": "Yes",
                                    "totalAns": 1
                                }, {
                                    "option_choice_name": "No",
                                    "totalAns": 1
                                }
                            ]
                        }, {
                            "question_id": 37,
                            "question_name": "What is the brand of Cooling Tower #2?",
                            "Answers": [
                                {
                                    "option_choice_name": "Daikin",
                                    "totalAns": null
                                },
                                {
                                    "option_choice_name": "York",
                                    "totalAns": 1
                                },
                                {
                                    "option_choice_name": "Trane",
                                    "totalAns": null
                                },
                                {
                                    "option_choice_name": "Carrier",
                                    "totalAns": 1
                                }, {
                                    "option_choice_name": "Haier",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Mitsubishi",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Johnson Controls",
                                    "totalAns": null
                                }, {
                                    "option_choice_name": "Ingersoll",
                                    "totalAns": null
                                }
                            ]
                        }, {
                            "question_id": 40,
                            "question_name": "Do you have another Cooling Tower?",
                            "Answers": [
                                {
                                    "option_choice_name": "Yes",
                                    "totalAns": 1
                                }, {
                                    "option_choice_name": "No",
                                    "totalAns": 1
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]