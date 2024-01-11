// HotelCreateForm.js
import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row } from 'reactstrap';
import {
    TextInput,
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
// import TextInput from '../../components/Form/FormComponentsValidate/TextInput';
import { AvForm } from "availity-reactstrap-validation";
import CheckBox from '../../components/Form/FormComponentsValidate/CheckboxInput';
import CkEditor from '../../components/Form/FormComponents/CkEditor';
import SelectorInput from '../../components/Form/FormSelectorComponent/SelectorInput';
import MultipleSelector from '../../components/Form/FormSelectorComponent/MultipleSelector';
import RadioButton from '../../components/Form/FormComponents/RadioButton';
import ChooseFileInput from '../../components/Form/FormComponents/ChooseFileInput';

const HotelCreateForm = () => {
    const [breadcrumbItems] = useState([
        { title: "KingMajesty", link: "/" },
        { title: "Create Hotel", link: "#" },
    ]);

    const optionGroup = [
        {
            label: "Premium",
            options: [
                { label: "Babycot", value: "Babycot" },
                { label: "Parking", value: "Parking" },
                { label: "Desk", value: "Desk" },
            ],
        },
        {
            label: "luxury",
            options: [
                { label: "Mini-bar", value: "Mini-bar" },
                { label: "Microwave", value: "Microwave" },
                { label: "Lounge", value: "Lounge" },
            ],
        },
    ];

    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedMulti, setSelectedMulti] = useState(null);
    const [selectedMulti2, setSelectedMulti2] = useState(null);
    const [selectedMulti1, setSelectedMulti1] = useState(null);

    const handleSelectGroup = (selectedGroup) => {
        setSelectedGroup(selectedGroup);
    };

    const handleMulti = (selectedMulti) => {
        setSelectedMulti(selectedMulti);
    };
    const handleMulti2 = (selectedMulti2) => {
        setSelectedMulti2(selectedMulti2);
    };

    const handleMulti1 = (selectedMulti1) => {
        setSelectedMulti1(selectedMulti1);
    };





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

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData((prevData) => ({ ...prevData, file }));
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
                    <Card >
                        <CardBody >+

                            <Row >
                                <Col lg='8'>
                                    <TextInput label='Title' id='title-input' defaultValue="Enter Title" />
                                </Col>
                                <Col lg='8'>
                                    <TextInput label='SubTitle' id='subtitle-input' defaultValue="Enter SubTitle" />
                                </Col>
                                <Col lg='8'>
                                    <TextInput label='Alias' id='alias-input' defaultValue="Enter Alias" />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col lg='8'>
                                    <CkEditor
                                        label="Description"
                                        id="ck-editor-input"
                                        initialData="<p>Hello from CKEditor 5!</p>"
                                        onReady={(editor) => {
                                            // You can store the "editor" and use when it is needed.
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col lg="8">
                                    <MultipleSelector
                                        label="Facilities"
                                        value={selectedMulti}
                                        onChange={handleMulti}
                                        options={optionGroup}
                                    />
                                </Col>
                                <Col lg="8">
                                    <MultipleSelector
                                        label="Tags"
                                        value={selectedMulti2}
                                        onChange={handleMulti2}
                                        options={optionGroup}
                                    />
                                </Col>
                                <Col lg="8">
                                    <SelectorInput
                                        label="Destination"
                                        value={selectedGroup}
                                        onChange={handleSelectGroup}
                                        options={optionGroup}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Label className="col-2 col-form-label " >
                                    Class
                                </Label>

                                <Col lg='1'>
                                    <RadioButton
                                        id="exampleRadios2"
                                        name="exampleRadios"
                                        label="1 Star"
                                        value="option2"
                                        defaultChecked
                                    />
                                </Col>

                                <Col lg='1'>
                                    <RadioButton
                                        id="exampleRadios3"
                                        name="exampleRadios"
                                        label="2 Star"
                                        value="option3"
                                        defaultChecked
                                    />
                                </Col>
                                <Col lg='1'>
                                    <RadioButton
                                        id="exampleRadios4"
                                        name="exampleRadios"
                                        label="3 Star"
                                        value="option4"
                                        defaultChecked
                                    />
                                </Col>
                                <Col lg='1'>
                                    <RadioButton
                                        id="exampleRadios5"
                                        name="exampleRadios"
                                        label="4 Star"
                                        value="option5"
                                        defaultChecked
                                    />
                                </Col>
                                <Col lg='1'>
                                    <RadioButton
                                        id="exampleRadios6"
                                        name="exampleRadios"
                                        label="5 Star"
                                        value="option6"
                                        defaultChecked
                                    />
                                </Col>
                            </Row>

                            <Row >
                                <Col lg='8' >
                                    <EmailInput label="Email" id="example-email-input" defaultValue="bootstrap@example.com" />
                                </Col>
                                <Col lg='8'>
                                    <TelephoneInput label="Telephone" id="example-tel-input" defaultValue="1-(555)-555-5555" />
                                </Col>

                                <Col lg='8'>
                                    <TextInput label='Web' id='web-input' defaultValue="" />
                                </Col>
                                <Col lg='8'>
                                    <TextInput label='Address' id='address-input' defaultValue="" />
                                </Col>
                                <Col lg='8'>
                                    <TextInput label='Latitude' id='lat-input' defaultValue="" />
                                </Col>
                                <Col lg='8'>
                                    <TextInput label='Longitude' id='long-input' defaultValue="" />
                                </Col>
                                <Col lg='8'>
                                    <EmailInput label="Paypal Email" id="example-email-input" defaultValue="Paypal@business.com" />
                                </Col>
                            </Row>


                            <Row>
                                <Label className="col-2 col-form-label " >
                                    Release
                                </Label>

                                <Col lg='1'>
                                    <RadioButton
                                        id="exampleRadios2"
                                        name="exampleRadios"
                                        label="Published"
                                        value="option2"
                                        defaultChecked
                                    />
                                </Col>

                                <Col lg='1'>
                                    <RadioButton
                                        id="exampleRadios3"
                                        name="exampleRadios"
                                        label="Not published"
                                        value="option3"
                                        defaultChecked
                                    />
                                </Col>
                                <Col lg='1'>
                                    <RadioButton
                                        id="exampleRadios4"
                                        name="exampleRadios"
                                        label="Awaiting"
                                        value="option4"
                                        defaultChecked
                                    />
                                </Col>
                                <Col lg='1'>
                                    <RadioButton
                                        id="exampleRadios5"
                                        name="exampleRadios"
                                        label="Archived"
                                        value="option5"
                                        defaultChecked
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Label className="col-2 col-form-label " >
                                    Homepage
                                </Label>

                                <Col lg='1'>
                                    <RadioButton
                                        id="exampleRadios2"
                                        name="exampleRadios"
                                        label="Yes"
                                        value="option2"
                                        defaultChecked
                                    />
                                </Col>

                                <Col lg='1'>
                                    <RadioButton
                                        id="exampleRadios3"
                                        name="exampleRadios"
                                        label="No"
                                        value="option3"
                                        defaultChecked
                                    />
                                </Col>

                            </Row>

                            <Row className="mb-3">
                                <Col lg="8">
                                    <MultipleSelector
                                        label="User"
                                        value={selectedMulti}
                                        onChange={handleMulti}
                                        options={optionGroup}
                                    />
                                </Col>
                            </Row>

                            {/*
                             <Row>
                                <Col lg="8">
                                    <Label class="custom-file-label" for="inputGroupFile01">Choose file</Label>
                                   
                                        <div class="custom-file">
                                            <Input type="file" class="custom-file-input" id="inputGroupFile01" />

                                        </div>
                                    </Col>
                                </Row>
                            */}

                            <Row>
                                <Col lg="8">
                                    <ChooseFileInput
                                        label="Choose file"
                                        id="inputGroupFile01"
                                        onChange={handleFileChange}
                                    />
                                </Col>
                            </Row>


                            <Row>
                                <ChooseFileInput label="Choose file" id="inputGroupFile01" />
                            </Row>
                        </CardBody>


                    </Card>
                </Container>
            </div>
        </div>
    );
};

export default HotelCreateForm;






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

