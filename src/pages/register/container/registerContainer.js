import React, { useState } from "react";
import Register from "../components/register";
import { RegisterFetch } from "../../../api/FetchRegisteration";
import { useAlert } from "react-alert";

const RegisterContainer = (props) => {
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [eMail, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({});
  const alert = useAlert();
  const errStyle = {
    color: "red",
    fontSize: 12,
    position: "absolute",
    marginTop: "-19px",
    marginRight: "0px",
  };
  const SpecialCharacterFormat = /[`!#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?~]/;
  
  const _handleCompanyChange = (e) => {
    if (!SpecialCharacterFormat.test(e.target.value)) {
      setCompanyName(e.target.value.replace(/\s+/g, " ").trimStart());
    } else {setErr({ companyErr: "Special Characters Not allow!" });
    setTimeout(() => {
      setErr({});
    }, 8000);}
  };

  const _handleSubmit = (e) => {
    e.preventDefault();

    if (firstName === "") {
      setErr({
        firstNameErr: "Fill First Name",
      });
      return;
    } else if (lastName === "") {
      setErr({
        lastNameErr: "Fill Last Name",
      });
      return;
    } else if (eMail === "") {
      setErr({
        eMailErr: "Fill Email Address",
      });
      return;
    } else if (companyName === "") {
      setErr({
        companyErr: "Fill Company description",
      });
      return;
    } else if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(eMail)) {
      setErr({
        eMailErr: "Invalid Email Address",
      });
    } else if (password === "") {
      setErr({
        passwordErr: "Create Password",
      });
      return;
    } else if (password.length < 8) {
      setErr({
        passwordErr: "Minimum 8 characters",
      });
      return;
    } else {
      setErr({});
      RegisterFetch(
        { firstName, lastName, eMail, password, companyName },
        (err, data) => {
          data.success === true ? _success() : alert.error(data.message);
        }
      );
    }
  };
  const _success = () => {
    props.history.push("/");
    alert.success("Account Created Successfuly!");
  };

  const _handleFirstNameChange = (e) => {
    setFirstName(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleLastNameChange = (e) => {
    setLastName(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleEmailChange = (e) => {
    setEmail(e.target.value.trimStart());
  };

  const _handlePwdChange = (e) => {
    setPassword(e.target.value.trimStart());
  };
  const _handleView = () => {
    setVisible(!visible);
  };

  return (
    <Register
      err={err}
      firstName={firstName}
      lastName={lastName}
      password={password}
      visible={visible}
      companyName={companyName}
      errStyle={errStyle}
      handleView={_handleView}
      handleSubmit={_handleSubmit}
      handleEmailChange={_handleEmailChange}
      handleCompanyChange={_handleCompanyChange}
      handleFirstNameChange={_handleFirstNameChange}
      handleLastNameChange={_handleLastNameChange}
      handlePwdChange={_handlePwdChange}
    />
  );
};

export default RegisterContainer;