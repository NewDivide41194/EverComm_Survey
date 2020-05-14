import React, { useState, useEffect } from "react";
import Register from "../components/register";
import { RegisterFetch } from "../../../api/FetchUser";
import { useAlert } from "react-alert";

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
  const SpecialCharErr = "Not Allow Special Characters!";
  const Timeout = () => {
    setTimeout(() => setErr({}), 5000);
  };
  const SpecialCharacterFormat = /[`!#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?~]/;
  const _handleCompanyChange = (e) => {
    if (!SpecialCharacterFormat.test(e.target.value)) {
      setCompanyName(e.target.value.replace(/\s+/g, " ").trimStart());
    } else setErr({ companyErr: SpecialCharErr }, Timeout());
  };
  const _handleSubmit = (e) => {
    e.preventDefault();
    const FirstNameInput = document.getElementById("FirstName");
    const LastNameInput = document.getElementById("LastName");
    const EmailInput = document.getElementById("Email");
    const CompanyInput = document.getElementById("CompanyName");
    const PasswordInput = document.getElementById("Password");

    if (firstName === "") {
      setErr({
        firstNameErr: "Fill First Name",
      });
      FirstNameInput.focus();
      return;
    } else if (lastName === "") {
      setErr({
        lastNameErr: "Fill Last Name",
      });
      LastNameInput.focus();
      return;
    } else if (companyName === "") {
      setErr({
        companyErr: "Fill Company description",
      });
      CompanyInput.focus();
      return;
    } else if (eMail === "") {
      setErr({
        eMailErr: "Fill Email Address",
      });
      EmailInput.focus();
      return;
    } else if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(eMail)) {
      setErr({
        eMailErr: "Invalid Email Address",
      });
      EmailInput.focus();
      return;
    } else if (password === "") {
      setErr({
        passwordErr: "Create Password",
      });
      PasswordInput.focus();
      return;
    } else if (password.length < 8) {
      setErr({
        passwordErr: "Minimum 8 characters",
      });
      PasswordInput.focus();
      return;
    } else {
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

  const _handleFirstNameChange = (e) => {
    if (!SpecialCharacterFormat.test(e.target.value)) {
      setFirstName(e.target.value.replace(/\s+/g, " ").trimStart());
    } else setErr({ firstNameErr: SpecialCharErr }, Timeout());
  };

  const _handleLastNameChange = (e) => {
    if (!SpecialCharacterFormat.test(e.target.value)) {
      setLastName(e.target.value.replace(/\s+/g, " ").trimStart());
    } else setErr({ lastNameErr: SpecialCharErr }, Timeout());
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
  useEffect(() => {
    document.getElementById("FirstName").focus();
  }, []);

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
      handleView={_handleView}
      handleSubmit={_handleSubmit}
      handleEmailChange={_handleEmailChange}
      handleCompanyChange={_handleCompanyChange}
      handleFirstNameChange={_handleFirstNameChange}
      handleLastNameChange={_handleLastNameChange}
      handlePwdChange={_handlePwdChange}
      isDisabled={isDisabled}
    />
  );
};

export default RegisterContainer;
