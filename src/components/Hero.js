import React from 'react';
import { Col, Image, Row, Button } from 'react-bootstrap';
import hero from './images/hero.png';

export default function Hero() {
    return (
        <Row className="hero">
            <Col className="hero-col1">
                <Image
                    className="hero-col1-image"
                    src={hero}
                    alt="Blackberry, Raspberry & Elderberry kombucha"
                />
            </Col>
            <Col className="hero-col2">
                <div>
                    <p>ORGANIC TEA</p>
                </div>
                <div>
                    <h2 className="hero-col2-type">SPARKLING.TEA</h2>
                </div>
                <div>
                    <h2 className="hero-col2-title">KOMBUCHA</h2>
                </div>
                <div>
                    <p>
                        {`Sparkling teas are essentially a mix of soda and tea, a
                        cold, carbonated version of the healthy classic-and
                        health experts love them. "These beverages can provide
                        the benefits of the tea in them."says Jessica Cording,
                        R.D.`}
                    </p>
                </div>
                <div>
                    <h4>$ 89.99</h4>
                </div>
                <div>
                    <Button>BUY NOW</Button>
                </div>
                <div className="hero-col2-info">
                    <div>
                        <p>INGREDIENTS</p>
                        <h6>100% Organic</h6>
                    </div>
                    <div>
                        <p>FLAVORS</p>
                        <h6>5 variations</h6>
                    </div>
                    <div>
                        <p>VOLUME</p>
                        <h6>465ml</h6>
                    </div>
                </div>
            </Col>
        </Row>
    );
}
