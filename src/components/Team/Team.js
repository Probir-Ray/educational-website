import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

const Team = () => {
    // Declared state for teachers array
    const [teachers, setTeachers] = useState([]);

    // Fetch team information
    useEffect(() => {
        fetch('./team.json').then(res => res.json()).then(data => setTeachers(data));
    }, []);

    return (
        <Container fluid className='py-4 my-4'>
            <h2 className='text-center'>Our Team</h2>
            <Row className='py-4'>
                {
                    teachers.map(teacher => <Teacher key={teacher.id} teacher={teacher}></Teacher>)
                }
            </Row>
        </Container>
    );
};

export default Team;