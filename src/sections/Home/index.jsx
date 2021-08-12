import React from 'react'
import { Container, InnerContainer, Title, ImgBanner } from './styles'

import { Parallax } from 'react-scroll-parallax';
import leoPhoto from './banner-image.jpg'

const Home = () => {
    return (
        <Container>
            <InnerContainer>
                <Parallax className="text-title-banner" x={[20, -20]} y={[-20, 20]} tagOuter="div">
                    <Title>
                        Olá<br />
                        Eu sou<br />
                        <u>Léo Carey</u>
                    </Title>
                </Parallax>

                <Parallax className="image-banner" x={[-20, 20]} y={[-20, 20]} tagOuter="figure">
                    <ImgBanner src={leoPhoto} />
                </Parallax>
            </InnerContainer>
        </Container>
    )
}

export default Home
