import {ADD,EQUAL,SUB,DIV,RESET,MUL,UPDATE } from './calculatorTypes';

export const equal = (content) => {
    return {
        type: EQUAL,
        payload: content
    }
}

export const add = () => {
    return {
        type: ADD
    }
}

export const sub = () => {
    return {
        type: SUB
    }
}

export const div = () => {
    return {
        type: DIV
    }
}

export const mul = () => {
    return {
        type: MUL
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const update = (content) => {
    return {
        type: UPDATE,
        payload: content
    }
}