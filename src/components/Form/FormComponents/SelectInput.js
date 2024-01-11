// SelectInput.js
import React from 'react';
import { Row, Col, Label } from 'reactstrap';

const SelectInput = ({ label, options }) => {
    return (
        <Row className="mb-3">
            <Label className="col-md-2 col-form-label">{label}</Label>
            <Col md={10}>
                <select className="form-control">
                    {options.map((option, index) => (
                        <option key={index}>{option}</option>
                    ))}
                </select>
            </Col>
        </Row>
    );
}

export default SelectInput;
