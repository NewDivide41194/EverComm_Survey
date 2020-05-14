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

  const errStyle = {
    marginTop: "-25px",
    fontSize: 12,
  };

  const errClassName = "text-danger d-flex flex-row justify-content-end pb-2";
  const NameRef = useRef(null);

useEffect(()=>{
  if(edit){
    NameRef.current.focus()
  }  
},[edit])
  const _handleSubmit = (e) => {
    e.preventDefault();
    if (Name === "") {
      setErr({
        NameErr: "Fill Name",
      });
      return;
    } else if (Mobile === "") {
      setErr({
        MobileErr: "Fill Mobile No",
      });
      return;
    } else if (!/^\d{10}$/.test(Mobile)) {
      setErr({
        MobileErr: "Invalid Mobile No",
      });
      return;
    } else if (eMail === "") {
      setErr({
        eMailErr: "Fill Email Address",
      });
      return;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail)) {
      setErr({
        eMailErr: "Invalid Email Address",
      });
      return;
    } else if (Role === "") {
      setErr({
        RoleErr: "Plz Set your Roll",
      });
      return;
    } else if (currentPassword === "") {
      setErr({
        currentPasswordErr: "Create Password",
      });
      return;
    } else if (currentPassword.length < 8) {
      setErr({
        currentPasswordErr: "Minimun 8 characters",
      });
      return;
    } else if (newPassword === "") {
      setErr({
        newPasswordErr: "Create Password",
      });
      return;
    } else if (newPassword.length < 8) {
      setErr({
        newPasswordErr: "Minimun 8 characters",
      });
      return;
    } else if (ReEnterPassword === "") {
      setErr({
        ReEnterPasswordErr: "Create Password",
      });
      return;
    } else if (ReEnterPassword !== newPassword) {
      setErr({
        ReEnterPasswordErr: "Re-enter password doesn't match",
      });
      return;
    } else if (ReEnterPassword.length < 8) {
      setErr({
        ReEnterPasswordErr: "Minimun 8 characters",
      });
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
