import styled from "styled-components";

export const HistoryContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 3.125rem;
    gap: 2rem;
    max-height: 100%;

    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.6;
        color: ${props => props.theme["gray-100"]}
    }
`

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th {
            font-weight: bold;
            background-color:  ${props => props.theme["gray-600"]};
            height: 3.375rem;
            text-align: left;
            color: ${props => props.theme["gray-100"]};
            padding: 1rem 0;
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }

            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }
        }

        td {
            background-color:  ${props => props.theme["gray-700"]};
            border-top: 4px solid ${props => props.theme["gray-800"]};
            height: 3.375rem;
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child{
                padding-left: 1.5rem;
                width: 50%;
            }

            &:last-child {
                padding-right: 1.5rem;
            }
        }
    }
`

const STATUS_COLORS = {
    green: 'green-500',
    yellow: 'yellow-500',   
    red: 'red-500',
} as const

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
    }
`