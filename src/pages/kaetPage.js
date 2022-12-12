import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class KaetPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <section className='kaet-section'>
                    <div className='content text-center'>
                        <h1 className='mb-4'>KAET</h1>
                        <h1 style={{fontWeight:'bold'}}>#ShopWithKaetScarves </h1>
                        <p className='deskripsi'>
                            <span>
                                One Stop Mosleem Apparrel's Shop in Town 
                            </span>
                        </p>
                    </div>

                    <div className='content-grid col-md-12 col-sm-12'>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="" >
                                <a href='#'>
                                    <img src={require('../assets/image/kaet/KAET (1).jpg')} />
                                </a> 
                            </div>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="" >
                                <a href='#'>
                                    <img src={require('../assets/image/kaet/KAET (2).jpg')} />
                                </a> 
                            </div>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="">
                                <a href='#'>
                                    <img src={require('../assets/image/kaet/KAET (3).jpg')} />
                                </a> 
                            </div>
                        </div>
                    </div>
                    <div className='content-grid col-md-12 col-sm-12'>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="" >
                                <a href='#'>
                                    <img src={require('../assets/image/kaet/KAET (4).jpg')} />
                                </a> 
                            </div>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="" >
                                <a href='#'>
                                    <img src={require('../assets/image/kaet/KAET (5).jpg')} />
                                </a> 
                            </div>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="">
                                <a href='#'>
                                    <img src={require('../assets/image/kaet/KAET (6).jpg')} />
                                </a> 
                            </div>
                        </div>
                    </div>

                    <div className='content text-center' style={{marginLeft:'25vw',marginRight:'25vw'}}>
                        <h3 className='mb-4'>Your Modest Wear</h3>

                        <h3 className='mt-3 mb-4'>Collections</h3>
                        <p className='deskripsi d-inline-grid'>
                            <span> - Iman Prayer Set </span>
                            <span> - Sky In Heritage ( Hijab ) </span>
                        </p>

                        <h3 className='mt-3 mb-4'>Available In</h3>
                        <p className='deskripsi d-inline-grid'>
                            <span> Emerald, Hazelnut Brown, Light Grey, Pink Blush, Turquoise, Lilac for <b>Iman Prayer Set</b> </span>
                            <span className='mt-3'> Hawthorn Rose, Lotus, Dried Moss, Granite Green, Pageant Blue for <b>Sky In Heritage (Hijab)</b> </span>
                        </p>

                        <h3 className='mt-5 mb-4'>Chic & Versatile</h3>

                        <h3 className='mt-5 mb-4'>Shop Online </h3>
                        <div className='text-center'>
                            <a href='https://shopee.co.id/kaetscarves' target={'_blank'} >
                                <span><FontAwesomeIcon  icon={['fa', 'store']} size='3x'/><br /></span>
                                <span style={{fontSize:'23px'}}>kaetscaves </span>
                            </a>
                        </div>

                        <h3 className='mt-5 mb-4'>Contact Us</h3>
                        <Row>
                            <Col md={6} style={{marginBottom:'30px'}}>
                                <a href='https://wa.me/6282123083303' className='sosmed d-inline-grid' target={'_blank' }>
                                    <span><FontAwesomeIcon  icon={['fab', 'whatsapp']} size='3x'/></span>
                                    <span style={{fontSize:'23px'}}>0821-2308-3303</span>
                                </a>
                            </Col>
                            <Col md={6}>
                                <a href='https://www.instagram.com/kaetscarves.id/' className='sosmed d-inline-grid' target={'_blank' }>
                                    <span><FontAwesomeIcon  icon={['fab', 'instagram']} size='3x'/></span>
                                    <span style={{fontSize:'23px'}}>@kaetscarves.id</span>
                                </a>
                            </Col>
                        </Row>
                    </div>
                </section>
            </div>
        );
    }
}

export default KaetPage;