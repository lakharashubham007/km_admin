// HotelCreateForm.js
import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';
// import {
//     // TextInput,
//     EmailInput,
//     SearchInput,
//     UrlInput,
//     TelephoneInput,
//     PasswordInput,
//     NumberInput,
//     DateTimeLocalInput,
//     DateInput,
//     MonthInput,
//     WeekInput,
//     TimeInput,
//     ColorInput,
//     SelectInput
// } from '../../components/Form/FormComponents';
import Breadcrumbs from '../../components/Common/Breadcrumb';
// import SubHeader from '../../components/Common/SubHeader';
// import TextInput from '../../components/Form/FormComponentsValidate/TextInput';
import { AvForm } from "availity-reactstrap-validation";
// import CheckBox from '../../components/Form/FormComponentsValidate/CheckboxInput';
import TextInput from '../../components/Form/FormTooltipValidation/TextInput';
import UserInput from '../../components/Form/FormTooltipValidation/UserInput';


const HotelCreateForm = () => {
    const [breadcrumbItems] = useState([
        { title: "KingMajesty", link: "/" },
        { title: "Create Hotel", link: "#" },
    ]);


    const [formState, setFormState] = useState({
        fnm: false,
        lnm: false,
        unm: false,
        city: false,
        stateV: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve form values
        const fnm = document.getElementById("validationTooltip01").value;
        const lnm = document.getElementById("validationTooltip02").value;
        const unm = document.getElementById("validationTooltipUsername").value;
        const city = document.getElementById("validationTooltip03").value;
        const stateV = document.getElementById("validationTooltip04").value;

        // Add validation class to the form
        document.getElementById("tooltipForm").classList.add("was-validated");

        // Update state based on form values
        setFormState({
            fnm: fnm !== "",
            lnm: lnm !== "",
            unm: unm !== "",
            city: city !== "",
            stateV: stateV !== "",
        });

        // Display tooltips
        const d1 = document.getElementsByName("validate");
        for (let i = 0; i < d1.length; i++) {
            d1[i].style.display = "block";
        }
    };

    const changeHandler = (event, eleId) => {
        const element = document.getElementById(eleId);

        if (element) {
            if (event.target.value !== "") {
                element.style.display = "none";
            } else {
                element.style.display = "block";
            }
        }
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
                            <AvForm className="needs-validation" method="post" id="tooltipForm" onSubmit={handleSubmit}>
                                <Row>
                                    <Col md="4">
                                        <TextInput
                                            id="validationTooltip01"
                                            name="firstName"
                                            label="First name"
                                            placeholder="First name"
                                            onChange={changeHandler}
                                            isValid={formState.fnm}
                                            message="Please Enter Valid First Name"
                                        />
                                    </Col>
                                    <Col md="4">
                                        <UserInput
                                            id="validationTooltipUsername"
                                            name="username"
                                            label="Username"
                                            placeholder="Username"
                                            onChange={changeHandler}
                                            isValid={formState.unm}
                                            message="Please choose a unique and valid username."
                                        />
                                    </Col>
                                </Row>
                                <Button color="primary" type="submit">
                                    Submit form
                                </Button>
                            </AvForm>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </div>
    );
};

export default HotelCreateForm;








//TOOLTIP SINGLE FORM COMPONENT IN WHICH TOOLTIP IS WORKING FINE
//tooltip code

// import React, { useState } from "react";
// import {
//   Row,
//   Col,
//   Card,
//   CardBody,
//   FormGroup,
//   Button,
//   Label,
//   Input,
//   Container,
//   InputGroup,
//   Form,
// } from "reactstrap";
// import { AvForm, AvField } from "availity-reactstrap-validation";
// import Breadcrumbs from "../../components/Common/Breadcrumb";

// const FormValidations = () => {
//   const [formState, setFormState] = useState({
//     fnm: false,
//     lnm: false,
//     unm: false,
//     city: false,
//     stateV: false,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const fnm = document.getElementById("validationTooltip01").value;
//     const lnm = document.getElementById("validationTooltip02").value;
//     const unm = document.getElementById("validationTooltipUsername").value;
//     const city = document.getElementById("validationTooltip03").value;
//     const stateV = document.getElementById("validationTooltip04").value;
//     document.getElementById("tooltipForm").classList.add("was-validated");

//     setFormState({
//       fnm: fnm !== "",
//       lnm: lnm !== "",
//       unm: unm !== "",
//       city: city !== "",
//       stateV: stateV !== "",
//     });

//     const d1 = document.getElementsByName("validate");

//     for (let i = 0; i < d1.length; i++) {
//       d1[i].style.display = "block";
//     }
//   };

//   const changeHandeler = (event, eleId) => {
//     if (event.target.value !== "") {
//       document.getElementById(eleId).style.display = "none";
//     } else {
//       document.getElementById(eleId).style.display = "block";
//     }
//   };

//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Container fluid={true}>
//           <Row>
//             <Col xl="6">
//               <Card>
//                 <CardBody>
//                   <h4 className="card-title">Bootstrap Validation (Tooltips)</h4>
//                   <p className="card-title-desc">
//                     If your form layout allows it, you can swap the{" "}
//                     <code>.-feedback</code> classes for <code>.-tooltip</code>{" "}
//                     classes to display validation feedback in a styled tooltip.
//                   </p>
//                   <AvForm
//                     className="needs-validation"
//                     method="post"
//                     id="tooltipForm"
//                     onSubmit={handleSubmit}
//                   >
//                     <Row>
//                       <Col md="4">
//                         <div className="mb-3 position-relative">
//                           <Label className="form-label" htmlFor="validationTooltip01">
//                             First name
//                           </Label>
//                           <Input
//                             type="text"
//                             className="form-control"
//                             id="validationTooltip01"
//                             placeholder="First name"
//                             onChange={(event) => changeHandeler(event, "validate1")}
//                           />

//                           <div className={formState.fnm ? "valid-tooltip" : "invalid-tooltip"} name="validate" id="validate1">
//                             {formState.fnm ? "Looks good!" : "Please Enter Valid First Name"}
//                           </div>
//                         </div>
//                       </Col>
//                       <Col md="4">
//                         <div className="mb-3 position-relative">
//                           <Label className="form-label" htmlFor="validationTooltip02">
//                             Last name
//                           </Label>
//                           <Input
//                             type="text"
//                             className="form-control"
//                             id="validationTooltip02"
//                             placeholder="Last name"
//                             onChange={(event) => changeHandeler(event, "validate2")}
//                           />
//                           <div className={formState.lnm ? "valid-tooltip" : "invalid-tooltip"} name="validate" id="validate2">
//                             {formState.lnm ? "Looks good!" : "Please Enter Valid Last Name"}
//                           </div>
//                         </div>
//                       </Col>
//                       <Col md="4">
//                         <div className="mb-3 position-relative">
//                           <Label className="form-label" htmlFor="validationTooltipUsername">
//                             Username
//                           </Label>
//                           <InputGroup>
//                             <div className="input-group-append">
//                               <span className="input-group-text" id="validationTooltipUsernamePrepend">
//                                 @
//                               </span>
//                             </div>
//                             <Input
//                               type="text"
//                               className="form-control"
//                               id="validationTooltipUsername"
//                               placeholder="Username"
//                               onChange={(event) => changeHandeler(event, "validate3")}
//                             />
//                             <div className={formState.unm ? "valid-tooltip" : "invalid-tooltip"} name="validate" id="validate3">
//                               {formState.unm ? "Looks good!" : "Please choose a unique and valid username."}
//                             </div>
//                           </InputGroup>
//                         </div>
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col md="6">
//                         <div className="mb-3 position-relative">
//                           <Label className="form-label" htmlFor="validationTooltip04">
//                             State
//                           </Label>
//                           <Input
//                             type="text"
//                             className="form-control"
//                             id="validationTooltip04"
//                             placeholder="State"
//                             onChange={(event) => changeHandeler(event, "validate5")}
//                           />
//                           <div className={formState.stateV ? "valid-tooltip" : "invalid-tooltip"} name="validate" id="validate5">
//                             {formState.stateV ? "Looks good!" : "Please provide a valid state."}
//                           </div>
//                         </div>
//                       </Col>
//                       <Col md="6">
//                         <div className="mb-3 position-relative">
//                           <Label className="form-label" htmlFor="validationTooltip03">
//                             City
//                           </Label>
//                           <Input
//                             type="text"
//                             className="form-control"
//                             id="validationTooltip03"
//                             placeholder="City"
//                             onChange={(event) => changeHandeler(event, "validate4")}
//                           />
//                           <div className={formState.city ? "valid-tooltip" : "invalid-tooltip"} name="validate" id="validate4">
//                             {formState.city ? "Looks good!" : "Please choose a unique and valid username. Please provide a valid city."}
//                           </div>
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








