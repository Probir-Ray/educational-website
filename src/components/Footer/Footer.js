import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-primary text-white pt-1'>
            <Container className='pt-4'>
                <Row className='py-4'>
                    <Col md={6} lg={4} className="mb-4">
                        <h3>About Us</h3>
                        <p><b>Languagezen</b> is a e learning site. Anyone can learn English, German, Bangla, France, Hindi, Italy and lots of language. Best Teacher, Friendly environment, internship and lots of benefits are includes.</p>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <h3>Running Course</h3>
                        <ul>
                            <li>Basic German Language</li>
                            <li>Japan N3 Course</li>
                            <li>Korean Language Course</li>
                            <li>Bangla Grammer</li>
                        </ul>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <h3>Contact</h3>
                        <ul>
                            <li>Mirpur-10, Near Stadium, Dhaka</li>
                            <li>Tel: 02 773 5325</li>
                            <li>Mobile: 880-17234-00000</li>
                            <li>Email: info@languagezen.com</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <div className='py-4'>
                        <h6 className='text-center'>&copy; 2021 by HCG Lab</h6>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;