import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBar from '../Navbar/NavigationBar';
import GoogleMapReact from 'google-map-react';
import { useParams } from 'react-router-dom';
import './search.css'
import { fakeData } from '../../fakeData/fakeData';


const Search = () => {
    const {destination} = useParams();
    console.log(destination);
    const destinationInfo = fakeData.find( tourSpot => tourSpot.destination === destination);
    console.log(destinationInfo);
    return (
        <Container>
            <NavigationBar background="white"></NavigationBar>
            <hr />
            <Row>
                <Col md="6">
                    <p>252 Stays Apr 13-17 3guests </p>
                    <h5>Stay in {destinationInfo.name}</h5>
                    <Row>
                        <Col style={{marginBottom: '20px'}} md="12">
                            <Row>
                                <Col md="5">
                                    <img style={{maxWidth: '80%'}} src={require('../../images/Image/suite1.png')} />
                                </Col>
                                <Col className="single-hotel" md="7">
                                    <h6>Light bright airy stylish apt and safe peaceful stay.</h6>
                                    <p>4 guests  2berooms  2beds  2baths</p>
                                    <p>Wifi Air Conditioning Kitchen</p>
                                    <p>Cancellation flexibility available</p>
                                    <p style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <span>Average Rating: 4.9/5</span>
                                        <span>$34/night</span>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{marginBottom: '20px'}} md="12">
                            <Row>
                                <Col md="5">
                                <img style={{maxWidth: '80%'}} src={require('../../images/Image/suite2.png')} />
                                </Col>
                                <Col className="single-hotel" md="7">
                                    <h6>Light bright airy stylish apt and safe peaceful stay.</h6>
                                    <p>4 guests  2berooms  2beds  2baths</p>
                                    <p>Wifi Air Conditioning Kitchen</p>
                                    <p>Cancellation flexibility available</p>
                                    <p style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <span>Average Rating: 4.9/5</span>
                                        <span>$34/night</span>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{marginBottom: '20px'}} md="12">
                            <Row>
                                <Col md="5">
                                <img style={{maxWidth: '80%'}} src={require('../../images/Image/suite3.png')} />
                                </Col>
                                <Col className="single-hotel" md="7">
                                    <h6>Light bright airy stylish apt and safe peaceful stay.</h6>
                                    <p>4 guests  2berooms  2beds  2baths</p>
                                    <p>Wifi Air Conditioning Kitchen</p>
                                    <p>Cancellation flexibility available</p>
                                    <p style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <span>Average Rating: 4.9/5</span>
                                        <span>$34/night</span>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md="6">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyC77ulrIgdLIsS5LUO6GfTisihCyGWNCGA' }}
                    defaultCenter={{
                        lat: 59.95,
                        lng: 30.33
                      }}
                    defaultZoom={10}
                    yesIWantToUseGoogleMapApiInternals="true"
                    >
                </GoogleMapReact>
                
                </Col>
            </Row>
        </Container>
    );
};

export default Search;