import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class BalemaraPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <section className='balemara-section'>
                    <div className='content text-center'>
                        <h1 className='mb-4'>BALE MARA VILLA</h1>
                        <h1 style={{fontWeight:'bold'}}>#StaylnBaleMara </h1>
                    </div>
                    <div className='content-grid col-md-12 col-sm-12' >
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="" >
                                <a href='#'>
                                    <img src={require('../assets/image/balemara/balemara1.jpg')} style={{height:'100vh'}}/>
                                </a> 
                            </div>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="" >
                                <a href='#'>
                                    <img src={require('../assets/image/balemara/balemara2.jpg')} style={{height:'100vh'}}/>
                                </a> 
                            </div>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="">
                                <a href='#'>
                                    <img src={require('../assets/image/balemara/balemara3.jpg')} style={{height:'100vh'}}/>
                                </a> 
                            </div>
                        </div>
                    </div>
                    <div className='content text-center'>
                        <h3 className='mt-3 mb-4'>Capacity</h3>
                        <span className='deskripsi'>
                            20 - 30 Pax 
                        </span>

                        <h3 className='mt-3 mb-4'>Price List 2022 </h3>
                        <p className='deskripsi d-inline-grid'>
                            <span> Weekday : IDR 7,000,000,-*/ Night </span>
                            <span className='mt-1'> Weekend : IDR 7,500,000,-*/ Night  </span>
                            <span className='mt-1'> 1 Floor Only : IDR 2,500,000,-*/ Night </span>
                        </p>

                        <h3 className='mt-3 mb-4'>Facilities</h3>
                        <p className='deskripsi d-inline-grid'>
                            <span> - 1 Suite Room  </span>
                            <span> - 6 Rooms </span>
                            <span> - 5 Bathrooms </span>
                            <span> - 2 Living Rooms </span>
                            <span> - 2 Kitchen Set </span>
                            <span> - 1 Rooftop  </span>
                            <span> - Swimming Pool  </span>
                            <span> - 2 Smart TV  </span>
                            <span> - Karaoke Set </span>
                            <span> - WiFi </span>
                            <span> - BBQ Grill </span>
                            <span> - Etc.  </span>
                        </p>

                        <h3 className='mt-5 mb-4'>Contact Us</h3>
                        <Row>
                            <Col md={6} style={{marginBottom:'30px', textAlign:'center'}}>
                                <a href='https://www.instagram.com/villabalemara/' className='sosmed d-inline-grid' target={'_blank'}>
                                    <span><FontAwesomeIcon  icon={['fab', 'instagram']} size='3x'/></span>
                                    <span style={{fontSize:'23px'}}>@villabalemara </span>
                                </a>
                            </Col>
                            <Col md={6}>
                                <a href='https://wa.me/62811388204296' className='sosmed d-inline-grid' target={'_blank'}>
                                    <span><FontAwesomeIcon  icon={['fab', 'whatsapp']} size='3x'/></span>
                                    <span style={{fontSize:'23px'}}>0813-8820-4296 </span>
                                </a>
                            </Col>
                        </Row>

                        <h3 className='mt-5 mb-4'>Location</h3>
                        <img src={require('../assets/icon/pin.png')} width='50px' className='mb-2'></img> 
                        <span className='deskripsi'> 
                            <b>Balemara</b> <br />
                            JI. Pakancilan, RT 04, RW O4, Kuta, Kec. Megamendung, Bogor, Jawa Barat, 16770. 
                        </span>

                        <h3 className='mt-5 mb-4'>Google Maps</h3>
                        <a href='https://goo.gl/maps/FUmkdpXhB85rcMLMA' target={'_blank'}>
                            <img src={require('../assets/map/balemara.png')} className='maps mb-2'></img><br />
                        </a>

                        <h3 className='mt-5 mb-4'>Reservation via WhatsApp or Tiket.com </h3>
                        <a className='deskripsi' href='http://shorturl.at/knpMQ' target={'_blank'}>
                            shorturl.at/knpMQ
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}

export default BalemaraPage;