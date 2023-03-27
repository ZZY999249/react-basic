import React, { Component } from 'react'
import A from './A'
import B from './B'

export default class App extends Component {
    state = {
        isShow: true
    }
    render() {
        return (
            <div id='app'>
                <A />
                <hr />
                <B />
            </div>
        )
    }
}
