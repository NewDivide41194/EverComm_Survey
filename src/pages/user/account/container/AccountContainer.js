import React, { useState, useEffect, useRef } from "react";
import Account from "../component/Account";
import { UpdateUserInfo } from "../../../../api/FetchUser";
import { AccountSettingValidataion } from "../../../../helper/formValidation";
import {GetUser} from "../../../../api/FetchUser"

const AccountContainer = (props) => {
  const token = localStorage.getItem("token");
  const [userData,setUserData]=useState([])
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

  useEffect(() => {
    if (edit) {
      NameRef.current.focus();
    }
    GetUser(null,(err,data)=>{
    setUserData(data.payload)})
  }, [edit]);
  const _handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name,
      Mobile,
      eMail,
      Role,
      currentPassword,
      newPassword,
      ReEnterPassword,
    };
    console.log(AccountSettingValidataion(data));
    const validedErr = AccountSettingValidataion(data);
    setErr(validedErr);

    if (validedErr.NameErr) {
      document.getElementById("Name").focus();
    } else if (validedErr.MobileErr) {
      document.getElementById("Mobile").focus();
    } else if (validedErr.eMailErr) {
      document.getElementById("email").focus();
    } else if (validedErr.currentPasswordErr) {
      document.getElementById("currentPassword").focus();
    } else if (validedErr.newPasswordErr) {
      document.getElementById("newPassword").focus();
    } else if (validedErr.ReEnterPasswordErr) {
      document.getElementById("ReenterPassword").focus();
    }
    if (Object.keys(validedErr).length === 0) {
      setErr({});
      UpdateUserInfo({ Name, eMail, newPassword, token }, (err, data) => {
        data.success === false
          ? alert.error(data.message)
          : alert.success("successfully");
      });
    }
  };
  console.log(userData);
  const _handleIsEdit = () => {
    setErr({});
    setEdit(!edit);
  };

  const Timeout = () => {
    setTimeout(() => setErr({}), 5000);
  };

  const _handleNameChange = (e) => {
    setErr({});
    setName(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const _handleMobileChange = (e) => {
    setErr({});
    setMobile(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const _handleEmailChange = (e) => {
    setErr({});
    setEMail(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleRoleChange = (e) => {
    setErr({});
    setRole(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleCurrentPasswordChange = (e) => {
    setErr({});
    setCurrentPassword(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleNewPasswordChange = (e) => {
    setErr({});
    setNewPassword(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleReEnterPasswordChange = (e) => {
    setErr({});
    setReEnterPassword(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  return (
    <Account
    userData={userData}
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
