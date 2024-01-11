import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import megamenuImg from '../../assets/images/megamenu-img.png';

const MegaMenu = ({ t }) => {
  const [megaMenu, setMegaMenu] = useState(false);

  const toggleMegaMenu = () => {
    setMegaMenu(!megaMenu);
  };

  return (
    <React.Fragment>
      <Dropdown className="dropdown-mega d-none d-lg-block ms-2" isOpen={megaMenu} toggle={toggleMegaMenu}>
        <DropdownToggle tag="button" type="button" caret className="btn header-item waves-effect">
          {t('Mega Menu')} <i className="mdi mdi-chevron-down"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdown-megamenu">
          <Row>
            <Col sm={8}>
              <Row>
                <Col md={4}>
                  <h5 className="font-size-14 mt-0">{t('UI Components')}</h5>
                  <ul className="list-unstyled megamenu-list">
                    <li>
                      <Link to="#">{t('Lightbox')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Range Slider')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Rating')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Forms')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Tables')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Charts')}</Link>
                    </li>
                  </ul>
                </Col>

                <Col md={4}>
                  <h5 className="font-size-14 mt-0">{t('Applications')}</h5>
                  <ul className="list-unstyled megamenu-list">
                    <li>
                      <Link to="#">{t('Ecommerce')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Calendar')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Email')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Projects')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Tasks')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Contacts')}</Link>
                    </li>
                  </ul>
                </Col>

                <Col md={4}>
                  <h5 className="font-size-14 mt-0">{t('Extra Pages')}</h5>
                  <ul className="list-unstyled megamenu-list">
                    <li>
                      <Link to="#">{t('Light Sidebar')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Compact Sidebar')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Horizontal layout')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Maintenance')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Coming Soon')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Timeline')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('FAQs')}</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>

            <Col sm={4}>
              <Row>
                <Col sm={6}>
                  <h5 className="font-size-14 mt-0">{t('UI Components')}</h5>
                  <ul className="list-unstyled megamenu-list">
                    <li>
                      <Link to="#">{t('Lightbox')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Range Slider')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Rating')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Forms')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Tables')}</Link>
                    </li>
                    <li>
                      <Link to="#">{t('Charts')}</Link>
                    </li>
                  </ul>
                </Col>

                <Col sm={5}>
                  <div>
                    <img src={megamenuImg} alt="" className="img-fluid mx-auto d-block" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default withTranslation()(MegaMenu);
