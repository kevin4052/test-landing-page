import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import Nav from './components/Nav';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Container>
            <Nav />
            <Hero />
        </Container>
    );
}

export default App;
