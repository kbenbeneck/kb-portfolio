
import React from 'react';
import { Cube } from './cube/Cube';

const About = ({refProps}) => {
    return(
        <section ref={refProps} className="about-section">
            <h2 className="header">About Me</h2>
            <Cube />
        </section>
    );
};
export default About;

//header
//who i am
//who i was
//how i got here
//what im looking for