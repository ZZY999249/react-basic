import { ADD_NUM, REDUCE_NUM } from "./actionTypes";

// 定义actionCreator
const add_num_async = (data) => {
    return dispatch =>{
        setInterval(() => {
            dispatch({
                type: ADD_NUM,
                data
            })
        }, 1000);
    }
}

const add_num = (data) => {
    return {
        type: ADD_NUM,
        data
    }
}

const reduce_num = data => {
    return {
        type: REDUCE_NUM,
        data
    }
}

export {
    add_num,
    reduce_num,
    add_num_async
}