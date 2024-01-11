// FormComponents/EmailInput.js
import React from 'react';
import { Label, Input } from 'reactstrap';

const EmailInput = ({ label, id, defaultValue }) => (
  <div className="d-flex flex-row mb-3">
    <Label htmlFor={id} className="col-md-2 col-form-label">
      {label}
    </Label>
    <div className="col-md-10">
      <Input type="email" defaultValue={defaultValue} id={id} />
    </div>
  </div>
);

export default EmailInput;
