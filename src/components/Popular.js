import React from 'react';
import { Col, Row } from 'react-bootstrap';
import product1 from './images/product-1.png';
import product2 from './images/product-2.png';
import product3 from './images/product-3.png';
import ProductCard from './ProductCard';

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
    const [sliderTransform, setSliderTransform] = React.useState(0);

    const handlePageSelect = (e) => {
        const { id } = e.target;
        const parentWidth =
            document.querySelectorAll('.popular-products')[0].offsetWidth;
        let slideOffest = 0;

        if (id === 'paging-1') {
            slideOffest = 0;
        } else if (id === 'paging-2') {
            slideOffest = 1;
        } else if (id === 'paging-3') {
            slideOffest = 2;
        }
        setSliderTransform(parentWidth * slideOffest * -1);
    };

    let productGroups = [];
    const productList = products.map((product) => {
        const { name, src, description } = product;
        return (
            <ProductCard
                key={name + 'ofTheWeek'}
                name={name}
                src={src}
                alt={name}
                description={description}
            />
        );
    });

    for (let i = 0; i < productList.length - 1; i += 2) {
        productGroups.push([productList[i], productList[i + 1]]);
    }

    return (
        <Row className="popular">
            <Col>
                <Row>
                    <Col>
                        <h2>Popular This Week</h2>
                    </Col>
                    <Col className="popular-paging">
                        <span
                            id="paging-1"
                            className="popular-paging-link"
                            onClick={handlePageSelect}
                        >
                            01 ___
                        </span>
                        <span
                            id="paging-2"
                            className="popular-paging-link"
                            onClick={handlePageSelect}
                        >
                            02 ___
                        </span>
                        <span
                            id="paging-3"
                            className="popular-paging-link"
                            onClick={handlePageSelect}
                        >
                            03 ___
                        </span>
                    </Col>
                </Row>
                <Row className="popular-products">
                    {productGroups.map((group, index) => {
                        return (
                            <div
                                key={`pop-${index}`}
                                id={`pop-${index}`}
                                className="popular-products-group"
                                style={{
                                    transform: `translate3d(${sliderTransform}px, 0px, 0px)`,
                                }}
                            >
                                {group[0]}
                                {group[1]}
                            </div>
                        );
                    })}
                </Row>
            </Col>
        </Row>
    );
}
