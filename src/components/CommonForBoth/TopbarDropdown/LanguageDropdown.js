import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import i18n from '../../../i18n';
import { withTranslation } from 'react-i18next';
import usFlag from "../../../assets/images/flags/us.jpg";
import spain from "../../../assets/images/flags/spain.jpg";
import germany from "../../../assets/images/flags/germany.jpg";
import italy from "../../../assets/images/flags/italy.jpg";
import russia from "../../../assets/images/flags/russia.jpg";

const LanguageDropdown = ({ t }) => {
  const [menu, setMenu] = useState(false);
  const [lng, setLng] = useState("English");
  const [flag, setFlag] = useState(usFlag);

  const toggle = () => {
    setMenu(!menu);
  };

  const changeLanguageAction = (lng) => {
    i18n.changeLanguage(lng);

    switch (lng) {
      case "sp":
        setLng("Spanish");
        setFlag(spain);
        break;
      case "gr":
        setLng("German");
        setFlag(germany);
        break;
      case "rs":
        setLng("Russian");
        setFlag(russia);
        break;
      case "it":
        setLng("Italian");
        setFlag(italy);
        break;
      case "eng":
      default:
        setLng("English");
        setFlag(usFlag);
        break;
    }
  };

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={toggle} className="d-none d-sm-inline-block">
        <DropdownToggle tag="button" className="btn header-item waves-effect">
          <img className="" src={flag} alt="Header Language" height="16" />
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem active={lng === "English"} onClick={() => changeLanguageAction('eng')} className="notify-item">
            <img src={usFlag} alt="user" className="me-1" height="12" /> <span className="align-middle">{t("English")}</span>
          </DropdownItem>

          <DropdownItem active={lng === "Spanish"} onClick={() => changeLanguageAction('sp')} className="notify-item">
            <img src={spain} alt="user" className="me-1" height="12" /> <span className="align-middle">{t("Spanish")}</span>
          </DropdownItem>

          <DropdownItem active={lng === "German"} onClick={() => changeLanguageAction('gr')} className=" notify-item">
            <img src={germany} alt="user" className="me-1" height="12" /> <span className="align-middle">{t("German")}</span>
          </DropdownItem>

          <DropdownItem active={lng === "Italian"} onClick={() => changeLanguageAction('it')} className=" notify-item">
            <img src={italy} alt="user" className="me-1" height="12" /> <span className="align-middle">{t("Italian")}</span>
          </DropdownItem>

          <DropdownItem active={lng === "Russian"} onClick={() => changeLanguageAction('rs')} className=" notify-item">
            <img src={russia} alt="user" className="me-1" height="12" /> <span className="align-middle">{t("Russian")}</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default withTranslation()(LanguageDropdown);
