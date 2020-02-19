import React from "react";
import Login from "../components/UserLogin";

const LoginContainer = props => {
  const _handleSubmit = () => {
    props.history.push("/question");
    // history.location.pathname='/questions'
  };
  return (
    <div>
      <Login handleSubmit={_handleSubmit} />
    </div>
  );
};

export default LoginContainer;
