import React from "react";
import Select from "react-select";
import { Label } from "reactstrap";

const MultipleSelector = ({ value, onChange, options, label, isDisabled }) => {
  return (
    <div className="d-flex flex-row mb-3">
      <Label  className="col-md-2 col-form-label">{label}</Label>
      <Select className="col-md-10"
        value={value}
        isMulti={true}
        onChange={onChange}
        options={options}
        classNamePrefix="select2-selection"
        isDisabled={isDisabled}
      />
    </div>
  );
};

export default MultipleSelector;
