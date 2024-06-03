import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, ProjectInput, Separator, StartCountDownButton } from "./styles";
import { useForm } from "react-hook-form";

interface NewCycleFormData {
    task: string
    minutesAmount: number
}

export function Home() {
    const {register, handleSubmit, watch, reset} = useForm<NewCycleFormData>(
        {
            defaultValues: {
                task: '',  
            }
        }
    );

    function handleCreateNewCycle(data: NewCycleFormData) {
        console.log(data);
        reset()
    }

    const task = watch('task')
    const isSubmitDisabled = !task

    return(
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <ProjectInput 
                        type="text" 
                        list="task-suggetions" 
                        id="task" 
                        placeholder="Dê um nome para o seu projeto"
                        {...register("task")}
                    />
                    <datalist id="task-suggetions">
                        <option value="Projeto 1" />
                        <option value="Projeto 2" /> 
                        <option value="Projeto 3" />
                    </datalist>
                    <label htmlFor="minuteAmount">durante</label>
                    <MinutesAmountInput 
                        type="number" 
                        id="minuteAmount" 
                        placeholder="00" 
                        step={5} 
                        min={5} 
                        max={60}
                        {...register("minutesAmount", { valueAsNumber: true})}
                    />
                    <span>minutos</span>
                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartCountDownButton disabled={isSubmitDisabled} type="submit">
                    < Play size={24}/> 
                    Começar
                </StartCountDownButton>
            </form>
        </HomeContainer>
    )
}