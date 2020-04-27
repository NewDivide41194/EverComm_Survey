import * as API from "./url";

export const ReportAnswers = ({surveyHeaderId,token}, callback) => {
console.log(surveyHeaderId,token);
  
  fetch(API.Report_Answers(surveyHeaderId,token),
  {headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    Authorization: `Bearer ${token}`
  }})
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err));
};