import React, { useState, useEffect, useRef } from "react";
import Account from "../component/Account";
import { RegisterFormValidation } from "../../../../helper/formValidation";
import { useAlert } from "react-alert";
// import { UpdateUserInfo } from "../../../../api/FetchUser";
// import { AccountSettingValidataion } from "../../../../helper/formValidation";
import {
  GetUser,
  GetOneUser,
  RegisterFetch,
  UpdateUserAccount,
} from "../../../../api/FetchUser";

const AccountContainer = (props) => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState([]);
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(
    window.location.pathname === `/user/editAccount/${userId}` ? true : false
  );
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
  const [isAdd, setIsAdd] = useState(false);
  const [visible, setVisible] = useState(false);
  const [editData, setEditData] = useState([]);
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
    { value: 1, label: "admin" },
    { value: 2, label: "user" },
    { value: 3, label: "distributor" },
  ];
  const errClassName = "text-danger d-flex flex-row justify-content-end pb-2";
  const NameRef = useRef(null);

  useEffect(() => {
    if (window.location.pathname === `/user/accountManagement/${userId}`) {
      GetUser({ id: userId, token }, (err, data) => {
        setUserData(data.payload[0]);
        setSurveyList(data.payload[1]);
      });
    }

    if (window.location.pathname === `/user/editAccount/${userId}`) {
      GetOneUser({ id: userId, token }, (err, data) => {
        GetOneUserInfo(data.payload[0]);
      });
    }
  }, []);

  const GetOneUserInfo = (data) => {
    console.log("Data >>> ", data);
    const first = data.user_name.split(" ");
    const last = data.user_name.split(" ").splice(1, 2).join(" ");
    const level = UserLevelOptions.filter((v) =>
      v.value === data.user_level_id ? v.value : undefined
    ).map((v) => v);
    setId(data.login_user_id);
    setFirstName(first[0]);
    setLastName(last);
    setCompanyName(data.company_name);
    setMobile(data.phone_number);
    setEMail(data.email);
    setUserLevel(level[0]);
    setActive(data.active === 1 ? !active : active);
  };

  const matchUser =
    userData !== []
      ? userData
          .filter((v) => (v.id == userId ? v : undefined))
          .map((u) => u.role)
      : [];

  console.log('matchUser >>>>> ', matchUser)

  const _handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      companyName,
      Mobile,
      eMail,
      // password,
      active,
      userLevel,
    };

    const validedErr = RegisterFormValidation(data);
    setErr(validedErr);
    console.log("validedErr > ", validedErr);
    if (validedErr !== undefined) {
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
    } else if (validedErr === undefined) {
      setErr({});
      if (isAdd) {
        RegisterFetch(
          {
            firstName,
            lastName,
            eMail,
            password,
            companyName,
            active,
            Mobile,
            userLevel,
            surveyHeaderId: checkedList,
            token,
          },
          (err, data) => {
            if (data.success === false) {
              alert.error(data.message);
            } else {
              alert.success("Account Added Successfully!");
              //window.location.reload();
            }
          }
        );
      } else {
        // console.log('update >> ', id, firstName, lastName, companyName, Mobile, eMail, userLevel.value, active, checkedList)
        UpdateUserAccount(
          {
            id,
            firstName,
            lastName,
            companyName,
            Mobile,
            eMail,
            userLevel: userLevel.value,
            active,
            surveyHeaderId: checkedList,
          },
          (error, data) => {
            if (data.success === false) {
              alert.error(data.message);
            } else {
              alert.success("Updated User Successfully!");
            }
          },
          { token }
        );
      }
    }
  };
  const _handleIsAdd = () => {
    setIsAdd(!isAdd);
    setEdit(false);
    setFirstName("");
    setLastName("");
    setMobile("");
    setCompanyName("");
    setUserLevel(UserLevelOptions[1]);
    setActive(false);
    setCheckedList([]);
  };

  const _handleview = () => {
    setVisible(!visible);
  };

  const _handleCancel = () => {
    // document.getElementById("FirstName").value = "";
    // document.getElementById("LastName").value = "";
    // document.getElementById("Mobile").value = "";
    // document.getElementById("CompanyName").value = "";
    // document.getElementById("Email").value = "";
    // document.getElementById("Password").value = "";
    setIsAdd(false);
  };

  const _handleIsEdit = () => {
    setErr({});
    setEdit(!edit);
    setIsAdd(false);
  };

  const _handleEdit = (rowData) => {
    console.log(userData.findIndex((v) => v.id === rowData.id));
    setId(rowData.id);
    console.log("row id >>>> ", rowData.id);
    const first = rowData.name.split(" ");
    const last = rowData.name.split(" ").splice(1, 2).join(" ");
    const isActive = rowData.active == 0 ? false : true;
    const userlevel = Object.values(UserLevelOptions).filter((v) =>
      v.label == rowData.role.toLowerCase() ? v.label : null
    );

    setFirstName(first[0]);
    setLastName(last);
    setCompanyName(rowData.companyName);
    setMobile(rowData.phone_number);
    setEMail(rowData.email);
    setActive(isActive);
    setUserLevel(userlevel[0]);
    setEditData([rowData]);

    if (rowData.role === "ADMIN") {
      setCheckedList(surveyList.map((v) => v.survey_header_id));
    } else {
      setCheckedList(
        userData.map((v) => v.survey_header_id)[
          userData.findIndex((v) => v.id === rowData.id)
        ] || []
      );
    }
  };
  console.log(userData);
  //const id = Object.values(editData).filter(v => v.id )

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
  };

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
  };

  const checkListFilter = (id) => {
    return checkedList.filter((e) => e === id);
  };

  const checkListIndex = (id) => {
    return checkedList.findIndex((e) => e === id);
  };

  const _handleCheckChange = (id) => {
    if (checkListFilter(id) >= 1) {
      checkedList.splice(checkListIndex(id), 1);
    } else {
      checkedList.push(id);
    }
    setCheckedList(checkedList.map((v) => v));
  };

  const _handleUserLevelSelect = (e) => {
    setErr({});
    if (e.value === 1) {
      setCheckedList(surveyList.map((v) => v.survey_header_id));
    } else {
      setCheckedList([]);
    }
    e !== null && setUserLevel(e);

    return;
  };

  // console.log();

  return (
    <Account
      matchUser={matchUser}
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
