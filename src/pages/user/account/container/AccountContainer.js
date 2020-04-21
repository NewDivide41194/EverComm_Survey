import React,{ useState } from 'react';
import Account from '../component/Account'
import { ESInput } from "../../../../../src/tools/ES_Inputs.js";


const AccountContainer= props =>{
    const [edit, setEdit] = useState(true);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reenterPassword, setReenterPassword] = useState("");
    const [err, setErr] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [Name,setName]=useState("");
    const[Mobile,setMobile]=useState("");
    const[Mail,setMail]=useState("");
    const[Role,setRole]=useState("");
    const errStyle = {
        color: "red",
        fontSize: 12,
        position: "absolute",
        marginTop: "10px",
        marginRight: "10px",
      };

    const handleEditProfile = () => {
        setEdit(!edit);
      };

      const _handleNameChange=e => {
          setName(e.target.value.replace(/\s+/g," "));
      }

      const _handleMobileChange=e => {
        setMobile(e.target.value);
    }

    const _handleMailChange=e => {
        setMail(e.target.value);
    }

    const _handleRoleChange=e => {
        setRole(e.target.value);
    }

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
        } else if (Mail === "") {
          setErr({
            MailErr: "Fill Email Address",
          });
          return;
        } else if (Role === "") {
          setErr({
            RoleErr: "Pls Set your Roll",
          });
          return;
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Mail)) {
          setErr({
            MailErr: "Invalid Email Address",
          });
        }
         else if (currentPassword === "") {
          setErr({
            currentPasswordErr: "Please fill your Current Password",
          });
        } 
        else if (newPassword=== "") {
            setErr({
              newPasswordErr: "Please Create New Password",
            });
          } 
          else if (reenterPassword=== "") {
            setErr({
              reenterPasswordErr: "ReEnter New Password",
            });
          } 
        else {
          setErr({});
        }
      };

      const PasswordInput = (props) => {
        
        return (
          <div className="col-lg-4">
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


    return(
    <div className="container">
        <Account
        edit={edit}
        handleEditProfile={handleEditProfile}
        PasswordInput={PasswordInput}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        currentPassword={currentPassword}
        newPassword={newPassword}
        reenterPassword={reenterPassword}
        setCurrentPassword={setCurrentPassword}
        setNewPassword={setNewPassword}
        setReenterPassword={setReenterPassword}
        err={err}
        setErr={setErr}
        errStyle={errStyle}
        handleSubmit={_handleSubmit}
        handleNameChange={_handleNameChange}
        handleMobileChange={_handleMobileChange}
        handleMailChange={_handleMailChange}
        handleRoleChange={_handleRoleChange}
        />
    
    </div>
    )
}

export default AccountContainer; 