import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
    const [sliderTransform, setSliderTransform] = React.useState(0);

    const handleClick = () => {
        setSliderTransform(0);
    };
    return (
        <Row className="testimonial">
            <Col>
                <Row className="testimonial-title">
                    <h1>Testimonials</h1>
                    <p>
                        Simple innate summer fat appear basket his desire joy.
                    </p>
                </Row>
                <Row className="testimonial-body">
                    <TestimonialCard
                        style={{
                            transform: `translate3d(${sliderTransform}px, 0px, 0px)`,
                        }}
                    />
                    <TestimonialCard
                        style={{
                            transform: `translate3d(${sliderTransform}px, 0px, 0px)`,
                        }}
                    />
                    <TestimonialCard
                        style={{
                            transform: `translate3d(${sliderTransform}px, 0px, 0px)`,
                        }}
                    />
                </Row>
                <Row className="testimonial-btn">
                    <Col>
                        <div>
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                onClick={handleClick}
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                onClick={handleClick}
                            />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
