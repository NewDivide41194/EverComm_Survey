import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";
import { Link } from "react-router-dom";
import * as Colors from "../../../config/Color.config";

const Register = props => {
  const {
    handleSubmit,
    firstName,
    lastName,
    eMail,
    password,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handleCompanyChange,
    handlePwdChange,
    handleView,
    visible,
    err,
    companyName,
    errStyle,
    isDisabled
  } = props;
  return (
    <div className="container py-4">

    <div className="row justify-content-center">
      <form
        className="col-lg-6 col-md-8"
        
      >
        <div className="pb-4  text-center ">
          <div className="pb-2 font-weight-bold" style={{ fontSize: "25px" }}>
            ACCOUNT REGISTRATION
          </div>
          <span style={{ background: "white" }}>
            Creating Account
            <div
              className="w-100"
              style={{
                marginTop: "-10px",
                border: `0.8px solid ${Colors.SecondaryColor}`
              }}
            ></div>
          </span>
        </div>
        <div className="row form-group">
          <div className="py-2 col-6">
            <label>First Name:</label>
            <div className="text-right">
              {err.firstNameErr === undefined ? null : (
                <div  className="text-right col-lg-12" style={{ ...errStyle }}>{`*${err.firstNameErr}`}</div>
              )}
            </div>
            
            <ESInput
              disabled={isDisabled}
              id={"FirstName"}
              placeHolder={"FirstName"}
              value={firstName}
              maxLength={"20"}
              onChange={e => handleFirstNameChange(e)}
            />
          </div>
          <div className="py-2 col-6">
            <label>Last Name:</label>
            {err.lastNameErr === undefined ? null : (
              <div  className="text-right col-lg-12" style={{ ...errStyle }}>{`*${err.lastNameErr}`}</div>
            )}  
            <ESInput
              disabled={isDisabled}
              id={"LastName"}
              placeHolder={"LastName"}
              maxLength={"20"}
              value={lastName}
              onChange={e => handleLastNameChange(e)}
            />
          </div>
          <div className="py-2 col-12">
            <label className="">Your Company Name:</label>   
            {err.companyErr === undefined ? null : (
              <div className="text-right col-lg-12" style={{ ...errStyle }} >{`*${err.companyErr}`}</div>
            )}       
           <ESInput
              disabled={isDisabled}
              id={"CompanyName"}
              placeHolder={"Your Company"}
              maxLength={"50"}
              value={companyName}
              onChange={e => handleCompanyChange(e)}
            />
          </div>
          <div className="py-2 col-12">
            <label className="">Email:</label>

            {err.eMailErr === undefined ? null : (
              <div className="text-right col-lg-12" style={{ ...errStyle }}>{`*${err.eMailErr}`}</div>
            )}
           
            <ESInput
              disabled={isDisabled}
              id={"Email"}
              type={"email"}
              placeHolder={"Email"}
              value={eMail}
              onChange={e => handleEmailChange(e)}
            />
          </div>
          <div className="py-2 col-12">

            <label className="">Password:</label>

            {err.passwordErr === undefined ? null : (
              <div  className="text-right col-lg-12" style={{ ...errStyle }}>{`*${err.passwordErr}`}</div>
            )}
            <ESInput
              disabled={isDisabled}
              id={"Password"}
              type={visible ? "text" : "password"}
              placeHolder={"Password"}
              value={password}
              onChange={e => handlePwdChange(e)}
            />
            <span
              style={{
                float: "right",
                position: "relative",
                marginTop: "-55px",
                fontSize: "18px",
                marginRight: "20px",
                cursor: "pointer"
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

          <div className="pt-2 col-12">
            <ESButton
              disabled={isDisabled}
              text={"REGISTER"}
              type={"submit"}
              small
              id={"REGISTER"}
              onClick={handleSubmit}
            />
          </div>
        </div>
        <span>
          {'Already have an account? '}
          <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
    </div>

  );
};

export default Register;
