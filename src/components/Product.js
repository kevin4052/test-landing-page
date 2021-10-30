import React from 'react';
import { Col, Row, Button, Image } from 'react-bootstrap';

export default function Product({
    name,
    src,
    alt,
    description,
    reverse,
    card = false,
}) {
    const order = reverse ? 'last' : 'first';
    return (
        <Row className="product">
            <Col className="product-img" lg>
                <Image src={src} alt={alt} />
            </Col>
            <Col className="product-info" lg={{ order }}>
                <Row className="product-info-brand">
                    {!card && <p>KOMBUCHA</p>}
                </Row>
                <Row className="product-info-name">
                    <h3>{name}</h3>
                </Row>
                <Row className="product-info-description">
                    <p>{description}</p>
                </Row>
                <Row>
                    <div>
                        <Button>BUY NOW</Button>
                    </div>
                </Row>
            </Col>
        </Row>
    );
}
