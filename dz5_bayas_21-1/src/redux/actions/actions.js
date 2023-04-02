import {types} from "../types/types";


export function addInput(inp){
    return {
        type: types.ADDINP,
        payload: inp
    }
}

export function clearInp() {
    return {
        type: types.CLEAR
    }
}

export function update(target){
    return {
        type: types.TARGET,
        payload: target
    }
}