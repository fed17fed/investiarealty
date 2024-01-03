"use client";
import Select from "react-select";

const Borough = () => {
  const inqueryType = [
    { value: "Centre", label: "Centre" },
    { value: "Suburb", label: "Suburb" },
    { value: "Village", label: "Village" },
    // { value: "Paris", label: "Paris" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };
  return (
    <>
      <Select
        defaultValue={[inqueryType[0]]}
        name="colors"
        options={inqueryType}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isClearable={false}
      />
    </>
  );
};

export default Borough;
