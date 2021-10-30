import React from 'react';
import { Col, Row, Button, Image } from 'react-bootstrap';

export default function Product({ name, src, alt, description, reverse }) {
    const order = reverse ? 'last' : 'first';
    return (
        <Row className="product">
            <Col lg>
                <Image src={src} alt={alt} />
            </Col>
            <Col lg={{ order }}>
                <Row>
                    <p>KOMBUCHA</p>
                </Row>
                <Row>
                    <h3>{name}</h3>
                </Row>
                <Row>
                    <p>{description}</p>
                </Row>
                <div>
                    <Button>BUY NOW</Button>
                </div>
            </Col>
        </Row>
    );
}
