import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class KutamaraPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <section className='kutamara-section'>
                    <div className='content text-center'>
                        <h1 className='mb-4'>KUTAMARA</h1>
                        <h1 style={{fontWeight:'bold'}}>#CelebrateHereInKutamara </h1>

                        <h3 className='mt-3 mb-4'>Multifunctional Venue</h3>
                        <span className='deskripsi'>
                            ( Engagement, Wedding, Birthday Party, Family or Office Gathering, Photoshoot etc. ) 
                        </span>

                        <h3 className='mt-3 mb-4'>Book & Celebrate Your Moment With Us </h3>
                    </div>
                    <div className='content-grid col-md-12 col-sm-12'>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="" >
                                <a href='#'>
                                    <img src={require('../assets/image/kutamara/kutamara1.jpg')} />
                                </a> 
                            </div>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="" >
                                <a href='#'>
                                    <img src={require('../assets/image/kutamara/kutamara2.jpg')} />
                                </a> 
                            </div>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="">
                                <a href='#'>
                                    <img src={require('../assets/image/kutamara/kutamara3.jpg')} />
                                </a> 
                            </div>
                        </div>
                    </div>
                    <div className='content-grid col-md-12 col-sm-12'>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="" >
                                <a href='#'>
                                    <img src={require('../assets/image/kutamara/kutamara4.jpg')} />
                                </a> 
                            </div>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="" >
                                <a href='#'>
                                    <img src={require('../assets/image/kutamara/kutamara5.jpg')} />
                                </a> 
                            </div>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="">
                                <a href='#'>
                                    <img src={require('../assets/image/kutamara/kutamara6.jpg')} />
                                </a> 
                            </div>
                        </div>
                    </div>
                    <div className='content text-center'>
                        <h3 className='mt-3 mb-4'>Bundling Package</h3>
                        <p className='deskripsi' style={{display:'inline-grid'}}>
                            <span>Venue All Area + Villa 3D2N </span>
                            <span className='mt-1'> IDR 35,000,000,- ++*  </span>
                            <span className='mt-4'> We're open for custom package and you're allowed to use another vendor with our terms & conditions, please do discuss with us for more information!   </span>
                        </p>

                        <h3 className='mt-3 mb-4'>Facilities</h3>
                        <p className='deskripsi' style={{display:'inline-grid'}}>
                            <span> - 6 Hours Duration Event </span>
                            <span> - Dressing Room  </span>
                            <span> - Tiffany Chair 200 Pcs  </span>
                            <span> - Round Table 22 Pcs  </span>
                            <span> - Long Table 14 Pcs  </span>
                            <span> - Electricity 10,500 watt  </span>
                            <span> - Etc.  </span>
                        </p>

                        <h3 className='mt-5 mb-4'>Contact Us</h3>
                        <Row>
                            <Col md={6} style={{marginBottom:'30px'}}>
                                <a href='https://www.instagram.com/kuta.mara/' target={'_blank'}>
                                    <div className='sosmed'>
                                        <img src={require('../assets/icon/instagram.png')} width='50px' className='mb-2'></img><br />
                                        <span style={{fontSize:'23px'}}>@kuta.mara </span>
                                    </div>
                                </a>
                            </Col>
                            <Col md={6}>
                                <a href='https://wa.me/62811388204296' target={'_blank'}>
                                    <div className='sosmed'>
                                        <img src={require('../assets/icon/whatsapp.png')} width='50px' className='mb-2'></img><br />
                                        <span style={{fontSize:'23px'}}>0813-8820-4296 </span>
                                    </div>
                                </a>
                            </Col>
                        </Row>

                        <h3 className='mt-5 mb-4'>Location</h3>
                        <img src={require('../assets/icon/pin.png')} width='50px' className='mb-2'></img> 
                        <span className='deskripsi'> 
                            <b>Kutamara</b> <br />
                            JI. Pakancilan, RT 04, RW O4, Kuta, Kec. Megamendung, Bogor, Jawa Barat, 16770. 
                        </span>

                        <h3 className='mt-5 mb-4'>Google Maps</h3>
                        <a href='https://goo.gl/maps/J9WXeop8wmQLP3p1A' target={'_blank'}>
                            <img src={require('../assets/map/kutamara.png')} className='maps mb-2'></img><br />
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}

export default KutamaraPage;