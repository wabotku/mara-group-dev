import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class KaingaraPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <section className='kaingara-section'>
                    <div className='content text-center'>
                        <h1 className='mb-5' style={{fontWeight:'bold'}}>KAINGARA</h1>
                        <h1 style={{fontWeight:'bold'}}>#WearWithAPride </h1>
                        <p className='mt-2' style={{display:'inline-grid', fontSize:'35px'}}>
                            <span>
                                Custom Kebaya & Wedding Gowns 
                            </span>
                        </p>
                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Starting Price from IDR 5,000,000* </h3>
                        <p className='deskripsi'>
                           <span> - Custom Kebaya  </span>
                           <span> - Custom Wedding Gowns  </span>
                           <span> - Custom Beskap  </span>
                           <span> - Custom Jas  </span>
                           <span> - Custom Skirt  </span>
                           <span> - Rent Perdana </span>
                           <span className='mt-3'> * Price List 2022  </span>
                        </p>
                        <h3 className='mb-4' style={{fontWeight:'bold'}}>Contact Us for Consultation!</h3>
                        <Row className='mt-5'>
                            <Col md={6} style={{marginBottom:'30px'}}>
                                <a href='https://www.instagram.com/kaingarastudio/' target={'_blank'} style={{color:'black', textDecoration:'none'}}>
                                    <img src={require('../assets/icon/instagram.png')} width='50px' className='mb-2'></img><br />
                                    <span style={{fontSize:'23px'}}>@kaingarastudio </span>
                                </a>
                            </Col>
                            <Col md={6}>
                                <a href='https://wa.me/6282123083303' target={'_blank'} style={{color:'black', textDecoration:'none'}}>
                                    <img src={require('../assets/icon/whatsapp.png')} width='50px' className='mb-2'></img><br />
                                    <span style={{fontSize:'23px'}}>0821-2308-3303</span>
                                </a>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col md={6} style={{marginBottom:'30px'}}>
                                <a href='https://shopee.co.id/kaingarastudio' target={'_blank'} style={{color:'black', textDecoration:'none'}}>
                                    <img src={require('../assets/icon/shopee.png')} width='50px' className='mb-2'></img><br />
                                    <span style={{fontSize:'23px'}}>kaingarastudio </span>
                                </a>
                            </Col>
                            <Col md={6}>
                                <a href='https://tiktok.com/@kaingarastudio' target={'_blank'} style={{color:'black', textDecoration:'none'}}>
                                    <img src={require('../assets/icon/tiktok.png')} width='50px' className='mb-2'></img><br />
                                    <span style={{fontSize:'23px'}}>kaingarastudio</span>
                                </a>
                            </Col>
                        </Row>
                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Location</h3>
                        <img src={require('../assets/icon/pin.png')} width='50px' className='mb-2'></img> 
                        <span style={{fontSize:'23px'}}> 
                            <b>Ruma Mara</b> <br />
                            Jl. Bintaro Utara Blok HI No. 25, Sektor 1, Pesanggrahan, Jakarta Selatan, 12330
                        </span>

                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Google Maps</h3>
                        <a href='https://goo.gl/maps/4kuRT1HEcoMpVsho8' target={'_blank'}>
                            <img src={require('../assets/map/rumamara.png')} width={'300px'}  className='mb-2'></img>
                        </a>

                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Operational Hours</h3>
                        <p className='deskripsi'>
                           <span> Tuesday - Sunday | 9AM - 5PM </span>
                        </p>

                        <h3 className='mt-4 mb-5' style={{fontWeight:'bold'}}>Appointment Only for Sunday & Monday </h3>
                    </div>
                </section>
            </div>
        );
    }
}

export default KaingaraPage;