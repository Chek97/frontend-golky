import { types } from "../types/types";

const initialState = {
    words: []
}

export const textReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getText:
            return {
                ...state,
                 words: [...state.words, action.payload]
            }
        default:
            return state;
    }
}