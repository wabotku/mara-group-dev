import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../assets/css/main.css"
import { Carousel } from 'react-responsive-carousel';
import { Col, Row } from 'reactstrap';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid p-0">
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
                <section className='about-section p-4'>
                    <div className='about-container'>
                        <Row>
                            <Col md={6} style={{textAlign:'center'}}>
                                <img src={require('../assets/image/logo-mara/MARA.png')} width={'70%'} style={{maxWidth:'100%'}} />
                            </Col>
                            <Col md={6}>
                                <h3 className='mb-4' style={{fontWeight:'bold'}}>ABOUT US</h3>
                                <span style={{whi : 'pre-wrap'}}>
                                    Mara Group is a one-stop service and hospitality company at Jakarta and Megamendung, Bogor, Indonesia established in 2022. <br /><br />
                                    The meaning of our group name is Come in Sanskrit, which is also the identity of Mara Group.<br /><br />
                                    Our vision and mission is to invite people to come and feel the experiences offered by the Mara Group in every line of its business.<br /><br />
                                    Mara Group offer a variety of lifestyle, consist of cafe, boutique, salon, multifunctional vanue and villa.<br /><br />
                                    Located in Bintaro, Sektor I for Sudut Lenggah Kitchen & Eatery, Kaingara Boutique and Naira Salon & Spa, meanwhile Kutamara & Villa Bale Mara located in Megamendung, Bogor.
                                </span>
                            </Col>
                        </Row>
                    </div>
                </section>

                <section className='content-section'>
                        <div className='content-grid col-md-12 col-sm-12'>
                            <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                                <div data-content="SUDUT LENGGAH">
                                    <a href='#'>
                                        <img src={require('../assets/image/homepage/suleng.jpg')} />
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
                            <div className='content-item col-lg-4 col-md-4 col-sm-4 p4-p4'>
                                <div data-content="KAET">
                                    <a href='#'>
                                        <img className='p4-p4' src={require('../assets/image/homepage/kaet.jpg')} />
                                    </a>
                                </div>
                                <div data-content="KAET">
                                    <a href='#'>
                                        <img className='p4-p4' src={require('../assets/image/homepage/kaet.jpg')} />
                                    </a>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        );
    }
}

export default LandingPage;