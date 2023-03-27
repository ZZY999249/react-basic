import React, { Component } from 'react'
import { Consumer } from './context'

export default class A extends Component {
    render() {

        return (
            <Consumer>
                {
                    ({ a, changea }) => {
                        return (
                            <>
                                <h2>A组件</h2>
                                <h3>{a}</h3>
                                <button onClick={
                                    () => {
                                        changea(300)
                                    }
                                }>修改A</button>
                            </>
                        )
                    }
                }

            </Consumer>
        )

    }
}
