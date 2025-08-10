import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.header `
    padding: 0.9rem 1.625rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
    background: white;
    z-index: 200;
    height: 3.4375rem;

    @media screen and (width > 48rem) {
        height: 10.625rem;
    
    }

    @media screen and (width > 64rem) {
        justify-content: flex-start;
        padding: 0.3125rem 3.125rem;
    
    }


    @media screen and (width > 64rem) and (orientation: landscape){
        height: 7rem;
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
    

`;

export const StyleIcon = styled(FontAwesomeIcon) `
    width: 1.875rem;
    height: 1.5rem;
    color: var(--first-color);
    padding: 0.625rem 0;

    @media screen and (width > 48rem) {
        width: 2.5rem;
        height: 2.5rem;
    
    }

    @media screen and (width > 64rem) {
        width: 4.375rem;
        height: 4.375rem;
    
    }

    @media screen and (width > 64rem) and (orientation: landscape) {
        width: 2rem;
        height: 2rem;
    
    }
`;

export const Img = styled.img`
    width: 6.25rem;
    display: none;
    
    @media screen and (width > 48rem){
        width: 9.375rem;
    }

    @media screen and (width > 64rem) and (orientation: landscape) {
        width: 5rem;
    
    }

`;

export const BoxRight = styled.div `
    right: 1.875rem;
    position: absolute;
    height: 100%;
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

`;

export const CountCart = styled.span `
    width: 1.25rem;
    height: 1.120rem;
    position: absolute;
    right: 0;
    background: var(--first-color);
    color: var(--second-color);
    font-family: var(--font-nuckle);
    font-size: var(--title);
    padding: 0.16rem 0.8rem 0;
    border-radius: 0.25rem;
    bottom: 1.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 0.3125rem;

    @media screen and (width > 48rem){
        font-size: var(--title);
        top: 1.25rem;
    
    }

    @media screen and (width > 64rem) {
        height: 1.5625rem;
    
    }

    @media screen and (width > 64rem) and (orientation: landscape) {
        height: 1.25rem;
        top: 1.3125rem;
        right: -0.625rem;
        font-size: var(--paragraph);
    }

`;