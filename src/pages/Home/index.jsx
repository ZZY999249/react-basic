import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_num } from '../../store/actionCreators'

export default function Home() {
    const num = useSelector(state => state.num)
    const dispatch = useDispatch()
    const addNum = () => {
        dispatch(add_num(10))

    }
    return (
        <div>
            <h2>首页</h2>
            <button onClick={
                addNum
            }>+</button>
            {num}
        </div>
    )
}
