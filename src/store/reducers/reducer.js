import { INCREMENT, DECREMENT, RESET } from "../constants/actionTypes";

const initialState = 0;

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return action.payload;
        case DECREMENT:
            return action.payload;
        case RESET:
            return action.payload;
        default: 
            return state;
    }
}