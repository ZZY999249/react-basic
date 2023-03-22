import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
        <div>
            class组件
            <h5>{this.props.title}</h5>
            <h5>{this.props.subTitle}</h5>
        </div>
        
        )
    }
    }
