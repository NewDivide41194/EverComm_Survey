import * as API from "./url";

export const QuestionFetch = ({userId,surveyHeaderId,buildingId,token}, callback) => {
console.log(userId,surveyHeaderId,buildingId,token);
  
  fetch(API.QuestionAPI(userId,surveyHeaderId,buildingId,token),
  {headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    Authorization: `Bearer ${token}`
  }})
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err));
};

