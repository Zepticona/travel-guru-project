import { Link } from '@material-ui/core';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import NavigationBar from '../Navbar/NavigationBar';
import TourIntro from '../TourIntro/TourIntro';
import './booking.css'

const Booking = () => {
    const {tourLocation} = useParams();
    const history = useHistory();
    const handleBooking = () => {
        history.push(`/${tourLocation}`)
    }
    return (
        <div className="home-container">
            <Container fluid="xl">
            <NavigationBar></NavigationBar>
                <Row className="booking-sectio-container">
                    <Col md="6">
                        <TourIntro tour={tourLocation}></TourIntro>
                    </Col>
                    <Col md="6">
                        <div className="booking-form">
                            <form onSubmit={handleBooking}>
                            <Form className="booking-input-form">
                                <Form.Group as={Row} >
                                    <Form.Label className="booking-form-label" column sm={12}>
                                    Origin
                                    </Form.Label>
                                    <Col sm={12}>
                                    <Form.Control className="booking-form-input" type="Text" placeholder="Dhaka" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} >
                                    <Form.Label className="booking-form-label" column sm={12}>
                                    Destination
                                    </Form.Label>
                                    <Col sm={12}>
                                    <Form.Control className="booking-form-input" type="Text" value={tourLocation} placeholder={tourLocation} />
                                    </Col>
                                </Form.Group>
                                <Row>
                                    <Col md="6">
                                        <Form.Group as={Row} >
                                            <Form.Label className="booking-form-label" column sm={12}>
                                            From
                                            </Form.Label>
                                            <Col sm={12}>
                                            <Form.Control id="trip-from" className="booking-form-input" type="Date" required />
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                    <Col md="6">
                                        <Form.Group as={Row} >
                                            <Form.Label className="booking-form-label" column sm={12}>
                                            To
                                            </Form.Label>
                                            <Col sm={12}>
                                            <Form.Control id="trip-to" className="booking-form-input" type="Date" required />
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <button type="submit" style={{width: '100%'}} className="booking-btn">Start Booking</button>
                                    </Col>
                                </Row>
                            </Form>
                            </form>
                        </div>
                    </Col>
                </Row>
                
                
            </Container>
            
        </div>
    );
};

export default Booking;