import React, { useState, useEffect } from "react";
import Register from "../components/register";
import { RegisterFetch, CompanyFetch } from "../../../api/FetchRegisteration";
import { useAlert } from 'react-alert'

const RegisterContainer = props => {
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [eMail, setEmail] = useState("");
  const [companyId,setCompanyId]=useState(0);
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({});
  const [companies,setCompanies]=useState([])
  const alert = useAlert()
  const [selectValue,setSelectValue]=useState(null)
  const errStyle = {
    color: "red",
    fontSize: 12,
    position: "absolute",
    marginTop: "-15px"
  };

  const selectCompany=companies.length&&companies.map((v,k)=>({value:v.company_id,label:v.company_name}))
  const handleSelect=(quesId,e)=>{setSelectValue(selectValue)
  console.log(e);
  }

  const _handleSubmit = e => {
    e.preventDefault();
    if (firstName === "") {
      setErr({
        firstNameErr: "Fill First Name"
      });
      return;
    } else if (lastName === "") {
      setErr({
        lastNameErr: "Fill Last Name"
      });
      return;
    } else if (eMail === "") {
      setErr({
        eMailErr: "Fill Email Address"
      });
      return;
    }else if (companyId===""){
      setErr({
        companyErr: "Fill Company description"
      });
      return;
    
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail)) {
      setErr({
        eMailErr: "Invalid Email Address"
      });
    } else if (password === "") {
      setErr({
        passwordErr: "Fill Password"
      });
      return;
    } else {
      setErr({});
      RegisterFetch({ userName, eMail, password,companyId }, (err, data) => {
        data.success ? _success()
        : alert.error(data.message);
      });
    }
  };
  const _success=()=>{
    props.history.push("/login")
    alert.success('Account Created Successfuly!')
  }
  useEffect(() => {
    CompanyFetch(data=>setCompanies(data.payload))
  },[]);

  const _handleFirstNameChange = e => {
    setFirstName(e.target.value);
    ;
    
  };
  const _handleLastNameChange = e => {
    setLastName(e.target.value);
  };
  const _handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const _handleCompanyChange = (quesId,e )=> {
    setCompanyId(e.value);   
  };
  const _handlePwdChange = e => {
    setPassword(e.target.value);
  };
  const _handleView = () => {
    setVisible(!visible);
  };
  console.log(userName);

  return (
    <Register
      err={err}
      firstName={firstName}
      lastName={lastName}
      password={password}
      visible={visible}
      companies={companies}
      selectValue={selectValue}
      selectCompany={selectCompany}
      errStyle={errStyle}
      handleSelect={handleSelect}
      handleView={_handleView}
      handleSubmit={_handleSubmit}
      handleEmailChange={_handleEmailChange}
      handleCompanyChange={_handleCompanyChange}
      handleFirstNameChange={_handleFirstNameChange}
      handleLastNameChange={_handleLastNameChange}
      handlePwdChange={_handlePwdChange}
    />
  );
};

export default RegisterContainer;
