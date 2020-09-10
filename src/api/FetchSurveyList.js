import * as API from "./url";

export const SurveyListFetch = (userId,surveyHeaderId,token,callback) => {
  fetch(API.Survey_List(userId,surveyHeaderId),
  {headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    Authorization: `Bearer ${token}`
  }})
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err));
};

export const SurveySectionFetch = (surveyHeaderId, countryId, token, callback) => {
  fetch(API.Survey_Section(surveyHeaderId, countryId), 
  {
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then(data => callback(null, data))
  .catch(err => console.log(err));
}