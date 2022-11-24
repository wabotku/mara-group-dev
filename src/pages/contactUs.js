import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                        <p className='deskripsi d-inline-grid'>
                            <span> Jl. Bintaro Utara Blok H1 No. 25, Sektor 1, Pesanggrahan, Jakarta Selatan, 12330 </span>
                            <span className='mt-4'>
                                <table className='table'>
                                    <tr>
                                        <td>
                                            <a href='https://www.instagram.com/maragroupjkt/' target={'_blank'} className='sosmed'>
                                                <FontAwesomeIcon  icon={['fab', 'instagram']} size='2x'/>
                                            </a>
                                        </td>
                                        <td style={{borderRight:'1px solid black', borderLeft:'1px solid black'}}>
                                            <a href='https://tiktok.com/@kaingarastudio' target={'_blank'} className='sosmed'>
                                                <FontAwesomeIcon  icon={['fab', 'tiktok']} size='2x'/>
                                            </a>
                                        </td>
                                        <td>
                                            <a href='https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=group.rumamara@gmail.com' target={'_blank'} className='sosmed'>
                                                <FontAwesomeIcon  icon={['fa', 'envelope']} size='2x'/>
                                            </a>
                                        </td>
                                    </tr>
                                </table>
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