import { HandPalm, Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { differenceInSeconds } from 'date-fns'

import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, ProjectInput, Separator, StartCountDownButton, StopCountDownButton } from "./styles";

interface NewCycleFormData {
    task: string
    minutesAmount: number
}

interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptDate?: Date
    finishedDate?: Date
}

export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const {register, handleSubmit, watch, reset} = useForm<NewCycleFormData>(
        {
            defaultValues: {
                task: '',
                minutesAmount: 0,  
            }
        }
    );

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)
    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
    
    useEffect(() => {
        let interval: number 
        if(activeCycle) {
            interval = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), activeCycle.startDate)
                
                if(secondsDifference >= totalSeconds) {
                    setCycles((state) => 
                        state.map(cycle => {
                            if (activeCycleId === cycle.id) {
                                return {...cycle, finishedDate: new Date()}
                            } else {
                                return cycle
                            }
                        })
                    )
                    setAmountSecondsPassed(totalSeconds)
                    setActiveCycleId(null)
                    clearInterval(interval)
                } else {
                    setAmountSecondsPassed(secondsDifference)
                }
            }, 1000)
        }

        return (() => {
            clearInterval(interval)
        })
    }, [activeCycle, activeCycleId, totalSeconds])

    function handleCreateNewCycle(data: NewCycleFormData) {
        const id = String(new Date().getTime())

        const cycle:Cycle = {
            id, 
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }

        setCycles((state) => [...state, cycle])
        setActiveCycleId(id)
        setAmountSecondsPassed(0)
        reset()
    }
    
    function handleInterruptCyce() {
        setCycles((state) => 
            state.map(cycle => {
                if (activeCycleId === cycle.id) {
                    return {...cycle, interruptDate: new Date()}
                } else {
                    return cycle
                }
            })
        )

        setActiveCycleId(null)
    }

    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    const minutesAmount = Math.floor(currentSeconds/60)
    const secondsAmount = currentSeconds % 60 

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
        document.title = `Task timer - ${minutes}:${seconds}`
    }, [minutes, seconds])

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
                        disabled= {!!activeCycle}
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
                        min={1} 
                        max={60}
                        {...register("minutesAmount", { valueAsNumber: true})}
                        disabled= {!!activeCycle}
                    />
                    <span>minutos</span>
                </FormContainer>

                <CountDownContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CountDownContainer>

                {activeCycle ? 
                    <StopCountDownButton onClick={handleInterruptCyce} type="button">
                        <HandPalm size={24}/> 
                        Interroper
                    </StopCountDownButton>
                    :
                    <StartCountDownButton disabled={isSubmitDisabled} type="submit">
                        <Play size={24}/> 
                        Começar
                    </StartCountDownButton>
                }

                
            </form>
        </HomeContainer>
    )
}