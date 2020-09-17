import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { fakeData } from '../../fakeData/fakeData';
import './tourIntro.css'

const TourIntro = (props) => {
    // console.log(props.tour)
    const trip = fakeData.find( tour => tour.destination === props.tour);
    console.log(trip)
    
    return (
        <div className="trip-description">
            <h2>{trip.name}</h2>
            <p>{trip.description}</p>            
        </div>
    );
};

export default TourIntro;