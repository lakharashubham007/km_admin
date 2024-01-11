// AddressInput.js

import React from "react";
import { Col, Label } from "reactstrap";

const AddressInput = ({ label, id }) => {
  return (
    <div className="d-flex flex-row mb-3">
      
        <Label className="col-md-1 form-label" htmlFor={id}>
          {label}
        </Label>
        <Col lg="11">
          <textarea id={id} className="form-control" rows="2"></textarea>
        </Col>
      
    </div>
  );
};

export default AddressInput;
