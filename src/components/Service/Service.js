import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Service = (props) => {
    // Destructuring object.
    const {serviceName, desc, img, duration, certificate, price } = props.service;
    return (
            
        <Col md={3}>
            <Card style={{ width: '19rem', marginBottom: '30px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>{desc.slice(0, 120)}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Course duration: {duration}</ListGroupItem>
                    <ListGroupItem>Certificate: {certificate}</ListGroupItem>
                    <ListGroupItem><h4 className='fw-bold'>Price: {price}</h4></ListGroupItem>
                </ListGroup>
                
            </Card>
        </Col>
    );
};

export default Service;