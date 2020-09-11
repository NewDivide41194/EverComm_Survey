import * as API from "../url";

export const AddNewSurvey = (
  { surveyHeader, remark, active, surveySections,token },
  callback
) => {
  fetch(API.InsertSurvey, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      surveyName: surveyHeader,
      remark: "ok",
      active: true,
      sectionData: surveySections,
    }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};
