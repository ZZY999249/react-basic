import React, { useState } from 'react'
import Todo from './Todo'


export default function App() {
    const [isShow, setShow] = useState(true)
    return (
        <div>
            <button onClick={
                () => {
                    setShow(!isShow)
                }
            }>
                {isShow ? '隐藏' : '显示'}
            </button>

            {isShow && <Todo />}
        </div>
    )
}
