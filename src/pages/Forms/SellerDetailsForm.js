// SellerDetailsForm.jsx
import React from "react";
import { Row, Col, Label, Input, Form } from "reactstrap";

const SellerDetailsForm = () => {
  return (
    <Form>
      {/* ... Form fields for Tab 1 */}

      <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label className="form-label" htmlFor="basicpill-firstname-input1">
              First name
            </Label>
            <Input
              type="text"
              className="form-control"
              id="basicpill-firstname-input1"
            />
          </div>
        </Col>
        <Col lg="6">
          <div className="mb-3">
            <Label className="form-label" htmlFor="basicpill-lastname-input2">
              Last name
            </Label>
            <Input
              type="text"
              className="form-control"
              id="basicpill-lastname-input2"
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label className="form-label" htmlFor="basicpill-phoneno-input3">
              Phone
            </Label>
            <Input
              type="text"
              className="form-control"
              id="basicpill-phoneno-input3"
            />
          </div>
        </Col>
        <Col lg="6">
          <div className="mb-3">
            <Label className="form-label" htmlFor="basicpill-email-input4">
              Email
            </Label>
            <Input
              type="email"
              className="form-control"
              id="basicpill-email-input4"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <div className="mb-3">
            <Label className="form-label" htmlFor="basicpill-address-input1">
              Address
            </Label>
            <textarea
              id="basicpill-address-input1"
              className="form-control"
              rows="2"
            ></textarea>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default SellerDetailsForm;
