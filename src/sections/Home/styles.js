import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    height: 100vh;
`

export const InnerContainer = styled.div`
    width: calc(100% + 230px) !important;
    margin-right: -230px;
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    height: 100%;

    .text-title-banner {
        position: absolute;
        z-index: 1;
        left: 0;
    }
`


export const Title = styled.h1`
    font-size: 9rem;
    line-height: 9rem;
    font-weight: 800;
    color: #F44647;
    letter-spacing: -0.25rem;

    u {
        font-weight: 800;
        color: #F44647;
    }
`

export const ImgBanner = styled.img`
    width: 536px;
    max-width: 100%;
    max-height: calc(100vh - 120px);
    object-fit: cover;
    border: none;
    display: block;
`
