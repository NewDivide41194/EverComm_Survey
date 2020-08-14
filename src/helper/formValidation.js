const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const specialCharacterRegx = /[`!#$%^&*()_+\-=[\]{};:"\\|<>/?~]/;
// const MobileRegex=/^\d+$/;
const MobileRegex=/^\d{10}/;

export const LoginFormValidation = (data) => {
  const err = {};
  const {eMail,password}=data

  if (eMail === "") {
    err.eMailErr = "Fill Email Address!";
  } else if (!emailRegex.test(eMail)) {
    err.eMailErr = "incorret Email Address!";
  }
  if (password === "") {
    err.passwordErr = "Fill Password!";
  }
  return err;
};

export const RegisterFormValidation = (data) => {
  const err = {};
  const { eMail, password, firstName, lastName, companyName, Mobile  } = data;
  if (firstName === "") {
    err.firstNameErr = "Fill Frist Name!";
  } else if (specialCharacterRegx.test(firstName)) {
    err.firstNameErr = "Not Allow Special Characters";
  }
  if (lastName === "") {
    err.lastNameErr = "Fill Last Name!";
  } else if (specialCharacterRegx.test(lastName)) {
    err.lastNameErr = "Not Allow Special Characters!";
  }
  if (Mobile === "") {
    err.MobileErr = "Fill Phone Number!";
  } else if (!MobileRegex.test(Mobile)) {
    err.MobileErr = "Incorrect Phone Number!";
  }
  if (companyName === "") {
    err.companyErr = "Fill Company Name!";
  } else if (specialCharacterRegx.test(companyName)) {
    err.companyErr = "Not Allow Special Characters!";
  }
  if (eMail === "") {
    err.eMailErr = "Fill Email Address!";
  } else if (!emailRegex.test(eMail)) {
    err.eMailErr = "incorret Email Address!";
  }
  if (password === "") {
    err.passwordErr = "Fill Password!";
  }else if (password===undefined){
    return
  }
  else if (password.length<8){
    err.passwordErr="Minium 8 Characters"
  } 
  return err;
};

export const BuildingFormValidation = (data) => {
  const err = {};
  const { clientCompany,buildingType, buildingName, country, postal, address,comment } = data;

  if (clientCompany === "") {
    err.clientCompanyErr = "Fill Client Company!";
  } else if (specialCharacterRegx.test(clientCompany)) {
    err.clientCompanyErr = "Not Allow Special Characters";
  }
  if (buildingType === "") {
    err.buildingTypeErr = "Building Type Required!";
  }
  if (buildingName === "") {
    err.buildingNameErr = "Fill Building Name!";
  } else if (specialCharacterRegx.test(buildingName)) {
    err.buildingNameErr = "Not Allow Special Characters!";
  }
  if (country === "") {
    err.countryErr = "Select Country!";
  } 
  if (postal === "") {
    err.postalErr = "Fill Postal Code!";
  }
  if (address === "") {
    err.addressErr = "Fill Address!";
  } 
  if(comment===""){
    err.commentErr="Fill Comment!";
  }else if (specialCharacterRegx.test(comment)) {
    err.commentErr = "Not Allow Special Characters!";
  }
  return err;
};

export const AccountSettingValidataion=(data)=>{
  const err = {};
  const {Name,Mobile,eMail,Role,currentPassword,newPassword,ReEnterPassword }=data;
  
  if(Name===""){
    err.NameErr="Fill Name!";
  }else if(specialCharacterRegx.test(Name)){
    err.NameErr= "Not Allow Special Characters!";
  }
  if(Mobile===""){
    err.MobileErr="Fill Mobile Number!";
  }else if(!MobileRegex.test(Mobile)){
    err.MobileErr="Incorrect Ph No"
  }
  if(eMail===""){
    err.eMailErr="Fill Email!";
  }else if (!emailRegex.test(eMail)) {
    err.eMailErr = "incorret Email Address!";
  }
  if(Role===""){
    err.RoleErr="Please set your Role!";
  }
  if(currentPassword===""){
    err.currentPasswordErr="Create Password!";
  }else if(currentPassword.length < 8){
    err.currentPasswordErr="Minimum 8 character!";
  }
  if(newPassword===""){
    err.newPasswordErr="create Password!"
  }else if(newPassword.length < 8){
    err.newPasswordErr="Minimum 8 character!";
  }
  if(ReEnterPassword===""){
    err.ReEnterPasswordErr="create Password!";
  }else if(ReEnterPassword.length < 8){
    err.ReEnterPasswordErr="Minimum 8 character!";
  }else if(ReEnterPassword!=newPassword){
    err.ReEnterPasswordErr="Password doesn't match";
  }
  return err;
}
