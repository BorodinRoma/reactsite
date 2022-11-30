import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';

import {Header} from './components/App/Header';
import {Footer} from './components/App/Footer';
import {Price} from './views/Price';
import {Home} from './views/Home';
//import {Login} from './views'

import {Routes, Route, BrowserRouter} from "react-router-dom";
import Contacts from "./views/feedback/Contacts";

const App = () => {
    return (
        <BrowserRouter>
            <body>
            <div className="Body">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Price" element={<Price/>}/>
                    <Route path="/feedback" element={<Contacts/>}/>
                </Routes>
                <Footer/>
            </div>
            </body>
        </BrowserRouter>
    )
}
export default App;


