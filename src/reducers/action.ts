import { Cycle } from "./cycles/reducer";

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    FINISHED_CURRENT_CYCLE = 'FINISHED_CURRENT_CYCLE',
    INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE'
}

export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle
        }
    }
}

export function finishedAnActivityCycleAction() {
    return {
        type: ActionTypes.FINISHED_CURRENT_CYCLE,
    }
}

export function interruptCurrentCycleAction() {
    return {
        type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
    }
}