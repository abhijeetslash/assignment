import React from 'react';

import LaunchCard from './launchCard/launchCard';

const launchCards = ({launches}) => {
    //.first_stage.cores[0].land_success
     return (
         launches.map((launch) => {
            const {
                flight_number, 
                mission_name,
                mission_id, 
                launch_year
                } = launch;
            const land_success = launch.rocket.first_stage.cores[0].land_success;
            const mission_patch = launch.links.mission_patch;

            return <LaunchCard
                        flightNumber={flight_number}
                        missionName={mission_name}
                        missionId={mission_id}
                        launchYear={launch_year}
                        landSuccess={land_success}
                        imageUrl={mission_patch}
                    />
         })
     )
    
    
}

export default launchCards;