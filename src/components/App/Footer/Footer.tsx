import React from "react";
import {Link} from 'react-router-dom';
import './Footer.css'

import {
    Container, Row, Col, Form, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem
} from "react-bootstrap";

const Footer = () => {
    return <section className="Sidebar">
        <div>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4">
                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1" href="https://vk.com/romallies" role="button"><i
                            className="fa-brands fa-vk"></i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="https://t.me/gVIRo" role="button"><i
                            className="fab fa-telegram"></i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                            className="fab fa-whatsapp"></i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                            className="fab fa-viber"></i></a>

                    </section>


                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Напишите нам свою почту и мы свяжемся с вами</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control"/>
                                        <label className="form-label" htmlFor="form5Example21">Email</label>
                                    </div>
                                </div>


                                <div className="col-auto">

                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Отправить
                                    </button>
                                </div>

                            </div>

                        </form>
                    </section>

                    <section className="mb-4">
                        <p>
                            Быстро. Дешево. Качественно. Выберите два.)
                        </p>
                    </section>


                    <section className="">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-5">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </section>

                </div>


                <div className="text-center p-3">
                    © 2022 Copyright:
                    <a className="text-white">Borodin R.A</a>
                </div>

            </footer>

        </div>

    </section>
}
export default Footer;