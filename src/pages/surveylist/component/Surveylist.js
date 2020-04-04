import React from 'react';
import { ESButton } from '../../../tools/ES_Button';
import { withRouter } from "react-router-dom";
import withMedia from "react-media-query-hoc/dist/with-media";

const Surveylist=props=>{
    const _handleSurvey = () => {
        props.history.push("/building");
        window.location.reload();
      };
    return(
        <div className="container my-5" >
            <div className="d-flex flex-row flex-fill">
                <div className="">
                    <h2>Survey List</h2>
                </div>
                <div className="">
                    <ESButton
                    text={"Create Survey"}
                    onClick={_handleSurvey}
                    small   
                    />
                </div>
            </div>
            <div className="d-flex flex-row bg-primary text-dark p-5 rounded justify-content-between my-5">
                <h3>List Name</h3>
            </div>
        </div>
            
    )
        
}
export default withRouter(withMedia(Surveylist));
