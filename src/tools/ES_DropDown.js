import React from "react";
import Select from "react-select";

export const ESDropDown = props => {
  const { options, quesId, handleSelect, selectedOption } = props;

  const AnsSelected =
    selectedOption &&
    selectedOption.map((v, k) => ({
      value: v.option_choice_id,
      label: v.option_choice_name
    }));
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      border: "1px solid gray",
      borderRadius: 8
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    }
  };

  return (
    <Select
      id={`${quesId}`}
      // styles={customStyles}
      className="w-100"
      value={
        selectedOption && selectedOption.length === 0
          ? selectedOption
          : AnsSelected
      }
      onChange={e => handleSelect(quesId, e)}
      // value={selectedOption}
      options={options}
    />
  );
};
