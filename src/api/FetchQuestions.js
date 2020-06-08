import * as API from "./url";

export const QuestionFetch = ({userId,surveyHeaderId,buildingId,token}, callback) => {
  
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

