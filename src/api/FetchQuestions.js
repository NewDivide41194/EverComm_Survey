import * as API from "./url";

export const QuestionFetch = (userId,questionId,buildingId, callback) => {
  console.log(buildingId);
  
  fetch(API.QuestionAPI(userId,questionId,buildingId))
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err));
};

export const UserFetch = ({ eMail,password, token }, callback) => {
  console.log("555555555 ",eMail,password);
  
  fetch(API.LoginAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      email: eMail,
      password:password
    }),
    caAnswerData: "no-caAnswerData"
  })
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err)
    );
};
