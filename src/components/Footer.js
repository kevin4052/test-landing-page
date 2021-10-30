import React from 'react';
import {
    faFacebookSquare,
    faTwitterSquare,
    faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';

export default function Footer() {
    return (
        <Row className="footer">
            <Col>
                <Row>
                    <Col className="footer-socials">
                        <Row className="footer-socials-title">KOMBUCHA</Row>
                        <Row>
                            Sufficient particular impossible by reasonable oh
                            expression is. Yet preference unpleasant
                        </Row>
                        <Row>
                            <Col>
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </Col>
                        </Row>
                    </Col>
                    <Col className="footer-links">
                        <Row>
                            <Col>
                                <Row className="footer-links-title">Menu</Row>
                                <Row className="footer-links-link">
                                    Donations
                                </Row>
                                <Row className="footer-links-link">
                                    Features
                                </Row>
                                <Row className="footer-links-link">
                                    Category
                                </Row>
                                <Row className="footer-links-link">
                                    Volunteer
                                </Row>
                                <Row className="footer-links-link">
                                    About Us
                                </Row>
                            </Col>
                            <Col>
                                <Row className="footer-links-title">
                                    Categories
                                </Row>
                                <Row className="footer-links-link">
                                    Heathly Food
                                </Row>
                                <Row className="footer-links-link">
                                    Education
                                </Row>
                                <Row className="footer-links-link">
                                    Clean Water
                                </Row>
                                <Row className="footer-links-link">
                                    Medical Help
                                </Row>
                            </Col>
                            <Col>
                                <Row className="footer-links-title">
                                    About Us
                                </Row>
                                <Row className="footer-links-link">
                                    Who are you?
                                </Row>
                                <Row className="footer-links-link">
                                    Contact Us
                                </Row>
                                <Row className="footer-links-link">FAQ</Row>
                                <Row className="footer-links-link">Help</Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>Copyright</Col>
                </Row>
            </Col>
        </Row>
    );
}
