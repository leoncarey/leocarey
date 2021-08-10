import styled from "styled-components"

export const Container = styled.header`
    width: 100%;
    height: 100vh;
    max-width: 40%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    overflow: hidden;
    padding: 85px 100px 85px 200px;
    vertical-align: baseline;

    .header-wrapper {
        width: 230px;
        position: relative;
    }
`

export const TopHeader = styled.div`
    position: relative;
    z-index: 2;
    padding-bottom: 150px;

    .pagination-header {
        span {
            display: inline-block;
            vertical-align: top;
            font-weight: 700;

            &:first-child {
                width: 25px;
                color: #f44647;
            }

            &:nth-child(2) {
                width: 15px;
            }
        }
    }
`

export const SiteTitle = styled.h2`
    font-size: 0.93rem;
    line-height: 1.56rem;
    letter-spacing: 0.313rem;
    font-weight: 700;
    position: relative;
    display: inline;
    text-transform: uppercase;
    transition: color .35s ease-out;
    cursor: default;

    &:before {
        content: '';
        position: absolute;
        bottom: -5px;
        right: 5px;
        height: 3px;
        width: calc(100% - 5px);
        background-color: #000;
        transition: .35s ease-out;
    }

    &:hover {
        color: #f44647;

        &:before {
            width: 0;
            background-color: #f44647;
        }
    }
`