import styled from "styled-components"

export const Container = styled.div`
    margin-top: 50px;

    .menu-wrapper {
        position: relative;
    }
`

export const MenuNavigation = styled.nav`
    display: block;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        a {
            cursor: pointer;
            text-decoration: none;
        }

        &.current a, a:hover {
            color: #f44647;
        }
    }
`