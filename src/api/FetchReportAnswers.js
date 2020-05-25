import * as API from "./url";

export const UserReportAnswers = (
  { userId, surveyHeaderId, startDate, endDate, token },
  callback
) => {
console.log(userId, surveyHeaderId, startDate, endDate, token);

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