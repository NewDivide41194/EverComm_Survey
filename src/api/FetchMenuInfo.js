import * as API from "./url";

export const MenuInfoFetch = ({ email }, callback) => {
    
  fetch(API.Menu_Info, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    //   Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      email: email,
    }),
    caAnswerData: "no-caAnswerData"
  })
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err));
};
