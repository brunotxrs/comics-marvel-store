import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.header `
    height: 7.5rem;
    padding: 0.3125rem 0.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--second-color);

    @media screen and (width > 48rem) {
        height: 10.625rem;
    
    }

    @media screen and (width > 64rem) {
        justify-content: flex-start;
        padding: 0.3125rem 3.125rem;
    
    }


    @media screen and (width > 64rem) and (orientation: landscape){
        height: 4.375rem;
        max-width: 80rem;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const BoxLeft = styled.div `
    
    left: 1.875rem;
    position: absolute;
    height: 7.5rem;
    align-content: center;

    @media screen and (width > 48rem) {
        left: 3.75rem;
    }

    @media screen and (width > 64rem) {
        right: 3.75rem;
        justify-self: right;
    }

    @media screen and (width > 64rem) and (orientation: landscape) {
        display: none;
    
    }
    

`

export const StyleIcon = styled(FontAwesomeIcon) `
    width: 1.875rem;
    height: 1.875rem;

    @media screen and (width > 48rem) {
        width: 2.5rem;
        height: 2.5rem;
    
    }

    @media screen and (width > 64rem) {
        width: 4.375rem;
        height: 4.375rem;
    
    }

    @media screen and (width > 64rem) and (orientation: landscape) {
        width: 1.25rem;
        height: 1.25rem;
    
    }
`

export const Img = styled.img`
    width: 6.25rem;
    
    @media screen and (width > 48rem){
        width: 9.375rem;
    }

    @media screen and (width > 64rem) and (orientation: landscape) {
        width: 3.125rem;
    
    }

`;

export const BoxRight = styled.div `
    right: 1.875rem;
    position: absolute;
    height: 7.5rem;
    align-content: center;

    @media screen and (width > 48rem){
        right: 3.75rem;
    
    }

    @media screen and (width > 64rem) {
        right: 10rem;
    
    }

    @media screen and (width > 64rem) and (orientation: landscape) {
        position: relative;
        height: 100%;
    }

`

export const CountCart = styled.span `
    height: 1.375rem;
    position: absolute;
    top: 1.5625rem;
    right: 0.3125rem;
    background: var(--first-color);
    font-family: var(--font-cabinet_grotesk);
    font-size: var(--title);
    padding: 0.0625rem 0.3125rem;
    border-radius: 1.25rem;

    @media screen and (width > 48rem){
        font-size: var(--title);
        top: 1.25rem;
    
    }

    @media screen and (width > 64rem) {
        height: 1.5625rem;
    
    }

    @media screen and (width > 64rem) and (orientation: landscape) {
        height: 1.25rem;
        top: 0.3125rem;
        right: -0.625rem;
        font-size: var(--paragraph);
    }

`