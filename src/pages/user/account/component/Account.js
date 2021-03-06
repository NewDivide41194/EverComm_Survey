import React from "react";
import { ESButton } from "../../../../../src/tools/ES_Button.js";
import * as Colors from "../../../../config/Color.config";
import AddAccountForm from "./AddAccount";
import ESTable from "../../../../tools/ES_Table.js";
import { Edit } from "@material-ui/icons";
import ESLoading from "../../../../tools/ES_Loading";

const Account = (props) => {
  const {
    close,
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
    rowsPerPage,
    IsLoading
  } = props;

  const tableData = {
    columns: [
      { title: "Name", field: "name" },
      { title: "Email", field: "email" },
      { title: "Role", field: "role" },
      { title: "Company", field: "companyName" },
      {
        title: "Active",
        render: (userData) =>
          userData.active === 1 ? (
            <i className="fas fa-check-square" style={{ color: "green" }}></i>
          ) : (
            <i className="far fa-square" style={{ color: "green" }}></i>
          ),
      },
      { title: "Created Date", field: "created_date" },
    ],
    data: userData,
  };

  const tableAlertInfo = (
    <ESButton
      text={"Add User"}
      leftIcon={<i className="fas fa-user-plus px-1"></i>}
      onClick={handleIsAdd}
      noShadow
      disabled={isAdd}
    />
  );
  const tableActions = [
    {
      icon: Edit,
      onClick: (event, rowData) => handleEdit(rowData),
      disabled: edit,
    },
  ];

  const userId = localStorage.getItem("userId");

  if(IsLoading){
    return <ESLoading />;
  }else {
    return (
      <div className="container">
        <div className="row p-3">
          <div className="w-100">
            {userData &&
              userData.length > 0 &&
              window.location.pathname !== `/user/editAccount/${userId}` && (
                <div>
                  <div style={{ color: Colors.PrimaryColor, fontSize: 20 }}>
                    <h2>User Management</h2>
                  </div>
  
                  {userData.length > 0 && (
                    <ESTable
                      actions={tableActions}
                      tableData={tableData}
                      tableAlertInfo={tableAlertInfo}
                      handleIsAdd={handleIsAdd}
                      isAdd={isAdd}
                      handleIsEdit={handleIsEdit}
                      handleEdit={handleEdit}
                      rowsPerPage={rowsPerPage}
                    />
                  )}
                </div>
              )}
          </div>
          {(isAdd ||
            editData.length > 0 ||
            window.location.pathname === `/user/editAccount/${userId}`) &&
            !close && (
              <div className="w-100">
                <AddAccountForm
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
  }
  
};

export default Account;
