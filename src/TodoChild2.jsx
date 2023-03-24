import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class TodoChild2 extends Component {
    state = {
        msg: "I'm' the data from the childComponent"
    }
    render() {
        return (
            <div>
                i am the childComponent 2
                子组件2
            </div>
        )
    }
    componentDidMount() {
        PubSub.subscribe('emitMsgtoBro2', (msg, data) => {
            console.log('收到了组件1传来的数据', data);
        })
    }
}
