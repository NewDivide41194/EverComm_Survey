
import QuestionContainer from "../pages/Question/container/QuestionContainer";

export const RouteName = {
  routeFirstPage: "login",
  routeQuestionPage: "question"
};

export default {
  routes: {
    [RouteName.routeQuestionPage]:{component:QuestionContainer}
  },
  default:RouteName.routeFirstPage
};
