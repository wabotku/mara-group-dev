import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../assets/css/main.css"
import { Carousel } from 'react-responsive-carousel';
import { Col, Row, NavLink } from 'reactstrap';
import Aos from 'aos';
import 'aos/dist/aos.css'
import defaultImage from '../assets/image/default.png';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        Aos.init({
            duration : 1000
        })
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <section className='carousel-section'>
                    <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} interval={3500} showIndicators={false} showStatus={false}>
                        <div>
                            <img src={require('../assets/image/slider-utama/1-SUDUT LENGGAH.jpg')} />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                        <div>
                            <img src={require('../assets/image/slider-utama/2-NAIRA.jpg')} />
                            {/* <p className="legend">Legend 2</p> */}
                        </div>
                        <div>
                            <img src={require('../assets/image/slider-utama/3-KAINGARA.jpg')} />
                            {/* <p className="legend">Legend 3</p> */}
                        </div>
                        <div>
                            <img src={require('../assets/image/slider-utama/4-KAET.jpg')} />
                            {/* <p className="legend">Legend 4</p> */}
                        </div>
                        <div>
                            <img src={require('../assets/image/slider-utama/5-KUTAMARA.jpg')} />
                            {/* <p className="legend">Legend 5</p> */}
                        </div>
                        <div>
                            <img src={require('../assets/image/slider-utama/6-BALEMARA.jpg')} />
                            {/* <p className="legend">Legend 6</p> */}
                        </div>
                        <div>
                            <img src={require('../assets/image/slider-utama/7-SUDUT LENGGAH PUNCAK.jpg')} />
                            {/* <p className="legend">Legend 7</p> */}
                        </div>
                        <div>
                            <img src={require('../assets/image/slider-utama/8-RUMAMARA.jpg')} />
                            {/* <p className="legend">Legend 8</p> */}
                        </div>
                    </Carousel>
                </section>
                <section className='about-section p-3'>
                    <div className='about-container'>
                        <Row>
                            <Col md={6} style={{textAlign:'center'}} data-aos='fade-right'  >
                                <img src={require('../assets/image/logo-mara/MARA.png')} width={'70%'} style={{maxWidth:'100%'}} />
                            </Col>
                            <Col md={6} className='my-auto' data-aos='fade-left' >
                                <h3 className='mb-4' style={{fontWeight:'bold'}}>ABOUT US</h3>
                                <span style={{whiteSpace : 'pre-wrap'}}>
                                    Mara Group is a one-stop service and hospitality company based from Jakarta, Indonesia. <br /><br />
                                    We offer a variety of lifestyle, consist of cafe, boutique, salon, multifunctional venue & villa.<br /><br />
                                    The meaning of Mara is “Come” in Sanskrit, which is also the identity of Mara Group.<br /><br />
                                    Established in 2022, our vision and mission is to invite people to come and feel the experiences offered by Mara Group in every line of it’s business.<br /><br />
                                    Mara Group focus is our enthusiasm by serving customer or guest with prestigious service by our members. We are honored to have the opportunity to serve you passionately.
                                </span>
                            </Col>
                        </Row>
                    </div>
                </section>

                <section className='content-section'>
                        {/* <div className='content-grid col-md-12 col-sm-12'>
                            <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                                <div data-content="SUDUT LENGGAH">
                                    <a href='#'>
                                        <img src={require('../assets/image/homepage/suleng-puncak.jpg')} />
                                    </a> 
                                </div>
                            </div>
                            <div className='content-item col-lg-4 col-md-4 col-sm-4'>
                                <div data-content="NAIRA">
                                    <a href='#'>
                                        <img className='p4-p4' src={require('../assets/image/homepage/naira.jpg')} />
                                    </a> 
                                </div>
                                <div data-content="KAINGARA">
                                    <a href='#'>
                                        <img className='p4-p4' src={require('../assets/image/homepage/kaingara.jpg')} />
                                    </a> 
                                </div>
                            </div>
                            <div className='content-item col-lg-4 col-md-4 col-sm-4'>
                                <div data-content="KAET">
                                    <a href='#'>
                                        <img className='p4-p4' src={require('../assets/image/homepage/kaet.jpg')} />
                                    </a>
                                </div>
                                <div data-content="KUTAMARA">
                                    <a href='#'>
                                        <img className='p4-p4' src={defaultImage} />
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    <div className='content-grid col-md-12 col-sm-12'>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <NavLink href='/naira'>
                            <div data-content="NAIRA SALON & SPA" data-aos='fade-right' >
                                <a href='/naira'>
                                    <img src={require('../assets/image/homepage/naira.jpg')} />
                                </a> 
                            </div>
                            </NavLink>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <NavLink href='/kaet'>
                            <div data-content="KAET" data-aos='fade-down' >
                                <a href='/kaet'>
                                    <img src={require('../assets/image/homepage/kaet.jpg')} />
                                </a> 
                            </div>
                            </NavLink>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <NavLink href='/kaingara'>
                            <div data-content="KAINGARA" data-aos='fade-left' >
                                <a href='/kaingara'>
                                    <img src={require('../assets/image/homepage/kaingara.jpg')} />
                                </a> 
                            </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className='content-grid col-md-12 col-sm-12' >
                        <div className='content-item col-lg-6 col-md-6 col-sm-6' >
                            <NavLink href='/rumamara'>
                            <div data-content="RUMAMARA" data-aos='fade-right' >
                                <a href='/rumamara'>
                                    <img src={require('../assets/image/homepage/rumamara.jpg')} />
                                </a> 
                            </div>
                            </NavLink>
                        </div>
                        <div className='content-item col-lg-6 col-md-6 col-sm-6' >
                            <NavLink href='/sudut-lenggah-bintaro'>
                            <div data-content="SUDUT LENGGAH KITCHEN & EATERY" data-aos='fade-left' >
                                <a href='/sudut-lenggah-bintaro'>
                                    <img src={require('../assets/image/homepage/suleng-bintaro.jpg')} />
                                </a> 
                            </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className='content-grid col-md-12 col-sm-12'>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <NavLink href='/kutamara'>
                            <div data-content="KUTAMARA" data-aos='fade-right' >
                                <a href='/kutamara'>
                                    <img src={require('../assets/image/homepage/kutamara.jpg')} />
                                </a> 
                            </div>
                            </NavLink>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <NavLink href='/balemara'>
                            <div data-content="BALEMARA" data-aos='fade-up' >
                                <a href='/balemara'>
                                    <img src={require('../assets/image/homepage/balemara.jpg')} />
                                </a> 
                            </div>
                            </NavLink>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <NavLink href='/sudut-lenggah-puncak'>
                            <div data-content="SUDUT LENGGAH PUNCAK" data-aos='fade-left' >
                                <a href='/sudut-lenggah-puncak'>
                                    <img src={require('../assets/image/homepage/suleng-puncak.jpg')} />
                                </a> 
                            </div>
                            </NavLink>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default LandingPage;