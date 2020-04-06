import React from 'react';
import { ESButton } from '../../../tools/ES_Button';
import { withRouter } from "react-router-dom";
import withMedia from "react-media-query-hoc/dist/with-media";

const Surveylist=props=>{
    const {progress,buildingName}=props
    
    return(
            
            <div className="d-flex flex-row bg-primary text-dark p-5 rounded justify-content-between my-5">
                <h3>{buildingName}</h3>
            </div>
            
    )
        
}
export default withRouter(withMedia(Surveylist));