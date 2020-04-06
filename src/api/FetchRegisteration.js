import * as API from "./url";
export const RegisterFetch = (
  { firstName,lastName, eMail, password, companyName, token },
  callback
) => {
const userName=firstName.trim()+' '+lastName.trim()
console.log(userName, eMail, password, companyName);

  fetch(API.RegisterAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      userName: userName,
      email: eMail,
      password: password,
      companyName: companyName
    }),
    caAnswerData: "no-caAnswerData"
  })
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err));
};

//GET Companies
export const CompanyFetch = (callback) => {
  fetch(API.Company_Select)
    .then(res => res.json())
    .then(data =>  callback(data))
    .catch(err => console.log(err));
};
