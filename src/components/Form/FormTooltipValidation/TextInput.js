import React from "react";
import { Label, Input } from "reactstrap";

const TextInput = ({ id, name, label, placeholder, onChange, isValid, message }) => {
  return (
    <div className="mb-3 position-relative">
      <Label className="form-label" htmlFor={id}>
        {label}
      </Label>
      <Input
        name={name}
        type="text"
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={(event) => onChange(event, `validate${id}`)}
      />
      <div className={isValid ? "valid-tooltip" : "invalid-tooltip"} name="validate" id={`validate${id}`}>
        {isValid ? "Looks good!" : message}
      </div>
    </div>
  );
};

export default TextInput;

