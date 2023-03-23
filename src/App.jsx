import React, { Component } from 'react'
import './style/reset.css'
export default class App extends Component {
    state = {
        isShow: true
    }
    render() {
        return (
            <div>
                <button onClick={this.switchShow}>
                    {this.state.isShow ? '隐藏' : '显示'}
                </button>
                {
                    this.state.isShow
                        ?
                        <div className="box"></div>
                        :
                        <div className="box2"></div>
                }
            </div>
        )
    }
    switchShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
