// ColorInput.js
import React from 'react';
import { Row, Col, Label, Input } from 'reactstrap';

const ColorInput = ({ label, id, defaultValue }) => {
    return (
        <Row className="mb-3">
            <Label htmlFor={id} className="col-md-2 col-form-label">{label}</Label>
            <Col md={10}>
                <Input type="color" defaultValue={defaultValue} id={id} className="form-control form-control-color w-100" />
            </Col>
        </Row>
    );
}

export default ColorInput;
