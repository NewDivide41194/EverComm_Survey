import React, { useState, useEffect, useRef } from "react";
import Account from "../component/Account";
import { UpdateUserInfo } from "../../../../api/FetchUser";

const AccountContainer = () => {
  const token = localStorage.getItem("token");
  const [edit, setEdit] = useState(false);
  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [eMail, setEMail] = useState("");
  const [Role, setRole] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [ReEnterPassword, setReEnterPassword] = useState("");
  const [err, setErr] = useState({});
  const NameId = document.getElementById("Name");
  const MobileId = document.getElementById("Mobile");
  const EMailId = document.getElementById("email");
  const RoleId = document.getElementById("Role");
  const currentPasswordId = document.getElementById("currentPassword");
  const newPasswordId = document.getElementById("newPassword");
  const ReEnterPasswordId = document.getElementById("reenterPassword");
  const errStyle = {
    marginTop: "-25px",
    fontSize: 12,
  };

  const errClassName = "text-danger d-flex flex-row justify-content-end pb-2";
  const NameRef = useRef(null);

  useEffect(() => {
    if (edit) {
      NameRef.current.focus();
    }
  }, [edit]);
  const _handleSubmit = (e) => {
    e.preventDefault();
    if (Name === "") {
      setErr({
        NameErr: "Fill Name",
      });
      NameRef.current.focus();
      return;
    } else if (Mobile === "") {
      setErr({
        MobileErr: "Fill Mobile No",
      });
      MobileId.focus();
      return;
    } else if (!/^\d{10}$/.test(Mobile)) {
      setErr({
        MobileErr: "Invalid Mobile No",
      });
      MobileId.focus();
      return;
    } else if (eMail === "") {
      setErr({
        eMailErr: "Fill Email Address",
      });
      EMailId.focus();
      return;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail)) {
      setErr({
        eMailErr: "Invalid Email Address",
      });
      EMailId.focus();
      return;
    } else if (Role === "") {
      setErr({
        RoleErr: "Plz Set your Roll",
      });
      RoleId.focus();
      return;
    } else if (currentPassword === "") {
      setErr({
        currentPasswordErr: "Create Password",
      });
      currentPasswordId.focus();
      return;
    } else if (currentPassword.length < 8) {
      setErr({
        currentPasswordErr: "Minimun 8 characters",
      });
      currentPasswordId.focus();
      return;
    } else if (newPassword === "") {
      setErr({
        newPasswordErr: "Create Password",
      });
      newPasswordId.focus();
      return;
    } else if (newPassword.length < 8) {
      setErr({
        newPasswordErr: "Minimun 8 characters",
      });
      newPasswordId.focus();
      return;
    } else if (ReEnterPassword === "") {
      setErr({
        ReEnterPasswordErr: "Create Password",
      });
      ReEnterPasswordId.focus();
      return;
    } else if (ReEnterPassword !== newPassword) {
      setErr({
        ReEnterPasswordErr: "Re-enter password doesn't match",
      });
      ReEnterPasswordId.focus()
      return;
    } else if (ReEnterPassword.length < 8) {
      setErr({
        ReEnterPasswordErr: "Minimun 8 characters",
      });
      ReEnterPasswordId.focus()
      return;
    } else {
      setErr({});
      UpdateUserInfo({ Name, eMail, newPassword, token }, (err, data) => {
        data.success === false
          ? alert.error(data.message)
          : alert.success("successfully");
      });
    }
  };

  const _handleIsEdit = () => {
    setEdit(!edit);
  };

  const Timeout = () => {
    setTimeout(() => setErr({}), 5000);
  };

  const SpecialCharacterFormat = /[`!#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?~]/;
  const _handleNameChange = (e) => {
    if (!SpecialCharacterFormat.test(e.target.value)) {
      setName(e.target.value.replace(/\s+/g, " ").trimStart());
    } else setErr({ NameErr: "Special Characters Not allow" }, Timeout());
  };

  const _handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const _handleEmailChange = (e) => {
    setEMail(e.target.value);
  };
  const _handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const _handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };
  const _handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const _handleReEnterPasswordChange = (e) => {
    setReEnterPassword(e.target.value);
  };

  return (
    <Account
      err={err}
      edit={edit}
      Name={Name}
      Mobile={Mobile}
      eMail={eMail}
      Role={Role}
      currentPassword={currentPassword}
      newPassword={newPassword}
      ReEnterPassword={ReEnterPassword}
      errStyle={errStyle}
      errClassName={errClassName}
      handleSubmit={_handleSubmit}
      handleIsEdit={_handleIsEdit}
      handleNameChange={_handleNameChange}
      handleMobileChange={_handleMobileChange}
      handleEmailChange={_handleEmailChange}
      handleRoleChange={_handleRoleChange}
      handleCurrentPasswordChange={_handleCurrentPasswordChange}
      handleNewPasswordChange={_handleNewPasswordChange}
      handleReEnterPasswordChange={_handleReEnterPasswordChange}
      NameRef={NameRef}
    />
  );
};

export default AccountContainer;
