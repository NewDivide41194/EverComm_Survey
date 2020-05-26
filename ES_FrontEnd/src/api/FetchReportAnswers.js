import * as API from "./url";

export const UserReportAnswers = (
  { userId, surveyHeaderId, startDate, endDate, token },
  callback
) => {

  fetch(API.User_Report_Answer( surveyHeaderId), {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
     body: JSON.stringify({ startDate: startDate, endDate: endDate, userId:userId }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};

export const FetchReportMenu = (
  { userId, StartDate, EndDate, token },
  callback
) => {
console.log(userId, StartDate, EndDate, token);

  fetch(API.Report_Menu( userId), {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
     body: JSON.stringify({ startDate: StartDate, endDate: EndDate, userId:userId }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};