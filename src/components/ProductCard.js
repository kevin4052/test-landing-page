import React from 'react';
import { Card, Button } from 'react-bootstrap';
import product1 from './images/product-1.png';

export default function ProductCard() {
    return (
        <Card>
            <Card.Img src={product1} />
            <Card.Body>
                <Card.Title>Pineapple, Lychee & Hibiscus</Card.Title>
                <Card.Text>
                    We loved designing the entire series of labels for Singapore
                    based Arie Kombucha.
                </Card.Text>
                <Button>BUY NOW</Button>
            </Card.Body>
        </Card>
    );
}
