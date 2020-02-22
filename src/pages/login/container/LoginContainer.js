import React, { useState, useEffect } from "react";
import Login from "../components/UserLogin";
import { UserFetch } from "../../../api/FetchQuestions";

const LoginContainer = props => {
  const [userName, setUserName] = useState("");
  const token = 123;

  const _handleSubmit = () => {
    if (userName === "") {
      return
    } else {
      UserFetch({ userName, token }, (err, data) => {
        localStorage.setItem("userData", JSON.stringify(data.payload[0]));
      });
      props.history.push("/question");
    }
  };
  const _handleChange = e => {
       setUserName(e.target.value);
  };
 

  return (
    <Login
      handleSubmit={_handleSubmit}
      userName={userName}
      handleChange={_handleChange}
    />
  );
};

export default LoginContainer;
