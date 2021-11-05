import React from 'react';
import { Image } from 'react-bootstrap';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileIcon from './images/profile-icon.png';

export default function TestimonialCard({ sliderTransform }) {
    return (
        <div
            className="testimonial-card"
            style={{
                transform: `translate3d(${sliderTransform}px, 0px, 0px)`,
            }}
        >
            <div className="testimonial-card-head">
                <div className="testimonial-card-head-quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <div className="testimonial-card-head-info">
                    <div>
                        <Image src={profileIcon} alt="profile picture" />
                    </div>
                    <div className="testimonial-card-head-rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p>John De marli</p>
                </div>
            </div>
            <div className="testimonial-card-body">
                <p>
                    And produce say the ten moments parties. Simple innate
                    summer fat appear basket his joy. Outward at gravity do
                    excited
                </p>
            </div>
        </div>
    );
}
