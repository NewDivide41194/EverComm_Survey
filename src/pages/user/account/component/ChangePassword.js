import React, { useEffect, useState } from "react";
import { ESInput } from "../../../../tools/ES_Inputs";
import { ESButton } from "../../../../tools/ES_Button";
import { UpdatePassword } from "../../../../api/FetchUser";
import * as Colors from "../../../../config/Color.config"

export const ChangePassword = (props) => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isDisabled, setisDisabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {});
  const err = {};

  const handleView = () => {
    setVisible(!visible);
  };
  const _handlePwdChange = (e) => {
    // setErr({});
    const id = e.target.id;
    const value = e.target.value;
    console.log(id);
    if (id == "currentPassword") {
      setPasswordData({ ...passwordData, currentPassword: value });
    } else if (id === "newPassword") {
      setPasswordData({ ...passwordData, newPassword: value });
    } else {
      setPasswordData({ ...passwordData, confirmPassword: value });
    }
  };

  const handleSubmit = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      window.alert("Password do not match!");
    } else {
      const password = passwordData.currentPassword;
      const newPassword = passwordData.newPassword;
      UpdatePassword({ userId, password, newPassword, token }, (err, data) => {
        console.log(data);
      });
    }
  };

  console.log("===>",passwordData);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="py-2 col-lg-4 col-sm-12"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <div className="text-center pb-2">
          <i className="fas fa-key pl-2 fa-2x pb-2" style={{color:Colors.Gray}}></i>
          <h4>Change Password</h4>
          </div>
          <Password
            placeHolder={"Current Password"}
            value={passwordData.currentPassword}
            id={"currentPassword"}
            visible={visible}
            isDisabled={isDisabled}
            handleView={handleView}
            handlePwdChange={(e) => _handlePwdChange(e)}
          />
          <Password
            placeHolder={"New Password"}
            value={passwordData.newPassword}
            id={"newPassword"}
            visible={visible}
            isDisabled={isDisabled}
            handleView={handleView}
            handlePwdChange={_handlePwdChange}
          />
          <Password
            placeHolder={"Confirm Password"}
            value={passwordData.confirmPassword}
            id={"confirmPassword"}
            visible={visible}
            isDisabled={isDisabled}
            handleView={handleView}
            handlePwdChange={_handlePwdChange}
          />
          <div className="pt-2">
            <ESButton
              disabled={isDisabled}
              text={"REGISTER"}
              type={"submit"}
              id={"REGISTER"}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Password = (props) => {
  const {
    value,
    handlePwdChange,
    handleView,
    visible,
    errStyle,
    errClassName,
    isDisabled,
    placeHolder,
    id,
    // err
  } = props;
  const err = {};

  return (
    <div className="w-100 py-1 font-weight-bold text-secondary">
      <label htmlFor="Password">{placeHolder}</label>

      {err.passwordErr === undefined ? null : (
        <div
          className={errClassName}
          style={{ ...errStyle }}
        >{`*${err.passwordErr}`}</div>
      )}
      <ESInput
        disabled={isDisabled}
        id={id}
        type={visible ? "text" : "password"}
        placeHolder={placeHolder}
        value={value}
        onChange={(e) => handlePwdChange(e)}
      />
      <span
        style={{
          float: "right",
          position: "relative",
          marginTop: "-55px",
          fontSize: "18px",
          marginRight: "20px",
          cursor: "pointer",
        }}
        onClick={handleView}
      >
        {visible ? (
          <i className="fa fa-eye-slash py-4 text-secondary" />
        ) : (
          <i className="fa fa-eye py-4 text-secondary" />
        )}
      </span>
    </div>
  );
};
