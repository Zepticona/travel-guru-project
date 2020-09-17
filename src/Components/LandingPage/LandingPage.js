import React, { useState } from 'react';
import './landingPage.css'
import TourIntro from '../TourIntro/TourIntro';
import SpotImage from '../spotImage/SpotImage';
import { Link } from '@material-ui/core';
import { fakeData } from '../../fakeData/fakeData';

const LandingPage = () => {

    const [tourSpots, setTourSpots] = useState(fakeData);
    console.log(tourSpots);
    return (
            <div className="slider-container">
                <TourIntro ></TourIntro>
                <div className="slider-images">
                    {
                        tourSpots.map( tourSpot => <Link to={`/home/${tourSpot.destination}`}> <img src={require(`../../images/Image/${tourSpot.imgUrl}`)} alt=""/> </Link>)
                    }
                </div>
            </div>
    );
};

export default LandingPage;