import React, { useState, useEffect} from 'react';
import { MenuInfoFetch } from "../../../api/FetchMenuInfo";
import * as Colors from "../../../config/Color.config";
import SurveyTable from '../components/SurveyManagementContainer';

const SurveyManagementContainer = (props) => {
const {surveyData}=props
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token")
    useEffect(() => {
        MenuInfoFetch({userId, token}, (err, data) => {
            console.log('survey data >>>> ', data.payload.map(v => v))
        })
    }, [])
    const [tableData, setTableData] = useState({
        columns: [
          { title: "Title", field: "surveyName" },
          { title: "Email", field: "email" },
          { title: "Role", field: "role" },
          { title: "Company", field: "companyName" },
          {
            title: "Active",
            render: (userData) =>
              userData.active === 1 ? (
                <i className="fas fa-check-square" style={{ color: "green" }}></i>
              ) : (
                <i className="far fa-square" style={{ color: "green" }}></i>
              ),
          },
          { title: "Created Date", field: "created_date" },
        ],
        data: surveyData,
      });
    
    //   const actionButtons = (
    //     <div className="row px-3" style={{ fontSize: 13, color: "darkred" }}>
    //       {`${
    //         !isEdit
    //           ? 'Click "+ Add User" button to add new account'
    //           : "*Select a row to edit"
    //       }`}
    //     </div>
    //   );
    return (
        <div className="container">
            <div className="row">
                <h2 style={{color: Colors.PrimaryColor}}>Survey Management</h2>
            </div>
            <div>
            <SurveyTable tableData={tableData}/>
            </div>
        </div>
    )
}

export default SurveyManagementContainer;