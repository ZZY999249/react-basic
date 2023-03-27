import React, { Component } from 'react'
import A from './A'
import B from './B'

export default class App extends Component {
    render() {
        const data ={
            a:10,
            b:'hahahha',
            c:'heiheiehei'
        }
        return (
            <div id='app'>
                <A {...data}/>
                <hr />
                <B />
            </div>
        )
    }
}
