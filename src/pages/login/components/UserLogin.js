import React from "react";
import { ES_Button } from "../../../tools/ES_Button";
import { ES_Input } from "../../../tools/ES_Inputs";

const Login = props => {
    const {handleSubmit,userName,handleChange}=props
    
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
        className='col-lg-3'
          style={{
            margin: 0,
            position: "absolute",
            top: "50%",
            transform: "translateY(-121px)",
          }}
        >
          <h3>Enter your Name</h3>
          <div className="py-4">
            <ES_Input id={"UserName"} placeHolder={"UserName"} value={userName} onChange={(e)=>handleChange(e)}/>
          </div>
          <ES_Button text={"Start Survey"} type={"submit"} small id={"Start Survey"} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Login;
