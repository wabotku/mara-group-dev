import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class SulengPuncakPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <section className='suleng-section'>
                    <div className='content text-center'>
                        <h1>SUDUT LENGGAH PUNCAK</h1>
                        <p className='deskripsi mt-5'>
                            <span>
                                Blessed with fresh air, and surrounded by pine trees.. Sudut Lenggah expand the outlets at Megamendung, Bogor which located inside of KUTAMARA 
                            </span>
                        </p>
                        <h3 className='mt-5 mb-4'>Your favorite Back To Nature Cafe in Town! </h3>
                        <h1>1.5 Hour</h1>
                        <p className='deskripsi'>
                            <span className='mb-5'>from Jakarta </span>
                            <span >
                                We're also serve for Coffee Catering for any Events at <b>KUTAMARA</b>. 
                            </span>
                        </p>
                        
                        <h3 className='mt-5 mb-4'>Contact Us</h3>
                        <a href='https://www.instagram.com/sudutlenggah.puncak/' target={'_blank'}>
                            <img src={require('../assets/icon/instagram.png')} width='50px' className='mb-2'></img><br />
                            <span style={{fontSize:'23px'}}>@sudutlenggah.puncak </span>
                        </a>
                            
                        <h3 className='mt-5 mb-4'>Location</h3>
                        <img src={require('../assets/icon/pin.png')} width='50px' className='mb-2'></img> 
                        <span style={{fontSize:'23px'}}> 
                            <b>Kutamara</b> <br />
                            Jl. Pakancilan, RT O4, RW O4, Kuta, Kec. Megamendung, Bogor, Jawa Barat, 16770.
                        </span>

                        <h3 className='mt-5 mb-4'>Google Maps</h3>
                        <a href='https://goo.gl/maps/57xaRjxJnWxq2Uk78' target={'_blank'}>
                            <img src={require('../assets/map/sulengbintaro.png')} width={'300px'} className='mb-2'></img>
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}

export default SulengPuncakPage;