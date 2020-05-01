import React,{useEffect} from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";
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
    isDisabled
  } = props;
  const errStyle = {
    color: "red",
    fontSize: 12,
    position: "absolute",
    marginTop: "-15px",
  };
  console.log(isDisabled);
  useEffect(()=>{

  })
  return (
    <div className="row justify-content-center">
      {/* {IsLoading&&<div className='bg-dark w-100'>Loading...</div>} */}
      <form
        className="col-lg-3 col-md-8"
        style={{
          margin: 0,
          position: "absolute",
          top: "50%",
          transform: "translateY(-185px)",
        }}
      >
        <div className="form-group text-center m-0 text-secondary">
          <i className="fas fa-user-lock fa-3x pb-4"></i>

          <h4>Login Your Account</h4>
          <div className="py-3 text-left">
            {err.eMailErr === undefined ? null : (
              <div style={{ ...errStyle }}>{`*${err.eMailErr}`}</div>
            )}
            <label>Email</label>

            <ESInput
            disabled={isDisabled}
              required={true}
              id={"Email"}
              placeHolder={"Email"}
              value={eMail}
              onChange={(e) => handleEmailChange(e)}
            />
            <div className="pt-2">
              {err.passwordErr === undefined ? null : (
                <div style={{ ...errStyle }}>{`*${err.passwordErr}`}</div>
              )}
              <label>Password</label>

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
                  <i className={`fa fa-eye${visible?"-slash":""} py-4 text-secondary`} />
                
              </span>
            </div>
          </div>

          <ESButton
          disabled={isDisabled}
            text={"LOGIN"}
            type={"submit"}
            small
            id={"Login"}
            onClick={handleSubmit}
            rightIcon={isDisabled?<i class="fas fa-spinner fa-spin ml-2"></i>:<i className="fa fa-sign-in-alt pl-2" />}
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
