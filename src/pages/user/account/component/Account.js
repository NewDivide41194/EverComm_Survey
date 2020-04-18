import React, { useState } from "react";
import { ESInput } from "../../../../../src/tools/ES_Inputs.js";
import { ESButton } from "../../../../../src/tools/ES_Button.js";

const Account = (props) => {
  const [edit, setEdit] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [err, setErr] = useState({});
  const {
    Mobile,
    eMail,
    Role,
    setName,
    setMobile,
    password,
    Name,
    CurrentPassword,
    NewPassword,
    ReenterPassword,
  } = props;
  const errStyle = {
    color: "red",
    fontSize: 12,
    position: "absolute",
    marginTop: "-23px",
    marginRight: "0px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Name === "") {
      setErr({
        NameErr: "Fill Name",
      });
      return;
    } else if (Mobile === "") {
      setErr({
        MobileErr: "Fill Mobile No",
      });
      return;
    } else if (eMail === "") {
      setErr({
        eMailErr: "Fill Email Address",
      });
      return;
    } else if (Role === "") {
      setErr({
        RoleErr: "Pls Set your Roll",
      });
      return;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail)) {
      setErr({
        eMailErr: "Invalid Email Address",
      });
    } else if (password === "") {
      setErr({
        passwordErr: "Fill Password",
      });
      return;
    } else {
      setErr({});
    }
  };
  const handleEditProfile = () => {
    setEdit(!edit);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  return (
    <div className="row">
      <div className='col-lg-12'>
      <h2>Account Setting And Profile</h2>

         <div className='d-flex flex-row flex-fill pt-2 justify-content-between'>
          <h3>General Setting</h3>
          <div>
           <ESButton
              id={"Edit"}
              text={"Edit Profile"}
              type={"submit"}
              onClick={handleEditProfile}
              small
            /> 
          </div>
               
           
      </div>
      </div>
         
      <div className="d-flex flex-row flex-fill flex-wrap pb-4 border-bottom">
      <div className="col-lg-4 col-md-6">
          <label for="Name">Name</label>
          <br></br>
          <div className="text-right">
            {err.NameErr === undefined ? null : (
              <div className="text-right col-lg-12" style={{ ...errStyle }}>
                {`*${err.NameErr}`}
              </div>
            )}
          </div>
            <ESInput
              id={"Name"}
              placeHolder="Name"
              value={Name}
              onChange={handleNameChange}
            />
        </div>
        <div className="col-lg-4 col-md-6">
          <label for="m_n">Mobile Number</label>
          <div className="text-right">
            {err.MobileErr === undefined ? null : (
              <div className="text-right col-lg-12" style={{ ...errStyle }}>
                {`*${err.MobileErr}`}
              </div>
            )}
          </div>
          <ESInput
            id={"Mobile"}
            placeHolder="Mobile"
            value={Mobile}
            onChange={(e) => handleMobileChange(e)}
          />
        </div>
      </div>
      <div className="d-flex flex-row flex-fill flex-wrap pb-4 pt-2 border-bottom" >
      <h3 className='col-lg-12'>Account Information</h3>

        <div className="col-lg-4 col-md-6">
          <label for="email">Email Address</label>
          <ESInput
            id={"email"}
            placeHolder="EmailAddress"
            value={eMail}
            onChange={""}
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <label for="m_n">Role</label>
          <ESInput
            id={"Role"}
            placeHolder="Role"
            value={Role}
          />
        </div>
      </div>
     
      {edit && (
          <div className='w-100'>
          <div className="d-flex flex-row flex-fill pt-2 flex-wrap">
          <h3 className="col-lg-12">Password</h3>

            <PasswordInput
              id="currentPassword"
              label="Current Password:"
              placeholder="Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <PasswordInput
              id="newPassword"
              label="New Password:"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <PasswordInput
              id="reenterPassword"
              label="Re-enter Password:"
              placeholder="Re-Enter Password"
              value={reenterPassword}
              onChange={(e) => setReenterPassword(e.target.value)}
            />
            </div>
<div className="d-flex flex-row flex-fill">
            <div className="p-3">
              <ESButton
                text="save"
                type="Save"
                onClick={handleSubmit}
                small
                id={"Save"}
              />
            </div>
            <div className="p-3 row justify-content-end">
              <ESButton
                text="Cancel"
                type="submit"
                onClick={handleSubmit}
                small
                id=""
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Account;

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="col-lg-4 col-md-6">
      <label>{props.label}</label>
      <ESInput
        id={"Password"}
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
        cursor: "pointer"
      }}
        onClick={() => setShowPassword(!showPassword)}
        className={`fa fa-eye${showPassword ? "-slash" : ""} text-secondary`}
      ></i>
    </div>
  );
};
