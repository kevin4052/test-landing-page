import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Partnerships from './components/Partnerships';
import SellingPoints from './components/SellingPoints';
import product1 from './components/images/product-1.png';
import product2 from './components/images/product-2.png';
import product3 from './components/images/product-3.png';
import Product from './components/Product';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Popular from './components/Popular';
import ProductCard from './components/ProductCard';

const products = [
    {
        name: 'Pineapple, Lychee & Hibiscus',
        src: product1,
        description: `We loved designing the entire series of labels for
        Singapore based Arie Kombucha. The label's philosophy
        concerning fresh and energetic ingredients was key when
        creating this lively and colourful university`,
    },
    {
        name: 'Peach, Mint & Lemon Balm',
        src: product2,
        description: `We loved designing the entire series of labels for
        Singapore based Arie Kombucha. The label's philosophy
        concerning fresh and energetic ingredients was key when
        creating this lively and colourful university`,
    },
    {
        name: 'Blackberry, Raspberry & Elder flower',
        src: product3,
        description: `We loved designing the entire series of labels for
        Singapore based Arie Kombucha. The label's philosophy
        concerning fresh and energetic ingredients was key when
        creating this lively and colourful university`,
    },
];

function App() {
    return (
        <Container>
            <Nav />
            <Hero />
            <Partnerships />
            <SellingPoints />
            {products.map((product, index) => {
                const { name, src, description } = product;
                return (
                    <Product
                        key={name}
                        name={name}
                        src={src}
                        alt={name}
                        description={description}
                        reverse={index % 2}
                    />
                );
            })}
            <Popular />
            <ProductCard />
            <Footer />
        </Container>
    );
}

export default App;
