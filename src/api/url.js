// const serverURL='http://192.168.100.163:7878'
const serverURL = "http://172.105.123.57:7878";

<<<<<<< HEAD
export const QuestionAPI = (userId, surveyHeaderId) =>
`${serverURL}/api/v1/survey/questions/${userId}/${surveyHeaderId}`;
=======
// export const QuestionAPI = (userId, surveyHeaderId,buildingId) =>
//   `${serverURL}/api/v1/survey/questions/${userId}/${surveyHeaderId}/${buildingId}`;

  export const QuestionAPI = (userId, surveyHeaderId,buildingId) =>
  `${serverURL}/api/v1/survey/questions/${userId}/${surveyHeaderId}/${buildingId}`;
>>>>>>> 688bbdafb5c4ca046f5e406095d2a9b2f2d4f247

export const RegisterAPI = `${serverURL}/api/v1/user/register`;

export const LoginAPI = `${serverURL}/api/v1/login/userlogin`;

export const User_AnswerApi = `${serverURL}/api/v1/survey/answers`;

export const Menu_Info = `${serverURL}/api/v1/survey/surveyMenu/`;

export const Trancate_Answers = `${serverURL}/api/v1/survey/`;

export const Company_Select = `${serverURL}/api/v1/user/companies`;

export const Building_Insert=`${serverURL}/api/v1/building/addBuilding`;

export const Survey_List=(userId,surveyHeaderId)=>`${serverURL}/api/v1/survey/surveyList/${userId}/${surveyHeaderId}`
