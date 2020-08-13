import React, { useState, useEffect, useRef } from "react";
import { ESInput } from "../../../../../src/tools/ES_Inputs.js";
import { ESButton } from "../../../../../src/tools/ES_Button.js";
import * as Colors from "../../../../config/Color.config";
import RightSideBar from "../../../../features/app/RightSideBar.js";
// import EditAccountForm from "./EditAccount.js";
import AddAccountForm from './AddAccount'
import UserTable from "./UserTable.js";

const Account = (props) => {
  const {
    isAdd,
    handleIsAdd,
    accountsetting,
    surveyList,
    edit,
    firstName,
    lastName,
    companyName,
    Mobile,
    eMail,
    Role,
    password,
    active,
    userLevel,
    UserLevelOptions,
    handleEditProfile,
    handleFirstNameChange,
    handleLastNameChange,
    handleCompanyChange,
    handleMobileChange,
    handleEmailChange,
    handleRoleChange, 
    handlePasswordChange,
    handleUserLevelSelect,
    handleActiveCheck,
    handleCheckChange,
    handleSubmit,
    handleCancel,
    handleIsEdit,
    handleAccountSetting,
    NameRef,
    err,
    errStyle,
    errClassName,
    userData,
    checkedList
  } = props;

  const header = {
    fontSize: "25px",
  };
  const span = {
    cursor: "pointer",
    fontSize: "15px",
  };


  const [collapse, setCollapse] = useState(true)
  const isCollapse = () => { setCollapse(!collapse) }
  return (
    <div className="container">
      
      <div className="row p-3"> 
      <div className="w-100">
          {userData && userData.length && <UserTable userData={userData} handleIsAdd={handleIsAdd} isAdd={isAdd}/>}
        </div>
        {
          isAdd && 
          <div className="w-100">
          <AddAccountForm 
            UserLevelOptions={UserLevelOptions}
            accountsetting={accountsetting}
            edit={edit}
            firstName={firstName}
            lastName={lastName}
            companyName={companyName}
            mobile={Mobile}
            eMail={eMail}
            Role={Role}
            password={password}
            active={active}
            userLevel={userLevel}
            handleEditProfile={handleEditProfile}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            handleCompanyChange={handleCompanyChange}
            handleMobileChange={handleMobileChange}
            handleEmailChange={handleEmailChange}
            handleRoleChange={handleRoleChange}
            handlePasswordChange={handlePasswordChange}
            handleUserLevelSelect = {handleUserLevelSelect}
            handleActiveCheck = {handleActiveCheck}
            handleCheckChange={handleCheckChange}
            handleSubmit = {handleSubmit}
            handleCancel = {handleCancel}
            handleIsEdit = {handleIsEdit}
            handleAccountSetting = {handleAccountSetting}
            NameRef = {NameRef}
            err = {err}
            errStyle = {errStyle}
            errClassName = {errClassName}
            surveyList={surveyList}
            checkedList={checkedList}
          />
          {/* <EditAccountForm/>  */}
        </div>
        }
         
    </div>


    </div>
  );
};

export default Account;
