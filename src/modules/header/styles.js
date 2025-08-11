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

    @media screen and (width > 48rem) and (orientation: retrate) {
        height: 4rem;
    
    }

    @media screen and (width > 64rem) (orientation: retrate) {
        height: 4rem;
        padding:0 0 0.625rem 0;
        width: 50vw;
        left: 25%;
    
    }

    @media screen and (min-width: 768px) and (orientation: landscape){
        position: relative;
        left: 0;
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        height: 9rem;
        margin: 0 auto;
        padding-left: 50px;
        padding-bottom: 35px;
    }


    @media screen and (min-width: 1024px) and (orientation: landscape){
        position: relative;
        left: 0;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        height: 9rem;
        margin: 0 auto;
        padding-left: 50px;
        padding-bottom: 35px;
        max-width: 1280px;

    }

`;

export const BoxLeft = styled.div`
    
    left: 1.875rem;
    position: absolute;
    height: 7.5rem;
    align-content: center;

    @media screen and (width > 48rem) {
        left: 3.75rem;
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
        width: 2.5rem;
        height: 2.5rem;
    }

    @media screen and (width > 64rem) and (orientation: landscape) {
        width: 2rem;
        height: 2rem;
    
    }
`;

export const BoxIconUser = styled.span `

    @media screen and (width > 64rem) and (orientation: landscape){
        position: absolute;
        right: 15%;
    
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
        display: flex;
    
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
    padding: 0.16rem 0.8rem;
    border-radius: 0.25rem;
    bottom: 1.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 0.3125rem;

    @media screen and (width > 48rem){
        font-size: var(--title);
        top: 1rem;
        right: 0.3125rem;
    
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

export const ContainNavBar = styled.nav `
    display: none;

    @media screen and (width > 64rem) and (orientation: landscape){
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        left: 0;
        bottom: 0;
        background: var(--first-color);
        height: 40px;
        color: var(--second-color);
        align-items: center;
    
    }

`;

export const SpanNavBar = styled.span `
    background: var(--color-first);
    color: var(--color-second);
    font-family: var(--font-nuckle);
    font-size: var(--title);
`;