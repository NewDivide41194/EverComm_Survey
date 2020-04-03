import React, { useState, useEffect } from "react";
import Building from "../components/Building.js";

const BuildingContainer = () => {
  const [selectValue, setSelectValue] = useState(null);
  const [postal, setPostal] = useState("");
  
  const _handleSelect = (quesId,e) => {    
    setSelectValue(e);
  };
  const _handleCountrySelect = (quesId,e) => {    
    setSelectValue(e);
  };
  const _handlePostalChange = e => {
    setPostal(e.target.value);
  };
  

  return (
      <Building
        handlePostalChange={_handlePostalChange}
        postal={postal}
        Companies={Companies}
        selectValue={selectValue}
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
