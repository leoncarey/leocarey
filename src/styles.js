import styled from 'styled-components'

export const Main = styled.main`
    flex: 1;
    width: 100%;

    &:before {
        content: '';
        background-color: #fff0f0;
        position: absolute;
        height: 100%;
        width: 60%;
    }
`

export const Content = styled.section`
    width: 1170px;
    max-width: 95%;
    margin: 0 auto;
`