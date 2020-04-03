import * as API from "./url";
export const RegisterFetch = (
  { userName, eMail, password, companyId, token },
  callback
) => {
  console.log(userName, eMail, password, companyId);

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
      companyId: companyId
    }),
    caAnswerData: "no-caAnswerData"
  })
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err));
};

export const CompanyFetch = (callback) => {
  fetch(API.Company_Select)
    .then(res => res.json())
    .then(data =>  callback(data))
    .catch(err => console.log(err));
};
