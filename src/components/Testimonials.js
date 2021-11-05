import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
    const [sliderTransform, setSliderTransform] = React.useState(0);
    const [position, setPosition] = React.useState(3);

    const amount = [1, 2, 3, 4, 5];
    const testimonialList = amount.map((number) => {
        return (
            <TestimonialCard
                key={number.toString()}
                sliderTransform={sliderTransform}
            />
        );
    });

    const handleClick = (e) => {
        const id = e.target.id;
        const cardWidth =
            document.getElementsByClassName('testimonial-card')[0].offsetWidth;

        if (id === 'chevronRight' && position > 1) {
            setPosition(position - 1);
            setSliderTransform(sliderTransform + cardWidth * 1);
        } else if (id === 'chevronLeft' && position < 5) {
            setPosition(position + 1);
            setSliderTransform(sliderTransform + cardWidth * -1);
        }
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
                    {testimonialList.map((testimonial) => {
                        return testimonial;
                    })}
                </Row>
                <Row className="testimonial-btn">
                    <Col>
                        <Button
                            id="chevronLeft"
                            className="testimonial-btn-icon"
                            onClick={handleClick}
                        >
                            {`<`}
                        </Button>
                        <Button
                            id="chevronRight"
                            className="testimonial-btn-icon"
                            onClick={handleClick}
                        >
                            {`>`}
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
