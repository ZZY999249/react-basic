import { cloneDeep } from "lodash";
import { ADD_NUM, REDUCE_NUM } from "./actionTypes";

const initialState = {
    num: 10
}

const reducer = (state = initialState, action) => {
    const newState = cloneDeep(state)
    switch (action.type) {
        case ADD_NUM:
            newState.num += action.data
            break
        case REDUCE_NUM:
            newState.num -= action.data
            break
        default:
            break
    }
    return newState
}

export default reducer