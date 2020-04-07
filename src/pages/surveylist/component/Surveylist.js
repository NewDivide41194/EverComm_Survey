import React from 'react';
import {ESButton} from '../../../tools/ES_Button';
import {withRouter} from "react-router-dom";
import withMedia from "react-media-query-hoc/dist/with-media";

const Surveylist = props => {
    const {progress, buildingName,BgColor,TxtColor} = props

    return (

        <div className="d-flex flex-row p-3 rounded justify-content-between my-2"
            style={
                {
                    background: BgColor,
                    color:TxtColor

                }
        }>
            <span style={
                {fontSize: '22px',
                // fontWeight:"bold",
            }
            }>
                {buildingName}</span>

            <span style={
                {
            }
            }>{progress}</span>
        </div>

    )

}
export default withRouter(withMedia(Surveylist));
