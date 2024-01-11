// CheckBox.js
import React from "react";

const CheckBox = ({ id, label, validation, onChange }) => {
  return (
    <div className="form-check mb-3">
      <input
        className={`form-check-input ${validation ? "" : "is-invalid"}`}
        type="checkbox"
        value=""
        id={id}
        required=""
        onChange={(e) => onChange(e, id)}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
      {!validation && <div className="invalid-feedback">You must agree before submitting.</div>}
    </div>
  );
};

export default CheckBox;
