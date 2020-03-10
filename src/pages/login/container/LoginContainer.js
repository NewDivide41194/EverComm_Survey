import React, { useState } from "react";
import Login from "../components/UserLogin";
import { UserFetch } from "../../../api/FetchQuestions";
import UserLogin from "../components/AdminLogin";

const LoginContainer = props => {
  const [userName, setUserName] = useState("");
  const [eMail, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  const token = 123;

  const _handleSubmit = e => {
    e.preventDefault();
    if (userName === "") {
      alert("Fill User Name");
    } else {
      UserFetch({ userName, password, token }, (err, data) => {
        localStorage.setItem(
          "userData",
          JSON.stringify({ userId: data.payload.insertId, username: userName })
        );
        props.history.push("/question");
      });
    }
  };
  const _handleUserChange = e => {
    setUserName(e.target.value);
  };
  const _handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const _handlePwdChange = e => {
    setpassword(e.target.value);
  };
  const _handleView = () => {
    setVisible(!visible);
  };

  return (
    <UserLogin
      handleSubmit={d => _handleSubmit(d)}
      userName={userName}
      eMail={eMail}
      password={password}
      handleEmailChange={_handleEmailChange}
      handleChange={_handleUserChange}
      handlePwdChange={_handlePwdChange}
      handleView={_handleView}
      visible={visible}
    />
  );
};

export default LoginContainer;
