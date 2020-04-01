import React from 'react';
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";
import { ESDropDown} from "../../../tools/ES_DropDown";
import { Link } from "react-router-dom";
import * as Colors from "../../../config/Color.config";

const Building=props=>{

    return(
        <div className="container">
            <div className="row justify-content-center">
            <form className="col-md-6" style={{
                margin: 0,
                position: "absolute",
                top: '30%'
                }}>
                <div className="">
                    <div className="font-weight-bold" style={{ fontSize: "25px" }}>
                        Select Building for Survey
                    </div>
                    <div className="py-2 row form-group">
                        <div className="col-lg-4 col-sm-12">
                            Building Name:
                        </div>
                        <div className="col-lg-8 col-sm-12" >
                        <ESInput
                        id= {"buildingName"}/>
                        </div>
                    </div>
                    <div className="py-2 row form-group">
                        <div className="col-lg-4 col-sm-12">
                        Postal:
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <ESInput
                            id={"postal"}
                            />
                        </div>
                    </div>
                    <div className="py-2 row form-group">
                        <div className="col-lg-4 col-sm-12">
                        Address:
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <ESInput
                            id={"address"}
                            />
                        </div>
                    </div>
                    <div className="py-2 row form-group">
                        <div className="col-lg-4 col-sm-12">
                        Comment:
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <ESInput
                            id={"comment"}
                            />
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </div>
    
    )
}
export default Building;

