import React, { useState, useEffect, useRef } from "react";
import Account from "../component/Account";
import { RegisterFetch } from "../../../../api/FetchUser";
import { RegisterFormValidation } from "../../../../helper/formValidation";
import { useAlert } from "react-alert";
// import { UpdateUserInfo } from "../../../../api/FetchUser";
// import { AccountSettingValidataion } from "../../../../helper/formValidation";
import { GetUser } from "../../../../api/FetchUser"

const AccountContainer = (props) => {
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [eMail, setEMail] = useState("");
  const [Role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({});
  const [active, setActive] = useState(false);
  const [userLevel, setUserLevel] = useState("");
  const [surveyList, setSurveyList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const [isAdd, setIsAdd] = useState(false)
  const [visible,setVisible]=useState(false)
  const [editData,setEditData]=useState([])
  const errStyle = {
    marginTop: "-25px",
    fontSize: 12,
  };

  // const BuildingOptions = buildingTypeData.map((v, k) => ({
  //   value: v.id,
  //   label: v.building_type,
  // }));
  const alert = useAlert();

  const UserLevelOptions = [
    { value: 1, label: 'admin' },
    { value: 2, label: 'user' },
    { value: 3, label: 'distributor' }
  ]
  const errClassName = "text-danger d-flex flex-row justify-content-end pb-2";
  const NameRef = useRef(null);

  useEffect(() => {
    GetUser(null, (err, data) => {
      setUserData(data.payload[0])
      setSurveyList(data.payload[1])

    })
  }, []);
  //console.log('survey list >> ', surveyList)
  const _handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      companyName,
      Mobile,
      eMail,
      Role,
      password,
      active,
      userLevel
    };
    const validedErr = RegisterFormValidation(data);
    setErr(validedErr);

    if (validedErr.firstNameErr) {
      document.getElementById("FirstName").focus();
    } else if (validedErr.lastNameErr) {
      document.getElementById("LastName").focus();
    } else if (validedErr.MobileErr) {
      document.getElementById("Mobile").focus();
    } else if (validedErr.companyErr) {
      document.getElementById("CompanyName").focus();
    } else if (validedErr.eMailErr) {
      document.getElementById("Email").focus();
    } else if (validedErr.passwordErr) {
      document.getElementById("Password").focus();
    }
    if (Object.keys(validedErr).length === 0) {
      setErr({});
      RegisterFetch({ firstName, lastName, eMail, password, companyName, active, Mobile, userLevel,surveyHeaderId:checkedList, token }, (err, data) => {
        if (data.success === false) {
          alert.error(data.message);
        } else {
          alert.success("Account Added Successfully!")
          //window.location.reload();
        }
      });
    }
  };
  const _handleIsAdd=()=>{setIsAdd(!isAdd)
  setEdit(false) 
  setEditData([])}
  const _handleview=()=>{setVisible(!visible)}
  const _handleCancel = () => {
    // document.getElementById("FirstName").value = "";
    // document.getElementById("LastName").value = "";
    // document.getElementById("Mobile").value = "";
    // document.getElementById("CompanyName").value = "";
    // document.getElementById("Email").value = "";
    // document.getElementById("Password").value = "";
    setIsAdd(false)
  }

  const _handleIsEdit = () => {
    setErr({});
    setEdit(!edit);
    setIsAdd(false)
  };

  const _handleEdit = (rowData) => {
setEditData([rowData])  };

  const _handleFirstNameChange = (e) => {
    setErr({});
    setFirstName(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const _handleLastNameChange = (e) => {
    setErr({});
    setLastName(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const _handleCompanyChange = (e) => {
    setErr({});
    setCompanyName(e.target.value.replace(/\s+/g, " ").trimStart());
  }

  const _handleMobileChange = (e) => {
    setErr({});
    setMobile(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const _handleEmailChange = (e) => {
    setErr({});
    setEMail(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handleRoleChange = (e) => {
    setErr({});
    setRole(e.target.value.replace(/\s+/g, " ").trimStart());
  };
  const _handlePasswordChange = (e) => {
    setErr({});
    setPassword(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  const _handleActiveCheck = (e) => {
    setErr({});
    setActive(!active);
  }

  const checkListFilter = (id) => {
    return checkedList.filter((e) => e === id)
  }

  const checkListIndex = (id) => {
    return checkedList.findIndex((e) => e === id)
  }

  const _handleCheckChange = (id) => {      
    if(checkListFilter(id) >= 1){
      checkedList.splice(checkListIndex(id), 1)
    } else {
      checkedList.push(id)
    }   
    setCheckedList(checkedList.map(v => v)) 
  }

  const _handleUserLevelSelect = (e) => {
    setErr({});
    if(e.value===1){
      setCheckedList(surveyList.map(v=>v.survey_header_id))
    }else{setCheckedList([])}
    e !== null && setUserLevel(e.value);
    
    return;
  };

  console.log(editData);

  return (
    <Account
      userData={userData}
      surveyList={surveyList}
      err={err}
      edit={edit}
      editData={editData}
      handleEdit={_handleEdit}
      firstName={firstName}
      lastName={lastName}
      companyName={companyName}
      Mobile={Mobile}
      eMail={eMail}
      Role={Role}
      password={password}
      active={active}
      userLevel={userLevel}
      UserLevelOptions={UserLevelOptions}
      errStyle={errStyle}
      errClassName={errClassName}
      handleSubmit={_handleSubmit}
      handleCancel={_handleCancel}
      handleIsEdit={_handleIsEdit}
      handleFirstNameChange={_handleFirstNameChange}
      handleLastNameChange={_handleLastNameChange}
      handleCompanyChange={_handleCompanyChange}
      handleMobileChange={_handleMobileChange}
      handleEmailChange={_handleEmailChange}
      handleRoleChange={_handleRoleChange}
      handlePasswordChange={_handlePasswordChange}
      handleActiveCheck={_handleActiveCheck}
      handleCheckChange={_handleCheckChange}
      handleUserLevelSelect={_handleUserLevelSelect}
      handleIsAdd={_handleIsAdd}
      NameRef={NameRef}
      isAdd={isAdd}
      checkedList={checkedList}
      handleView={_handleview}
      visible={visible}
    />
  );
};

export default AccountContainer;
