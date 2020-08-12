import React from 'react'
import { ESButton } from "../../../../tools/ES_Button";
import { ESInput } from "../../../../tools/ES_Inputs";
import { ESDropDownSample } from "../../../../tools/ES_DropDownSample";
import ESCheckBox from "../../../../tools/ES_CheckBox";
import { Link } from "react-router-dom";
import * as Colors from "../../../../config/Color.config";

const AddAccontForm = (props) => {
    const {
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
        visible,
        // err,
        errStyle,
        errClassName,
        isDisabled,
        edit,
        span,
        header,
        handleIsEdit,
        accountsetting
    } = props;
    const err = {}
    return (
        // <div className="row justify-content-center">
        <form className="">
            <div className="py-3">
                <span style={span} onClick={edit ? handleIsEdit : null}>
                    Account Setting and profile {">"}
                </span>
                {edit && !accountsetting && (
                    <span style={span} className="font-weight-bold">
                        Edit profile
                    </span>
                )}
            </div>
                
                <strong style={{ opacity:.6 }}>
                    Add New User
              
                </strong>
            <div className="row form-group">
                <div className="py-2 col-sm-12 col-lg-6">
                    <label htmlFor="FirstName">First Name</label>
                    {err.firstNameErr === undefined ? null : (
                        <div
                            className={errClassName}
                            style={{ ...errStyle }}
                        >{`*${err.firstNameErr}`}</div>
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
                            style={{ ...errStyle }}
                        >{`*${err.lastNameErr}`}</div>
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
                            style={{ ...errStyle }}
                        >{`*${err.companyErr}`}</div>
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
                <div className="py-2 col-sm-12 col-lg-6">
                    <label htmlFor="Mobile">Phone No.</label>
                    {err.mobileErr == undefined ? null : (
                        <div
                            className={errClassName}
                            style={{...errStyle}}
                        >{`*${err.mobileErr}`}</div>
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
                <div className="py-2 col-sm-12 col-lg-6">
                    <label htmlFor="UserLevel">Choose User Level</label>
                    <ESDropDownSample
                        disabled={isDisabled}
                        id={"UserLevel"}
                        notClearable
                        _handleSelect={handleUserLevelSelect}
                        options={UserLevelOptions}
                        value={userLevel}
                     />
                </div>
                <div className="py-2 col-12">
                    <label htmlFor="Email">Email</label>

                    {err.eMailErr === undefined ? null : (
                        <div
                            className={errClassName}
                            style={{ ...errStyle }}
                        >{`*${err.eMailErr}`}</div>
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
                <div className="py-2 col-12">
                    <label htmlFor="Password">Password</label>
                    {err.passwordErr === undefined ? null : (
                        <div
                            className={errClassName}
                            style={{ ...errStyle }}
                        >{`*${err.passwordErr}`}</div>
                    )}
                    <ESInput
                        disabled={isDisabled}
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
                            )}
                    </span>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <label htmlFor="Active">Active</label>
                    <ESCheckBox
                        disabled={isDisabled}
                        checked={active}
                        id={"Active"}
                        placeHolder={"Active"}
                        value={[{option_choice_id:1,option_choice_name:"Active"}]}
                        _handleChange={(e) => handleActiveCheck(e)}
                        className={"w-100"}
                    />
                </div>
                <div className="pt-2 col-12">
                    <div className="row">
                        <div className="col-6">
                            <ESButton
                                disabled={isDisabled}
                                text={"ADD USER"}
                                type={"submit"}
                                small
                                id={"AddUser"}
                                onClick={handleSubmit}
                            />
                        </div>
                        <div className="col-6">
                            <ESButton
                                disabled={isDisabled}
                                text={"CANCEL"}
                                small
                                id={"Cancel"}
                                onClick={handleCancel}
                            />
                        </div>
                    </div>

                </div>
                
            </div>
        </form>
        // </div>
    );
};

export default AddAccontForm