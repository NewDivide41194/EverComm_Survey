import React, { useState, useEffect } from "react";
import Register from "../components/register";
import { RegisterFetch } from "../../../api/FetchUser";
import { useAlert } from "react-alert";
import { RegisterFormValidation } from "../../../helper/formValidation";

const RegisterContainer = (props) => {
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [eMail, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const alert = useAlert();
  const errStyle = {
    fontSize: 12,
    marginTop: "-25px",
  };
  const errClassName = "text-danger d-flex flex-row justify-content-end pb-2";

  useEffect(() => {
    document.getElementById("FirstName").focus();
  }, []);
  
  const _handleSubmit = (e) => {
    e.preventDefault();
    const data = { eMail, password, firstName, lastName, companyName };
    console.log(RegisterFormValidation(data));
    const validedErr = RegisterFormValidation(data);
    setErr(validedErr);
    if (validedErr.firstNameErr) {
      document.getElementById("FirstName").focus();
    } else if (validedErr.lastNameErr) {
      document.getElementById("LastName").focus();
    } else if (validedErr.companyErr) {
      document.getElementById("CompanyName").focus();
    } else if (validedErr.eMailErr) {
      document.getElementById("Email").focus();
    } else if (validedErr.passwordErr) {
      document.getElementById("Password").focus();
    }
    if (Object.keys(validedErr).length === 0) {
      setErr({});
      setIsDisabled(!isDisabled);
      RegisterFetch(
        { firstName, lastName, eMail, password, companyName },
        (err, data) => {
          if (data.success === false) {
            alert.error(data.message);
            setIsDisabled(isDisabled);
          } else {
            props.history.push("/");
            alert.success("Account Created Successfuly!");
          }
        }
      );
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
      handlePwdChange={_handlePwdChange}
    />
  );
};

export default RegisterContainer;
