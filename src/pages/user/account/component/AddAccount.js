import React, { useEffect } from "react";
import { ESButton } from "../../../../tools/ES_Button";
import { ESInput } from "../../../../tools/ES_Inputs";
import { ESDropDownSample } from "../../../../tools/ES_DropDownSample";
import ESCheckBox from "../../../../tools/ES_CheckBox";
import * as Colors from "../../../../config/Color.config";

const AddAccontForm = (props) => {
  const userId = localStorage.getItem("userId");
  const currentUserLevel = localStorage.getItem("userLevel");

  useEffect(() => {
    document.getElementById("FirstName").focus();
  }, []);

  const {
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
    checkedList,
  } = props;

  const level =
    currentUserLevel != 1
      ? UserLevelOptions.filter((v) => v.value !== 1)
      : UserLevelOptions;

  const centeredStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  };
  const oneUserEditPath =
    window.location.pathname === `/user/editAccount/${userId}`;
  return (
    <div className="row justify-content-center">
      <form
        className={`${oneUserEditPath ? "col-lg-4" : "col-lg-6"} col-sm-12`}
        style={oneUserEditPath ? centeredStyle : null}
      >
        {oneUserEditPath && (
          <div className="text-center">
            <i
              className="fas fa-user-edit fa-3x"
              style={{ color: Colors.Gray }}
            ></i>
          </div>
        )}
        <h4
          style={{ color: Colors.PrimaryColor }}
          className={oneUserEditPath && `text-center`}
        >{`${
          oneUserEditPath || edit ? "Edit User Account" : "Add New User"
        }`}</h4>
        <div className="row form-group">
          <div className="py-2 col-sm-12 col-lg-6">
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
              currentUserLevel != 2 &&
              window.location.pathname !== `/user/editAccount/${userId}` &&
              "col-lg-6"
            }`}
          >
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
          {currentUserLevel != 2 &&
            window.location.pathname !== `/user/editAccount/${userId}` && (
              <div className="py-2 col-sm-12 col-lg-6">
                <ESDropDownSample
                  disabled={isDisabled}
                  id={"UserLevel"}
                  defaultValue={UserLevelOptions[1]}
                  notClearable
                  _handleSelect={handleUserLevelSelect}
                  options={level}
                  value={userLevel}
                />
              </div>
            )}
          <div className="py-2 col-12">

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
          {oneUserEditPath || (
            <div className="py-2 col-12">
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
                  color:Colors.Gray
                }}
                onClick={handleView}
              >
                {visible ? (
                  <i className="fa fa-eye-slash py-4" />
                ) : (
                  <i className="fa fa-eye py-4" />
                )}{" "}
              </span>
            </div>
          )}
          {oneUserEditPath || (
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

          <div className="py-3 col-12">
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
      {(currentUserLevel === 1 || oneUserEditPath === false) && (
        <SurveyHeaderList
          surveyList={surveyList}
          userLevel={userLevel}
          handleCheckChange={handleCheckChange}
          checkedList={checkedList}
          currentUserLevel={currentUserLevel}
        />
      )}
    </div>
  );
};

export default AddAccontForm;

const SurveyHeaderList = (props) => {
  const { surveyList, handleCheckChange, checkedList, userLevel, currentUserLevel } = props;
  //console.log(checkedList);
  const level = Object.values(userLevel).map((v) => v);

  return (
    <div
      className="col-lg-6 col-sm-12"
      style={{ maxHeight: 600, overflowY: "auto" }}
    >
      <h4 style={{ color: Colors.PrimaryColor }}>Select Survey Headers</h4>
      {
        currentUserLevel != 3 &&
          <span className=" text-success">
          <i className={"fa fa-exclamation-circle pr-2 pb-2"} />
          Admin account can all survey permissions.
        </span>
      }

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
          />
        </div>
      ))}{" "}
    </div>
  );
};
