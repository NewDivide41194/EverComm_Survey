import React, { useState, useEffect, useRef } from "react";
import { ESInput } from "../../../../../src/tools/ES_Inputs.js";
import { ESButton } from "../../../../../src/tools/ES_Button.js";
import * as Colors from "../../../../config/Color.config";
import RightSideBar from "../../../../features/app/RightSideBar.js";
import AddAccountForm from "./AddAccount";
import UserTable from "./UserTable.js";
  
const Account = (props) => {
  const {
    close,
    matchUser,
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
    checkedList,
    visible,
    handleView,
    handleEdit,
    editData,
    rowsPerPage
  } = props;

  const header = {
    fontSize: "25px",
  };
  const span = {
    cursor: "pointer",
    fontSize: "15px",
  };

  const [collapse, setCollapse] = useState(true);
  const isCollapse = () => {
    setCollapse(!collapse);
  };

  const userId=localStorage.getItem("userId")
  return (
    <div className="container">
      <div className="row p-3">
        <div className="w-100">
          {userData && userData.length > 0 && window.location.pathname!==`/user/editAccount/${userId}`&& (
            <div>
             <div className="row justify-content-between pt-2 pb-3 px-3">
               <div style={{color: Colors.PrimaryColor, fontSize: 20}}>
                 <h2>User Account Management</h2>
               </div>
               <div className="d-flex pt-3">
                <div className="w-40 px-2">
                  <ESButton
                    text={"+ Add User"}
                    onClick={handleIsAdd}
                    noShadow
                    disabled={isAdd}
                  />
                </div>
                <div className="w-40">
                  <ESButton
                    text={"Edit"}
                    onClick={(e) => handleIsEdit(e)}
                    noShadow
                    disabled={edit}
                    leftIcon={<i className="fa fa-edit pr-2"></i>}
                  />
                </div>
               </div>
    
            </div>
            <UserTable
              userData={userData}
              handleIsAdd={handleIsAdd}
              isAdd={isAdd}
              isEdit={edit}
              handleIsEdit={handleIsEdit}
              handleEdit={handleEdit}
              rowsPerPage={rowsPerPage}
            />
            </div>
          )}
        </div>
        {(isAdd || editData.length>0||window.location.pathname===`/user/editAccount/${userId}`) && !close && (
          <div className="w-100">
            <AddAccountForm
              matchUser={matchUser}
              visible={visible}
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
              handleUserLevelSelect={handleUserLevelSelect}
              handleActiveCheck={handleActiveCheck}
              handleCheckChange={handleCheckChange}
              handleSubmit={handleSubmit}
              handleCancel={handleCancel}
              handleIsEdit={handleIsEdit}
              handleAccountSetting={handleAccountSetting}
              NameRef={NameRef}
              err={err}
              errStyle={errStyle}
              errClassName={errClassName}
              surveyList={surveyList}
              checkedList={checkedList}
              handleView={handleView}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
