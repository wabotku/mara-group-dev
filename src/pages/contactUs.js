import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <section className='contactus-section'>
                    <div className='content text-center'>
                        <h1 className='mb-5' style={{fontWeight:'bold'}}>GET IN TOUCH</h1>
                        <h2 style={{fontWeight:'bold'}}>PT. MARA DIERJA TARA</h2>
                        <p className='deskripsi' style={{display:'inline-grid'}}>
                            <span> Jl. Bintaro Utara Blok H1 No. 25, Sektor 1, Pesanggrahan, Jakarta Selatan, 12330 </span>
                            <span className='mt-4'>
                                <a href='https://www.instagram.com/maragroupjkt/' target={'_blank'} className='sosmed-cu'>
                                    <img src={require('../assets/icon/instagram.png')} width='50px' className='mb-2'></img> 
                                </a>
                                |
                                <a href='https://tiktok.com/@kaingarastudio' target={'_blank'} className='sosmed-cu'>
                                    <img src={require('../assets/icon/tiktok.png')} width='50px' className='mb-2'></img> 
                                </a>
                                |
                                <a href='https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=group.rumamara@gmail.com' target={'_blank'} className='sosmed-cu'>
                                    <img src={require('../assets/icon/gmail.png')} width='50px' className='mb-2'></img>
                                </a>
                            </span>
                            <span className='mt-4'>Let us know if you have any questions to our accounts below : </span>
                            <span className='mt-4'> Instagram : @maragroupjkt </span>
                            <span> Tiktok : @maragroupjkt </span>
                            <span> Gmail : group.rumamara@gmail.com </span>
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default ContactUs;