import React,{ useState } from 'react';
import Account from '../component/Account'
import { useState } from "react";

const AccountContainer=()=>{
    const [accountsetting,setAccountsetting]=useState(false);
    const [edit, setEdit] = useState(false);
    const [cancel,setCancel]=useState(false);
    const [Name,setName]=useState("");
    const [Mobile,setMobile]=useState("");
    const [eMail,setEMail]=useState("");
    const [Role,setRole]=useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [ReEnterPassword, setReEnterPassword] = useState("");
    const [err, setErr] = useState({});

    const errStyle = {
        color: "red",
        fontSize: 12,
        position: "absolute",
        marginTop: "-23px",
        marginRight: "0px",
      };
    
      const _handleSubmit = (e) => {
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
        } else if (currentPassword === "") {
          setErr({
            currentPasswordErr: "Create Password",
          });
          return;
        } else if (currentPassword<8){
            setErr({
                currentPasswordErr: "Minimun 8 characters"
            });
            return;
        } else if (newPassword === "") {
            setErr({
                newPasswordErr: "Create Password",
            });
            return;
          } else if (newPassword<8){
            setErr({
            newPasswordErr: "Minimun 8 characters"
            });
            return;
        } else if (ReEnterPassword === "") {
            setErr({
                ReEnterPasswordErr: "Create Password",
            });
            return;
          } else if (ReEnterPassword<8){
            setErr({
                ReEnterPasswordErr: "Minimun 8 characters"
            });
            return;
        } else {
          setErr({});
        }
      };

      const _handleCancel=()=>{
          setEdit(false)      
        }

      const _handleAccountSetting=()=>{
        setEdit(false)
      }
      const _handleEditProfile = () => {
        setEdit(true) 
        
      };
    
      const _handleNameChange = (e) => {
        setName(e.target.value);
      };
    
      const _handleMobileChange = (e) => {
        setMobile(e.target.value);
      };

      const _handleEmailChange=(e)=>{
        setEMail(e.target.value);
      };
      const _handleRoleChange=(e)=>{
        setRole(e.target.value);
      };
      const _handleCurrentPasswordChange=(e)=>{
        setCurrentPassword(e.target.value);
      };
      const _handleNewPasswordChange=(e)=>{
        setNewPassword(e.target.value);
      };
      const _handleReEnterPasswordChange=(e)=>{
        setReEnterPassword(e.target.value);
      }
    
    return(
    <div className="container">
        <Account
        err={err}
        edit={edit}
        cancel={cancel}
        accountsetting={accountsetting}
        Name={Name}
        Mobile={Mobile}
        eMail={eMail}
        Role={Role}
        currentPassword={currentPassword}
        newPassword={newPassword}
        ReEnterPassword={ReEnterPassword}
        errStyle={errStyle}
        handleCancel={_handleCancel}
        handleAccountSetting={_handleAccountSetting}
        handleSubmit={_handleSubmit}
        handleEditProfile={ _handleEditProfile}
        handleNameChange={_handleNameChange}
        handleMobileChange={_handleMobileChange}
        handleEmailChange={_handleEmailChange}
        handleRoleChange={_handleRoleChange}
        handleCurrentPasswordChange={_handleCurrentPasswordChange}
        handleNewPasswordChange={_handleNewPasswordChange}
        handleReEnterPasswordChange={_handleReEnterPasswordChange}

        />
    
    </div>
    );
};

export default AccountContainer; 