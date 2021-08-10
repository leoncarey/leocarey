import React from 'react'
import { Container, TopHeader, SiteTitle } from './styles'

import Menu from '../Menu'

const Header = () => {
    return (
        <Container>
            <div class="header-wrapper">
                <TopHeader>
                    <div class="pagination-header">
                        <span class="current-number">01</span>
                        <span>/</span>
                        <span class="total-sections-number">07</span>
                    </div>
                </TopHeader>

                <SiteTitle>Leonardo Carey</SiteTitle>

                <Menu />
            </div>
        </Container>
    )
}

export default Header
