import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";
import { withTranslation } from "react-i18next";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";

const NotificationDropdown = ({ t }) => {
  const [menu, setMenu] = useState(false);

  const toggle = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block">
        <DropdownToggle tag="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown">
          <i className="ri-notification-3-line"></i>
          <span className="noti-dot"></span>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end dropdown-menu-lg p-0" aria-labelledby="page-header-notifications-dropdown">
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0">{t('Notifications')}</h6>
              </Col>
              <div className="col-auto">
                <Link to="#" className="small">{t('View All')}</Link>
              </div>
            </Row>
          </div>
          <SimpleBar style={{ maxHeight: "230px" }}>
            <Link to="#" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-primary rounded-circle font-size-16">
                    <i className="ri-shopping-cart-line"></i>
                  </span>
                </div>
                <div className="flex-1">
                  <h6 className="mt-0 mb-1">{t('Your order is placed')}</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">{t('If several languages coalesce the grammar')}</p>
                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> {t('3 min ago')}</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="#" className="text-reset notification-item">
              <div className="d-flex">
                <img src={avatar3} className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div className="flex-1">
                  <h6 className="mt-0 mb-1">{t('James Lemire')}</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">{t('It will seem like simplified English.')}</p>
                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> {t('1 hours ago')}</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="#" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-success rounded-circle font-size-16">
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                </div>
                <div className="flex-1">
                  <h6 className="mt-0 mb-1">{t('Your item is shipped')}</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">{t('If several languages coalesce the grammar')}</p>
                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> {t('3 min ago')}</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="#" className="text-reset notification-item">
              <div className="d-flex">
                <img src={avatar4} className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div className="flex-1">
                  <h6 className="mt-0 mb-1">{t('Salena Layfield')}</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">{t('As a skeptical Cambridge friend of mine occidental.')}</p>
                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> {t('1 hours ago')}</p>
                  </div>
                </div>
              </div>
            </Link>
          </SimpleBar>
          <div className="p-2 border-top">
            <Link to="#" className="btn btn-sm btn-link font-size-14 btn-block text-center">
              <i className="mdi mdi-arrow-right-circle me-1"></i>{t(' View More')}
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default withTranslation()(NotificationDropdown);
