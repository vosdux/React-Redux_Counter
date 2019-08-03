import { INCREMENT, DECREMENT, RESET } from "../constants/actionTypes";


export const incrementAction = (state) => {
    return {
        type: INCREMENT,
        payload: ++state
    }
}

export const decrementAction = (state) => {
    return {
        type: DECREMENT,
        payload: --state
    }
}

export const resetAction = () => {
    return {
        type: RESET,
        payload: 0
    }
}