import * as API from "./url";

export const PostAnswer = (SurveyData, callback) => {
    console.log("Final POost",SurveyData);
    
  fetch(API.User_AnswerApi,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*"
      },
      body: JSON.stringify(SurveyData)
    })
      .then(res => res.json())
      .then(data => callback(null, data))
      .catch(err => console.log(err));
};
