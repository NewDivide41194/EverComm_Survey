import React, { useState } from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";
import { Link } from "react-router-dom";
import * as Colors from "../../../config/Color.config";
import { ESDropDown } from "../../../tools/ES_DropDown";

const Register = props => {
  const {
    handleSubmit,
    firstName,
    lastName,
    eMail,
    password,
    companies,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handleCompanyChange,
    handlePwdChange,
    handleView,
    visible,
    err,
    selectValue,
    selectCompany,
    handleSelect,
    errStyle
  } = props;
  
  return (
    <div className="row justify-content-center">
      {/* {IsLoading&&<div className='bg-dark w-100'>Loading...</div>} */}
      <form
        className="col-lg-4 col-md-8 text-center"
        style={{
          margin: 0,
          position: "absolute",
          top: "50%",
          transform: "translateY(-193.295px)"
        }}
      >
        {" "}
        <div className="pb-4">
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
          <div className="py-2 col-6 pr-1">
            {err.firstNameErr === undefined ? null : (
              <div style={{ ...errStyle }}>{`*${err.firstNameErr}`}</div>
            )}
            <ESInput
              id={"FirstName"}
              placeHolder={"FirstName"}
              value={firstName}
              maxLength={"20"}
              onChange={e => handleFirstNameChange(e)}
            />
          </div>
          <div className="py-2 col-6 pl-1">
            {err.lastNameErr === undefined ? null : (
              <div style={{ ...errStyle }}>{`*${err.lastNameErr}`}</div>
            )}
            <ESInput
              id={"LastName"}
              placeHolder={"LastName"}
              maxLength={"20"}
              value={lastName}
              onChange={e => handleLastNameChange(e)}
            />
          </div>
          <div className="py-2 col-12 text-left">
            {err.companyErr === undefined ? null : (
              <div style={{ ...errStyle }}>{`*${err.companyErr}`}</div>
            )}
            {/* <ESInput
              id={"Company"-}
              placeHolder={"Company decription"}
              value={company}
              onChange={e => handleCompanyChange(e)}
            /> */}
            <ESDropDown
              id={"Company"}
              value={selectValue}
              options={selectCompany}
              handleSelect={handleCompanyChange}
            />
          </div>
          <div className="py-2 col-12">
            {err.eMailErr === undefined ? null : (
              <div style={{ ...errStyle }}>{`*${err.eMailErr}`}</div>
            )}
            <ESInput
              id={"Email"}
              type={"email"}
              placeHolder={"Email"}
              value={eMail}
              onChange={e => handleEmailChange(e)}
            />
          </div>
          <div className="py-2 col-12">
            {err.passwordErr === undefined ? null : (
              <div style={{ ...errStyle }}>{`*${err.passwordErr}`}</div>
            )}
            <ESInput
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

          <div className="py-2 col-12">
            <ESButton
              text={"REGISTER"}
              type={"submit"}
              small
              id={"REGISTER"}
              onClick={handleSubmit}
            />
          </div>
        </div>
        <span>
          Already have an account?
          <br />
          <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;

const YourCompany=[
  {
    company_id:1,
    company_name:"Kumo"
  },
  {
    company_id:2,
    company_name:"Feature Link"
  },
  {
    company_id:3,
    company_name:"EverComm"
  },
  {
    company_id:4,
    company_name:"Apple"
  }
]
