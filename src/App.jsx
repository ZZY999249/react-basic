import React, { Component } from 'react'
import TodoLists from './TodoLists/TodoLists'
// import Tabs from './Tabs'

export default class App extends Component {
    render() {
        return (
            <div id='app'>
                {/* <Tabs/> */}
                <TodoLists/>
            </div>
        )
    }
}
