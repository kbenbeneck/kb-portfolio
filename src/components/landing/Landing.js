import './Landing.css';
import React from 'react';
const Landing = ({onScroll}) => {
    
    return(
        <section className="landing-zone">
            <div className="greeting-flex">
                
                    Hello, I'm Karl Benbeneck.
                    <br />
                    I'm a full-stack web developer.
                
                <button className="ui button" onClick={() => {onScroll()}}>
                    View my work
                </button>
            </div>
        </section>
    );
};
export default Landing;
//cool background
//greeting
//button to main
