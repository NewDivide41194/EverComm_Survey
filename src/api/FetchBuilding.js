import * as API from "./url";

export const BuildingFetch = (
  {
    clientCompany,
    buildingName,
    postal,
    address,
    comment,
    country,
    deviceData,
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
    deviceData,
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
      chiller:deviceData.chiller,
      condenser:deviceData.condenser,
      evaporator:deviceData.evaporator,
      coolingTower:deviceData.coolingTower
    }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};
