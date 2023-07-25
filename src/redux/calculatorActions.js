import {EQUAL,RESET,UPDATE} from './calculatorTypes';

export const equal = () => {
    return {
        type: EQUAL
    }
}

export const update = (content) => {
    return {
        type: UPDATE,
        payload: content
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}
