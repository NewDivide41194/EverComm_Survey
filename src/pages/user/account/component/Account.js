import React, { useState } from "react";
import { ESInput } from "../../../../../src/tools/ES_Inputs.js";
import { ESButton } from "../../../../../src/tools/ES_Button.js";
import * as Colors from "../../../../config/Color.config"

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
    handleCancel,
    cancel,
    handleAccountSetting,
    err,
    errStyle,
    errClassName
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
      <div className="row">
        <div className="py-3 col-lg-12">
            <span style={span} onClick={handleAccountSetting}>
              Account Setting and profile >
            </span>
            {edit && !accountsetting && !cancel && (
              <span style={span} className="font-weight-bold">
                Edit profile
              </span>
            )}
          <h2 style={header} className="pt-2">Account Setting And Profile</h2>
          <div className="d-flex flex-row flex-fill justify-content-between">
            <h3 style={header}>General Setting</h3>
            {edit || (
              <div>
                <ESButton
                  id={"Edit"}
                  text={"Edit Profile"}
                  type={"submit"}
                  onClick={handleEditProfile}
                  small
                />
              </div>
            )}
          </div>
        </div>
        <div className="d-flex flex-row flex-fill flex-wrap pb-4 border-bottom">
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
              placeHolder="Mobile(Number Only)"
              value={Mobile}
              onChange={(e) => handleMobileChange(e)}
            />
          </div>
        </div>
        <div className="d-flex flex-row flex-fill flex-wrap pb-4 pt-2 border-bottom">
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
        {edit && !accountsetting && !cancel && (
          <div className="w-100">
            <div className="d-flex flex-row flex-fill pt-2 flex-wrap">
              <h3 className="col-lg-12" style={header}>
                Password
              </h3>

              <div className="text-right">
                {err.currentPasswordErr === undefined ? null : (
                  <div style={{ ...errStyle }} >
                    {`*${err.currentPasswordErr}`}
                  </div>
                )}
              </div>
              <PasswordInput
                id={"currentPassword"}
                placeholder="Password"
                label={"Current Password"}
                value={currentPassword}
                onChange={(e) => handleCurrentPasswordChange(e)}
              />

              <div className="text-right">
                {err.newPasswordErr === undefined ? null : (
                  <div className="text-right col-lg-4" style={{ ...errStyle }}>
                    {`*${err.newPasswordErr}`}
                  </div>
                )}
              </div>
              <PasswordInput
                id={"newPassword"}
                placeholder={"New Password"}
                label={"New Password"}
                value={newPassword}
                onChange={(e) => handleNewPasswordChange(e)}
              />
              <div className="text-right">
                {err.ReEnterPasswordErr === undefined ? null : (
                  <div className="text-right col-lg-4" style={{ ...errStyle }}>
                    {`*${err.ReEnterPasswordErr}`}
                  </div>
                )}
              </div>
              <PasswordInput
                id={"reenterPassword"}
                placeholder="Re-Enter Password"
                label={"Re-Enter Password"}
                value={ReEnterPassword}
                onChange={(e) => handleReEnterPasswordChange(e)}
              />
            </div>
            <div className="d-flex flex-row flex-fill">
              <div className="p-3">
                <ESButton
                  text="save"
                  type="submit"
                  onClick={handleSubmit}
                  small
                  id={"Save"}
                />
              </div>
              <div className="p-3 row justify-content-end">
                <ESButton
                  text="Cancel"
                  type="submit"
                  onClick={handleCancel}
                  small
                  id={"Cancel"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="col-lg-4">
      <label>{props.label}</label>

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
