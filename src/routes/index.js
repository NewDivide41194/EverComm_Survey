
import QuestionContainer from "../pages/Question/container/QuestionContainer";
import ReportContainer from "../pages/Report/Container/ReportContainer";
import RegisterContainer from "../pages/register/container/registerContainer";
import LoginContainer from "../pages/login/container/LoginContainer";

export const RouteName = {
  routeFirstPage: "login",
  routeRegisterPage: "register",

  routeQuestionPage: "question",
  routeReportPage:"report"
};

export default {
  routes: {
    [RouteName.routeFirstPage]:{component:LoginContainer},

    [RouteName.routeQuestionPage]:{component:QuestionContainer},
    [RouteName.routeReportPage]:{component:ReportContainer},
    [RouteName.routeRegisterPage]:{component:RegisterContainer}
  },
  default:RouteName.routeFirstPage
};
