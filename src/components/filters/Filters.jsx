import React from 'react';

import Filter from './filter/Filter';

const Filters = ({launches}) => {
    let years = [];

    years = launches.map((launch, index) => {
                return launch.launch_year;
            })

    const filteredYears = years.filter((year, index) => {
        return years.indexOf(year) === index;
    })        
      
    const filters = [
        {
            filterType: 'Launch Year',
            payload: filteredYears
        },
        {
            filterType: 'Successful Launch',
            payload: ['true','false']
        },
        {
            filterType: 'Successful Landing',
            payload: ['true','false']
        }
    ];

    return(
        filters.map(({filterType, payload}, index) => {
            return <Filter key={index} filterType={filterType} payload={payload} />
        })
    )
}

export default Filters;