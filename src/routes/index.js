import QuestionContainer from "../pages/Question/container/QuestionContainer";
import ReportMenuContainer from "../pages/ReportMenu/Container/ReportMenuContainer";
import RegisterContainer from "../pages/register/container/registerContainer";
import AdminContainer from "../pages/admin/container/AdminContainer";
import MenuContainer from "../pages/Menu/container/MenuContainer";
import BuildingContainer from "../pages/building/container/BuildingContainer";
import AccountContainer from "../pages/user/account/container/AccountContainer";
import SurveylistContainer from "../pages/surveylist/container/SurveylistContainer";
import ReportContainer from "../pages/Report/Container/ReportContainer";
import SurveryMenuContainer from '../pages/SurveyMenu/container/SurveyMenuContainer';
import FinalPageContainer from '../pages/FinalPage/container/FinalPageContainer';
import { ChangePassword } from "../pages/user/account/component/ChangePassword";
import SurveyManagementContainer from "../pages/SurveyManagement/container/SurveyManagementContainer";
import CountryContainer from "../pages/EGovernment/country/containers/CountryContainer";
import SurveySectionContainer from "../pages/EGovernment/surveySection/containers/SurveySectionContainer";

export const RouteName = {
  routeFirstPage: "",
  routeRegisterPage: "register",

  routeQuestionPage: "question/:userId/:surveyHeaderId",
  routeReportMenuPage: "reportMenu/:userId",

  routeReportPage: "report",

  routeAdminPage: "admin/dashboard/createNewSurvey",
  routeMenuPage: "menu/:userId",

  routeSurveyMenuPage: "surveyMenu/:userId",
  routeSurveyManagementPage: "admin/dashboard/manageSurveyList/:userId",
  routeSurveySectionPage: "surveySection",

  routeBuildingPage: "addBuilding",
  routeCountryPage: "countryMenu",

  routeAccountPage: "user/accountManagement/:userId",
  routeSelfAccountPage: "user/editAccount/:userId",
  routeChangePasswordPage:"user/account/changePassword/:userId",

  routeSurveylistPage: "surveyList",

  routeFinalPage: "finalPage",

};

export default {
  routes: {
    // [RouteName.routeFirstPage]:{component:LoginContainer},

    [RouteName.routeQuestionPage]: { component: QuestionContainer },
    [RouteName.routeReportMenuPage]: { component: ReportMenuContainer },
    [RouteName.routeReportPage]: { component: ReportContainer },
    [RouteName.routeRegisterPage]: { component: RegisterContainer },
    [RouteName.routeAdminPage]: { component: AdminContainer },
    [RouteName.routeMenuPage]: { component: MenuContainer },
    [RouteName.routeSurveyMenuPage]: { component: SurveryMenuContainer },
    [RouteName.routeSurveyManagementPage] : { component: SurveyManagementContainer },
    [RouteName.routeAccountPage]: { component: AccountContainer },
    [RouteName.routeSelfAccountPage]: { component: AccountContainer },
    [RouteName.routeChangePasswordPage]: { component: ChangePassword },

    [RouteName.routeBuildingPage]: { component: BuildingContainer },
    [RouteName.routeCountryPage] : { component: CountryContainer},
    [RouteName.routeSurveylistPage]: { component: SurveylistContainer },
    [RouteName.routeSurveySectionPage] : { component: SurveySectionContainer },
    [RouteName.routeFinalPage]: { component: FinalPageContainer },
  },
  default: RouteName.routeFirstPage,
};
