import React from 'react';
import './App.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Nav from './components/Nav';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Nav />
                </Col>
            </Row>
            <Footer />
        </Container>
    );
}

export default App;
