import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    // Declared a state
    const [services, setServices] = useState([]);

    // Fetch data from root directory
    useEffect(() => {
        fetch('./services.json').then(res => res.json()).then(data => setServices(data));
    }, []);

    return (
        <Container fluid className='py-4 my-4'>
            <h2 className='text-center fw-bold'>Service</h2>
            <Row className='py-4'>
                {
                    services.map(service => <Service key={service.id} service = {service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;