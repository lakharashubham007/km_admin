import React, { useState } from "react";
import { Row, Col, Label, Input, Form } from "reactstrap";
import {
  TelephoneInput,
  TextInput,
  TimeInput,
} from "../../components/Form/FormComponents";
import CkEditor from "../../components/Form/FormComponents/CkEditor";
import RadioButton from "../../components/Form/FormComponents/RadioButton";
import HalfRatingInput from "../../components/Form/FormComponents/HalfRatingInput";
import MultipleSelector from "../../components/Form/FormSelectorComponent/MultipleSelector";

const FacilitiesDealsForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    tag: "",
  });
  const [selectedFacilities, setSelectedFacilities] = useState(null);


  const handleInputChange = (event, field) => {
    const { value } = event.target;
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const [halfRating, setHalfRating] = useState("");


  const [selectedClassStatus, setSelectedClassStatus] = useState("");

  const handleFacilitiesChange = (selectedFacilities) => {
    setSelectedFacilities(selectedFacilities);
    setFormData((prevData) => ({ ...prevData, facilities: selectedFacilities }));
};


const facilitiesOptions = [
  {
      label: 'Card',
      options: [
          { label: 'Visa', value: 'Visa' },
          { label: 'Master', value: 'Master' },
          { label: 'Credit', value: 'Credit' },
      ],
  },
  {
      label: 'Online',
      options: [
          { label: 'UPI', value: 'UPI' },
          { label: 'Paypal', value: 'Paypal' },
          
      ],
  },
  {
      label: 'COD',
      options: [
          { label: 'Cash On Delivery', value: 'swimmingPool' },
      ],
  },
];
const petsOptions = [
  { label: "Allowed", value: "Allowed" },
  { label: "NotAllowed", value: "NotAllowed" },
];

const handleClassStatusChange = (value) => {
  setSelectedClassStatus(value);
  setFormData((prevData) => ({ ...prevData, releaseStatus: value }));
};

  return (
    <Form>
      {/* ... Form fields for Tab 1 */}
      <Row>
        <Col lg="6">
          <MultipleSelector
            label="Facilities"
            value={selectedFacilities}
            onChange={handleFacilitiesChange}
            options={facilitiesOptions}
          />
        </Col>

        <Col lg="6">
          <MultipleSelector
            label="Deals"
            value={selectedFacilities}
            onChange={handleFacilitiesChange}
            options={facilitiesOptions}
          />
        </Col>

       
      </Row>
     

      
      {/* payment Selector */}
      <Row>
        

       
      </Row>
    </Form>
  );
};

export default FacilitiesDealsForm;
