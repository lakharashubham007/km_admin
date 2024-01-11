import React from "react";
import { AvField } from "availity-reactstrap-validation";
import { Col, Label } from "reactstrap";

const TextInput = ({ name, placeholder, errorMessage, validation, onChange,defaultValue }) => {
  return (
    <div className="d-flex flex-row">
      <Label className="col-md-2 col-form-label" htmlFor={`validationCustom${name}`}>
        {placeholder}
      </Label>
      <Col md={10} >
      <AvField
        name={name}
        placeholder={placeholder}
        type="text"
        defaultValue={defaultValue}
        errorMessage={errorMessage}
        className={`form-control ${validation ? "" : "is-invalid"}`}
        validate={{ required: { value: true } }}
        id={`validationCustom${name}`}
        onChange={(e) => onChange(e, name)}
      />
      </Col>
    </div>
  );
};

export default TextInput;



