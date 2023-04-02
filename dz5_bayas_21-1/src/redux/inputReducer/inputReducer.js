
import {types} from "../types/types";

const initialState = {
    input: '',
    list: []
}

export default function inputReducer(state = initialState, action){
    switch (action.type) {
        case types.ADDINP:
            return {...state, list: [...state.list, state.list.length > 0
                    ? state.list[state.list.length - 1]+', '+action.payload
                    : action.payload
                ]}
        case types.CLEAR:
            return {input: '', list: []}
        case types.TARGET:
            return {...state, input: action.payload}
        default: return state
    }
}