import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";
import NavigationBar from '../Navbar/NavigationBar';
import LandingPage from '../LandingPage/LandingPage';
import TourIntro from '../TourIntro/TourIntro';
import { fakeData } from '../../fakeData/fakeData';

const Home = () => {
    
    const [tourSpots, setTourSpots] = useState(fakeData);
    const [selectedTour, setSelectedTour] = useState(fakeData[0]);
    const handleImageClick= (tourSpot) => {
        setSelectedTour(tourSpot);
    }
    console.log(selectedTour)

    return (
        <div className="home-container">
            <Container fluid="xl">
                <NavigationBar></NavigationBar>
                <div className="all-tours-container">
                    <div className="slider-content">
                        <h2>Cox'x Bazar</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, at aut! Omnis eveniet mollitia adipisci, distinctio, veritatis quidem corrupti doloremque debitis praesentium qui eos inventore. Modi consequuntur corrupti deleniti et.</p>
                        {/* <Link className="booking-btn"  component="button">Booking &#8594;</Link> */}
                        <Link to={`/home/destiantion`}><button className="booking-btn">Booking &#8594;</button></Link>
                    </div>
                    <div className="tours-images">
                        {
                            tourSpots.map( tourSpot => <Link onClick={() => handleImageClick(tourSpot)} to={`/tourist-spots/${tourSpot.destination}`}> <img src={require(`../../images/Image/${tourSpot.imgUrl}`)} alt=""/> </Link>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;