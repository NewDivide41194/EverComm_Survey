const emailFormat=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
// const emailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const LoginFormValidation = (eMail, password) => {
  const err = {};
  if (eMail === "") {
    err.eMailErr = "Fill Email Address!";
  } else if (!emailFormat.test(eMail)) {
    err.eMailErr = "incorret Email Address!";
  }
  if (password === "") {
    err.passwordErr = "Fill Password!";
  }
  return err;
};
