
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';

const Home = () => {
    // Declare a state
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./service.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])


    return (
        <div className='py-4'>
            <Container>
                <Hero></Hero>
            </Container>

            <Container fluid>
                <div className="card-container mt-4 py-4">
                    <h3 className="text-center fw-bold">Services</h3>
                    <Row className='py-4'>
                        {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                        }
                        <div className='text-center'><button className="btn btn-primary">
                            <Link className='text-white text-decoration-none' to = '/services'>View All</Link></button>
                        </div>
                        
                    </Row>
                    
                </div>
            </Container>

        </div>
    );
};

export default Home;