import { produce } from 'immer'

import { ActionTypes } from "../action"

export interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptDate?: Date
    finishedDate?: Date
}

interface CycleState {
    cycles: Cycle[]
    activeCycleId: string | null
}

export function cyclesReducer(state: CycleState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_CYCLE:
            return produce(state, (dratf) => {
                dratf.cycles.push(action.payload.newCycle)
                dratf.activeCycleId = action.payload.newCycle.id
            })
        case ActionTypes.FINISHED_CURRENT_CYCLE: {
            const cycleIndex = state.cycles.findIndex(cycle => {
                return cycle.id === state.activeCycleId
            })

            if (cycleIndex < 0) {
                return state
            }

            return produce(state, (draft) => {
                draft.cycles[cycleIndex].finishedDate = new Date()
                draft.activeCycleId = null
            })
        }
        case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
            const cycleIndex = state.cycles.findIndex(cycle => {
                return cycle.id === state.activeCycleId
            })

            if (cycleIndex < 0) {
                return state
            }

            return produce(state, (draft) => {
                draft.cycles[cycleIndex].interruptDate = new Date()
                draft.activeCycleId = null
            })
        }
        default:
            return state
    }
}