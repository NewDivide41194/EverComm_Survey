import * as API from "./url";

export const QuestionFetch = (token, callback) => {
  fetch(API.QuestionAPI)
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err));
};

export const UserFetch = ({ userName,password, token }, callback) => {
  console.log(userName,password);
  
  fetch(API.UserAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name: userName,
      password:password
    }),
    caAnswerData: "no-caAnswerData"
  })
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err)
    );
};
