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
    buildingType,
    buildingTypeId
  },
  callback
) => {
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
      coolingTower:deviceData.coolingTower,
      buildingType:buildingType,
      buildingTypeId:buildingTypeId
    }),
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};


export const GetBuildingType = ({userId,surveyHeaderId,buildingId,token}, callback) => {
  console.log(token);
  fetch(API.Building_Type,
  {headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    Authorization: `Bearer ${token}`
  }})
    .then(res => res.json())
    .then(data => callback(null, data.payload))
    .catch(err => console.log(err));
};
