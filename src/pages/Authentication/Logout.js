import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../../store/actions';
import withRouter from '../../components/Common/withRouter';

const Logout = ({ logoutUser, router }) => {

  

    useEffect(() => {
        // Fire Action for Remove all Item from localstorage and redirect to the login page
        const logoutTimeout = setTimeout(() => {
            logoutUser(router.navigate);
        }, 100);

        return () => {
            // Clear the timeout if the component is unmounted before the timeout completes
            clearTimeout(logoutTimeout);
        };
    }, [logoutUser, router.navigate]);

    return (
        <React.Fragment>
            <h1>&nbsp;</h1>
        </React.Fragment>
    );
};

export default withRouter(connect(null, { logoutUser })(Logout));

