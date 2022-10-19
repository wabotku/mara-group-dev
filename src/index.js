import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './pages/navbarComponent';
import LandingPage from './pages/landingPage';
import SulengPage from './pages/sulengPage'
import FooterComponent from './pages/footerComponent'

ReactDOM.render(
  <>
    <NavbarComponent />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/sudut-lenggah" element={<SulengPage />} />
      </Routes>
    </BrowserRouter>
    <FooterComponent />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
