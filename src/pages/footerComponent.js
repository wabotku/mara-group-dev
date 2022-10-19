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
                    <Row style={{textAlign:'center'}}>
                        <Col md={6}>
                            Rumamara Group.
                        </Col>
                        <Col md={6} >
                            &copy; Copyright 2022 Rumamara Group. All Rights Reserved.
                        </Col>
                    </Row>
                </section>
            </div>
        );
    }
}

export default FooterComponent;