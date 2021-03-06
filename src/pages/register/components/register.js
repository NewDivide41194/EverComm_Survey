import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";
import { Link } from "react-router-dom";
import * as Colors from "../../../config/Color.config";

const Register = (props) => {
  const {
    handleSubmit,
    firstName,
    lastName,
    eMail,
    password,
    Mobile,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handleCompanyChange,
    handlePwdChange,
    handleMobileChange,
    handleView,
    visible,
    err,
    companyName,
    errStyle,
    errClassName,
    isDisabled,
  } = props;
  return (
    <div className="container p-0 ">
      <div className="row justify-content-center ">
        <form
          className="col-lg-4 p-4 col-md-8 "
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <div className="pb-3 text-center ">
            <div className="pt-3 font-weight-bold" style={{ fontSize: "25px" }}>
              ACCOUNT REGISTRATION
            </div>
            <span style={{ background: "white" }}>
              Creating Account
              <div
                className="w-100"
                style={{
                  marginTop: "-10px",
                  border: `0.8px solid ${Colors.SecondaryColor}`,
                }}
              ></div>
            </span>
          </div>
          <div className="row form-group">
            <div className="py-2 col-sm-12 col-lg-6">
              <label htmlFor="FirstName">First Name</label>
              {err.firstNameErr === undefined ? null : (
                <div
                  className={errClassName}
                  style={{ ...errStyle }}
                >{`*${err.firstNameErr}`}</div>
              )}

              <ESInput
                disabled={isDisabled}
                id={"FirstName"}
                placeHolder={"FirstName"}
                value={firstName}
                maxLength={"20"}
                onChange={(e) => handleFirstNameChange(e)}
              />
            </div>
            <div className="py-2 col-sm-12 col-lg-6">
              <label htmlFor="LastName">Last Name</label>
              {err.lastNameErr === undefined ? null : (
                <div
                  className={errClassName}
                  style={{ ...errStyle }}
                >{`*${err.lastNameErr}`}</div>
              )}
              <ESInput
                disabled={isDisabled}
                id={"LastName"}
                placeHolder={"LastName"}
                maxLength={"20"}
                value={lastName}
                onChange={(e) => handleLastNameChange(e)}
              />
            </div>
            <div className="py-2 col-sm-12 col-lg-6">
              <label htmlFor="CompanyName">Company Name</label>
              {err.companyErr === undefined ? null : (
                <div
                  className={errClassName}
                  style={{ ...errStyle }}
                >{`*${err.companyErr}`}</div>
              )}
              <ESInput
                disabled={isDisabled}
                id={"CompanyName"}
                placeHolder={"Your Company"}
                maxLength={"50"}
                value={companyName}
                onChange={(e) => handleCompanyChange(e)}
              />
            </div>
            <div className="py-2 col-sm-12 col-lg-6">
              <label htmlFor="Mobile">Phone No.</label>
              {err.MobileErr === undefined ? null : (
                <div
                  className={errClassName}
                  style={{ ...errStyle }}
                >{`*${err.MobileErr}`}</div>
              )}
              <ESInput
                disabled={isDisabled}
                id={"Mobile"}
                placeHolder={"Your Phone No."}
                maxLength={"20"}
                value={Mobile}
                onChange={(e) => handleMobileChange(e)}
              />
            </div>
            <div className="py-2 col-12">
              <label htmlFor="Email">Email</label>

              {err.eMailErr === undefined ? null : (
                <div
                  className={errClassName}
                  style={{ ...errStyle }}
                >{`*${err.eMailErr}`}</div>
              )}

              <ESInput
                disabled={isDisabled}
                id={"Email"}
                type={"email"}
                placeHolder={"Email"}
                value={eMail}
                onChange={(e) => handleEmailChange(e)}
              />
            </div>
            <div className="py-2 col-12">
              <label htmlFor="Password">Password</label>

              {err.passwordErr === undefined ? null : (
                <div
                  className={errClassName}
                  style={{ ...errStyle }}
                >{`*${err.passwordErr}`}</div>
              )}
              <ESInput
                disabled={isDisabled}
                id={"Password"}
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
                  color:Colors.Gray
                }}
                onClick={handleView}
              >
                {visible ? (
                  <i className="fa fa-eye-slash py-4" />
                ) : (
                  <i className="fa fa-eye py-4" />
                )}
              </span>
            </div>

            <div className="pt-2 col-12">
              <ESButton
                disabled={isDisabled}
                text={"REGISTER"}
                type={"submit"}
                id={"REGISTER"}
                onClick={handleSubmit}
              />
            </div>
          </div>
          <div className="text-center">
            {"Already have an account? "}
            <Link to={"/login"}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
