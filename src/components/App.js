import './App.css';
import React, { useRef } from 'react';
import About from './About';
import Blog from './Blog';
import Landing from './landing/Landing';
import Nav from './nav/Nav';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Social from './Social';


const App = () => {
    const aboutRef = useRef()
    const scrollCallBack = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth'})
    }
    return(
        <div className="app-bg">
            <div className="ui grid">
                <div className="ui row">
                    <div className="sixteen wide column">
                        <Landing onScroll={scrollCallBack}/>
                    </div>
                    <div className="three wide column">
                        <Nav />
                    </div>
                    <div className="thirteen wide column">
                        
                        <About refProps={aboutRef} />
                        <Blog />
                        <Portfolio />
                        <Skills />
                        <Social />
                    </div>

                </div>

            </div>
            
            
            
        </div>
    );
};
export default App;