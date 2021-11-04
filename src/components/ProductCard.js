import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function ProductCard({ name, src, alt, description }) {
    return (
        <Card>
            <Card.Img src={src} alt={alt} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button>BUY NOW</Button>
            </Card.Body>
        </Card>
    );
}
