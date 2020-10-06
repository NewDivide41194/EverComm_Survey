import * as API from "./url";

export const UserReportAnswers = (
  {
    userId,
    surveyHeaderId,
    viewType,
    countryId,
    buildingTypeId,
    buildingId,
    token
  },
  callback
) => {
  fetch(API.User_Report_Answer(surveyHeaderId), {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      userId: userId,
      viewType: viewType,
      countryId: countryId,
      buildingId: buildingId,
      buildingTypeId: buildingTypeId
    }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};

export const FetchReportMenu = (
  { userId, viewType, token },
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
      userId: userId,
      viewType: viewType,
    }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};

export const FetchGraphReport = (
  { userId, surveyHeaderId, viewType, token },
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
      userId: userId,
      viewType: viewType,
    }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};
