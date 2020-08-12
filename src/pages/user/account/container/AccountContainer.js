import React, { useState, useEffect, useRef } from "react";
import Account from "../component/Account";
<<<<<<< HEAD
import { RegisterFetch } from "../../../../api/FetchUser";
import { RegisterFormValidation } from "../../../../helper/formValidation";
import { useAlert } from "react-alert";
=======
import { UpdateUserInfo } from "../../../../api/FetchUser";
import { AccountSettingValidataion } from "../../../../helper/formValidation";
import {GetUser} from "../../../../api/FetchUser"
>>>>>>> ea93bf9d2ae185f7705b7614907d1cefe6383494

const AccountContainer = (props) => {
  const token = localStorage.getItem("token");
  const [userData,setUserData]=useState([])
  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [eMail, setEMail] = useState("");
  const [Role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({});
  const [active, setActive] = useState(false);
  const [userLevel, setUserLevel] = useState("");

  const errStyle = {
    marginTop: "-25px",
    fontSize: 12,
  };

  // const BuildingOptions = buildingTypeData.map((v, k) => ({
  //   value: v.id,
  //   label: v.building_type,
  // }));
  const alert = useAlert();

  const UserLevelOptions = [
    { value:1, label:'admin'},
    { value:2, label:'user'},
    { value:3, label:'distributor'}
  ]
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
      firstName,
      lastName,
      companyName,
      Mobile,
      eMail,
      Role,
      password,
      active,
      userLevel
    };
    console.log(RegisterFormValidation(data));
    const validedErr = RegisterFormValidation(data);
    setErr(validedErr);

    if (validedErr.firstNameErr) {
      document.getElementById("FirstName").focus();
    }else if (validedErr.lastNameErr) {
      document.getElementById("LastName").focus();
    } else if (validedErr.MobileErr) {
      document.getElementById("Mobile").focus();
    }else if (validedErr.companyErr) {
      document.getElementById("CompanyName").focus();
    } else if (validedErr.eMailErr) {
      document.getElementById("Email").focus();
    } else if (validedErr.passwordErr) {
      document.getElementById("Password").focus();
    } 
    if (Object.keys(validedErr).length === 0) {
      setErr({});
      RegisterFetch({ firstName, lastName, eMail, password, companyName, active, phone_number:Mobile, user_level:userLevel, token }, (err, data) => {
       if(data.success === false) {
         alert.error(data.message);
       } else {
         alert.success("Account Added Successfully!")
         //window.location.reload();
       }
      });
    }
  };

  const _handleCancel = () => {
    document.getElementById("FirstName").value="";
    document.getElementById("LastName").value="";
    document.getElementById("Mobile").value="";
    document.getElementById("CompanyName").value="";
    document.getElementById("Email").value="";
    document.getElementById("Password").value="";
  }

  const _handleIsEdit = () => {
    setErr({});
    setEdit(!edit);
  };

  const Timeout = () => {
    setTimeout(() => setErr({}), 5000);
  };

  const _handleFirstNameChange = (e) => {
    setErr({});
    setFirstName(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const _handleLastNameChange = (e) => {
    setErr({});
    setLastName(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const _handleCompanyChange = (e) => {
    setErr({});
    setCompanyName(e.target.value.replace(/\s+/g, " ").trimStart());
  }

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
  const _handlePasswordChange = (e) => {
    setErr({});
    setPassword(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  
  const _handleActiveCheck = (e) => {
    setErr({});
    setActive(!active);
  }

  const _handleUserLevelSelect = (e) => {
    setErr({});
    e !== null && setUserLevel(e.value);
    return;
  };

  return (
    <Account
    userData={userData}
      err={err}
      edit={edit}
      firstName={firstName}
      lastName={lastName}
      companyName={companyName}
      Mobile={Mobile}
      eMail={eMail}
      Role={Role}
      password={password}
      active={active}
      userLevel={userLevel}
      UserLevelOptions={UserLevelOptions}
      errStyle={errStyle}
      errClassName={errClassName}
      handleSubmit={_handleSubmit}
      handleCancel={_handleCancel}
      handleIsEdit={_handleIsEdit}
      handleFirstNameChange={_handleFirstNameChange}
      handleLastNameChange={_handleLastNameChange}
      handleCompanyChange={_handleCompanyChange}
      handleMobileChange={_handleMobileChange}
      handleEmailChange={_handleEmailChange}
      handleRoleChange={_handleRoleChange}
      handlePasswordChange ={_handlePasswordChange}
      handleActiveCheck = {_handleActiveCheck}
      handleUserLevelSelect = {_handleUserLevelSelect}
      NameRef={NameRef}
    />
  );
};

export default AccountContainer;
