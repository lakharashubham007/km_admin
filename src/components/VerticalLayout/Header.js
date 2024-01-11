import React, { useState } from "react";
import { connect } from "react-redux";
import {
    Row,
    Col,
    Form,
    FormGroup,
    InputGroup,
    Input,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
} from "reactstrap";
import { Link } from "react-router-dom";

import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import { withTranslation } from "react-i18next";
import MegaMenu from "./MegaMenu";

import { toggleRightSidebar } from "../../store/actions";

import logosmdark from "../../assets/images/logo-sm-dark.png";
import logodark from "../../assets/images/logo-dark.png";
import logosmlight from "../../assets/images/logo-sm-light.png";
// import logolight from "../../assets/images/logo-light.png";
import logolights from "../../assets/images/logo-lights.png";

import github from "../../assets/images/brands/github.png";
import bitbucket from "../../assets/images/brands/bitbucket.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import slack from "../../assets/images/brands/slack.png";

const Header = ({ toggleMenuCallback, toggleRightSidebar, t }) => {
    const [isSearch, setIsSearch] = useState(false);
    const [isSocialPf, setIsSocialPf] = useState(false);

    const toggleMenu = () => {
        toggleMenuCallback();
    };

    const toggleFullscreen = () => {
        const docEl = document.documentElement;

        if (
            !document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement
        ) {
            if (docEl.requestFullscreen) {
                docEl.requestFullscreen();
            } else if (docEl.mozRequestFullScreen) {
                docEl.mozRequestFullScreen();
            } else if (docEl.webkitRequestFullscreen) {
                docEl.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    };

    return (
        <React.Fragment>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box ">
                            <Link to="#" className="logo logo-dark">
                                <span className="logo-sm">
                                {/* <h3 class="text-white d-inline-flex p-3">KingMajesty</h3> */}
                                    <img src={logosmdark} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                 {/* <h3 class="text-white">KingMajesty</h3> */}
                                    <img src={logodark} alt="" height="20" />
                                </span>
                            </Link>

                            <Link to="#" className="logo logo-light ">
                                <span className="logo-sm">
                                
                                    <img src={logosmlight} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                {/* <h3 class="text-white">KingMajesty</h3> */}
                                    <img src={logolights} alt="" height="50" width="180" />
                                </span>
                            </Link>
                        </div>

                        
                        <Button
                            size="sm"
                            color="none"
                            type="button"
                            onClick={toggleMenu}
                            className="px-3 font-size-24 header-item waves-effect"
                            id="vertical-menu-btn"
                        >
                            <i className="ri-menu-2-line align-middle"></i>
                        </Button>

                        <Form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder={t('Search')}
                                />
                                <span className="ri-search-line"></span>
                            </div>
                        </Form>

                        <MegaMenu />
                    </div>

                    <div className="d-flex">
                        <div className="dropdown d-inline-block d-lg-none ms-2">
                            
                            <button
                                type="button"
                                onClick={() => {
                                    setIsSearch(!isSearch);
                                }}
                                className="btn header-item noti-icon waves-effect"
                                id="page-header-search-dropdown"
                            >
                                <i className="ri-search-line"></i>
                            </button>

                            <div
                                className={
                                    isSearch
                                        ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                                        : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                }
                                aria-labelledby="page-header-search-dropdown"
                            >
                                <Form className="p-3">
                                    <FormGroup className="m-0">
                                        <InputGroup>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                placeholder={t('Search')}
                                            />
                                            <div className="input-group-append">
                                                <Button color="primary" type="submit">
                                                    <i className="ri-search-line"></i>
                                                </Button>
                                            </div>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>

                        <LanguageDropdown />

                        <Dropdown
                            isOpen={isSocialPf}
                            toggle={() => setIsSocialPf(!isSocialPf)}
                            className="d-none d-lg-inline-block ms-1"
                        >
                            <DropdownToggle
                                tag="button"
                                className="btn header-item noti-icon waves-effect"
                            >
                                <i className="ri-apps-2-line"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-lg dropdown-menu-end">
                                <div className="px-lg-2">
                                    <Row className="g-0">
                                        <Col>
                                            <Link className="dropdown-icon-item" to="#">
                                                <img src={github} alt="Github" />
                                                <span>{t('GitHub')}</span>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link className="dropdown-icon-item" to="#">
                                                <img src={bitbucket} alt="bitbucket" />
                                                <span>{t('Bitbucket')}</span>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link className="dropdown-icon-item" to="#">
                                                <img src={dribbble} alt="dribbble" />
                                                <span>{t('Dribbble')}</span>
                                            </Link>
                                        </Col>
                                    </Row>

                                    <Row className="g-0">
                                        <Col>
                                            <Link className="dropdown-icon-item" to="#">
                                                <img src={dropbox} alt="dropbox" />
                                                <span>{t('Dropbox')}</span>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link className="dropdown-icon-item" to="#">
                                                <img src={mail_chimp} alt="mail_chimp" />
                                                <span>{t('Mail Chimp')}</span>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link className="dropdown-icon-item" to="#">
                                                <img src={slack} alt="slack" />
                                                <span>{t('Slack')}</span>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </DropdownMenu>
                        </Dropdown>

                        <div className="dropdown d-none d-lg-inline-block ms-1">
                            <Button
                                color="none"
                                type="button"
                                className="header-item noti-icon waves-effect"
                                onClick={toggleFullscreen}
                            >
                                <i className="ri-fullscreen-line"></i>
                            </Button>
                        </div>

                        <NotificationDropdown />

                        <ProfileMenu />

                        {/* <div className="dropdown d-inline-block">
                            <Button
                                color="none"
                                onClick={toggleRightSidebar}
                                type="button"
                                className="header-item noti-icon right-bar-toggle waves-effect"
                            >
                                <i className="ri-settings-2-line"></i>
                            </Button>
                        </div> */}
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

const mapStatetoProps = (state) => {
    const { layoutType } = state.Layout;
    return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(
    withTranslation()(Header)
);
