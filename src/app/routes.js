import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom';
import { StatisticRoute } from '../modules/statistics/routes';
import Layout from './layout/layout';

export const AppRoutes = props => {
    const [pageType, setPageType] = useState(0);   

    return (< BrowserRouter >
        <Fragment>
            <Layout onChange={setPageType.bind(this)}>
                <div style={{left: 0, right: 0, marginTop:80 ,marginBottom:90 }}>
                    <Route path='/' render={(props) => <StatisticRoute {...props} pageType={pageType} />} />
                </div>
            </Layout>
        </Fragment>
    </ BrowserRouter>
    )
}

AppRoutes.propTypes = {

}

