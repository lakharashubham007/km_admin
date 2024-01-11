import React, { useState, useEffect } from "react";
import { Row, Col, Button, Alert, Container, Label } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { registerUser, registerUserFailed, apiError } from '../../store/actions';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logodark from "../../assets/images/logo-darks.png";
// import logolight from "../../assets/images/logo-lights.png";

const Register = ({ registerUser, registerUserFailed, apiError, user, registrationError, loading }) => {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: ""
    });

    const handleSubmit = (event, values) => {
        registerUser(values);
    };

    useEffect(() => {
        registerUserFailed("");
        apiError("");
        document.body.classList.add("auth-body-bg");

        return () => {
            document.body.classList.remove("auth-body-bg");
        };
    }, [registerUserFailed, apiError]);

    return (
        <React.Fragment>
            <div>
                <Container fluid className="p-0">
                    <Row className="g-0">
                        <Col lg={4}>
                            <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                                <div className="w-100">
                                    <Row className="justify-content-center">
                                        <Col lg={9}>
                                            <div>
                                                <div className="text-center">
                                                    <div>
                                                        <Link to="#" className="logo"><img src={logodark} height="50" alt="logo" /></Link>
                                                    </div>

                                                    <h4 className="font-size-18 mt-4">Register account</h4>
                                                    <p className="text-muted">Get your free Nazox account now.</p>
                                                </div>

                                                {user && <Alert color="success">Registration Done Successfully.</Alert>}

                                                {registrationError && <Alert color="danger">{registrationError}</Alert>}

                                                <div className="p-2 mt-5">
                                                    <AvForm onValidSubmit={handleSubmit} className="form-horizontal" >

                                                        <div className="auth-form-group-custom mb-4">
                                                            <i className="ri-mail-line auti-custom-input-icon"></i>
                                                            <Label htmlFor="useremail">Email</Label>
                                                            <AvField
                                                                name="email"
                                                                value={formData.email}
                                                                validate={{ email: true, required: true }}
                                                                type="email"
                                                                className="form-control"
                                                                id="useremail"
                                                                placeholder="Enter email"
                                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                            />
                                                        </div>

                                                        <div className="auth-form-group-custom mb-4">
                                                            <i className="ri-user-2-line auti-custom-input-icon"></i>
                                                            <Label htmlFor="username">Username</Label>
                                                            <AvField
                                                                name="username"
                                                                value={formData.username}
                                                                type="text"
                                                                className="form-control"
                                                                id="username"
                                                                placeholder="Enter username"
                                                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                                            />
                                                        </div>

                                                        <div className="auth-form-group-custom mb-4">
                                                            <i className="ri-lock-2-line auti-custom-input-icon"></i>
                                                            <Label htmlFor="userpassword">Password</Label>
                                                            <AvField
                                                                name="password"
                                                                value={formData.password}
                                                                type="password"
                                                                className="form-control"
                                                                id="userpassword"
                                                                placeholder="Enter password"
                                                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                            />
                                                        </div>

                                                        <div className="text-center">
                                                            <Button color="primary" className="w-md waves-effect waves-light" type="submit">{loading ? "Loading ..." : "Register"}</Button>
                                                        </div>

                                                        <div className="mt-4 text-center">
                                                            <p className="mb-0">By registering you agree to the Nazox <Link to="#" className="text-primary">Terms of Use</Link></p>
                                                        </div>
                                                    </AvForm>
                                                </div>

                                                <div className="mt-5 text-center">
                                                    <p>Already have an account ? <Link to="/login" className="fw-medium text-primary"> Login</Link> </p>
                                                    <p>© 2024 Kingmajesty. Crafted with <i className="mdi mdi-heart text-danger"></i> by Idea2Reality</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="authentication-bg">
                                <div className="bg-overlay"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    const { user, registrationError, loading } = state.Account;
    return { user, registrationError, loading };
};

export default connect(mapStateToProps, { registerUser, apiError, registerUserFailed })(Register);
