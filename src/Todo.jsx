import React, { Component, createRef, Fragment } from 'react'
import Todochild from './TodoChild'
export default class Todo extends Component {
    constructor() {
        super()
        this.refBtn = createRef()
        this.refChild = createRef()
    }
    render() {
        return (
            <Fragment>
                <button ref={this.refBtn}>button</button>
                <Todochild ref={this.refChild} />
            </Fragment>
        )
    }
    componentDidMount() {
        console.log(this.refBtn.current);
        console.log(this.refChild.current);
    }
}
