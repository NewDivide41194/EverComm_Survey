import React from "react";
import { ESButton } from "../../../../tools/ES_Button";
import { ESInput } from "../../../../tools/ES_Inputs";
import { ESDropDownSample } from "../../../../tools/ES_DropDownSample";
import ESCheckBox from "../../../../tools/ES_CheckBox";
import { Link } from "react-router-dom";
import * as Colors from "../../../../config/Color.config";

const AddAccontForm = (props) => {
  const userId = localStorage.getItem("userId");
  const {
    matchUser,
    surveyList,
    handleSubmit,
    firstName,
    lastName,
    companyName,
    eMail,
    password,
    mobile,
    active,
    userLevel,
    UserLevelOptions,
    handleFirstNameChange,
    handleLastNameChange,
    handleMobileChange,
    handleEmailChange,
    handleCompanyChange,
    handlePasswordChange,
    handleView,
    handleCancel,
    handleActiveCheck,
    handleUserLevelSelect,
    handleCheckChange,
    visible,
    err,
    errStyle,
    errClassName,
    isDisabled,
    edit,
    span,
    header,
    handleIsEdit,
    accountsetting,
    checkedList,
  } = props;
  //console.log('Err >>> ', err.MobileErr)
  //const err = {};
  const centeredStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)"
  };
  const oneUserEditPath =
    window.location.pathname === `/user/editAccount/${userId}`;
  return (
    <div className="row justify-content-center py-3">
      <form
        className={`${oneUserEditPath?"col-lg-4":"col-lg-6"} col-sm-12`}
        style={oneUserEditPath ? centeredStyle : null}
      >
        {oneUserEditPath&&<div className="text-center"><i class="fas fa-user-edit fa-2x" style={{color:Colors.Gray}}></i></div>}
        <h4 style={{ color: Colors.PrimaryColor }} className={oneUserEditPath&&`text-center`}>{`${
          oneUserEditPath || edit ? "Edit User Account" : "Add New User"
        }`}</h4>
        <div className="row form-group">
          <div className="py-2 col-sm-12 col-lg-6">
            <label htmlFor="FirstName">First Name</label>
            {err.firstNameErr === undefined ? null : (
              <div
                className={errClassName}
                style={{
                  ...errStyle,
                }}
              >
                {`*${err.firstNameErr}`}
              </div>
            )}
            <ESInput
              disabled={isDisabled}
              id={"FirstName"}
              placeHolder={"FirstName"}
              value={firstName}
              maxLength={"20"}
              onChange={(e) => handleFirstNameChange(e)}
            />
          </div>
          <div className="py-2 col-sm-12 col-lg-6">
            <label htmlFor="LastName">Last Name</label>
            {err.lastNameErr === undefined ? null : (
              <div
                className={errClassName}
                style={{
                  ...errStyle,
                }}
              >
                {`*${err.lastNameErr}`}
              </div>
            )}
            <ESInput
              disabled={isDisabled}
              id={"LastName"}
              placeHolder={"LastName"}
              maxLength={"20"}
              value={lastName}
              onChange={(e) => handleLastNameChange(e)}
            />
          </div>
          <div className="py-2 col-12">
            <label htmlFor="CompanyName">Your Company Name</label>
            {err.companyErr === undefined ? null : (
              <div
                className={errClassName}
                style={{
                  ...errStyle,
                }}
              >
                {`*${err.companyErr}`}
              </div>
            )}
            <ESInput
              disabled={isDisabled}
              id={"CompanyName"}
              placeHolder={"Your Company"}
              maxLength={"50"}
              value={companyName}
              onChange={(e) => handleCompanyChange(e)}
            />
          </div>
          <div
            className={`py-2 col-sm-12 ${
              matchUser[0] === "admin" && "col-lg-6"
            }`}
          >
            <label htmlFor="Mobile">Phone No.</label>
            {err.MobileErr == undefined ? null : (
              <div
                className={errClassName}
                style={{
                  ...errStyle,
                }}
              >
                {`*${err.MobileErr}`}
              </div>
            )}
            <ESInput
              disabled={isDisabled}
              id={"Mobile"}
              placeHolder={"Your Phone No."}
              maxLength={"20"}
              value={mobile}
              onChange={(e) => handleMobileChange(e)}
            />
          </div>
          {matchUser[0] === "admin" && (
            <div className="py-2 col-sm-12 col-lg-6">
              <label htmlFor="UserLevel">Choose User Level</label>
              <ESDropDownSample
                disabled={isDisabled}
                id={"UserLevel"}
                defaultValue={UserLevelOptions[1]}
                notClearable
                _handleSelect={handleUserLevelSelect}
                options={UserLevelOptions}
                value={userLevel}
              />
            </div>
          )}
          <div className="py-2 col-12">
            <label htmlFor="Email">Email</label>

            {err.eMailErr === undefined ? null : (
              <div
                className={errClassName}
                style={{
                  ...errStyle,
                }}
              >
                {`*${err.eMailErr}`}
              </div>
            )}

            <ESInput
              disabled={isDisabled}
              id={"Email"}
              type={"email"}
              placeHolder={"Email"}
              value={eMail}
              onChange={(e) => handleEmailChange(e)}
            />
          </div>
          {oneUserEditPath|| (
            <div className="py-2 col-12">
              <label htmlFor="Password">Password</label>
              {err.passwordErr === undefined ? null : (
                <div
                  className={errClassName}
                  style={{
                    ...errStyle,
                  }}
                >
                  {`*${err.passwordErr}`}
                </div>
              )}
              <ESInput
                disabled={edit ? true : isDisabled}
                id={"Password"}
                type={visible ? "text" : "password"}
                placeHolder={"Password"}
                value={password}
                onChange={(e) => handlePasswordChange(e)}
              />
              <span
                style={{
                  float: "right",
                  position: "relative",
                  marginTop: "-55px",
                  fontSize: "18px",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
                onClick={handleView}
              >
                {visible ? (
                  <i className="fa fa-eye-slash py-4 text-secondary" />
                ) : (
                  <i className="fa fa-eye py-4 text-secondary" />
                )}{" "}
              </span>
            </div>
          )}
          {oneUserEditPath|| (
            <div className="col-sm-12 col-lg-6">
              <ESCheckBox
                disabled={isDisabled}
                checked={active}
                id={"Active"}
                placeHolder={"Active"}
                value={[
                  {
                    option_choice_id: 1,
                    option_choice_name: "Active",
                  },
                ]}
                _handleChange={(e) => handleActiveCheck(e)}
                className={"w-100"}
              />
            </div>
          )}

          <div className="pt-3 col-12">
            <div className="row">
              <div className="col-6">
                <ESButton
                  disabled={isDisabled}
                  text={edit ? "Save" : "ADD USER"}
                  type={"submit"}
                  id={"AddUser"}
                  onClick={handleSubmit}
                />
              </div>
              <div className="col-6">
                <ESButton
                  disabled={isDisabled}
                  text={"CANCEL"}
                  id={"Cancel"}
                  customColor={Colors.Gray}
                  onClick={handleCancel}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      {(matchUser[0] === "admin" ||
        oneUserEditPath===false) && (
        <SurveyHeaderList
          surveyList={surveyList}
          userLevel={userLevel}
          handleCheckChange={handleCheckChange}
          checkedList={checkedList}
        />
      )}
    </div>
  );
};

export default AddAccontForm;

const SurveyHeaderList = (props) => {
  const { surveyList, handleCheckChange, checkedList, userLevel } = props;
  //console.log(checkedList);
  const level = Object.values(userLevel).map((v) => v);
  const surveyListOption = surveyList.map((v) => ({
    option_choice_id: v.survey_header_id,
    option_choice_name: v.survey_name,
  }));

  return (
    <div className="col-lg-6 col-sm-12" style={{maxHeight: 600, overflowY:'auto'}}>
      <h4 style={{ color: Colors.PrimaryColor }}>Select Survey Headers</h4>
      <span className=" text-success">
        <i className={"fa fa-exclamation-circle pr-2 pb-2"} />
        Admin account can all survey permissions.
      </span>
      {surveyList.map((v, k) => (
        <div className="border-bottom" key={k}>
          <ESCheckBox
            quesId={v.survey_header_id}
            value={[
              {
                option_choice_id: v.survey_header_id,
                option_choice_name: v.survey_name,
              },
            ]}
            fontSize={16}
            className={"w-100"}
            _handleChange={(e) => handleCheckChange(e)}
            checked={
              checkedList.filter((d) => d === v.survey_header_id).length > 0
            }
            disabled={level[0] === 1}
            keys={v.survey_header_id}
            // className={ques.option_group_id===10?"w-25":null}
          />
        </div>
      ))}{" "}
    </div>
  );
};
