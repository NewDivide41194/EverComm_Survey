import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import{ESInput}from "../../../tools/ES_Inputs";
import { Link } from "react-router-dom";

const UserLogin = (props) => {
  const {
    handleSubmit,
    eMail,
    password,
    handlePwdChange,
    handleEmailChange,
    handleView,
    visible,
    err,
    isDisabled,
    errStyle,
  } = props;

  return (
    <div className="container">
      <form className="row justify-content-center">
     
        <div className="form-group text-secondary">
          <i className="fas fa-user-lock fa-3x pb-4"></i>
          <h4>Login Your Account</h4>
          <div className="py-3 text-left">
            {err.eMailErr === undefined ? null : (
              <div
                className="d-flex flex-row justify-content-end"
                style={{ ...errStyle }}
              >{`*${err.eMailErr}`}</div>
            )}
            <ESInput
              disabled={isDisabled}
              required={true}
              id={"Email"}
              placeHolder={"Email"}
              value={eMail}
              onChange={(e) => handleEmailChange(e)}
            />
            <div className="pt-3">
              {err.passwordErr === undefined ? null : (
                <div
                  className="d-flex flex-row justify-content-end"
                  style={{ ...errStyle }}
                >{`*${err.passwordErr}`}</div>
              )}
              <ESInput
                disabled={isDisabled}
                required={true}
                id={"password"}
                type={visible ? "text" : "password"}
                placeHolder={"Password"}
                value={password}
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
                <i
                  className={`fa fa-eye${
                    visible ? "-slash" : ""
                  } py-4 text-secondary`}
                />
              </span>
            </div>
          </div>

          <ESButton
            disabled={isDisabled}
            text={"LOGIN"}
            type={"submit"}
            id={"Login"}
            onClick={handleSubmit}
            rightIcon={
              isDisabled ? (
                <i className="fas fa-spinner fa-spin ml-2"></i>
              ) : (
                <i className="fa fa-sign-in-alt pl-2" />
              )
            }
          />
          <div className="pt-2">
            Don't have an Account? <Link to={"/register"}>Register</Link>
          </div>
        </div>
      </form>
    
    </div>
  );
};

export default UserLogin;
