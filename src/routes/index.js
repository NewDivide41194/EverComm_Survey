
import QuestionContainer from "../pages/Question/container/QuestionContainer";
import ReportContainer from "../pages/Report/Container/ReportContainer";
import RegisterContainer from "../pages/register/container/registerContainer";

export const RouteName = {
  routeFirstPage: "login",
  routeRegisterPage: "admin/login",

  routeQuestionPage: "question",
  routeReportPage:"report"
};

export default {
  routes: {
    [RouteName.routeQuestionPage]:{component:QuestionContainer},
    [RouteName.routeReportPage]:{component:ReportContainer},
    [RouteName.routeRegisterPage]:{component:RegisterContainer}

  },
  default:RouteName.routeFirstPage
};
