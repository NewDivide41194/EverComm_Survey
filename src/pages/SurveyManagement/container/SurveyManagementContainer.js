import React, { useState, useEffect} from 'react';
import { MenuInfoFetch } from "../../../api/FetchMenuInfo";
import * as Colors from "../../../config/Color.config";

const SurveyManagementContainer = (props) => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token")
    useEffect(() => {
        MenuInfoFetch({userId, token}, (err, data) => {
            console.log('survey data >>>> ', data.payload.map(v => v))
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h2 style={{color: Colors.PrimaryColor}}>Survey Management</h2>
            </div>
            <div>

            </div>
        </div>
    )
}

export default SurveyManagementContainer;