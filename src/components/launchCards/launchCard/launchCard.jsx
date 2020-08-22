import React from 'react';

const launchCard = props => {
    const {
        flightNumber,
        missionName,
        missionId,
        launchYear,
        launchSuccess,
        landSuccess,
        imageUrl
        } = props;

    return (
        <div>
            <div>
                <img src={`${imageUrl}`} alt=""/>
            </div>
            <h2>{`${missionName} #${flightNumber}`}</h2>
            <div>
                <span>
                    <strong>Mission Ids:</strong>
                    <ul>
                        <li>{missionId}</li>
                    </ul>
                </span>
                <span><strong>Launch Year:</strong>{launchYear}</span>
                <span><strong>Successful Launch:</strong>{`${launchSuccess}`}</span>
                <span><strong>Successful Landing:</strong>{`${landSuccess}`}</span>
            </div>
        </div>
    )
}

export default launchCard;