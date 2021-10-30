import React from 'react';
import { Col, Row, Button, Image, Container } from 'react-bootstrap';
import badge from './images/badge.png';
import truck from './images/truck.png';
import returns from './images/return.png';
import support from './images/support.png';

export default function SellingPoints() {
    return (
        <Row className="selling-points">
            <Col>
                <Container>
                    <Row className="selling-points-title">
                        <h1>100% Authentic product</h1>
                        <p>
                            And produce say the ten moments parties. Simple
                            innate summer fat appear basket his desire joy.
                        </p>
                    </Row>
                    <Row>
                        <Col>
                            <Image src={badge} alt="Product Guarantee" />
                            <p>100% Genuien</p>
                            <p>Product Guarantee</p>
                        </Col>
                        <Col>
                            <Image src={truck} alt="Delivery" />
                            <p>Guaranted On Time</p>
                            <p>Delivery</p>
                        </Col>
                        <Col>
                            <Image src={returns} alt="Guarantee & Exchange" />
                            <p>100% Return</p>
                            <p>Guarantee & Exchange</p>
                        </Col>
                        <Col>
                            <Image src={support} alt="Customer Support" />
                            <p>24 x 7 Customer</p>
                            <p>Support</p>
                        </Col>
                    </Row>
                    <Row>
                        <div>
                            <Button>BUY NOW</Button>
                        </div>
                    </Row>
                    <Row className="selling-points-title">
                        <h1>Arie Kombucha</h1>
                        <p>
                            {`We loved designing the entire series of labels for
                        Singapore based Arie Kombucha. The label's philosophy
                        concerning fresh and energetic ingredients was key when
                        creating this lively and colourful university`}
                        </p>
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}
