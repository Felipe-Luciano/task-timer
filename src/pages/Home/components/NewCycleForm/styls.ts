import styled from "styled-components";

export const FormContainer = styled.div`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 160%;
    color: ${props => props.theme["gray-100"]};
`

const inputDefault = styled.input`
    background: transparent;
    height: 2.5rem;
    font-size: 1.125rem;
    color: ${props => props.theme["gray-100"]};
    border: 0;
    font-weight: bold;
    padding: 0 0.5rem;
    border-bottom: 2px solid ${props => props.theme["gray-500"]};

    &::placeholder {
        color: ${props => props.theme["gray-500"]};
    }

    &:focus {
        box-shadow: none;
        border-color: ${props => props.theme["green-500"]};
    }
`

export const ProjectInput = styled(inputDefault)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`

export const MinutesAmountInput = styled(inputDefault)`
    width: 4rem;
`