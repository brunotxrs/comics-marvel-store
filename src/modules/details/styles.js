import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContainerDetails = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--third-color);
    z-index: 250;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--second-color);
    padding: 1.25rem;
    overflow-y: auto;

    @media screen and (min-width: 48rem) {
        padding: 2rem;
    }
`;

export const BoxClose = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 1rem;
`;

export const StyleIconClose = styled(FontAwesomeIcon)`
    width: 1.875rem;
    height: 1.875rem;
    color: var(--first-color);
    cursor: pointer;
`;

export const ImgDetail = styled.img`
    max-width: 15.625rem;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.625rem rgba(0,0,0,0.2);
`;

export const BoxInfo = styled.div`
    text-align: center;
    padding: 1.5rem 0;
    width: 100%;
    max-width: 30rem;
`;

export const H2Detail = styled.h2`
    font-family: var(--font-nuckle);
    font-size: var(--title);
    color: var(--first-color);
    margin-bottom: 0.5rem;
`;

export const PDetail = styled.p`
    font-family: var(--font-nuckle);
    font-size: var(--paragraph);
    color: var(--second-color);
    line-height: 1.5;
`;

export const BoxAction = styled.div`
    width: 100%;
    max-width: 30rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    margin-top: auto;
    background-color: var(--third-color);
    border-top: 0.0625rem solid rgba(255,255,255,0.1);

    @media screen and (min-width: 48rem) {
        flex-direction: row;
    }
`;

export const PriceDetail = styled.p`
    font-family: var(--font-nuckle);
    font-size: var(--subtitle);
    color: var(--first-color);
    font-weight: bold;
`;

export const ButtonAction = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background-color: var(--first-color);
    color: var(--second-color);
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-family: var(--font-nuckle);
    font-size: var(--paragraph);
    transition: background-color 0.3s;

    &:hover {
        background-color: #004d40;
    }

    svg {
        height: 1rem;
    }
`;
