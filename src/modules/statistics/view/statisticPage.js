import React from 'react'
import PropTypes from 'prop-types'
import { CurrentStatistics } from '../components'

const StatisticPage = props => {
    return (
        <div>
            <CurrentStatistics pageType={props.pageType} />
        </div>
    )
}

StatisticPage.propTypes = {
    pageType: PropTypes.any,
}

export default StatisticPage
