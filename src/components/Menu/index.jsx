import React from 'react'
import { Container, MenuNavigation } from './styles'

const Menu = () => {
    return (
        <Container>
            <div class="menu-wrapper">
                <MenuNavigation id="header-main-menu">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>

                        <li>
                            <a href="#about">Sobre</a>
                        </li>

                        <li>
                            <a href="#services">Serviços</a>
                        </li>

                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>

                        <li>
                            <a href="#skills">Skills</a>
                        </li>

                        <li>
                            <a href="#contact">Contato</a>
                        </li>
                    </ul>
                </MenuNavigation>
            </div>
        </Container>
    )
}

export default Menu