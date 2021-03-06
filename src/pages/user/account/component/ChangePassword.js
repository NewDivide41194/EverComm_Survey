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
  const [isDisabled, setisDisabled] = useState(true);
  const [visible, setVisible] = useState({
    current: false,
    new: false,
    reEnter: false,
  });
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const alert = useAlert();
  useEffect(() => {
    document.getElementById("current").focus();
  }, []);

  const handleView = (e) => {
    const id=e.target.id
    id === "current"
      ? setVisible({ ...visible, current: !visible.current })
      : id === "new"
      ? setVisible({ ...visible, new: !visible.new })
      : setVisible({ ...visible, reEnter: !visible.reEnter });
  };
  const _handlePwdChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    if (id === "current") {
      setPasswordData({ ...passwordData, currentPassword: value });
    } else if (id === "new") {
      setPasswordData({ ...passwordData, newPassword: value });
    } else {
      setisDisabled(false);
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
          className="py-2 col-lg-4 col-md-8" 
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
            visible={visible.current}
            placeHolder={"Current password"}
            value={passwordData.currentPassword}
            id={"current"}
            isDisabled={isDisabled}
            handleView={(e)=>handleView(e)}
            handlePwdChange={(e) => _handlePwdChange(e)}
          />
          <Password
            visible={visible.new}
            placeHolder={"New password"}
            value={passwordData.newPassword}
            id={"new"}
            isDisabled={isDisabled}
            handleView={handleView}
            handlePwdChange={_handlePwdChange}
          />
          <Password
            visible={visible.reEnter}
            placeHolder={"Re-type new password"}
            value={passwordData.confirmPassword}
            id={"reEnter"}
            isDisabled={isDisabled}
            handleView={handleView}
            handlePwdChange={_handlePwdChange}
          />
          <div className="d-flex flex-row pt-3 w-100">
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
    placeHolder,
    id,
    // err
  } = props;
  return (
    <div className="w-100 py-2 text-secondary">
      <ESInput
        id={id}
        type={visible ? "text" : "password"}
        placeHolder={placeHolder}
        value={value}
        onChange={(e) => handlePwdChange(e)}
      />
      <span
        style={{
          float: "right",
          marginTop: "-55px",
          fontSize: "18px",
          marginRight: "20px",
          cursor: "pointer",
          color:Colors.Gray
        }}
        onClick={(e)=>handleView(e)}
      >
        {visible ? (
          <i className="fa fa-eye-slash py-4" id={id}/>
        ) : (
          <i className="fa fa-eye py-4" id={id}/>
        )}
      </span>
    </div>
  );
};
