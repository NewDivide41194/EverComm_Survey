import * as API from "./url";

export const QuestionFetch = (
  {
    userId,
    surveyHeaderId,
    typeId,
    bTypeId,
    surveySectionId,
    countryId,
    token,
    signal
  },
  callback
) => {
  fetch(API.QuestionAPI, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
      Accept: "/",
      Authorization: `Bearer ${token}`,
    },
    signal:signal,
    body: JSON.stringify({
      admin_id: userId,
      survey_header_id: surveyHeaderId,
      buildingId: typeId,
      buildingTypeId: bTypeId,
      surveySectionId: surveySectionId,
      countryId: countryId,
    }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};
// import * as API from "./url";

// export const QuestionFetch = (
//   {
//     userId,
//     surveyHeaderId,
//     typeId,
//     bTypeId,
//     surveySectionId,
//     countryId,
//     token,
//   },
//   callback
// ) => {
//   fetch(API.QuestionAPI, {
//     method: `POST`,
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "*/*",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({
//       admin_id: userId,
//       survey_header_id: surveyHeaderId,
//       buildingId: typeId,
//       buildingTypeId: bTypeId,
//       surveySectionId: surveySectionId,
//       countryId: countryId,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => callback(null, data))
//     .catch((err) => console.log(err));
// };
