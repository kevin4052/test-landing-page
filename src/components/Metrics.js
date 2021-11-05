import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import metrics from './images/metirc.png';

export default function Metrics() {
    return (
        <Row className="metrics">
            <Col className="metrics-col">
                <div>
                    <Image src={metrics} alt="site verticals" rounded />
                </div>
                <div>
                    <h2>56</h2>
                    <p>Counties supported</p>
                </div>
                <div>
                    <h2>122+</h2>
                    <p>International Branches</p>
                </div>
                <div>
                    <h2>1M+</h2>
                    <p>Sale through-out the world</p>
                </div>
            </Col>
        </Row>
    );
}
