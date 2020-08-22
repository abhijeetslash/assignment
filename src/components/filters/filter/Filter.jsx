import React from 'react';

import FilterTile from './filterTile/filterTile';

const Filter = props => {
    const {filterType, payload} = props;

    return (
        <div>
            <h3>{filterType}</h3>
            {
                payload.map((filterTileDisplayData, index) => {
                    return <FilterTile key={index} filterTileDisplayData={filterTileDisplayData} />
                })
            }
        </div>
    )
}

export default Filter;