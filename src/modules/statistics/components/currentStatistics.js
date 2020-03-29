import React, { useState, useEffect,Fragment } from 'react'
import PropTypes from 'prop-types'
import service from '../service';
import moment from 'moment'
import StatisticCard from './statisticCard';
import HospitalizedCard from './hospitalizedCard';
import { PageType } from '../../../core/enums/pageType';
import { Grid } from '@material-ui/core';
import active from '../../../images/active.png';
import cured from '../../../images/cured.png';
import death from '../../../images/death.png';
import infected from '../../../images/infected.png';
import hospitalized from '../../../images/hospitalized.png';
import newcase from '../../../images/newcases.png';
import newdeath from '../../../images/newdeath.png';

export const CurrentStatistics = props => {

    const [currentStatistics, setcurrentStatistics] = useState({
        lastUpdated: moment(),
        local: [],
        global: [],
        hospitalData: []
    });


    useEffect(() => {
        fetchData();
    }, []);

    function toSnakeCase(string) {
        return string.replace(/(?:^|\.?)([A-Z])/g, function (x, y) { return "_" + y.toLowerCase() }).replace(/^_/, "");
    }



    function fetchData() {
        return service.getStatistics().then(data => {
            setcurrentStatistics({
                lastUpdated: data.update_date_time,
                local: [
                    {
                        icon: infected,
                        title: 'Infected',
                        value: data.local_total_cases,
                        color: '#1CA0F2'
                    },
                    {
                        icon: active,
                        title: 'Active',
                        value: data.local_active_cases,
                        color: '#FFAA21'
                    },
                    {
                        icon: hospitalized,
                        title: 'Hospitalized',
                        value: data.local_total_number_of_individuals_in_hospitals,
                        color: '#F35D22'
                    },
                    {
                        icon: cured,
                        title: 'Recovered',
                        value: data.local_recovered,
                        color: '#1EBC64'
                    },
                    {
                        icon: newcase,
                        title: 'New Cases',
                        value: data.local_new_cases,
                        color: '#BB86FC'
                    },
                    {
                        icon: death,
                        title: 'Deaths',
                        value: data.local_deaths,
                        color: '#FB5287'
                    },
                ],
                global: [
                    {
                        icon: infected,
                        title: 'Infected',
                        value: data.global_total_cases,
                        color: '#1CA0F2'
                    },
                    {
                        icon: active,
                        title: 'Active',
                        value: (data.global_total_cases - data.global_deaths - data.global_recovered),
                        color: '#FFAA21'
                    },
                    {
                        icon: newcase,
                        title: 'New Cases',
                        value: data.global_new_cases,
                        color: '#BB86FC'
                    },
                    {
                        icon: death,
                        title: 'Deaths',
                        value: data.global_deaths,
                        color: '#FB5287'
                    },
                    {
                        icon: newdeath,
                        title: 'New Deaths',
                        value: data.global_new_deaths,
                        color: '#F35D22'
                    },
                    {
                        icon: cured,
                        title: 'Recovered',
                        value: data.global_recovered,
                        color: '#1EBC64'
                    }

                ],
                hospitalData: mapHospitalizedData(data.hospital_data),
            })
        });
    }

    function mapHospitalizedData(data) {
        return data.map(x => {
            return {
                id: x.hospital.id,
                nameE: x.hospital.name,
                nameS: x.hospital.name_si,
                nameT: x.hospital.name_ta,
                treatmentLocal: x.treatment_local,
                treatmentForeign: x.treatment_foreign,
                treatmentTotal: x.treatment_total,
            }
        })
    }

    function getRelatedPage() {
        switch (props.pageType) {
            case PageType.Local:
                return currentStatistics.local.map(x => (
                    <Grid style={{padding:10}} key={x} item xs={6} sm={6} lg={4} xl={4} >
                        <StatisticCard color={x.color} icon={toSnakeCase(x.icon)} title={x.title} value={x.value} />
                    </Grid>
                ))
            case PageType.Global:
                return currentStatistics.global.map(x => (
                    <Grid style={{padding:10}} key={x} item xs={6} sm={6} lg={4} xl={4} >
                        <StatisticCard color={x.color} icon={toSnakeCase(x.icon)} title={x.title} value={x.value} />
                    </Grid>
                ))
            case PageType.HospitalDetails:
                return currentStatistics.hospitalData.map(x => (
                    <Grid style={{padding:10}} key={x} item xs={12} sm={12} lg={4} xl={4} >
                        <HospitalizedCard item={x} />
                    </Grid>
                ))
        }
    }


    console.log(currentStatistics);
    return (
        <Fragment>
            <h6 className="text-left MuiTypography-colorTextSecondary" style={{ marginLeft: 10 }}>{`Last Updated : ${moment(currentStatistics.lastUpdated).fromNow()}`}</h6>
            <Grid className='text-center' style ={{padding:2}} container xs={12} sm={12} lg={12} xl={12} >
                {
                    getRelatedPage()
                }
            </Grid>
        </Fragment>
    )
}

CurrentStatistics.propTypes = {
    pageType: PropTypes.any,
}

