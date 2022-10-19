import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class NairaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <section className='naira-section'>
                    <div className='content text-center'>
                        <h1>NAIRA SALON & SPA</h1>
                        <p className='deskripsi mt-5'>
                            <span className='mb-3'>
                                Your go to salon at Bintaro Area
                            </span>
                            <span>
                                Full treatment for your Hair, Body, Nails & Face
                            </span>
                        </p>
                        <h3 className='mt-5 mb-4'>Packages</h3>
                        <p className='deskripsi'>
                           <span> - Traditional (Start from IDR 150,000,- )  </span>
                           <span> - Premium (Start from IDR 578,000,- ++ )  </span>
                           <span> - Wedding Treatments ( Start from IDR 1O50,000,- ++ ) </span>
                        </p>
                        <h3 className='mt-5 mb-4'>Contact Us</h3>
                        <Row>
                            <Col md={6} style={{marginBottom:'30px'}}>
                                <a href='https://www.instagram.com/nairasalonandspa/' target={'_blank'}>
                                    <img src={require('../assets/icon/instagram.png')} width='50px' className='mb-2'></img><br />
                                    <span className='deskripsi'>@nairasalonandspa </span>
                                </a>
                            </Col>
                            <Col md={6}>
                                <a href='https://wa.me/6281392948123' target={'_blank'}>
                                    <img src={require('../assets/icon/whatsapp.png')} width='50px' className='mb-2'></img><br />
                                    <span className='deskripsi'>O813-9294-8123</span>
                                </a>
                            </Col>
                        </Row>
                        <h3 className='mt-5 mb-4'>Location</h3>
                        <img src={require('../assets/icon/pin.png')} width='50px' className='mb-2'></img> 
                        <span className='deskripsi'> 
                            <b>Ruma Mara</b> <br />
                            Jl. Bintaro Utara Blok HI No. 25, Sektor 1, Pesanggrahan, Jakarta Selatan, 12330
                        </span>

                        <h3 className='mt-5 mb-4'>Google Maps</h3>
                        <a href='https://goo.gl/maps/57xaRjxJnWxq2Uk78' target={'_blank'}>
                            <img src={require('../assets/map/sulengbintaro.png')} width={'300px'} className='mb-2'></img><br />
                        </a>

                        <h3 className='mt-5 mb-4'>Operational Hours</h3>
                        <p className='deskripsi'>
                           <span> Tuesday - Sunday  </span>
                           <span> 9AM - 7PM </span>
                        </p>

                        <h3 className='mt-5 mb-4'>Booking Appointment to WhatsApp <br /> Reservation via Tiket.com </h3>
                        <p className='deskripsi'>
                            <a href='https://www.tiket.com/to-do/naira-salon-spa' target={'_blank'}>
                                https://www.tiket.com/to-do/naira-salon-spa 
                            </a>
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default NairaPage;