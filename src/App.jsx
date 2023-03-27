import React, { Component } from 'react'
import Todo from './Todo'

export default class App extends Component {
    state = {
        isShow: true
    }
    render() {
        return (
            <div id='app'>
                <button onClick={() => {
                    this.setState({
                        isShow: !this.state.isShow
                    })
                }}>
                    {this.state.isShow ? '隐藏' : '显示'}
                </button>
                {
                    this.state.isShow
                    &&
                    <Todo num={10} />
                }

            </div>
        )
    }
}
