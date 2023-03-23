import React, { Component, Fragment } from 'react'

export default class Todo extends Component {
    state = {
        msg: "I'm' the data from the childComponent"
    }
    render() {
        return (
            <div>
                i am the childComponent
            </div>
        )
    }
}
