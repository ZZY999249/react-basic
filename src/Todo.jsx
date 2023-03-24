import React, { Component, createRef } from 'react'
import Todochild from './TodoChild'
import TodoChild2 from './TodoChild2'

export default class Todo extends Component {
    // constructor() {
    //     super()
    //     this.refBtn = createRef()
    //     this.refChild = createRef()
    // }
    render() {
        return (
            <div>
                父组件
                <Todochild />
                <br />
                <TodoChild2 />
            </div>
        )
    }
    // componentDidMount() {
    //     console.log(this.refBtn.current);
    //     console.log(this.refChild.current);
    // }
}
