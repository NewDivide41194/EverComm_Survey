import React, { useState, useEffect } from "react";
import Login from "../components/register";
import { UserFetch } from "../../../api/FetchQuestions";
import Register from "../components/register";
import { RegisterFetch } from "../../../api/FetchRegisteration";
import { useAlert } from 'react-alert'

const RegisterContainer = props => {
  const [RegisterData, setRegisterData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [eMail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({});
  const alert = useAlert()

  const _handleSubmit = e => {
    e.preventDefault();
    if (firstName === "") {
      setErr({
        firstNameErr: "Fill First Name"
      });
      return;
    } else if (lastName === "") {
      setErr({
        lastNameErr: "Fill Last Name"
      });
      return;
    } else if (eMail === "") {
      setErr({
        eMailErr: "Fill Email Address"
      });
      return;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail)) {
      setErr({
        eMailErr: "Invalid Email Address"
      });
    } else if (password === "") {
      setErr({
        passwordErr: "Fill Password"
      });
      return;
    } else {
      setErr({});
      RegisterFetch({ userName, eMail, password }, (err, data) => {
        data.success ? _success()
        : alert.error(data.message);
      });
    }
  };
  const _success=()=>{
    props.history.push("/login")
    alert.show('Oh look, an alert!')
  }
  useEffect(() => {
    setUserName(firstName === null ? null : `${firstName} ` + lastName);
  });

  const _handleFirstNameChange = e => {
    setFirstName(e.target.value);
  };
  const _handleLastNameChange = e => {
    setLastName(e.target.value);
  };
  const _handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const _handlePwdChange = e => {
    setPassword(e.target.value);
  };
  const _handleView = () => {
    setVisible(!visible);
  };
  console.log(err);

  return (
    <Register
      err={err}
      firstName={firstName}
      lastName={lastName}
      password={password}
      visible={visible}
      handleView={_handleView}
      handleSubmit={_handleSubmit}
      handleEmailChange={_handleEmailChange}
      handleFirstNameChange={_handleFirstNameChange}
      handleLastNameChange={_handleLastNameChange}
      handlePwdChange={_handlePwdChange}
    />
  );
};

export default RegisterContainer;
