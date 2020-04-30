import React from "react";

const Report = (props) => {
 const TotalBuilding=Data.map((v,k)=>v.building_count[0].Number_of_buildings)[0]
 console.log(TotalBuilding);
const percent=(obtain)=>(obtain *100) /TotalBuilding;
console.log(percent());

  return (
    <div className="container py-2 ">
      {Data.map((v, k) => (
        <div key={k}>
          <h2 className="text-center text-primary">
            Report for {v.survey_name}
          </h2>
          {v.survey_sections.map((v1, k1) => (
            <div key={k1}>
              <h4 className="pt-2 text-primary">{v1.section_name}</h4>
              <hr />
              <div className="d-flex flex-row flex-wrap">
                {v1.questions.map((v2, k2) => (
                    <div key={k2} className="col-lg-6 pb-2">
                        <div className="row font-weight-bold">
                        {v2.question_id}. {v2.question_name}
                    </div>
                    <div className="container">
                        Total Building: {TotalBuilding}
                    </div>
                    {v2.option_choices? v2.option_choices.map((v3, k3) => (
                            <div key={k3} className="container">   
                              <div className="row">
                                <div className="col-8">
                                    {v3.option_choice_name}
                                </div>
                                <div className="col-4">
                                    {v3.totalAns == null ? 0: v3.totalAns} ({percent(v3.totalAns).toFixed(0)}%)
                                </div> 
                              </div>
                            </div> 
                        )):null}     
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Report;
const Data=  [
    {
        "survey_header_id": 1,
        "survey_name": "Cooling System",
        "survey_sections": [
            {
                "survey_section_id": 1,
                "section_name": "Basic Information",
                "questions": [
                    {
                        "question_id": 1,
                        "question_name": "What is the type of your building?",
                        "option_choices": [
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
                            },
                            {
                                "option_choice_name": "Factory",
                                "totalAns": 2
                            }
                        ]
                    },
                    {
                        "question_id": 3,
                        "question_name": "What is the total area of your building?",
                        "option_choices": [
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
                            },
                            {
                                "option_choice_name": "Above 15000",
                                "totalAns": null
                            }
                        ]
                    },
                    {
                        "question_id": 4,
                        "question_name": "What is the age of your building?",
                        "option_choices": [
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
                            },
                            {
                                "option_choice_name": "40-50",
                                "totalAns": 1
                            },
                            {
                                "option_choice_name": "More than 50",
                                "totalAns": null
                            }
                        ]
                    },
                    {
                        "question_id": 5,
                        "question_name": "Do you have building management system installed(BMS)?",
                        "option_choices": [
                            {
                                "option_choice_name": "Yes",
                                "totalAns": 3
                            },
                            {
                                "option_choice_name": "No",
                                "totalAns": 6
                            }
                        ]
                    },
                    {
                        "question_id": 6,
                        "question_name": "What is the brand of chiller?",
                        "option_choices": [
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
                            },
                            {
                                "option_choice_name": "Haier",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Mitsubishi",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Johnson Controls",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Ingersoll",
                                "totalAns": null
                            }
                        ]
                    },
                    {
                        "question_id": 9,
                        "question_name": "Please select the cooling rationale of chiller #1?",
                        "option_choices": [
                            {
                                "option_choice_name": "Water-cooled Chiller",
                                "totalAns": 4
                            },
                            {
                                "option_choice_name": "Air-cooled Chiller",
                                "totalAns": 4
                            }
                        ]
                    },
                    {
                        "question_id": 10,
                        "question_name": "Do you have another chiller?",
                        "option_choices": [
                            {
                                "option_choice_name": "Yes",
                                "totalAns": 1
                            },
                            {
                                "option_choice_name": "No",
                                "totalAns": 5
                            }
                        ]
                    },
                    {
                        "question_id": 11,
                        "question_name": "What is the brand of the condenser #1?",
                        "option_choices": [
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
                            },
                            {
                                "option_choice_name": "Haier",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Mitsubishi",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Johnson Controls",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Ingersoll Dresser",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Grundfos",
                                "totalAns": null
                            }
                        ]
                    },
                    {
                        "question_id": 14,
                        "question_name": "Please select ther cooling rationale of Condenser #1?",
                        "option_choices": [
                            {
                                "option_choice_name": "Water-cooled",
                                "totalAns": 3
                            },
                            {
                                "option_choice_name": "Air-cooled",
                                "totalAns": 2
                            }
                        ]
                    },
                    {
                        "question_id": 15,
                        "question_name": "Do you have VSD installed for condenser #1?",
                        "option_choices": [
                            {
                                "option_choice_name": "Yes",
                                "totalAns": 1
                            },
                            {
                                "option_choice_name": "No",
                                "totalAns": 3
                            }
                        ]
                    },
                    {
                        "question_id": 17,
                        "question_name": "Do you have another Condenser?",
                        "option_choices": [
                            {
                                "option_choice_name": "Yes",
                                "totalAns": 1
                            },
                            {
                                "option_choice_name": "No",
                                "totalAns": 1
                            }
                        ]
                    },
                    {
                        "question_id": 18,
                        "question_name": "What is the brand of Condenser #2?",
                        "option_choices": [
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
                            },
                            {
                                "option_choice_name": "Haier",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Mitsubishi",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Johnson Cnontrols",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Ingersoll",
                                "totalAns": null
                            }
                        ]
                    },
                    {
                        "question_id": 21,
                        "question_name": "Do you have VSD installed for condenser #2?",
                        "option_choices": [
                            {
                                "option_choice_name": "Water_cooled",
                                "totalAns": 2
                            },
                            {
                                "option_choice_name": "Air-cooled",
                                "totalAns": 1
                            }
                        ]
                    },
                    {
                        "question_id": 22,
                        "question_name": "What is the brand of Evaporator #1?",
                        "option_choices": [
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
                            },
                            {
                                "option_choice_name": "Haier",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Mitsubishi",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Johnson Controls",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Ingersoll Dresser",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Grundfos",
                                "totalAns": null
                            }
                        ]
                    },
                    {
                        "question_id": 25,
                        "question_name": "Please select the cooling rationale of Evaporator #1?",
                        "option_choices": [
                            {
                                "option_choice_name": "Water-cooled",
                                "totalAns": 2
                            },
                            {
                                "option_choice_name": "Air-cooled",
                                "totalAns": 1
                            }
                        ]
                    },
                    {
                        "question_id": 26,
                        "question_name": "Do you have VSD installed for Evaporator #1?",
                        "option_choices": [
                            {
                                "option_choice_name": "Yes",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "No",
                                "totalAns": 2
                            }
                        ]
                    },
                    {
                        "question_id": 27,
                        "question_name": "Do you have another Evaporator?",
                        "option_choices": [
                            {
                                "option_choice_name": "Yes",
                                "totalAns": 1
                            },
                            {
                                "option_choice_name": "No",
                                "totalAns": 2
                            }
                        ]
                    },
                    {
                        "question_id": 28,
                        "question_name": "What is the brand of Evaporator #2?",
                        "option_choices": [
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
                            },
                            {
                                "option_choice_name": "Haier",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Mitsubishi",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Johnson Controls",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Ingersoll Dresser",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Grundfos",
                                "totalAns": null
                            }
                        ]
                    },
                    {
                        "question_id": 31,
                        "question_name": "Please select the cooling rationale of Evaporator #2?",
                        "option_choices": [
                            {
                                "option_choice_name": "Water-cooled",
                                "totalAns": 1
                            },
                            {
                                "option_choice_name": "Air-Cooled",
                                "totalAns": 1
                            }
                        ]
                    },
                    {
                        "question_id": 32,
                        "question_name": "Do you have VSD installed for Evaporator #2?",
                        "option_choices": [
                            {
                                "option_choice_name": "Yes",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "No",
                                "totalAns": 2
                            }
                        ]
                    },
                    {
                        "question_id": 33,
                        "question_name": "What is the brand of Cooling Tower #1?",
                        "option_choices": [
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
                            },
                            {
                                "option_choice_name": "Haier",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Mitsubishi",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Johnson Controls",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Ingersoll Dresser",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Grundfos",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Marley",
                                "totalAns": null
                            }
                        ]
                    },
                    {
                        "question_id": 36,
                        "question_name": "Do you have another Cooling Tower?",
                        "option_choices": [
                            {
                                "option_choice_name": "Yes",
                                "totalAns": 1
                            },
                            {
                                "option_choice_name": "No",
                                "totalAns": 1
                            }
                        ]
                    },
                    {
                        "question_id": 37,
                        "question_name": "What is the brand of Cooling Tower #2?",
                        "option_choices": [
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
                            },
                            {
                                "option_choice_name": "Haier",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Mitsubishi",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Johnson Controls",
                                "totalAns": null
                            },
                            {
                                "option_choice_name": "Ingersoll",
                                "totalAns": null
                            }
                        ]
                    },
                    {
                        "question_id": 40,
                        "question_name": "Do you have another Cooling Tower?",
                        "option_choices": [
                            {
                                "option_choice_name": "Yes",
                                "totalAns": 1
                            },
                            {
                                "option_choice_name": "No",
                                "totalAns": 1
                            }
                        ]
                    }
                ]
            }
        ],
        "building_count": [
            {
                "survey_headers_id": 1,
                "Number_of_buildings": 13
            }
        ]
    }
]

