import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

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
                    </div><div className='content-grid col-md-12 col-sm-12'>
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

                    <div className='content text-center'>
                        <h3 className='mb-4'>Your Modest Wear</h3>

                        <h3 className='mt-3 mb-4'>Collections</h3>
                        <p className='deskripsi' style={{display:'inline-grid'}}>
                            <span> - Iman Prayer Set </span>
                            <span> - Sky In Heritage ( Hijab ) </span>
                        </p>

                        <h3 className='mt-3 mb-4'>Available In</h3>
                        <p className='deskripsi'>
                            <span> Emerald, Hazelnut Brown, Light Grey, Pink Blush, Turquoise, Lilac for <b>Iman Prayer Set</b> </span>
                            <span className='mt-3'> Hawthorn Rose, Lotus, Dried Moss, Granite Green, Pageant Blue for <b>Sky In Heritage (Hijab)</b> </span>
                        </p>

                        <h3 className='mt-3 mb-4'>Chic & Versatile</h3>

                        <h3 className='mt-3 mb-4'>Shop Online </h3>
                        <a href='https://shopee.co.id/kaetscaves' target={'_blank'} >
                            <div className='sosmed'>
                                <img src={require('../assets/icon/shopee.png')} width='50px' className='mb-2'></img><br />
                                <span style={{fontSize:'23px'}}>kaetscaves </span>
                            </div>
                        </a>

                        <h3 className='mt-5 mb-4'>Contact Us</h3>
                        <Row>
                            <Col md={6} style={{marginBottom:'30px'}}>
                                <a href='https://wa.me/6282123083303' target={'_blank'} >
                                    <div className='sosmed'>
                                        <img src={require('../assets/icon/whatsapp.png')} width='50px' className='mb-2'></img><br />
                                        <span style={{fontSize:'23px'}}>0821-2308-3303</span>
                                    </div>
                                </a>
                            </Col>
                            <Col md={6}>
                                <a href='https://www.instagram.com/kaetscarves.id/' target={'_blank'} >
                                    <div className='sosmed'>
                                        <img src={require('../assets/icon/instagram.png')} width='50px' className='mb-2'></img><br />
                                        <span style={{fontSize:'23px'}}>@kaetscarves.id</span>
                                    </div>
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