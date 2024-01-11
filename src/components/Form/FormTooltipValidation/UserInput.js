// UserInput.js
import React from "react";
import { Label, Input, InputGroup } from "reactstrap";

const UserInput = ({ id, placeholder, onChange, valid, message }) => (
  <div className="mb-3 position-relative">
    <Label className="form-label" htmlFor={id}>
      Username
    </Label>
    <InputGroup>
      <div className="input-group-append">
        <span className="input-group-text" id={`${id}Prepend`}>
          @
        </span>
      </div>
      <Input
        type="text"
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={(event) => onChange(event, `validate${id.charAt(id.length - 1)}`)}
      />
      <div className={valid ? "valid-tooltip" : "invalid-tooltip"} name="validate" id={`validate${id.charAt(id.length - 1)}`}>
        {valid ? "Looks good!" : message}
      </div>
    </InputGroup>
  </div>
);

export default UserInput;
