import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-primary text-white'>
            <Container>
                <Row className='py-3'>
                    <Col md={4}>
                        <h3>About Us</h3>
                        <p><b>Languagezen</b> is a e learning site. Anyone can learn English, German, Bangla, France, Hindi, Italy and lots of language. Best Teacher, Friendly environment, internship and lots of benefits are includes.</p>
                    </Col>
                    <Col md={4}>
                        <ul>
                        <ol><h3>Contact</h3></ol>
                        <ol>USA, Callifornia 86, Second Avenue, Callifornia</ol>
                            <ol>Tel.: +1 212 458 300 32</ol>
                            <ol>Fax: +1 212 375 24 14</ol>
                            <ol>Email: info@masterstudy.com</ol>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;