import React, { useState, useEffect } from "react";
import { LoginFetch } from "../../../api/FetchUser";
import UserLogin from "../components/AdminLogin";
import { useAlert } from "react-alert";
import Auth from "../../../security/auth";
import { LoginFormValidation } from "../../../helper/formValidation";

const LoginContainer = (props) => {
  const [eMail, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const token = 123;
  const alert = useAlert();

  const errStyle = {
    color: "red",
    fontSize: 12,
    marginTop: "-20px",
  };

  useEffect(() => {
    localStorage.clear();
    document.getElementById("Email").focus();
  }, []);

  const _handleSubmit = (e) => {
    e.preventDefault();
    setErr(LoginFormValidation(eMail, password));
    if (LoginFormValidation(eMail, password).eMailErr) {
      document.getElementById("Email").focus();
    } else if (LoginFormValidation(eMail, password).passwordErr) {
      document.getElementById("password").focus();
    }
    if (Object.keys(LoginFormValidation(eMail, password)).length === 0) {
      setIsDisabled(true);
      LoginFetch(
        {
          eMail,
          password,
          token,
        },
        (err, data) => {
          if (data.success === false) {
            alert.error("Account does not exit!");
            setIsDisabled(false);
          } else {
            localStorage.setItem("token", data.payload[0].token);
            localStorage.setItem("userId", data.payload[0].login_user_id);
            localStorage.setItem("email", data.payload[0].email);
            Auth.login(() => {
              const userId = data.payload[0].login_user_id;
              props.history.push(`/menu/${userId}`);
            });
            window.location.reload();
          }
        }
      );
    }
  };

  const _handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErr({});
  };
  const _handlePwdChange = (e) => {
    setpassword(e.target.value);
    setErr({});
  };
  const _handleView = () => {
    setVisible(!visible);
  };

  return (
    <UserLogin
      handleSubmit={(d) => _handleSubmit(d)}
      eMail={eMail}
      password={password}
      handleEmailChange={_handleEmailChange}
      handlePwdChange={_handlePwdChange}
      handleView={_handleView}
      visible={visible}
      err={err}
      errStyle={errStyle}
      isDisabled={isDisabled}
    />
  );
};

export default LoginContainer;
