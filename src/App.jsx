import React, { Component } from 'react'

export default class App extends Component {
    state = {
        arr: [1, 2, 3, 4, 5, 6]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.arr.map(el => (
                            <li key={el} onClick={
                                (e) => {
                                    this.clickLi(el, e)
                                }
                            }>
                                {el}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    clickLi = (el, e) => {
        console.log(el, e);
    }
}
