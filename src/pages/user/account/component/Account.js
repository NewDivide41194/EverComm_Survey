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
    accountsetting,
    edit,
    Name,
    Mobile,
    eMail,
    Role,
    currentPassword,
    newPassword,
    ReEnterPassword,
    handleEditProfile,
    handleNameChange,
    handleMobileChange,
    handleEmailChange,
    handleRoleChange,
    handleCurrentPasswordChange,
    handleNewPasswordChange,
    handleReEnterPasswordChange,
    handleSubmit,
    handleIsEdit,
    handleAccountSetting,
    NameRef,
    err,
    errStyle,
    errClassName,
    userData
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
    <div className="container-fluid">
      <div className="row">
                <div className="w-50">
          <AddAccountForm/>
          {/* <EditAccountForm/> */}
        </div>
        <div className="w-100">
{         userData&&userData.length&& <UserTable userData={userData}/>
}        </div>
      </div>


    </div>
  );
};

export default Account;
