import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class RumamaraPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <section className='rumamara-section'>
                    <div className='content text-center'>
                        <h1>RUMA MARA</h1>
                        <h3 className='mt-5 mb-4'>One Stop Service at Bintaro, Sektor | Area </h3>
                        <span className='deskripsi'>
                            Your One Stop Solution for Restaurant, Boutique & Salon 
                        </span>
                        
                        <Row>
                            <Col md={4} className='content-item'>
                                <div data-content="SUDUT LENGGAH KITCHEN & EATERY">
                                    <img src={require('../assets/image/rumamara/rumamara1.jpg')} style={{width:'100%', maxHeight:'43.3vw'}}/>
                                </div>
                            </Col>
                            <Col md={4} className='content-item'>
                                <div data-content="KAINGARA STUDIO" >
                                    <img src={require('../assets/image/rumamara/rumamara2.jpg')} style={{width:'100%', maxHeight:'43.3vw'}} />
                                </div>
                            </Col>
                            <Col md={4} className='content-item'>
                                <div data-content="NAIRA SALON & SPA" >
                                    <img src={require('../assets/image/rumamara/rumamara3.jpg')} style={{width:'100%', maxHeight:'43.3vw'}} />
                                </div>
                            </Col>
                        </Row>

                        <h3 className='mt-5 mb-4'>Location</h3>
                        <img src={require('../assets/icon/pin.png')} width='50px' className='mb-2'></img> 
                        <span style={{fontSize:'23px'}}> 
                            <b>Ruma Mara</b> <br />
                            JI. Bintaro Utara Blok HI No. 25, Sektor 1, Pesanggrahan, Jakarta Selatan, 12330 
                        </span>

                        <h3 className='mt-5 mb-4'>Google Maps</h3>
                        <a href='https://goo.gl/maps/4kuRT1HEcoMpVsho8' target={'_blank'}>
                            <img src={require('../assets/map/rumamara.png')} width={'300px'} className='mb-2'></img>
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}

export default RumamaraPage;