import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";

import { HomeContainer, StartCountDownButton, StopCountDownButton } from "./styles";
import { Countdown } from "./components/Countdown";
import { NewCycleForm } from "./components/NewCycleForm";
import { useContext } from "react";
import { CreateNewCycleData, CycleContext } from "../../contexts/CyclesContext";

export function Home() {
    const { activeCycle, createNewCycle, interruptCyce} = useContext(CycleContext)

    const newCycleForm = useForm<CreateNewCycleData>(
        {
            defaultValues: {
                task: '',
                minutesAmount: 0,
            }
        }
    );

    const { handleSubmit, watch, reset } = newCycleForm

    const task = watch('task')
    const isSubmitDisabled = !task

    function handleCreateNewCycle(data: CreateNewCycleData) {
        createNewCycle(data)
        reset()
    }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <Countdown />
                {activeCycle ?
                    <StopCountDownButton onClick={interruptCyce} type="button">
                        <HandPalm size={24} />
                        Interroper
                    </StopCountDownButton>
                    :
                    <StartCountDownButton disabled={isSubmitDisabled} type="submit">
                        <Play size={24} />
                        Começar
                    </StartCountDownButton>
                }
            </form>
        </HomeContainer>
    )
}