import styled from "styled-components"

export const CountDownContainer = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 10rem;
    line-height: 8rem;
    font-weight: bold;
    font-family: 'Roboto Mono', monospace;
    color: ${props => props.theme["gray-100"]};
    span {
        padding: 2rem 1rem;
        background: ${props => props.theme["gray-700"]};;
        border-radius: 8px;
    }
`

export const Separator = styled.div`
    padding: 2rem 0;
    color: ${props => props.theme["green-500"]};

    width: 4rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
`