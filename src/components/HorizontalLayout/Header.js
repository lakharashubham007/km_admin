import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Form,
  Input,
  InputGroup,
  Button,
  FormGroup,
} from "reactstrap";
import { withTranslation } from "react-i18next";
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";
import logoSmLight from "../../assets/images/logo-sm-light.png";
import logoLight from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";
import logoSmDark from "../../assets/images/logo-sm-dark.png";
import github from "../../assets/images/brands/github.png";
import bitbucket from "../../assets/images/brands/bitbucket.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import slack from "../../assets/images/brands/slack.png";
// import megamenuImg from "../../assets/images/megamenu-img.png";
import { toggleRightSidebar } from "../../store/actions";

const Header = (props) => {
  const [isSearch, setIsSearch] = useState(false);
  const [isMegaMenu, setIsMegaMenu] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

//   const toggleSearch = () => {
//     setIsSearch(!isSearch);
//   };

  const toggleMenu = () => {
    props.openLeftMenuCallBack();
  };

  const toggleRightbar = () => {
    props.toggleRightSidebar();
  };

  const toggleFullscreen = () => {
    const doc = document.documentElement;
    if (
      !document.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement
    ) {
      if (doc.requestFullscreen) {
        doc.requestFullscreen();
      } else if (doc.mozRequestFullScreen) {
        doc.mozRequestFullScreen();
      } else if (doc.webkitRequestFullscreen) {
        doc.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.webkitCancelFullScreen) {
        doc.webkitCancelFullScreen();
      }
    }
  };

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logoSmDark} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="20" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoSmLight} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoLight} alt="" height="20" />
                </span>
              </Link>
            </div>

            <Button
              color="none"
              type="button"
              size="sm"
              onClick={toggleMenu}
              className="px-3 font-size-24 d-lg-none header-item"
              data-toggle="collapse"
              data-target="#topnav-menu-content"
            >
              <i className="ri-menu-2-line align-middle"></i>
            </Button>

            <Form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <Input type="text" className="form-control" placeholder={props.t('Search')} />
                <span className="ri-search-line"></span>
              </div>
            </Form>

            <Dropdown
              isOpen={isMegaMenu}
              toggle={() => setIsMegaMenu(!isMegaMenu)}
              className="dropdown-mega d-none d-lg-block ms-2"
            >
              <DropdownToggle
                tag="button"
                type="button"
                className="btn header-item waves-effect"
              >
                {props.t('Mega Menu')} <i className="mdi mdi-chevron-down"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-megamenu">
                <Row>
                  <Col sm={8}>{/* Mega menu content */}</Col>
                  <Col sm={4}>{/* Mega menu image */}</Col>
                </Row>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <Button
                color="none"
                type="button"
                onClick={() => setIsSearch(!isSearch)}
                className="header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
              >
                <i className="ri-search-line"></i>
              </Button>
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
                        placeholder={props.t('Search')}
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
              isOpen={isProfile}
              toggle={() => setIsProfile(!isProfile)}
              className="d-none d-lg-inline-block ms-1"
            >
              <DropdownToggle
                tag="button"
                type="button"
                className="btn header-item noti-icon waves-effect"
              >
                <i className="ri-apps-2-line"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end dropdown-menu-lg">
                <div className="px-lg-2">
                  <Row className="g-0">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={github} alt="Github" />
                        <span>{props.t('GitHub')}</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={bitbucket} alt="bitbucket" />
                        <span>{props.t('Bitbucket')}</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={dribbble} alt="dribbble" />
                        <span>{props.t('Dribbble')}</span>
                      </Link>
                    </Col>
                  </Row>

                  <Row className="g-0">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={dropbox} alt="dropbox" />
                        <span>{props.t('Dropbox')}</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={mail_chimp} alt="mail_chimp" />
                        <span>{props.t('Mail Chimp')}</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={slack} alt="slack" />
                        <span>{props.t('Slack')}</span>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </Dropdown>

            <div className="dropdown d-none d-lg-inline-block ms-1">
              <Button
                type="button"
                color="none"
                onClick={toggleFullscreen}
                className="header-item noti-icon waves-effect"
                data-toggle="fullscreen"
              >
                <i className="ri-fullscreen-line"></i>
              </Button>
            </div>

            <NotificationDropdown />

            <ProfileMenu />

            <div onClick={toggleRightbar} className="dropdown d-inline-block">
              <Button
                type="button"
                color="none"
                className="header-item noti-icon right-bar-toggle waves-effect"
              >
                <i className="ri-settings-2-line"></i>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => {
  const { layoutType } = state.Layout;
  return { layoutType };
};

export default connect(mapStateToProps, { toggleRightSidebar })(
  withTranslation()(Header)
);
