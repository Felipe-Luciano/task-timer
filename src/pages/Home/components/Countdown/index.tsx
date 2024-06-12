import { useContext } from "react";
import { CountDownContainer, Separator } from "./styles";
import { CycleContext } from "../../../../contexts/CyclesContext";

export function Countdown() {
    const { 
        minutes,
        seconds
    } = useContext(CycleContext)

    return (
        <CountDownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountDownContainer>
    )
}