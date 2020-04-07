import React, { useState, useEffect } from "react";
import Building from "../components/Building.js";
import Countries from "../../../assets/Countries.json"
import { withRouter } from "react-router-dom";

const BuildingContainer = (props) => {
  const [selectValue, setSelectValue] = useState(null);
  const [buildingName,setBuildingName]= useState("");
  const [postal, setPostal] = useState("");
  const [address,setAddress]= useState("");
  const [clientCompany,setClientCompany]=useState("");
  const [comment,setComment]=useState("");
  const [err,setErr]= useState({})
 
  const _handleBuildingNameChange= e =>{
    setBuildingName(e.target.value);
  }
  const _handlePostalChange= e =>{
    setPostal(e.target.value);
  }
  const _handleAddressChange= e =>{
    setAddress(e.target.value);
  }
  const _handleClientCompanyChange= e =>{
    setClientCompany(e.target.value);
  }
  const _handleCommentChange= e=>[
    setComment(e.target.value)
  ]
  const _handleSelect = (quesId,e) => {    
    setSelectValue(e);
  };
  const _handleCountrySelect = (quesId,e) => {    
    setSelectValue(e);
  };
  const errStyle = {
    color: "red",
    fontSize: 12,
    position: 'absolute'
   
  };

  const _handleSubmit = e => {
    e.preventDefault();
    if(buildingName===""){
      setErr({
        buildingNameErr: "Fill BuildingName"
      });
      return;
    }else if(postal===""){
      setErr({
        postalErr: "Fill Postal"
      });
      return;
    }else if(address===""){
      setErr({
        addressErr: "Fill Address"
      });
      return;
    }else if(clientCompany===""){
      setErr({
        clientCompanyErr: "Fill Client Company"
      });
      return;
    }else if(comment===""){
      setErr({
        commentErr: "Fill Comment"
      });
      return;
    }else{
      // alert("fill blank")
      setErr({});
    }
  }
  
  console.log(Countries.countries);
  
  const CountryOptions=Countries.countries.map((v,k)=>({value:v.code,label:v.name}))
console.log("---->S",props);

  return (
      <Building
        buildingName={buildingName}
        postal={postal}
        address={address}
        clientCompany={clientCompany}
        comment={comment}
        CountryOptions={CountryOptions}
        Companies={Companies}
        selectValue={selectValue}
        handleBuildingNameChange={_handleBuildingNameChange}
        handlePostalChange={ _handlePostalChange }
        handleAddressChange={_handleAddressChange}
        handleClientCompanyChange={_handleClientCompanyChange}
        handleCommentChange={_handleCommentChange}
        handleSelectCountry={_handleCountrySelect}  
        handleSubmit={_handleSubmit}
        err={err}
        errStyle={errStyle}
      />
  );
};
export default BuildingContainer;

const Companies = [
  {
    company_id: 1,
    company_name: "Kumo",
    buildings: [
      {
        building_id: 1,
        building_name: "Kumo Chiller",
        address: "64*105 Mandalay"
      },
      {
        building_id: 2,
        building_name: "Kumo Thitsar",
        address: "62*30 Mandalay"
      }
    ]
  },
  {
    company_id: 1,
    company_name: "Evercomm",
    buildings: [
      {
        building_id: 3,
        building_name: "Evercomm Chiller",
        address: "Singapore"
      },
      {
        building_id: 4,
        building_name: "Evercomm Thitsar",
        address: "Singapore"
      }
    ]
  }
];
