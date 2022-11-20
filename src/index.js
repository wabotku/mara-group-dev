import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './pages/navbarComponent';
import LandingPage from './pages/landingPage';
import SulengBintaroPage from './pages/sulengBintaroPage'
import NairaPage from './pages/nairaPage'
import KaingaraPage from './pages/kaingaraPage'
import KaetPage from './pages/kaetPage'
import KutamaraPage from './pages/kutamaraPage'
import BalemaraPage from './pages/balemaraPage'
import SulengPuncakPage from './pages/sulengPuncakPage'
import RumamaraPage from './pages/rumamaraPage'
import ContactUs from './pages/contactUs'
import FooterComponent from './pages/footerComponent'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope, faStore } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faEnvelope, faStore)

ReactDOM.render(
  <>
    <NavbarComponent />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/sudut-lenggah-bintaro" element={<SulengBintaroPage />} />
        <Route exact path="/naira" element={<NairaPage />} />
        <Route exact path="/kaingara" element={<KaingaraPage />} />
        <Route exact path="/kaet" element={<KaetPage />} />
        <Route exact path="/kutamara" element={<KutamaraPage />} />
        <Route exact path="/balemara" element={<BalemaraPage />} />
        <Route exact path="/sudut-lenggah-puncak" element={<SulengPuncakPage />} />
        <Route exact path="/rumamara" element={<RumamaraPage />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
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
