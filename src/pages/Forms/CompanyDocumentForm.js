// CompanyDocumentForm.jsx
import React from "react";
import { Row, Col, Label, Input, Form } from "reactstrap";

const CompanyDocumentForm = () => {
  return (
    <Form>
      <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label className="form-label" htmlFor="basicpill-pancard-input5">
              PAN Card
            </Label>
            <Input
              type="text"
              className="form-control"
              id="basicpill-pancard-input5"
            />
          </div>
        </Col>

        <Col lg="6">
          <div className="mb-3">
            <Label className="form-label" htmlFor="basicpill-vatno-input6">
              VAT/TIN No.
            </Label>
            <Input
              type="text"
              className="form-control"
              id="basicpill-vatno-input6"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label className="form-label" htmlFor="basicpill-cstno-input7">
              CST No.
            </Label>
            <Input
              type="text"
              className="form-control"
              id="basicpill-cstno-input7"
            />
          </div>
        </Col>

        <Col lg="6">
          <div className="mb-3">
            <Label className="form-label" htmlFor="basicpill-servicetax-input8">
              Service Tax No.
            </Label>
            <Input
              type="text"
              className="form-control"
              id="basicpill-servicetax-input8"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <div className="mb-3">
            <Label className="form-label" htmlFor="basicpill-companyuin-input9">
              Company UIN
            </Label>
            <Input
              type="text"
              className="form-control"
              id="basicpill-companyuin-input9"
            />
          </div>
        </Col>

        <Col lg="6">
          <div className="mb-3">
            <Label
              className="form-label"
              htmlFor="basicpill-declaration-input10"
            >
              Declaration
            </Label>
            <Input
              type="text"
              className="form-control"
              id="basicpill-Declaration-input10"
            />
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default CompanyDocumentForm;
