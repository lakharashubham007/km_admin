import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  toggleRightSidebar,
  changeTopbarTheme,
  changeLayoutTheme,
  changeLayoutWidth,
} from "../../store/actions";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Rightbar from "../CommonForBoth/Rightbar";
import withRouter from "../Common/withRouter";


const Layout = ({
  isPreloader,
  router,
  leftSideBarTheme,
  layoutWidth,
  leftSideBarType,
  topbarTheme,
  theme,
  showRightSidebar,
  changeLayoutTheme,
  changeTopbarTheme,
  changeSidebarTheme,
  changeLayoutWidth,
  changeSidebarType,
  children,
}) => {
  const [isMobile] = useState(
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  );

  const toggleRightSidebarLocal = () => {
    toggleRightSidebar();
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(1).toUpperCase() + string.slice(2);
  };

  useEffect(() => {
    if (isPreloader === true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("status").style.display = "none";
      }, 2500);
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }
  }, [isPreloader]);

  useEffect(() => {
    window.scrollTo(0, 0);

    let currentage = capitalizeFirstLetter(
      router.location.pathname.replaceAll("-", " ")
    );

    document.title = currentage + " | KingMajesty";

    if (leftSideBarTheme) {
      changeSidebarTheme(leftSideBarTheme);
    }

    if (layoutWidth) {
      changeLayoutWidth(layoutWidth);
    }

    if (leftSideBarType) {
      changeSidebarType(leftSideBarType);
    }

    if (topbarTheme) {
      changeTopbarTheme(topbarTheme);
    }

    if (theme) {
      changeLayoutTheme(theme);
    }

    if (showRightSidebar) {
      toggleRightSidebar();
    }
  }, [
    router.location.pathname,
    leftSideBarTheme,
    layoutWidth,
    leftSideBarType,
    topbarTheme,
    theme,
    showRightSidebar,
    changeLayoutTheme,
    changeTopbarTheme,
    changeSidebarTheme,
    changeLayoutWidth,
    changeSidebarType,
  ]);

  const toggleMenuCallback = () => {
    if (leftSideBarType === "default") {
      changeSidebarType("condensed", isMobile);
    } else if (leftSideBarType === "condensed") {
      changeSidebarType("default", isMobile);
    }
  };

  return (
    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <i className="ri-loader-line spin-icon"></i>
          </div>
        </div>
      </div>

      <div id="layout-wrapper">
        <Header
          toggleMenuCallback={toggleMenuCallback}
          toggleRightSidebar={toggleRightSidebarLocal}
        />
        <Sidebar
          theme={leftSideBarTheme}
          type={leftSideBarType}
          isMobile={isMobile}
        />
        <div className="main-content">
          {children}
          <Footer />
        </div>
      </div>
      <Rightbar />
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  return {
    ...state.Layout,
    
  };
};

export default connect(mapStatetoProps, {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  toggleRightSidebar,
  changeTopbarTheme,
  changeLayoutTheme,
  changeLayoutWidth,
})(withRouter(Layout));
