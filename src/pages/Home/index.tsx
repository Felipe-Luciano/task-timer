import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, ProjectInput, Separator, StartCountDownButton } from "./styles";

export function Home() {
    return(
        <HomeContainer>
            <form >
                <FormContainer>
                    <label htmlFor="projectName">Vou trabalhar em</label>
                    <ProjectInput type="text" list="task-suggetions" id="projectName" placeholder="Dê um nome para o seu projeto"/>
                    <datalist id="task-suggetions">
                        <option value="Projeto 1" />
                        <option value="Projeto 2" /> 
                        <option value="Projeto 3" />
                    </datalist>
                    <label htmlFor="minuteAmount">durante</label>
                    <MinutesAmountInput type="number" id="minuteAmount" placeholder="00" step={5} min={5} max={60}/>
                    <span>minutos</span>
                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartCountDownButton type="submit">
                    < Play size={24}/> 
                    Começar
                </StartCountDownButton>
            </form>
        </HomeContainer>
    )
}