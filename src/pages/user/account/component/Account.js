import React, { useState, useEffect, useRef } from "react";
import { ESInput } from "../../../../../src/tools/ES_Inputs.js";
import { ESButton } from "../../../../../src/tools/ES_Button.js";
import * as Colors from "../../../../config/Color.config";

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
  } = props;

  const header = {
    fontSize: "25px",
  };
  const span = {
    cursor: "pointer",
    fontSize: "15px",
  };
  return (
    <div className="container">
      <div className="w-100">
        <form>
        <div className="py-3 col-lg-12">
          <span style={span} onClick={edit ? handleIsEdit : null}>
            Account Setting and profile >
          </span>
          {edit && !accountsetting && (
            <span style={span} className="font-weight-bold">
              Edit profile
            </span>
          )}
          <h2 style={header} className="pt-2">
            Account Setting And Profile
          </h2>
          <div className="d-flex flex-row flex-fill justify-content-between">
            <h3 style={header}>General Setting</h3>
            {edit || (
              <div>
                <ESButton
                  id={"Edit"}
                  text={"Edit Profile"}
                  type={"submit"}
                  onClick={handleIsEdit}
                  small
                />
              </div>
            )}
          </div>
        </div>
        <div className="d-flex flex-row flex-fill flex-wrap pb-4 border-bottom w-100">
          <div className="col-lg-4 col-md-6">
            <label>Name</label>
            <br></br>
            <div className="text-right">
              {err.NameErr === undefined ? null : (
                <div className={errClassName} style={{ ...errStyle }}>
                  {`*${err.NameErr}`}
                </div>
              )}
            </div>
            <ESInput
              disabled={!edit}
              id={"Name"}
              placeHolder="Name"
              value={Name}
              myRef={NameRef}
              onChange={(e) => handleNameChange(e)}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <label>Mobile Number</label>
            <div className="text-right">
              {err.MobileErr === undefined ? null : (
                <div className={errClassName} style={{ ...errStyle }}>
                  {`*${err.MobileErr}`}
                </div>
              )}
            </div>
            <ESInput
              disabled={!edit}
              id={"Mobile"}
              pattern={"/(7|8|9)d{9}/"}
              placeHolder="Mobile(Number Only)"
              value={Mobile}
              onChange={(e) => handleMobileChange(e)}
            />
          </div>
        </div>
        <div className="d-flex flex-row flex-fill flex-wrap pb-4 pt-2 border-bottom w-100">
          <h3 className="col-lg-12" style={header}>
            Account Information
          </h3>

          <div className="col-lg-4 col-md-6">
            <label>Email Address</label>
            <div className="text-right">
              {err.eMailErr === undefined ? null : (
                <div className={errClassName} style={{ ...errStyle }}>
                  {`*${err.eMailErr}`}
                </div>
              )}
            </div>
            <ESInput
              disabled={!edit}
              id={"email"}
              placeHolder={"EmailAddress"}
              value={eMail}
              onChange={(e) => handleEmailChange(e)}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <label>Role</label>
            <div className="text-right">
              {err.RoleErr === undefined ? null : (
                <div className={errClassName} style={{ ...errStyle }}>
                  {`*${err.RoleErr}`}
                </div>
              )}
            </div>
            <ESInput
              disabled={!edit}
              id={"Role"}
              placeHolder={"Role"}
              value={Role}
              onChange={(e) => handleRoleChange(e)}
            />
          </div>
        </div>
        {edit && !accountsetting && (
          <div className="w-100">
            <div className="d-flex flex-row flex-fill flex-wrap">
              <h3 className="col-lg-12" style={header}>
                Password
              </h3>
              <div className="col-lg-4">
                <label>Current Password</label>
                {err.currentPasswordErr === undefined ? null : (
                  <div className={errClassName} style={{ ...errStyle }}>
                    {`*${err.currentPasswordErr}`}
                  </div>
                )}
                <PasswordInput
                  id={"currentPassword"}
                  placeholder="Password"
                  value={currentPassword}
                  onChange={(e) => handleCurrentPasswordChange(e)}
                />
              </div>

              <div className="col-lg-4">
                <label>New Password</label>
                {err.newPasswordErr === undefined ? null : (
                  <div className={errClassName} style={{ ...errStyle }}>
                    {`*${err.newPasswordErr}`}
                  </div>
                )}

                <PasswordInput
                  id={"newPassword"}
                  placeholder={"New Password"}
                  value={newPassword}
                  onChange={(e) => handleNewPasswordChange(e)}
                />
              </div>
              <div className="col-lg-4">
                <label>Re-Enter Password</label>
                {err.ReEnterPasswordErr === undefined ? null : (
                  <div className={errClassName} style={{ ...errStyle }}>
                    {`*${err.ReEnterPasswordErr}`}
                  </div>
                )}
                <PasswordInput
                  id={"reenterPassword"}
                  placeholder="Re-Enter Password"
                  value={ReEnterPassword}
                  onChange={(e) => handleReEnterPasswordChange(e)}
                />
              </div>
            </div>
            <div className="d-flex flex-row flex-fill">
              <div className="p-3">
                <ESButton
                  text={"save"}
                  type={"submit"}
                  onClick={handleSubmit}
                  small
                  id={"Save"}
                />
              </div>
              <div className="p-3 row justify-content-end">
                <ESButton
                  text={"Cancel"}
                  type={"submit"}
                  onClick={handleIsEdit}
                  small
                  id={"Cancel"}
                />
              </div>
            </div>
          </div>
        )}
        </form>
      </div>
    
    </div>
  );
};

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <ESInput
        id={props.id}
        type={showPassword ? "text" : "password"}
        value={props.value}
        onChange={props.onChange}
        placeHolder={props.placeholder}
      />
      <i
        style={{
          float: "right",
          position: "relative",
          marginTop: "-30px",
          fontSize: "18px",
          marginRight: "20px",
          cursor: "pointer",
        }}
        onClick={() => setShowPassword(!showPassword)}
        className={`fa fa-eye${showPassword ? "-slash" : ""} text-secondary`}
      ></i>
    </div>
  );
};
export default Account;
