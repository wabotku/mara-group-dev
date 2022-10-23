import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../assets/css/main.css"

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid p-0" >
                <section className='footer-section' >
                    <div className='row'>
                        <div className='col-md-6 left'>
                            <span>Rumamara Group.</span>
                        </div>
                        <div className='col-md-6 right'>
                            <span>&copy; Copyright 2022 Rumamara Group. All Rights Reserved.</span>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default FooterComponent;