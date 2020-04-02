import React, { useState, useEffect } from "react";
import Building from "../components/Building.js";

const BuildingContainer = () => {
  const [selectValue, setSelectValue] = useState(null);
  const [postal, setPostal] = useState("");
  const [selectIndex,setSelectIndex]=useState(null)


  
  const Buildings = Companies.map((v, k) => v.buildings)[0];

  const SelectBuildings = Buildings.map((v, k) => ({
    value: v.building_id,
    label: v.building_name
  }
  ));
  const _handleSelect = (quesId,e) => {    
    setSelectValue(e);
    setSelectIndex(Buildings.findIndex(I=>I.building_id===e.value))
  };
  const _handlePostalChange = e => {
    setPostal(e.target.value);
  };
  console.log("888888888888",Buildings.map((v,k)=>v.address)[selectIndex]);    
  console.log(Buildings);
  
console.log(selectIndex);

  return (
      <Building
        handlePostalChange={_handlePostalChange}
        postal={postal}
        Companies={Companies}
        selectValue={selectValue}
        SelectBuilding={SelectBuildings}
        handleSelect={_handleSelect}
        Buildings={Buildings}
        selectIndex={selectIndex}
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
