import {
    faSearch,
    faShoppingBasket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Nav() {
    return (
        <Navbar>
            <Navbar.Brand href="#">KOMBUCHA</Navbar.Brand>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="#">products</Nav.Link>
                    <Nav.Link href="#">story</Nav.Link>
                    <Nav.Link href="#">manufacturing</Nav.Link>
                    <Nav.Link href="#">packaging</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {/* <div>
                <ul>
                    <li>
                        <a href="#">products</a>
                    </li>
                    <li>
                        <a href="#">story</a>
                    </li>
                    <li>
                        <a href="#">manufacturing</a>
                    </li>
                    <li>
                        <a href="#">packaging</a>
                    </li>
                </ul>
            </div> */}
            <div className="">
                <a href="#">
                    <FontAwesomeIcon icon={faSearch} />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faShoppingBasket} />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faUser} />
                </a>
            </div>
        </Navbar>
    );
}
