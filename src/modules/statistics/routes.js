import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import StatisticPage from './view/statisticPage';
import PropTypes from 'prop-types';

export const StatisticRoute = ({ match,pageType }) => (
    <Fragment>
        <Route exact path={`${match.path}`} render={(props) => <StatisticPage {...props} pageType={pageType} />} />
    </Fragment>
);

StatisticRoute.propTypes = {
    match: PropTypes.any
};