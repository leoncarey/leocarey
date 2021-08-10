import React from 'react'
import { Container, MenuNavigation } from './styles'

const Menu = () => {
    return (
        <Container>
            <div class="menu-wrapper">
                <MenuNavigation id="header-main-menu">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>

                        <li>
                            <a href="#">Sobre</a>
                        </li>

                        <li>
                            <a href="#">Serviços</a>
                        </li>

                        <li>
                            <a href="#">Portfolio</a>
                        </li>

                        <li>
                            <a href="#">Skills</a>
                        </li>

                        <li>
                            <a href="#">Contato</a>
                        </li>
                    </ul>
                </MenuNavigation>
            </div>
        </Container>
    )
}

export default Menu