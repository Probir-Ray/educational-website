import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Teacher = (props) => {
    const {name, teachingSubject, courseHour, img} = props.teacher;
    return (
        <Col md={4}>
            <Card style={{ width: 'auto', marginBottom: '30px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body className='text-center'>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>Language or Course: {teachingSubject}</Card.Text>
                    <Card.Text>Course Duration: {courseHour}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Teacher;