import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Service = (props) => {
    // Destructuring object.
    const {serviceName, desc, img, duration, Certificate, price } = props.service;
    return (
            
        <Col md={6} lg={4} xl={3}>
            <Card style={{ width: '100%', marginBottom: '45px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>{desc.slice(0, 120)}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Course duration: {duration}</ListGroupItem>
                    <ListGroupItem>Certificate: {Certificate}</ListGroupItem>
                    <ListGroupItem><h4 className='fw-bold'>Price: {price}</h4></ListGroupItem>
                </ListGroup>
                
            </Card>
        </Col>
    );
};

export default Service;