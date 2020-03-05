import React, { useState } from "react";
import Login from "../components/UserLogin";
import { UserFetch } from "../../../api/FetchQuestions";

const LoginContainer = props => {
  const [userName, setUserName] = useState("");
  const token = 123;

  const _handleSubmit = (e) => {
    e.preventDefault()
    if (userName ===  "") {
      alert('Fill User Name')
    } else {
      UserFetch({ userName, token }, (err, data) => {       
        localStorage.setItem("userData", JSON.stringify({userId: data.payload.insertId,username: userName}));
        props.history.push("/question");
      });
    }
  };
  const _handleChange = e => {
    console.log('.....e is>',e.target.value)
       setUserName(e.target.value);
  };
 

  return (
    <Login
      handleSubmit={(d)=>_handleSubmit(d)}
      userName={userName}
      handleChange={_handleChange}
    />
  );
};

export default LoginContainer;
