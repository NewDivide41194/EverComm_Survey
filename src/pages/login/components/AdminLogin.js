import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";
import {Link} from 'react-router-dom'

const UserLogin = props => {
  const {
    handleSubmit,
    eMail,
    handleChange,
    password,
    handlePwdChange,
    handleEmailChange,
    handleView,
    visible
  } = props;
  return (
    <div className="row justify-content-center">
      {/* {IsLoading&&<div className='bg-dark w-100'>Loading...</div>} */}
      <form
        className="col-lg-3"
        style={{
          margin: 0,
          position: "absolute",
          top: "50%",
          transform: "translateY(-121px)"
        }}
      >
        <div className="form-group text-center">
          <h4>Login Your Account</h4>
          <div className="py-4">
            <ESInput
              required={true}
              id={"Email"}
              placeHolder={"Email"}
              value={eMail}
              onChange={e => handleEmailChange(e)}
            />
            <div className="pt-2">
              <ESInput
                required={true}
                id={"password"}
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
          </div>

          <ESButton
            text={"LOGIN"}
            type={"submit"}
            small
            id={"Login"}
            onClick={handleSubmit}
          />
          <div className='pt-2'>
          Don't have an Account? <Link to={'/hh'}>Register</Link>
          </div>
        </div>
        

      </form>
    </div>
  );
};

export default UserLogin;
