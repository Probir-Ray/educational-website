import React from 'react';

const About = () => {
    return (
        <div className='container py-4 my-4'>
            <h2 className='text-center mb-3'>Importance of Foreign Language Learning</h2>
            <p>There are the obvious, everyday advantages to speaking a foreign language, such as impressing your friends, turning around a date that's going badly, and one of the strongest senses of pride and achievement that you can have. It can also open many potential career doors, not only in terms of the range of jobs but also the range of destinations to find a job abroad.</p>
            <img className='img-fluid' src="https://i.imgur.com/EDqPF7I.jpg" alt="" />

            <div className='py-4 my-4'>
                <div className="content">
                    <h4 className='fw-bold text-center'>Advantages of Learning New Language</h4>
                    <p>Learning a new language is a great way to make yourself stand out from the competition. As the world becomes more and more globalized, the demand for language speakers from companies is on the increase as they expand operations into new markets. These companies, therefore, need language speakers to satisfy the demands of their clients across the world. It is much easier to build a relationship with somebody when you speak the same language as them. You can simply connect with them on a more personal level and breakthrough communication barriers if you speak the same language.</p>
                </div>
                <div className="d-flex">
                    <img className='img-fluid w-50 me-4' src="https://i.imgur.com/PD0Kc5F.jpg" alt="" />
                    <img className='img-fluid w-50 me-4' src="https://i.imgur.com/THB8c4U.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;