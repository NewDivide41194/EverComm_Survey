import React, { useState, useEffect } from "react";
import Register from "../components/register";
import { RegisterFetch } from "../../../api/FetchUser";
import { useAlert } from "react-alert";
import { RegisterFormValidation } from "../../../helper/formValidation";

const RegisterContainer = (props) => {
  const token = localStorage.getItem("token")
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [eMail, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const alert = useAlert();
  const errStyle = {
    fontSize: 12,
    marginTop: "-25px",
  };
  const errClassName = "text-danger d-flex flex-row justify-content-start pt-3 pb-1";

  useEffect(() => {
    document.getElementById("FirstName").focus();
  }, []);
  
  const _handleSubmit = (e) => {
    e.preventDefault();
    const data = { eMail, password, firstName, lastName, companyName, Mobile };
    const validedErr = RegisterFormValidation(data);
    setErr(validedErr);
    if (validedErr.firstNameErr) {
      document.getElementById("FirstName").focus();
    } else if (validedErr.lastNameErr) {
      document.getElementById("LastName").focus();
    } else if (validedErr.MobileErr){
      document.getElementById("Mobile").focus();
    } else if (validedErr.companyErr) {
      document.getElementById("CompanyName").focus();
    } else if (validedErr.eMailErr) {
      document.getElementById("Email").focus();
    } else if (validedErr.passwordErr) {
      document.getElementById("Password").focus();
    }
    console.log(validedErr);
    if (Object.keys(validedErr).length === 0) {
      setErr({});
      RegisterFetch({ firstName, lastName, eMail, password, companyName, Mobile, token }, (err, data) => {
        if (data.success === false) {
          alert.error(data.message);
        } else {
          alert.success("Account Added Successfully!")
          props.history.push("/");
        }
      });
    }
  };

  const _handleCompanyChange = (e) => {
    setErr({});
    setCompanyName(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const _handleFirstNameChange = (e) => {
    setErr({});
    setFirstName(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const _handleLastNameChange = (e) => {
    setErr({});
    setLastName(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const _handleMobileChange = (e) => {
    setErr({});
    setMobile(e.target.value.replace(/\s+/g, " ").trimStart());
  }
  const _handleEmailChange = (e) => {
    setErr({});
    setEmail(e.target.value.trimStart());
  };

  const _handlePwdChange = (e) => {
    setErr({});
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
      errClassName={errClassName}
      isDisabled={isDisabled}
      handleView={_handleView}
      handleSubmit={_handleSubmit}
      handleEmailChange={_handleEmailChange}
      handleCompanyChange={_handleCompanyChange}
      handleFirstNameChange={_handleFirstNameChange}
      handleLastNameChange={_handleLastNameChange}
      handleMobileChange={_handleMobileChange}
      handlePwdChange={_handlePwdChange}
    />
  );
};

export default RegisterContainer;
