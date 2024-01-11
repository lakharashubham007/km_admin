import React, { useEffect } from 'react';
import withRouter from './Common/withRouter';  // Correct the path to your withRouter file

const NonAuthLayout = ({ router, children }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(1).toUpperCase() + string.slice(2);
  };

  useEffect(() => {
    let currentage = capitalizeFirstLetter(router.location.pathname);
    currentage = currentage.replaceAll("-", " ");

    document.title =
      currentage + " | Kingmajesty - Hotel Boking";
  }, [router.location.pathname]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default withRouter(NonAuthLayout);
