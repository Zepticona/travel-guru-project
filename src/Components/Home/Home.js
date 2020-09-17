import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";
import NavigationBar from '../Navbar/NavigationBar';
import './home.css'
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
                <Row>
                    <Col md="4">
                        <div className="tourist-spot-brief">
                            <h2>Cox'x Bazar</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, at aut! Omnis eveniet mollitia adipisci, distinctio, veritatis quidem corrupti doloremque debitis praesentium qui eos inventore. Modi consequuntur corrupti deleniti et.</p>
                            {/* <Link className="booking-btn"  component="button">Booking &#8594;</Link> */}
                            <Link to={`/tourist-spots/${tourSpots[0].destination}`}><button className="booking-btn">Booking &#8594;</button></Link>
                        </div>
                    </Col>
                    <Col md="6">
                        
                    </Col>
                </Row>
                <div className="all-tours-container">
                    <div className="tourist-spot-brief">
                        <h2>Cox'x Bazar</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, at aut! Omnis eveniet mollitia adipisci, distinctio, veritatis quidem corrupti doloremque debitis praesentium qui eos inventore. Modi consequuntur corrupti deleniti et.</p>
                        {/* <Link className="booking-btn"  component="button">Booking &#8594;</Link> */}
                        <Link to={`/tourist-spots/${tourSpots[0].destination}`}><button className="booking-btn">Booking &#8594;</button></Link>
                    </div>
                    <div className="tour-spots-images">
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