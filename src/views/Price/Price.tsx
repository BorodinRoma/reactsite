import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import './Price.css'
import axios from "axios";

import {
    Container, Row, Col, Form, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem
} from "react-bootstrap";



const Price = () => {

    const [m2, setM2] = useState(30);
    const [koef, setKoef] = useState(0);
    const [type, setType] = useState(0);
    const [result, setResult] = useState(0);
    function calcul(event: any){

        event.preventDefault()
        axios.post('/api/v1/calculator/calculator/calcul', {'m2': m2, 'koef':koef, 'type':type},
            {baseURL: 'http://127.0.0.1:8000/'}).then(
            response => setResult(response.data)
        )

    }

    return <section className="Sidebar">

        <div className="module calculator">
            <div className="container">
                <div className="module-caption">Калькулятор стоимости ремонта квартиры в Белгороде</div>
                <div className="calculator-body">
                    <div className="row line-row">
                        <div className="col-xs-12 col-sm-6 line-column">
                            <div className="line h4">Тип квартиры</div>
                            <div className="row">
                                <div className="col-xs-12 col-md-4">
                                    <input onChange={event => setType(Number(event.target.value))} id="apartment-type-1" className="hidden" name="f_ApartmentType" type="radio"
                                           data-multiplier="1"
                                           value="1"/>
                                        <label className="ghost-btn" htmlFor="apartment-type-1">Новостройка</label>
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <input onChange={event => setType(Number(event.target.value))} id="apartment-type-2" className="hidden" name="f_ApartmentType" type="radio"
                                           // checked=""
                                           data-multiplier="1.3" value="2"/>
                                        <label className="ghost-btn" htmlFor="apartment-type-2">Вторичка</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 line-column">
                            <div className="line h4">
                                <label htmlFor="calc-square-range">Площадь</label>
                            </div>
                            <div className="with-base">
                                <input onChange={event => setM2(Number(event.target.value))} id="calc-square-value" data-range-slider="#calc-square-range"
                                       className="font-init" type="number"
                                       min="1" max="200" step="1" value="30"
                                       data-base-value=""/>
                                    <label className="font-init" htmlFor="calc-square-value">м<sup>2</sup></label>
                            </div>
                        </div>
                    </div>
                    <div className="row line-row">
                        <div className="col-xs-12 col-sm-6 line-column">
                            <div className="line h4">Вид ремонта</div>
                            <div className="row">
                                <div className="col-xs-12 col-md-4">
                                    <input onChange={event => setKoef(Number(event.target.value))} id="renovate-type-1" className="hidden" name="f_RenovateType" type="radio"
                                           data-multiplier="2500" value="1" v-model="multiplier"/>
                                        <label className="ghost-btn" htmlFor="renovate-type-1">Косметический</label>
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <input onChange={event => setKoef(Number(event.target.value))} id="renovate-type-2" className="hidden" name="f_RenovateType" type="radio"
                                           data-multiplier="3500"
                                           value="3000" v-model="multiplier"/>
                                        <label className="ghost-btn" htmlFor="renovate-type-2">Капитальный</label>
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <input onChange={event => setKoef(Number(event.target.value))} id="renovate-type-3" className="hidden" name="f_RenovateType" type="radio"
                                           data-multiplier="4500"
                                           value="4500" v-model="multiplier"/>
                                        <label className="ghost-btn" htmlFor="renovate-type-3">Дизайнерский</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 line-column">
                            <div className="line h4">Примерная стоимость*</div>
                            <div className="line h3">
                                <b><span className="js-module-calc-value"></span>{result} руб.</b>
                            </div>
                            <div className="price-warning">*Стоимость работ <b>без учета материалов</b>!</div>
                        </div>
                        <button onClick={calcul}>рассчитать</button>
                    </div>
                </div>
                <div className="module-footer">
                    <div></div>
                </div>
            </div>
        </div>

    </section>
}
export default Price;