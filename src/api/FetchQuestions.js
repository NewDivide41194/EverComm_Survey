import * as API from "./url";

export const QuestionFetch = (userId,questionId, callback) => {
  fetch(API.QuestionAPI(userId,questionId))
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err));
};

export const UserFetch = ({ eMail,password, token }, callback) => {
  console.log(eMail,password);
  
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
