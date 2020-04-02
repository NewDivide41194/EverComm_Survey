import React, { useState, useEffect } from "react";
import Building from "../components/Building.js";

const BuildingContainer = () => {
  const SelectBuildings = Companies.map((v, k) => v.buildings).map((v, k) => ({
    value: v[0].building_id,
    label: v[0].building_name
  }));
  const Buildings = Companies.map((v, k) => v.buildings)[0];
  const [value, setValue] = useState(null);
  const [postal, setPostal] = useState("");
  const _handleSelect = (e) => {
    setValue(value);
    console.log("888888888888",e);
    
  };
  const _handlePostalChange = e => {
    setPostal(e.target.value);
  };

  console.log(value);

  return (
    <div>
      <Building
        handlePostalChange={_handlePostalChange}
        postal={postal}
        Companies={Companies}
        value={value}
        SelectBuilding={SelectBuildings}
        handleSelect={_handleSelect}
        Buildings={Buildings}
      />
    </div>
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
