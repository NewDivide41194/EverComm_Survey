import React from "react";
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";

const Register = props => {
  const { handleSubmit, userName, handleChange } = props;
  return (
      <div className="row justify-content-center">
        {/* {IsLoading&&<div className='bg-dark w-100'>Loading...</div>} */}
        <form
          className="col-lg-3"
          style={{
            margin: 0,
            position: "absolute",
            top: "50%",
            transform: "translateY(-121px)"
          }}
        >
          <div className="form-group">
            <h3>CREATE YOUR ACCOUNT</h3>
            <div className="py-4">
              <ESInput
                required={true}
                id={"UserName"}
                placeHolder={"UserName"}
                value={userName}                
                onChange={e => handleChange(e)}
              />
            </div>
            <div className="py-4">
              <ESInput
                required={true}
                id={"UserName"}
                placeHolder={"UserName"}
                value={userName}                
                onChange={e => handleChange(e)}
              />
            </div>
            <ESButton
              text={"Start Survey"}
              type={"submit"}
              small
              id={"Start Survey"}
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
  );
};

export default Register;
