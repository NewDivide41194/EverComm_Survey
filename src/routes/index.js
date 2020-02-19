import React from "react";
import LoginContainer from "../pages/login/container/LoginContainer";
import QuestionContainer from "../pages/Question/container/QuestionContainer";

export const RouteName = {
  routeFirstPage: "login",
  routeQuestionPage: "question"
};

export default {
  routes: {
    [RouteName.routeFirstPage]: { component: LoginContainer },
    [RouteName.routeQuestionPage]:{component:QuestionContainer}
  },
  default:RouteName.routeFirstPage
};
