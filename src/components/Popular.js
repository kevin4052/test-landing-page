import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from './Product';
import product1 from './images/product-1.png';
import product2 from './images/product-2.png';
import product3 from './images/product-3.png';

const products = [
    {
        name: 'Pineapple, Lychee & Hibiscus',
        src: product1,
        description: `We loved designing the entire series of labels for
        Singapore based Arie Kombucha.`,
    },
    {
        name: 'Peach, Mint & Lemon Balm',
        src: product2,
        description: `We loved designing the entire series of labels for
        Singapore based Arie Kombucha.`,
    },
    {
        name: 'Blackberry, Raspberry & Elder flower',
        src: product3,
        description: `We loved designing the entire series of labels for
        Singapore based Arie Kombucha.`,
    },
    {
        name: 'Pineapple, Lychee & Hibiscus',
        src: product1,
        description: `We loved designing the entire series of labels for
        Singapore based Arie Kombucha.`,
    },
    {
        name: 'Peach, Mint & Lemon Balm',
        src: product2,
        description: `We loved designing the entire series of labels for
        Singapore based Arie Kombucha.`,
    },
    {
        name: 'Blackberry, Raspberry & Elder flower',
        src: product3,
        description: `We loved designing the entire series of labels for
        Singapore based Arie Kombucha.`,
    },
];

export default function Popular() {
    return (
        <Row className="popular">
            <Col>
                <Row>
                    <Col>
                        <h2>Popular This Week</h2>
                    </Col>
                    <Col>01 ___ 02 ___ 03 ___</Col>
                </Row>
                <Row className="popular-card">
                    {products.map((product) => {
                        const { name, src, description } = product;
                        return (
                            <Product
                                className="popular-card-product"
                                key={name}
                                name={name}
                                src={src}
                                alt={name}
                                description={description}
                                reverse={0}
                                card={true}
                            />
                        );
                    })}
                </Row>
            </Col>
        </Row>
    );
}
