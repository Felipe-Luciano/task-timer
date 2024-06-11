import { ReactNode, createContext, useEffect, useReducer, useState } from "react"
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer"
import {
    addNewCycleAction,
    finishedAnActivityCycleAction,
    interruptCurrentCycleAction
} from "../reducers/action"
import { differenceInSeconds } from "date-fns"

export interface CreateNewCycleData {
    task: string
    minutesAmount: number
}

interface CycleContextData {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    amountSecondsPassed: number
    finishedCurrentCycle: () => void
    updateSecondsPassed: (secondsPassed: number) => void
    createNewCycle: (data: CreateNewCycleData) => void
    interruptCurrentCycle: () => void
}

interface CyclesContextProp {
    children: ReactNode
}

export const CycleContext = createContext({} as CycleContextData)

export function CyclesContext({ children }: CyclesContextProp) {
    const [cyclesState, dispatch] = useReducer(cyclesReducer,
        {
            cycles: [],
            activeCycleId: null
        },
        (initialState) => {
            const storedStateAsJSON = localStorage.getItem('@task-timer:cycles-state-1.0.0')

            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON)
            }

            return initialState
        }
    )

    const { cycles, activeCycleId } = cyclesState
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {

        if(activeCycle) {
            return differenceInSeconds(new Date(), activeCycle.startDate)
        }
        return 0
    })

    useEffect(() => {
        const stateAsJSON = JSON.stringify(cyclesState)

        localStorage.setItem('@task-timer:cycles-state-1.0.0', stateAsJSON)
    }, [cyclesState])

    function finishedCurrentCycle() {
        dispatch(finishedAnActivityCycleAction())
    }

    function updateSecondsPassed(secondsPassed: number) {
        setAmountSecondsPassed(secondsPassed)
    }

    function createNewCycle(data: CreateNewCycleData) {
        const id = String(new Date().getTime())

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }

        dispatch(addNewCycleAction(newCycle))

        setAmountSecondsPassed(0)
    }

    function interruptCurrentCycle() {
        dispatch(interruptCurrentCycleAction())
    }

    return (
        <CycleContext.Provider value={{
            cycles,
            activeCycle,
            amountSecondsPassed,
            finishedCurrentCycle,
            updateSecondsPassed,
            createNewCycle,
            interruptCurrentCycle
        }}>
            {children}
        </CycleContext.Provider>
    )
}