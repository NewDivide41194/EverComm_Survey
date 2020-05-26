import * as API from "./url";

export const BuildingFetch = (
  {
    clientCompany,
    buildingName,
    postal,
    address,
    comment,
    country,
    userId,
    surveyHeaderId,
    token,
  },
  callback
) => {
  console.log(
    clientCompany,
    buildingName,
    postal,
    address,
    comment,
    country,
    surveyHeaderId,
    userId
  );
  fetch(API.Building_Insert, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      buildingName: buildingName,
      companyName: clientCompany,
      address: address,
      postalCode: postal,
      country: country,
      comment: comment,
      userId: userId,
      surveyHeaderId: surveyHeaderId,
    }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};
