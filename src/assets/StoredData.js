const userId =localStorage.getItem("userId");
const token = localStorage.getItem("token");
const surveySectionId = 1;
const bTypeId = localStorage.getItem("bTypeId");
const buildingId = localStorage.getItem("buildingId");
const buildingName = localStorage.getItem("buildingName");
const buildingType = localStorage.getItem("buildingType");
const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
const surveyHeaderName = localStorage.getItem("SurveyHeaderName");
const countryId = localStorage.getItem("countryId");
const organization = localStorage.getItem("organization");
const countryName = localStorage.getItem("countryName");
const email = localStorage.getItem("email");
const userLevel = localStorage.getItem("userLevel");

export {
  userId,
  token,
  surveySectionId,
  bTypeId,
  buildingId,
  buildingName,
  buildingType,
  surveyHeaderId,
  countryId,
  organization,
  countryName,
  email,
  userLevel,
  surveyHeaderName,
};
