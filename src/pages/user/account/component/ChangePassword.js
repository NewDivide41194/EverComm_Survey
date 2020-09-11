import React, { useEffect, useState } from "react";
import { ESInput } from "../../../../tools/ES_Inputs";
import { ESButton } from "../../../../tools/ES_Button";
import { UpdatePassword } from "../../../../api/FetchUser";
import * as Colors from "../../../../config/Color.config";
import { useAlert } from "react-alert";
import { _handleSignOut } from "../../../../helper/functions";

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
  const alert = useAlert();
  useEffect(() => {
    document.getElementById("currentPassword").focus();
    if (
      passwordData.currentPassword === "" ||
      passwordData.newPassword === "" ||
      passwordData.confirmPassword === ""
    ) {
      setisDisabled(true);
    } else {
      setisDisabled(false);
    }
  },[]);
  const err = {};

  const handleView = () => {
    setVisible(!visible);
  };
  const _handlePwdChange = (e) => {
    // setErr({});
    const id = e.target.id;
    const value = e.target.value;
    if (id === "currentPassword") {
      setPasswordData({ ...passwordData, currentPassword: value });
    } else if (id === "newPassword") {
      setPasswordData({ ...passwordData, newPassword: value });
    } else {
      setPasswordData({ ...passwordData, confirmPassword: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert.error("Password do not match!");
    } else if (
      passwordData.newPassword.length < 8 ||
      passwordData.confirmPassword.length < 8
    ) {
      alert.error("Password minium 8 characters!");
    } else {
      const password = passwordData.currentPassword;
      const newPassword = passwordData.newPassword;
      UpdatePassword({ userId, password, newPassword, token }, (err, data) => {
        console.log(data);
        if (data.success === false) {
          alert.error(data.message);
        } else {
          alert.success(data.message);
          setTimeout(() => {
            _handleSignOut(props);
          }, 5000);
        }
      });
    }
  };

  const handleCancel = () => {
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-center">
        <form
          className="py-2 col-lg-4 col-sm-12"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <div className="text-center pb-2">
            <i
              className="fas fa-key pl-2 fa-3x pb-2"
              style={{ color: Colors.Gray }}
            ></i>
            <h4 style={{ color: Colors.PrimaryColor, fontWeight: "bold" }}>
              Change Password
            </h4>
          </div>
          <Password
            placeHolder={"Current password"}
            value={passwordData.currentPassword}
            id={"currentPassword"}
            isDisabled={isDisabled}
            handleView={handleView}
            handlePwdChange={(e) => _handlePwdChange(e)}
          />
          <Password
            placeHolder={"New password"}
            value={passwordData.newPassword}
            id={"newPassword"}
            isDisabled={isDisabled}
            handleView={handleView}
            handlePwdChange={_handlePwdChange}
          />
          <Password
            placeHolder={"Re-type new password"}
            value={passwordData.confirmPassword}
            id={"confirmPassword"}
            isDisabled={isDisabled}
            handleView={handleView}
            handlePwdChange={_handlePwdChange}
          />
          <div className="d-flex flex-row pt-3">
            <div className="flex-column w-50 pr-2">
              <ESButton
                disabled={isDisabled}
                text={"Save Changes"}
                type={"submit"}
                id={"Save Changes"}
                onClick={handleSubmit}
              />
            </div>
            <div className="flex-column w-50">
              <ESButton
                disabled={isDisabled}
                customColor={Colors.Gray}
                text={"Cancel"}
                type={"button"}
                id={"Cancel"}
                onClick={handleCancel}
              />
            </div>
          </div>
        </form>
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
    <div className="w-100 py-2 text-secondary">
      {err.passwordErr === undefined ? null : (
        <div
          className={errClassName}
          style={{ ...errStyle }}
        >{`*${err.passwordErr}`}</div>
      )}
      <ESInput
        // disabled={isDisabled}
        id={id}
        type={"password"}
        placeHolder={placeHolder}
        value={value}
        onChange={(e) => handlePwdChange(e)}
      />
    </div>
  );
};
