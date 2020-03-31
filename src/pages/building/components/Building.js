import React from 'react';
import { ESButton } from "../../../tools/ES_Button";
import { ESInput } from "../../../tools/ES_Inputs";
import { ESDropDown} from "../../../tools/ES_DropDown";
import { Link } from "react-router-dom";
import * as Colors from "../../../config/Color.config";

const Building=props=>{
    return(
        <div className="row justify-content-center">
           <form className="" style={{
               margin: 0,
               position: "absolute",
               top: '20%'
               }}>
               <div className="">
                <div className=" font-weight-bold" style={{ fontSize: "25px" }}>
                   Select Building for Survey
                </div>
                <div className="py-4 row form-group">
                    <div className="py-2 col-5">
                        Building Name:
                    </div>
                    <div className="py-2 col-7">
                    <ESInput/>
                    </div>
                </div>
                <div className="py-2 row form-group">
                    <div className=" col-5">
                       Postal:
                    </div>
                    <div className="col-7">
                         <ESInput
                        />
                    </div>
                </div>
                <div className="py-2 row form-group">
                    <div className=" col-5">
                      Address:
                    </div>
                    <div className="col-7">
                         <ESInput
                        />
                    </div>
                </div>

               </div>
           </form>
        </div>
    )
}
export default Building;