import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <Row className='py-4'>
            <Col md={6}>
                <h3>Learning Language</h3>
                <br/>
                <p>Learning a new language involves listening, speaking, reading, writing, sometimes even a new alphabet and writing format.</p>
                <p>Instead, what you need is a balanced study plan: a mix of study activities that target both spoken and written language, and gives attention to all three key principles.</p>
                <p>Take courses from best instructors and universities. Courses include recorded auto-graded assignments, video lectures, and community discussion forums. When you complete a course, you’ll be eligible to receive a shareable electronic Course Certificate for a small fee.</p>
                <button className="btn btn-primary">Learn More</button>
            </Col>
            <Col md={6}>
                <img className='img-fluid' src="https://images.pexels.com/photos/6207365/pexels-photo-6207365.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            </Col>            
        </Row>
    );
};

export default Hero;