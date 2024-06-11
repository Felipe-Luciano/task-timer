import { useContext } from "react";
import { FormContainer, MinutesAmountInput, ProjectInput } from "./styls";
import { useFormContext } from "react-hook-form";
import { CycleContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
    const { activeCycle } = useContext(CycleContext)
    const { register } = useFormContext()

    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <ProjectInput
                type="text"
                list="task-suggetions"
                id="task"
                placeholder="Dê um nome para o seu projeto"
                {...register("task")}
                disabled={!!activeCycle}
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
                {...register("minutesAmount", { valueAsNumber: true })}
                disabled={!!activeCycle}
            />
            <span>minutos</span>
        </FormContainer>
    )
}