import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import "../assets/css/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

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
                        <h3 className='mt-5 mb-2'>One Stop Service at Bintaro, Sektor 1 Area </h3>
                        <span className='deskripsi mb-5'>
                            Your One Stop Solution for Restaurant, Boutique & Salon 
                        </span>
                        <div className='content-grid col-md-12 col-sm-12'>
                            <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                                <div data-content="SUDUT LENGGAH KITCHEN & EATERY" >
                                    <a href='#'>
                                        <img src={require('../assets/image/rumamara/rumamara1.jpg')} />
                                    </a> 
                                </div>
                            </div>
                            <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                                <div data-content="KAINGARA STUDIO" >
                                    <a href='#'>
                                        <img src={require('../assets/image/rumamara/rumamara2.jpg')} />
                                    </a> 
                                </div>
                            </div>
                            <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                                <div data-content="NAIRA SALON & SPA">
                                    <a href='#'>
                                        <img src={require('../assets/image/rumamara/rumamara3.jpg')} />
                                    </a> 
                                </div>
                            </div>
                        </div>

                        <h3 className='mt-5 mb-4'>Location</h3>
                        <img src={require('../assets/icon/pin.png')} width='50px' className='mb-2'></img> 
                        <span style={{fontSize:'23px'}}> 
                            <b>Ruma Mara</b>
                            <p style={{marginLeft:'22vw', marginRight:'22vw'}}>JI. Bintaro Utara Blok HI No. 25, Sektor 1, Pesanggrahan, Jakarta Selatan, 12330 </p>
                        </span>

                        <h3 className='mt-5 mb-4'>Google Maps</h3>
                        <a href='https://goo.gl/maps/4kuRT1HEcoMpVsho8' target={'_blank'}>
                            <img src={require('../assets/map/rumamara.png')} className='maps mb-2'></img>
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}

export default RumamaraPage;