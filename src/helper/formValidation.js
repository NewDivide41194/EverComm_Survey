const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const specialCharacterRegx = /[`!#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?~]/;

export const LoginFormValidation = (eMail, password) => {
  const err = {};
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
  const { eMail, password, firstName, lastName, companyName } = data;
  if (firstName === "") {
    err.firstNameErr = "Fill Frist Name!";
  } else if (!specialCharacterRegx.test(firstName)) {
    err.firstNameErr = "Not Allow Special Characters!";
  }
  if (lastName === "") {
    err.lastNameErr = "Fill Last Name!";
  } else if (!specialCharacterRegx.test(lastName)) {
    err.lastNameErr = "Not Allow Special Characters!";
  }
  if (companyName === "") {
    err.companyErr = "Fill Frist Name!";
  } else if (!specialCharacterRegx.test(companyName)) {
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
