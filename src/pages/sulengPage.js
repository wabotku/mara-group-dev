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
                    <div className='text-center' style={{marginTop:'80px', marginLeft:'20vw', marginRight:'20vw'}}>
                        <h1 style={{fontWeight:'bold'}}>SUDUT LENGGAH BINTARO</h1>
                        <p className='mt-5' style={{display:'inline-grid', fontSize:'23px'}}>
                            <span className='mb-3'>
                                We are ready to serve for your Event from Engagemen, Wedding, Syukuran, Corporate Events, Parties and Gathering*
                            </span>
                            <span>
                                Please contact us and we can customise a menu that suits your needs to bring joy at your event
                            </span>
                        </p>
                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Also Available in Hampers</h3>
                        <span style={{display:'inline-grid', fontSize:'23px'}}>
                            Cofe & Tea Bundling | Siomay | Ayam Bakar Sambal Plecing | Pizza Pepperoni | Iga Bakar | Sate Maranggi | Bebek Goreng | Marmer Cake | exact
                        </span>
                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Terms & Conditions</h3>
                        <p style={{ display:'inline-grid', fontSize:'23px'}}>
                           <span> * Minimum Order 50 Pax for Tea & Beverages </span>
                           <span> * Maximum Order 100 Pax for Food </span>
                           <span> * Price excluded Tax & Service and Handling feel </span>
                           <span> * Booking Fee 50% for Date Blocking </span>
                           <span> * Confirm Menu D-3 </span>
                           <span> * Cancellation Fee </span>
                           <span> * No Food Tasting </span>
                        </p>
                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Contact Us</h3>
                        <Row>
                            <Col>
                                <img src={require('../assets/icon/instagram.png')} width='50px' className='mb-2'></img><br />
                                <span style={{fontSize:'23px'}}>@sudut.lenggah</span>
                            </Col>
                            <Col>
                                <img src={require('../assets/icon/whatsapp.png')} width='50px' className='mb-2'></img><br />
                                <span style={{fontSize:'23px'}}>0821-4416-2323</span>
                            </Col>
                        </Row>
                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Location</h3>
                        <img src={require('../assets/icon/pin.png')} width='50px' className='mb-2'></img> <span style={{fontSize:'23px'}}> <b>Ruma Mara</b> <br />
                        Jl. Bintaro Utara Blok HI No. 25, Sektor 1, Pesanggrahan, Jakarta Selatan, 12330</span>

                        <h3 className='mt-5 mb-4' style={{fontWeight:'bold'}}>Google Maps</h3>
                        <img src={require('../assets/map/sulengbintaro.png')}  className='mb-2'></img><br />

                    </div>
                </section>
            </div>
        );
    }
}

export default SulengPage;