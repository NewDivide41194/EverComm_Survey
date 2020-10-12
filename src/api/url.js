// const serverURL='http://192.168.100.21:7878'
const serverURL = "http://172.105.123.57:7878";
// const serverURL = "http://192.168.100.206:7878";
// const serverURL = "http://localhost:7878";

const UserId = localStorage.getItem("userId");

export const RegisterAPI = `${serverURL}/api/v1/user/register`;

export const LoginAPI = `${serverURL}/api/v1/login/userlogin`;

export const User_AnswerApi = `${serverURL}/api/v1/survey/answers`;

export const Menu_Info = `${serverURL}/api/v1/survey/surveyMenu/`;

export const Trancate_Answers = `${serverURL}/api/v1/survey/`;

export const Building_Insert = `${serverURL}/api/v1/building/addBuilding`;

export const Country_Insert = `${serverURL}/api/v1/country/addCountry`;

export const Get_Country = (surveyHeaderId) =>
  `${serverURL}/api/v1/country/getCountry/${surveyHeaderId}`;

export const QuestionAPI = `${serverURL}/api/v1/survey/questions`;

export const Survey_List = (userId, surveyHeaderId) =>
  `${serverURL}/api/v1/survey/surveyList/${userId}/${surveyHeaderId}`;

export const New_Survey_List = (userId, surveyHeaderId) =>
  `${serverURL}/api/v1/survey/newsurveyList/${userId}/${surveyHeaderId}`;

export const User_Report_Answer = (surveyHeaderId) =>
  `${serverURL}/api/v1/report/reportTotalAnswers/${surveyHeaderId}`;

export const Report_Menu = (userId) =>
  ` ${serverURL}/api/v1/report/reportMenu/${userId}`;

export const Survey_Section = (surveyHeaderId, countryId) =>
  `${serverURL}/api/v1/survey/surveySectionList/${surveyHeaderId}/${countryId}`;

export const Graph_Report = `${serverURL}/api/v1/report/graphReportUserLevel`;

export const Building_Type = `${serverURL}/api/v1/building/getBuildingType`;

export const Get_User = `${serverURL}/api/v1/user/getUser`;

export const InsertSurvey = `${serverURL}/api/v1/createSurvey/Survey/${UserId}`;

export const Get_One_User = `${serverURL}/api/v1/user/getOneUser`;

export const Update_User = `${serverURL}/api/v1/user/updateUser`;

export const PasswordUpdate = (userId) =>
  `${serverURL}/api/v1/user/edituser/${userId}`;
