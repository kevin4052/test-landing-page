import {
    faSearch,
    faShoppingBasket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavComponent() {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home">KOMBUCHA</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">products</Nav.Link>
                    <Nav.Link href="#link">story</Nav.Link>
                    <Nav.Link href="#link">manufacturing</Nav.Link>
                    <Nav.Link href="#link">packaging</Nav.Link>
                </Nav>
                <Nav className="link-icons">
                    <Nav.Link href="#">
                        <FontAwesomeIcon icon={faSearch} />
                    </Nav.Link>
                    <Nav.Link href="#">
                        <FontAwesomeIcon icon={faShoppingBasket} />
                    </Nav.Link>
                    <Nav.Link href="#">
                        <FontAwesomeIcon icon={faUser} />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
