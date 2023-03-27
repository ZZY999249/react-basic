import React, { Component } from 'react'
import withTpl from './hoc/withTpl'

class A extends Component {
    render() {
        console.log(this.props, '222');
        return (
            <div>
                <h3>a组件</h3>
            </div>
        )
    }
}
export default withTpl(A)