import React, { Component } from 'react'

export default class App extends Component {
    state = {
        arr: [1, 2, 3, 4, 5, 6, 7]
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.arr.map((el,index)=>{
                        return (
                            <li key={el}>
                                {el}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
