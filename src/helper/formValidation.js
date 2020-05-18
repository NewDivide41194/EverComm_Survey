const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const specialCharacterRegx = /[`!#$%^&*()_+\-=[\]{};:"\\|<>/?~]/;
const err = {};

export const LoginFormValidation = (data) => {
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
  const { eMail, password, firstName, lastName, companyName } = data;
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
  }else if (password.length<8){
    err.passwordErr="Minium 8 Characters"
  }
  return err;
};

export const BuildingFormValidation = (data) => {
  const { clientCompany, buildingName, country, postal, address,comment } = data;
  if (clientCompany === "") {
    err.clientCompanyErr = "Fill Client Company!";
  } else if (specialCharacterRegx.test(clientCompany)) {
    err.clientCompanyErr = "Not Allow Special Characters";
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
    err.postalErr = "Fill Email Address!";
  }
  if (address === "") {
    err.addressErr = "Fill Address!";
  } else if (specialCharacterRegx.test(address)) {
    err.addressErr = "Not Allow Special Characters!";
  }
  if (specialCharacterRegx.test(comment)) {
    err.commentErr = "Not Allow Special Characters!";
  }
  return err;
};
