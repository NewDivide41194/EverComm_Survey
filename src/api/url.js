const serverURL='http://192.168.100.164:7878'
// const serverURL = "http://172.105.123.57:7878";

export const QuestionAPI = (userId, surveyHeaderId) =>
  `${serverURL}/api/v1/survey/questions/${userId}/${surveyHeaderId}`;

export const RegisterAPI = `${serverURL}/api/v1/user`;

export const LoginAPI = `${serverURL}/api/v1/login/userlogin`;

export const User_AnswerApi = `${serverURL}/api/v1/survey/answers`;

export const Menu_Info = `${serverURL}/api/v1/survey/menu/`;

export const Trancate_Answers = `${serverURL}/api/v1/survey/`;