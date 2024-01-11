import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  changeLayout,
  changeTopbarTheme,
  changeLayoutTheme,
  toggleRightSidebar,
  changeLayoutWidth,
} from "../../store/actions";

// Other Layout related Component
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Rightbar from "../CommonForBoth/Rightbar";
import withRouter from "../Common/withRouter";

const Layout = ({
  isPreloader,
  router,
  topbarTheme,
  theme,
  layoutWidth,
  showRightSidebar,
  changeLayout,
  changeTopbarTheme,
  changeLayoutTheme,
  changeLayoutWidth,
  children,
}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleRightSidebarLocal = () => {
    toggleRightSidebar();
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

    const title = router.location.pathname;
    let currentage = title.charAt(1).toUpperCase() + title.slice(2);
    currentage = currentage.replaceAll("-", " ");

    document.title = currentage + " | Nazox - Responsive Bootstrap 5 Admin Dashboard";

    changeLayout('horizontal');

    if (topbarTheme) {
      changeTopbarTheme(topbarTheme);
    }

    if (theme) {
      changeLayoutTheme(theme);
    }

    if (layoutWidth) {
      changeLayoutWidth(layoutWidth);
    }

    if (showRightSidebar) {
      toggleRightSidebar();
    }
  }, [
    router.location.pathname,
    topbarTheme,
    theme,
    layoutWidth,
    showRightSidebar,
    changeLayout,
    changeTopbarTheme,
    changeLayoutTheme,
    changeLayoutWidth,
    
  ]);

  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
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
          theme={topbarTheme}
          isMenuOpened={isMenuOpened}
          toggleRightSidebar={toggleRightSidebarLocal}
          openLeftMenuCallBack={openMenu}
        />
        <Navbar menuOpen={isMenuOpened} />
        <div className="main-content">
          {children}
          <Footer />
        </div>
      </div>
      <Rightbar />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.Layout,
  };
};

export default connect(mapStateToProps, {
  changeTopbarTheme,
  changeLayoutTheme,
  toggleRightSidebar,
  changeLayout,
  changeLayoutWidth,
})(withRouter(Layout));
