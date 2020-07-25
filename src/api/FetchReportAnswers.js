import * as API from "./url";

export const UserReportAnswers = (
  { userId, surveyHeaderId, startDate, endDate, viewType, token },
  callback
) => {
  fetch(API.User_Report_Answer(surveyHeaderId), {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      startDate: startDate,
      endDate: endDate,
      userId: userId,
      viewType: viewType,
    }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};

export const FetchReportMenu = (
  { userId, StartDate, EndDate, viewType, token },
  callback
) => {

  fetch(API.Report_Menu(userId), {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      startDate: StartDate,
      endDate: EndDate,
      userId: userId,
      viewType: viewType,
    }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};

export const FetchGraphReport = (
  { userId, surveyHeaderId, startDate, endDate, viewType, token },
  callback
) => {

  fetch(API.Graph_Report, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      startDate: startDate,
      endDate: endDate,
      userId: userId,
      viewType: viewType,
    }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};
