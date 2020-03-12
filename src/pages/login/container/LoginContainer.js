import React, { useState } from "react";
import Login from "../components/UserLogin";
import { UserFetch } from "../../../api/FetchQuestions";
import UserLogin from "../components/AdminLogin";
import { useAlert } from "react-alert";

const LoginContainer = props => {
  const [userName, setUserName] = useState("");
  const [eMail, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState({});
  const token = 123;
  const alert = useAlert();
  const _handleSubmit = e => {
    e.preventDefault();
    if (eMail === "") {
     setErr({eMailErr:"Fill Email Address!"})
      return;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail)) {
      setErr({
        eMailErr: "Invalid Email Address"
      });
      return;
    } else if (password === "") {
      setErr({
        passwordErr: "Fill Password"
      });
      return;
    } else {
      setErr({})
      UserFetch({ eMail, password, token }, (err, data) => {
        data.success === false
          ? alert.error("Account does not exit!")
          : data.payload[0].user_level_id === 1
          ? alert.info("It is Admin Account")
          : props.history.push("/question");
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userId: data.payload[0].login_user_id,
            username: data.payload[0].user_name
          })
        );
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
      err={err}
    />
  );
};

export default LoginContainer;
