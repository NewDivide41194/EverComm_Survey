import React, {useState, useEffect} from "react";
import Logo from "../../assets/images/Logo.png";
import {withRouter} from "react-router-dom";
import withMedia from "react-media-query-hoc/dist/with-media";
import Auth from "../../security/auth";

const NavBar = props => {
const userId = localStorage.getItem("userId");
const email=localStorage.getItem("email")
    const {media} = props;

  
    const _handleSignOut = () => {
        Auth.signout(() => {
            props.history.push("/");
        })
        localStorage.clear()

        window.location.reload();
    };

    const _handleAccount = () => {
        props.history.push("/user/account");
        window.location.reload();
    };

    const _handleMenu = () => {
        if (userId) {
            props.history.push(`/Menu/${userId}`);
        } else {
            props.history.push("/");
        }
    };

    return (
        <div style={
                {zIndex: 97}
            }
            className="d-flex flex-row flex-wrap py-3 px-4 sticky-top bg-light justify-content-between">
            <img src={Logo}
                style={
                    {
                        height: "30px",
                        cursor: "pointer"
                    }
                }
                alt="logo"
                onClick={_handleMenu}/>
            <div className="dropdown">
                {
                props.location.pathname !== "/" && props.location.pathname !== "/register" && (
                    <button className="btn dropdown-toggle"
                        style={
                            {boxShadow: "none"}
                        }
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        {
                        email&& (
                            <span>{
                               email
                            }</span>
                        )
                    } </button>
                )
            }
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item"
                        onClick={_handleAccount}>
                        <i className="fas fa-user-cog pr-2 text-secondary"/>
                        Account Setting
                    </button>
                    <button className="dropdown-item"
                        onClick={_handleMenu}>
                        <i className="fa fa-list-ul pr-2 text-secondary"/>
                        Survey Menu
                    </button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item"
                        onClick={_handleSignOut}>
                        <i className="fa fa-reply pr-2 text-secondary"/>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default withRouter(withMedia(NavBar));
