import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardMedia } from '@material-ui/core';
import CountUp  from 'react-countup';

const StatisticCard = props => {
    return (
        <div>
            <Card raised={true}>
                <div className="text-center">
                    <img style={{ height: '50%' , width:'50%', padding: '10%' }} src={props.icon} />
                </div>
                <CardContent className='text-center'>
                    <h6>{props.title}</h6>
                    <h4 style={{ color: props.color }}><CountUp end={props.value} /></h4>
                </CardContent>
            </Card>
        </div>
    )
}

StatisticCard.propTypes = {
    icon: PropTypes.any,
    title: PropTypes.any,
    value: PropTypes.any,
    color: PropTypes.any,
}

export default StatisticCard
