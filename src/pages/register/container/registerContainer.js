import React, { useState } from "react";
import Login from "../components/register";
import { UserFetch } from "../../../api/FetchQuestions";
import Register from "../components/register";

const RegisterContainer = props => {
  const [RegisterData,setRegisterData]=useState([])
  const [visible, setVisible] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  const token = 123;

  // const _handleSubmit = e => {
  //   e.preventDefault();
  //   if (userName === "") {
  //     alert("Fill User Name");
  //   } else {
  //     UserFetch({ userName, password, token }, (err, data) => {
  //       localStorage.setItem(
  //         "userData",
  //         JSON.stringify({ userId: data.payload.insertId, username: userName })
  //       );
  //       props.history.push("/question");
  //     });
  //   }
  // };
  // const _handleUserChange = e => {
  //   setUserName(e.target.value);
  // };
  // const _handleEmailChange = e => {
  //   setEmail(e.target.value);
  // };
  // const _handlePwdChange = e => {
  //   setpassword(e.target.value);
  // };
  // const _handleView = () => {
  //   setVisible(!visible);
  // };

  return (
    <Register/>
  );
};

export default RegisterContainer;
