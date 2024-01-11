import React, { useState } from "react";
import { Row, Col, Label, Input, Form } from "reactstrap";
import {
  TelephoneInput,
  TextInput,
  // TimeInput,
} from "../../components/Form/FormComponents";
// import TextInput from "../../components/Form/FormComponentsValidate/TextInput";
import CkEditor from "../../components/Form/FormComponents/CkEditor";
import RadioButton from "../../components/Form/FormComponents/RadioButton";

const BasicInfoForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    tag: "",
  });
  
  const [selectedReleaseStatus, setSelectedReleaseStatus] = useState("");
  const [selectedClassStatus, setSelectedClassStatus] = useState("");

  const handleInputChange = (event, field) => {
    const { value } = event.target;
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const releaseOptions = [
    { label: "Published", value: "published" },
    { label: "Not published", value: "notPublished" },
    { label: "Awaiting", value: "awaiting" },
    { label: "Archived", value: "archived" },
  ];

  const classOptions = [
    { label: "1 star", value: "1star" },
    { label: "2 star", value: "2star" },
    { label: "3 star", value: "3star" },
    { label: "4 star", value: "4star" },
    { label: "5 star", value: "5star" },
  ];

  const handleReleaseStatusChange = (value) => {
    setSelectedReleaseStatus(value);
    setFormData((prevData) => ({ ...prevData, releaseStatus: value }));
  };

  const handleClassStatusChange = (value) => {
    setSelectedClassStatus(value);
    setFormData((prevData) => ({ ...prevData, releaseStatus: value }));
  };

  return (
    <Form>
      {/* ... Form fields for Tab 1 */}

      <Row>
        <Col lg="6">
          {/* Title */}
          <TextInput
            label="Hotel Name"
            id="title-input"
            value={formData.title}
            onChange={(e) => handleInputChange(e, "title")}
            placeholder="Enter Hotel Name"
          />
        </Col>

        <Col lg="6">
          {/* SubTitle */}
          <TextInput
            label="Tag"
            id="tag-input"
            value={formData.tag}
            onChange={(e) => handleInputChange(e, "subtitle")}
            placeholder="Enter TagLine"
          />
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <TextInput
            label="Email"
            id="email-input"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
        </Col>

        {/* Telephone */}

        <Col lg="6">
          <TelephoneInput
            label="Mobile"
            id="telephone-input"
            value={formData.telephone}
            onChange={(e) => handleInputChange(e, "telephone")}
          />
        </Col>
      </Row>

      <Row>
     

          <Col lg="6">
          <div  className="d-flex align-items-center ">
           <Label className="col-2 col-form-label">Class</Label>
      
            {classOptions.map((option) => (
              <Col key={option.value} lg="2">
                <RadioButton
                  id={`release-${option.value}`}
                  name="classStatus"
                  label={option.label}
                  value={option.value}
                  checked={selectedClassStatus === option.value}
                  onChange={() => handleClassStatusChange(option.value)}
                />
              </Col>
            ))}
             

          </div>
        </Col>

        <Col lg="6">
          <div  className="d-flex align-items-center ">
           <Label className="col-2 col-form-label">Release</Label>
      
            {releaseOptions.map((option) => (
              <Col key={option.value} lg="2">
                <RadioButton
                  id={`release-${option.value}`}
                  name="releaseStatus"
                  label={option.label}
                  value={option.value}
                  checked={selectedReleaseStatus === option.value}
                  onChange={() => handleReleaseStatusChange(option.value)}
                />
              </Col>
            ))}
             

          </div>
        </Col>
         

        {/* <Col lg="6">
          <Row >
           
              
            
              <HalfRatingInput
                label="Rating"
                onChange={(rate) => setHalfRating(rate)}
                value={halfRating}
              />
            
          </Row>
        </Col> */}
      </Row>


      <Row className="mt-3">
        <Col lg="12">
          <CkEditor
            label="Description"
            id="ck-editor-input"
            value={formData.description}
            onChange={(value) =>
              setFormData((prevData) => ({ ...prevData, description: value }))
            }
            // Add any additional props or handlers required by the CKEditor component
          />
        </Col>
      </Row>
    </Form>
  );
};

export default BasicInfoForm;
