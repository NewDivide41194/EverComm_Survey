import * as API from "./url";

export const TrancateAns = ({ userId,survey_header_id }, callback) => {
  console.log(userId,survey_header_id);
  
  fetch(API.Trancate_Answers + userId+`/${survey_header_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    //   Authorization: `Bearer ${token}`
    },
    // body: JSON.stringify({
    //   survey_header_id:survey_header_id
    // }),
    caAnswerData: "no-caAnswerData"
  })
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err));
};
