import React from 'react'
import { SectionFull } from '../general-styles'
import { Container, Title, ImgBanner } from './styles'

import leoPhoto from './banner-image.jpg'

const Home = () => {
    return (
        <SectionFull>
            <Container>
                <Title>
                    Olá<br />
                    Eu sou<br />
                    <u>Léo Carey</u>
                </Title>

                <ImgBanner src={leoPhoto} />
            </Container>
        </SectionFull>
    )
}

export default Home
