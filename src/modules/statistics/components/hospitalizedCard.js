import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const HospitalizedCard = props => {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            width:'75%',
            textAlign:'left'

        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: '25%',
            textAlign: 'center',
            verticalAlign: 'middle',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
    }));

    const classes = useStyles();
    const theme = useTheme();
    return (
        <div>
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="subtitle2" color="textSecondary">
                            {props.item.nameE}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {props.item.nameS}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {props.item.nameT}
                        </Typography>
                    </CardContent>
                </div>
                <CardContent className={classes.cover} >
                    <Typography component="h5" variant="h5">
                        {<CountUp end={props.item.treatmentTotal} />}
                    </Typography>
                </CardContent>


            </Card>
        </div>
    )
}

HospitalizedCard.propTypes = {
    item: PropTypes.any,
}

export default HospitalizedCard
