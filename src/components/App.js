import React from 'react';
import About from './About';
import Blog from './Blog';
import Landing from './Landing';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Social from './Social';


const App = () => {
    return(
        <div>
            <Landing />
            <About />
            <Blog />
            <Portfolio />
            <Skills />
            <Social />
        </div>
    );
};
export default App;