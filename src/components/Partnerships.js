import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import afterpay from './images/afterpay.png';
import unicef from './images/unicef.png';
import firstHealth from './images/first_health.png';
import interneuron from './images/interneuron.png';
import lovato from './images/lovato.png';

export default function Partnerships() {
    return (
        <Row className="partners">
            <Col>
                <Image src={afterpay} alt="Afterpay" />
            </Col>
            <Col>
                <Image src={unicef} alt="unicef" />
            </Col>
            <Col>
                <Image src={firstHealth} alt="First Health" />
            </Col>
            <Col>
                <Image src={interneuron} alt="Interneuron" />
            </Col>
            <Col>
                <Image src={lovato} alt="Lovato" />
            </Col>
        </Row>
    );
}
