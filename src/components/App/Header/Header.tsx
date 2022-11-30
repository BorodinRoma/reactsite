import React from "react";
import {Link} from 'react-router-dom';
import './Header.css'

import {
    Container, Row, Col, Form, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem
} from "react-bootstrap";

const Header = () => {
    return <section className="Sidebar">
        <header>
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="Logo"
                            src="https://i.pinimg.com/736x/da/c8/0f/dac80fbfa765803b4bca39cf7aa5b0b7.jpg"
                            width="50"
                            height="44"
                            className="img-fluid rounded-circle"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="home" href="/">Главная</Nav.Link>
                            <Nav.Link className="price" href="/Price">Калькулятор</Nav.Link>
                            <Nav.Link className="info" href="#">О компании</Nav.Link>
                            <Nav.Link className="feedback" href="/feedback">Тех. поддержка</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="p-5"></Container>
        </header>
    </section>
}
export default Header;