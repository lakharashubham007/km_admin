// HotelCreateForm.js
import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
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
import TextInput from '../../components/Form/FormComponentsValidate/TextInput';
import { AvForm } from "availity-reactstrap-validation";
import CheckBox from '../../components/Form/FormComponentsValidate/CheckboxInput';
import CkEditor from '../../components/Form/FormComponents/CkEditor';
import SelectorInput from '../../components/Form/FormSelectorComponent/SelectorInput';
import MultipleSelector from '../../components/Form/FormSelectorComponent/MultipleSelector';

const HotelCreateForm = () => {
    const [breadcrumbItems] = useState([
        { title: "KingMajesty", link: "/" },
        { title: "Create Hotel", link: "#" },
    ]);

    const optionGroup = [
        {
          label: "Picnic",
          options: [
            { label: "Mustard", value: "Mustard" },
            { label: "Ketchup", value: "Ketchup" },
            { label: "Relish", value: "Relish" },
          ],
        },
        {
          label: "Camping",
          options: [
            { label: "Tent", value: "Tent" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Toilet Paper", value: "Toilet Paper" },
          ],
        },
      ];

    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedMulti, setSelectedMulti] = useState(null);
    const [selectedMulti1, setSelectedMulti1] = useState(null);

    const handleSelectGroup = (selectedGroup) => {
        setSelectedGroup(selectedGroup);
    };

    const handleMulti = (selectedMulti) => {
        setSelectedMulti(selectedMulti);
    };

    const handleMulti1 = (selectedMulti1) => {
        setSelectedMulti1(selectedMulti1);
    };

    // Normal Input element Validation
    // const [formData, setFormData] = useState({
    //     firstname: "",
    //     lastname: "",
    //     state: "",
    //     city: "",
    //     zip: "",
    //     agree: false,
    // });

    // const [validation, setValidation] = useState({
    //     fnm: true,
    //     lnm: true,
    //     unm: true,
    //     city: true,
    //     stateV: true,
    //     agree: true,
    // });

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const fieldsToValidate = ["firstname", "lastname", "state", "city", "zip"];

    //     fieldsToValidate.forEach((field) => {
    //         const value = formData[field];
    //         const isValid = value.trim() !== "";
    //         setValidation((prevValidation) => ({ ...prevValidation, [field]: isValid }));
    //     });

    //     const agreeCheckbox = document.getElementById("invalidCheck");
    //     setFormData((prevData) => ({ ...prevData, agree: agreeCheckbox.checked }));
    //     setValidation((prevValidation) => ({ ...prevValidation, agree: agreeCheckbox.checked }));

    //     document.getElementById("validationCustomForm").classList.add("was-validated");
    // };

    // const handleInputChange = (event, field) => {
    //     const { value } = event.target;
    //     setFormData((prevData) => ({ ...prevData, [field]: value }));
    //     setValidation((prevValidation) => ({ ...prevValidation, [field]: value.trim() !== "" }));
    // };

    return (
        <div className="page-content">
            {/* <SubHeader/> */}
            <div className="hotel-create-form" >
                <Container fluid>
                    {/* <SubHeader/> */}
                    <Breadcrumbs title="Create Hotel" breadcrumbItems={breadcrumbItems} />
                    <Card>
                        {/* <CardBody>
                            {/* Use TextInput Component */}
                        {/* <AvForm id="validationCustomForm" className="needs-validation" onSubmit={handleSubmit} noValidate>
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
                            {/* <TextInput label="Text" id="example-text-input" defaultValue="Artisanal kale" />  */}

 
                          
                            <Row className="mb-3">
                                <CkEditor
                                    label="Ck Editor Name"
                                    id="ck-editor-input"
                                    initialData="<p>Hello from CKEditor 5!</p>"
                                    onReady={(editor) => {
                                        // You can store the "editor" and use when it is needed.
                                    }}
                                />
                            </Row>

                            <Row className="mb-3">
                                <EmailInput label="Email" id="example-email-input" defaultValue="bootstrap@example.com" />
                            </Row>
                            <SearchInput label="Search" id="example-search-input" defaultValue="How do I shoot web" />
                            <UrlInput label="URL" id="example-url-input" defaultValue="https://getbootstrap.com" />
                            <TelephoneInput label="Telephone" id="example-tel-input" defaultValue="1-(555)-555-5555" />
                            <PasswordInput label="Password" id="example-password-input" defaultValue="hunter2" />
                            <NumberInput label="Number" id="example-number-input" defaultValue="42" />
                            <DateTimeLocalInput label="Date and time" id="example-datetime-local-input" defaultValue="2020-03-14T13:45:00" />
                            <DateInput label="Date" id="example-date-input" defaultValue="2020-03-19" />
                            <MonthInput label="Month" id="example-month-input" defaultValue="2020-03" />
                            <WeekInput label="Week" id="example-week-input" defaultValue="2020-W14" />
                            <TimeInput label="Time" id="example-time-input" defaultValue="13:45:00" />
                            <ColorInput label="Color" id="example-color-input" defaultValue="#5664d2" />
                            <SelectInput label="Select" options={['Open this select menu', 'One', 'Two', 'Tree']} />

                            
                            {/* Add more FormComponents for other input types as needed */}
                        {/* </AvForm> */}
                        {/* } </CardBody> */}


                        {/* Selector */}
                        <CardBody>
                            <h4 className="card-title">Select2</h4>
                            <p className="card-title-desc">
                                A mobile and touch-friendly input spinner component for
                                Bootstrap
                            </p>

                            <form>
                                <Row>
                                    <Col lg="6">
                                        <SelectorInput
                                            label="Single Select"
                                            value={selectedGroup}
                                            onChange={handleSelectGroup}
                                            options={optionGroup}
                                        />
                                        <MultipleSelector
                                            label="Multiple Select"
                                            value={selectedMulti}
                                            onChange={handleMulti}
                                            options={optionGroup}
                                        />
                                    </Col>

                                    <Col lg="6">
                                        <MultipleSelector
                                            label="Disable"
                                            value={selectedMulti1}
                                            onChange={handleMulti1}
                                            options={optionGroup}
                                            isDisabled={true}
                                        />
                                    </Col>
                                </Row>
                            </form>
                        </CardBody>


                    </Card>
                </Container>
            </div>
        </div>
    );
};

export default HotelCreateForm;





