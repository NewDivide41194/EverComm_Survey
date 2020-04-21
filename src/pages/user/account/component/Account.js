import React, { useState } from "react";
import { ESInput } from "../../../../../src/tools/ES_Inputs.js";
import { ESButton } from "../../../../../src/tools/ES_Button.js";

const Account = (props) => {
  const {
    edit,
    handleEditProfile,
    PasswordInput,
    currentPassword,
    newPassword,
    reenterPassword,
    setCurrentPassword,
    setNewPassword,
    setReenterPassword,
    Name,
    Mobile,
    Mail,
    Role,
    err,
    errStyle,
    handleNameChange,
    handleMobileChange,
    handleMailChange,
    handleRoleChange,
    handleSubmit
  } = props;

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
      {" "}
      <div className="d-flex flex-row flex-fill flex-wrap pb-4 border-bottom">
      <div className="col-lg-4 col-md-6">
          <label for="Name">Name</label>
          <br></br>
          <div className="text-right">
            {err.NameErr === undefined ? null : (
              <div className="text-right col-lg-11" style={{ ...errStyle }}>
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
              <div className="text-right col-lg-11" style={{ ...errStyle }}>
                {`*${err.MobileErr}`}
              </div>
            )}
          </div>
          <ESInput
            id={"Mobile"}
            placeHolder="Mobile(Number Only)"
            type="number"
            value={Mobile}
            onChange={(e) => handleMobileChange(e)}
          />
        </div>
      </div>
      <div className="d-flex flex-row flex-fill flex-wrap pb-4 pt-2 border-bottom" >
      <h3 className='col-lg-12'>Account Information</h3>

        <div className="col-lg-4 col-md-6">
          <label for="email">Email Address</label>
          
          {err.MailErr === undefined ? null : (
              <div className="text-right col-lg-11" style={{ ...errStyle }}>
                {`*${err.MailErr}`}
              </div>
            )}
              
          <ESInput
            id={"email"}
            placeHolder="EmailAddress"
            value={Mail}
            onChange={(e)=>handleMailChange(e)}
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <label for="m_n">Role</label>
          
          {err.RoleErr === undefined ? null : (
              <div className="text-right col-lg-11" style={{ ...errStyle }}>
                {`*${err.RoleErr}`}
              </div>
            )}

          <ESInput
            id={"Role"}
            placeHolder="Role"
            value={Role}
            onChange={(e)=>handleRoleChange(e)}
          />
        </div>
      </div>
     
      {edit && (
          <div className='w-100'>
            <h3 className="col-lg-12">Password</h3>
          <div className="d-flex flex-row flex-fill pt-2 flex-wrap col-lg-12">
            <div>
           {err.currentPasswordErr === undefined ? null : (
              <div className="text-right col-lg-4" style={{ ...errStyle }}>
                {`*${err.currentPasswordErr}`}
              </div>
            )}
            </div>
            <PasswordInput
              id="currentPassword"
              placeholder="Password"
              label={"Current Password:"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            
            <div>
            {err.newPasswordErr === undefined ? null : (
              <div className="text-right col-lg-4" style={{ ...errStyle }}>
                {`*${err.newPasswordErr}`}
              </div>
            )}
            </div>
            <PasswordInput
              id="newPassword"
              placeholder="New Password"
              label={"New Password:"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            
            <div>
            {err.reenterPasswordErr === undefined ? null : (
              <div className="text-right col-lg-4" style={{ ...errStyle }}>
                {`*${err.reenterPasswordErr}`}
              </div>
            )}
            </div>
            <PasswordInput
              id="reenterPassword"
              placeholder="Re-Enter Password"
              label={"Re-Enter Password"}
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
                onClick={""}
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

