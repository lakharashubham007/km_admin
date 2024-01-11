// HotelCreateForm.js
import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';
import {
    // TextInput,
    EmailInput,
    SearchInput,
    UrlInput,
    TelephoneInput,
    PasswordInput,
    NumberInput,
    DateTimeLocalInput,
    DateInput,
    MonthInput,
    WeekInput,
    TimeInput,
    ColorInput,
    SelectInput
} from '../../components/Form/FormComponents';
import Breadcrumbs from '../../components/Common/Breadcrumb';
// import SubHeader from '../../components/Common/SubHeader';
// import TextInput from '../../components/Form/FormComponentsValidate/TextInput';
import { AvForm } from "availity-reactstrap-validation";
import CheckBox from '../../components/Form/FormComponentsValidate/CheckboxInput';
import TextInput from '../../components/Form/FormTooltipValidation/TextInput';
import UserInput from '../../components/Form/FormTooltipValidation/UserInput';


const HotelCreateForm = () => {
    const [breadcrumbItems] = useState([
        { title: "KingMajesty", link: "/" },
        { title: "Create Hotel", link: "#" },
    ]);



    // Normal Input element Validation
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        state: "",
        city: "",
        zip: "",
        agree: false,
    });

    const [validation, setValidation] = useState({
        fnm: true,
        lnm: true,
        unm: true,
        city: true,
        stateV: true,
        agree: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const fieldsToValidate = ["firstname", "lastname", "state", "city", "zip"];

        fieldsToValidate.forEach((field) => {
            const value = formData[field];
            const isValid = value.trim() !== "";
            setValidation((prevValidation) => ({ ...prevValidation, [field]: isValid }));
        });

        const agreeCheckbox = document.getElementById("invalidCheck");
        setFormData((prevData) => ({ ...prevData, agree: agreeCheckbox.checked }));
        setValidation((prevValidation) => ({ ...prevValidation, agree: agreeCheckbox.checked }));

        document.getElementById("validationCustomForm").classList.add("was-validated");
    };

    const handleInputChange = (event, field) => {
        const { value } = event.target;
        setFormData((prevData) => ({ ...prevData, [field]: value }));
        setValidation((prevValidation) => ({ ...prevValidation, [field]: value.trim() !== "" }));
    };



    return (
        <div className="page-content">
            {/* <SubHeader/> */}
            <div className="hotel-create-form" >
                <Container fluid>
                    {/* <SubHeader/> */}
                    <Breadcrumbs title="Create Hotel" breadcrumbItems={breadcrumbItems} />
                    <Card>

                        <CardBody>
                            {/* Use TextInput Component */}
                            <AvForm id="validationCustomForm" className="needs-validation" onSubmit={handleSubmit} noValidate>
                                <Row>
                                    <TextInput
                                        name="firstname"
                                        placeholder="First name"
                                        errorMessage="Enter First Name"
                                        validation={validation.fnm}
                                        onChange={handleInputChange}
                                    />
                                </Row>
                                <Row>
                                    <Col lg="12">
                                        <CheckBox
                                            id="invalidCheck"
                                            label="Agree to terms and conditions"
                                            validation={validation.agree}
                                            onChange={handleInputChange}
                                        />
                                    </Col>
                                </Row>
                            </AvForm>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </div>
    );
};

export default HotelCreateForm;





//CUSTOME VALIDATION FORM COMPLETE WHICH IS WORKING IN SINGLE FILE

// import React, { useState } from "react";
// import { Row, Col, Card, CardBody, FormGroup, Button, Label, Input, Container, InputGroup, Form } from "reactstrap";
// import { AvForm, AvField } from "availity-reactstrap-validation";

// // Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb";

// const FormValidations = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     state: "",
//     city: "",
//     zip: "",
//     agree: false,
//   });

//   const [validation, setValidation] = useState({
//     fnm: false,
//     lnm: false,
//     stateV: false,
//     city: false,
//     zip: false,
//     agree: false,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = document.getElementById("validationCustomForm");
//     form.classList.add("was-validated");

//     const fieldsToValidate = ["firstname", "lastname", "state", "city", "zip"];

//     fieldsToValidate.forEach((field) => {
//       const value = formData[field];
//       const isValid = value.trim() !== "";
//       setValidation((prevValidation) => ({ ...prevValidation, [field]: isValid }));
//     });

//     const agreeCheckbox = document.getElementById("invalidCheck");
//     setFormData((prevData) => ({ ...prevData, agree: agreeCheckbox.checked }));
//     setValidation((prevValidation) => ({ ...prevValidation, agree: agreeCheckbox.checked }));
//   };

//   const handleInputChange = (event, field) => {
//     const { value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [field]: value }));
//     setValidation((prevValidation) => ({ ...prevValidation, [field]: value.trim() !== "" }));
//   };

//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Container fluid={true}>
//           <Row>
//             <Col xl="6">
//               <Card>
//                 <CardBody>
//                   <h4 className="card-title">React Validation - Normal</h4>
//                   <p className="card-title-desc">
//                     Provide valuable, actionable feedback to your users with HTML5 form validation–available in all our supported browsers.
//                   </p>
//                   <AvForm id="validationCustomForm" className="needs-validation" onSubmit={handleSubmit} noValidate>
//                     <Row>
//                       <Col md="6">
//                         <div className="mb-3">
//                           <Label className="form-label" htmlFor="validationCustom01">
//                             First name
//                           </Label>
//                           <AvField
//                             name="firstname"
//                             placeholder="First name"
//                             type="text"
//                             errorMessage="Enter First Name"
//                             className={`form-control ${validation.fnm ? "is-valid" : validation.fnm === false ? "is-invalid" : ""}`}
//                             validate={{ required: { value: true } }}
//                             id="validationCustom01"
//                             onChange={(e) => handleInputChange(e, "firstname")}
//                           />
//                         </div>
//                       </Col>
//                       {/* ... Other form fields */}
//                     </Row>
//                     {/* ... Additional Rows for form fields */}
//                     <Row>
//                       <Col lg="12">
//                         <div className="form-check mb-3">
//                           <input
//                             className={`form-check-input ${validation.agree ? "is-valid" : validation.agree === false ? "is-invalid" : ""}`}
//                             type="checkbox"
//                             value=""
//                             id="invalidCheck"
//                             required=""
//                             onChange={(e) => handleInputChange(e, "agree")}
//                           />
//                           <label className="form-check-label" htmlFor="invalidCheck">
//                             Agree to terms and conditions
//                           </label>
//                           <div className="invalid-feedback">You must agree before submitting.</div>
//                         </div>
//                       </Col>
//                     </Row>
//                     <Button color="primary" type="submit">
//                       Submit form
//                     </Button>
//                   </AvForm>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </React.Fragment>
//   );
// };

// export default FormValidations;



