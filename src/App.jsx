import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            React.createElement('div', {className:'box', id: 'wrap'}, [
                React.createElement('p', {className: 'op'}, ['这是p']),
                React.createElement('span', {}, ['这是span']),
                '这是文本内容--jsx原理'
            ])
            
        )
    }
    }
