import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBar from '../Navbar/NavigationBar';

const Search = () => {
    return (
        <Container>
            <NavigationBar background="white"></NavigationBar>
            <hr />
            <Row>
                <Col md="6">
                    <p>252 Stays Apr 13-17 3guests </p>
                    <h5>Stay is Cox's Bazar</h5>
                    <Row>
                        <Col style={{marginBottom: '10px'}} md="12">
                            <Row>
                                <Col md="5">
                                    <img style={{maxWidth: '80%'}} src={require('../../images/Image/suite1.png')} />
                                </Col>
                                <Col md="7">
                                    <h6>Light bright airy stylish apt and safe peaceful stay.</h6>
                                    <p>asdas asd  das </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{marginBottom: '10px'}} md="12">
                            <Row>
                                <Col md="5">
                                <img style={{maxWidth: '80%'}} src={require('../../images/Image/suite2.png')} />
                                </Col>
                                <Col md="7">
                                    <h6>Light bright airy stylish apt and safe peaceful stay.</h6>
                                    <p>asdas asd  das </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={{marginBottom: '10px'}} md="12">
                            <Row>
                                <Col md="5">
                                <img style={{maxWidth: '80%'}} src={require('../../images/Image/suite3.png')} />
                                </Col>
                                <Col md="7">
                                    <h6>Light bright airy stylish apt and safe peaceful stay.</h6>
                                    <p>asdas asd  das </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md="6">
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Search;