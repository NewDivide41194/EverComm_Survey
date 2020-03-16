
import QuestionContainer from "../pages/Question/container/QuestionContainer";
import ReportContainer from "../pages/Report/Container/ReportContainer";
import RegisterContainer from "../pages/register/container/registerContainer";
import LoginContainer from "../pages/login/container/LoginContainer";
import AdminContainer from "../pages/admin/container/AdminContainer"
import MenuContainer from "../pages/Menu/constainer/MenuContainer"

export const RouteName = {
  routeFirstPage: "login",
  routeRegisterPage: "register",

  routeQuestionPage: "question",
  routeReportPage:"report",

  routeAdminPage: "admin",
  routeMenuPage: "menu"


};

export default {
  routes: {
    [RouteName.routeFirstPage]:{component:LoginContainer},

    [RouteName.routeQuestionPage]:{component:QuestionContainer},
    [RouteName.routeReportPage]:{component:ReportContainer},
    [RouteName.routeRegisterPage]:{component:RegisterContainer},
    [RouteName.routeAdminPage]:{component:AdminContainer},
    [RouteName.routeMenuPage]:{component:MenuContainer}
  },
  default:RouteName.routeFirstPage
};
