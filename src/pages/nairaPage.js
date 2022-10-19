import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class SulengPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <section className='suleng-section'>
                    <div className='content text-center'>
                        <h1 style={{fontWeight:'bold'}}>NAIRA SALON & SPA</h1>
                        <p className='mt-5' style={{display:'inline-grid', fontSize:'23px'}}>
                            <span className='mb-3'>
                                Your go to salon at Bintaro Area
                            </span>
                            <span>
                                Full treatment for your Hair, Body, Nails & Face
                            </span>
                        </p>
                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Packages</h3>
                        <p style={{ display:'inline-grid', fontSize:'23px'}}>
                           <span> - Traditional (Start from IDR 150,000,- )  </span>
                           <span> - Premium (Start from IDR 578,000,- ++ )  </span>
                           <span> - Wedding Treatments ( Start from IDR 1O50,000,- ++ ) </span>
                        </p>
                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Contact Us</h3>
                        <Row>
                            <Col md={6} style={{marginBottom:'30px'}}>
                                <a href='https://www.instagram.com/nairasalonandspa/' target={'_blank'} style={{color:'black', textDecoration:'none'}}>
                                    <img src={require('../assets/icon/instagram.png')} width='50px' className='mb-2'></img><br />
                                    <span style={{fontSize:'23px'}}>@nairasalonandspa </span>
                                </a>
                            </Col>
                            <Col md={6}>
                                <a href='https://wa.me/6281392948123' target={'_blank'} style={{color:'black', textDecoration:'none'}}>
                                    <img src={require('../assets/icon/whatsapp.png')} width='50px' className='mb-2'></img><br />
                                    <span style={{fontSize:'23px'}}>O813-9294-8123</span>
                                </a>
                            </Col>
                        </Row>
                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Location</h3>
                        <img src={require('../assets/icon/pin.png')} width='50px' className='mb-2'></img> <span style={{fontSize:'23px'}}> <b>Ruma Mara</b> <br />
                        Jl. Bintaro Utara Blok HI No. 25, Sektor 1, Pesanggrahan, Jakarta Selatan, 12330</span>

                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Google Maps</h3>
                        <a href='https://goo.gl/maps/57xaRjxJnWxq2Uk78' target={'_blank'}>
                            <img src={require('../assets/map/sulengbintaro.png')} width={'300px'} className='mb-2'></img><br />
                        </a>

                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Operational Hours</h3>
                        <p style={{ display:'inline-grid', fontSize:'23px'}}>
                           <span> Tuesday - Sunday  </span>
                           <span> 9AM - 7PM </span>
                        </p>

                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Booking Appointment to WhatsApp <br /> Reservation via Tiket.com </h3>
                        <p style={{ display:'inline-grid', fontSize:'23px'}}>
                            <a href='https://www.tiket.com/to-do/naira-salon-spa' target={'_blank'} style={{color:'black', textDecoration:'none'}}>
                                https://www.tiket.com/to-do/naira-salon-spa 
                            </a>
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default SulengPage;