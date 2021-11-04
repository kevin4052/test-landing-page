import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
    return (
        <Row className="testimonial">
            <Col>
                <Row className="testimonial-title">
                    <h1>Testimonials</h1>
                    <p>
                        Simple innate summer fat appear basket his desire joy.
                    </p>
                </Row>
                <Row>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </Row>
            </Col>
        </Row>
    );
}
