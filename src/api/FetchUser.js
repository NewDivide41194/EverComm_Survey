import * as API from "./url";
export const RegisterFetch = (
  {
    firstName,
    lastName,
    eMail,
    password,
    companyName,
    active,
    Mobile,
    userLevel,
    surveyHeaderId,
    token,
  },
  callback
) => {
  const userName = firstName.trim() + " " + lastName.trim();

  fetch(API.RegisterAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userName: userName,
      email: eMail,
      password: password,
      companyName: companyName,
      active: active,
      phone_number: Mobile,
      user_level: userLevel&&userLevel.value,
      surveyHeaderId: surveyHeaderId,
    }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};

export const UpdateUserInfo = (
  { Name, eMail, newPassword, token },
  callback
) => {
  fetch(UpdateUserInfo, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      Name: Name,
      email: eMail,
      newpassword: newPassword,
    }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};

export const LoginFetch = ({ eMail, password, token }, callback) => {
  fetch(API.LoginAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email: eMail,
      password: password,
    }),
    caAnswerData: "no-caAnswerData",
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};

export const GetUser = (token, callback) => {
  fetch(API.Get_User, {
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};

export const UpdateUserAccount = (
  {
    id,
    firstName,
    lastName,
    companyName,
    Mobile,
    eMail,
    userLevel,
    active,
    surveyHeaderId,
  },
  callback,
  { token } = {}
) => {
  console.log("surveyHeaderId >> ", surveyHeaderId);
  const userName = firstName.trim() + " " + lastName.trim();
  fetch(API.Update_User + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userName: userName,
      email: eMail,
      companyName: companyName,
      active: active,
      phone_number: Mobile,
      user_level: userLevel,
      surveyHeaderId: surveyHeaderId,
    }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((error) => {
      console.log(error);
    });
};
