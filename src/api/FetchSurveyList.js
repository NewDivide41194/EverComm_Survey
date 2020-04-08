import * as API from "./url";

export const SurveyListFetch = (userId,surveyHeaderId,callback) => {
  fetch(API.Survey_List(userId,surveyHeaderId))
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err));
};