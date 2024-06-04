import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.75rem;
    }
`

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
export const BaseCountDownButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    color: ${props => props.theme["gray-100"]};
    height: 4rem;
    border-radius: 8px;
    border: 0;
    cursor: pointer;
    font-weight: bold;
    padding: 1rem;
    
    font-size: 1rem;
`

export const StartCountDownButton = styled(BaseCountDownButton)`
    background: ${props => props.theme["green-500"]};

    &:not(:disabled):hover {
        background: ${props => props.theme["green-700"]};;
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`

export const StopCountDownButton = styled(BaseCountDownButton)`
    background: ${props => props.theme["red-500"]};

    &:not(:disabled):hover {
        background: ${props => props.theme["red-700"]};;
    }
`