import { ReactNode, createContext, useState } from "react"

interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptDate?: Date
    finishedDate?: Date
}

export interface CreateNewCycleData {
    task: string
    minutesAmount: number
}

interface CycleContextData {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    amountSecondsPassed: number
    setFinishedDateInCycle: () => void
    markCycleAsInactive: () => void
    updateSecondsPassed: (secondsPassed: number) => void
    createNewCycle: (data: CreateNewCycleData) => void
    interruptCyce: () => void
}

interface CyclesContextProp {
    children: ReactNode
}

export const CycleContext = createContext({} as CycleContextData)

export function CyclesContext({ children }: CyclesContextProp) {
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)   
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0) 

    function setFinishedDateInCycle() {
        setCycles((state) => 
            state.map(cycle => {
                if (activeCycleId === cycle.id) {
                    return {...cycle, finishedDate: new Date()}
                } else {
                    return cycle
                }
            })
        )
    }

    function markCycleAsInactive() {
        setActiveCycleId(null)
    } 
    
    function updateSecondsPassed(secondsPassed: number) {
        setAmountSecondsPassed(secondsPassed)
    }

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    function createNewCycle(data: CreateNewCycleData) {
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
    }
    
    function interruptCyce() {
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

    return (
        <CycleContext.Provider value={{
            cycles, 
            activeCycle,
            amountSecondsPassed,
            setFinishedDateInCycle,
            markCycleAsInactive,
            updateSecondsPassed,
            createNewCycle, 
            interruptCyce
        }}>
            {children}
        </CycleContext.Provider>
    )
}