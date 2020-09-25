import * as API from "./url";

export const QuestionFetch = (
  { userId, surveyHeaderId, typeId, bTypeId, surveySectionId,countryId, token },
  callback
) => {
  console.log( userId, surveyHeaderId, typeId, bTypeId, surveySectionId,countryId, token );
  fetch(
    API.QuestionAPI(
      userId,
      surveyHeaderId,
      typeId,
      bTypeId,
      surveySectionId,
      countryId,
      token
    ),
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};
