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