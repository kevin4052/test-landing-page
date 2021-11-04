import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import metrics from './images/metirc.png';

export default function Metrics() {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Img src={metrics} alt="site verticals" />
                </Card>
            </Col>
            <Col>
                <Row>56</Row>
                <Row>Counties supported</Row>
            </Col>
            <Col>
                <Row>122+</Row>
                <Row>International Branches</Row>
            </Col>
            <Col>
                <Row>1M+</Row>
                <Row>Sale through-out the world</Row>
            </Col>
        </Row>
    );
}
