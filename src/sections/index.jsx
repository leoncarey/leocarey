import React from 'react'
import { MainSection } from './general-styles'

import Home from './Home'
import About from './About'

import { ParallaxProvider } from 'react-scroll-parallax';

const Sections = () => {
    return (
        <MainSection>
            <ParallaxProvider>
                <Home />
                <About />
            </ParallaxProvider>
        </MainSection>
    )
}

export default Sections