import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import hero from './images/hero.png';

export default function Hero() {
    return (
        <Row>
            <Col>
                <Image
                    src={hero}
                    alt="Blackberry, Raspberry & Elderberry kombucha"
                />
            </Col>
            <Col>
                <h2>SPARKLING.TEA</h2>
            </Col>
        </Row>
    );
}
