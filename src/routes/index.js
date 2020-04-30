import QuestionContainer from "../pages/Question/container/QuestionContainer";
import ReportMenuContainer from "../pages/ReportMenu/Container/ReportMenuContainer";
import RegisterContainer from "../pages/register/container/registerContainer";
import AdminContainer from "../pages/admin/container/AdminContainer"
import MenuContainer from "../pages/Menu/constainer/MenuContainer"
import BuildingContainer from "../pages/building/container/BuildingContainer"
import AccountContainer from "../pages/user/account/container/AccountContainer"
import SurveylistContainer from "../pages/surveylist/container/SurveylistContainer"
import ReportContainer from "../pages/Report/container/ReportContainer";

export const RouteName = {
  routeFirstPage: "",
  routeRegisterPage: "register",

  routeQuestionPage: "question/:userId/:surveyHeaderId/:buildingId",
  routeReportMenuPage:"reportMenu",

  routeReportPage: "report",

  routeAdminPage: "admin",
  routeMenuPage: "menu/:userId",

  routeBuildingPage: "building",

  routeAccountPage: "user/account",

  routeSurveylistPage: "surveylist",
  
};

export default {
  routes: {
    // [RouteName.routeFirstPage]:{component:LoginContainer},

    [RouteName.routeQuestionPage]:{component:QuestionContainer},
    [RouteName.routeReportMenuPage]:{component:ReportMenuContainer},
    [RouteName.routeReportPage]:{component:ReportContainer},
    [RouteName.routeRegisterPage]:{component:RegisterContainer},
    [RouteName.routeAdminPage]:{component:AdminContainer},
    [RouteName.routeMenuPage]:{component:MenuContainer},
    [RouteName.routeAccountPage]:{component:AccountContainer},
    [RouteName.routeBuildingPage]:{component:BuildingContainer},
    [RouteName.routeSurveylistPage]:{component:SurveylistContainer},
  },
  default:RouteName.routeFirstPage
};
