
import QuestionContainer from "../pages/Question/container/QuestionContainer";
import ReportContainer from "../pages/Report/Container/ReportContainer";

export const RouteName = {
  routeFirstPage: "login",
  routeQuestionPage: "question",
  routeReportPage:"report"
};

export default {
  routes: {
    [RouteName.routeQuestionPage]:{component:QuestionContainer},
    [RouteName.routeReportPage]:{component:ReportContainer}

  },
  default:RouteName.routeFirstPage
};
