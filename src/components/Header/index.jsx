import React from 'react'
import { Container } from './styles'

import Menu from '../Menu'

const Header = () => {
    return (
        <Container>
            <div>Top</div>

            <Menu />

            <div>Bottom</div>
        </Container>
    )
}

export default Header
