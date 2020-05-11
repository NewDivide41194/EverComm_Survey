import * as API from "./url";

export const ReportAnswers = (
  { surveyHeaderId, startDate, endDate, token },
  callback
) => {
  console.log("DATE------>", startDate, endDate);

  fetch(API.Report_Answers(surveyHeaderId, token), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ startDate: startDate, endDate: endDate }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};
