import React, { Component, Fragment } from 'react'
import PubSub from 'pubsub-js'

export default class TodoChild extends Component {
    state = {
        msg: "I'm' the data from the childComponent"
    }
    render() {
        return (
            <div>
                <button onClick={this.emitMsg}>点击向向兄弟组件2通信、传递数据</button>
            </div>
        )
    }
    emitMsg = () => {
        PubSub.publish('emitMsgtoBro2',this.state.msg)
    }
}
