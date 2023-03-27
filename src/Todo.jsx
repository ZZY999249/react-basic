import React, { Component } from 'react'

export default class Todo extends Component {
    state={
        msg: 'i am you'
    }
    static getDerivedStateFromProps(props, state){
        return {
            doubleNum: props.num * 2,
            reverseMsg: state.msg.split('').reverse().join('')
        }
    }
    render() {
        console.log(this);
        return (
            <div>
                {this.props.num}
                <br />
                {this.state.doubleNum}
                <hr />
                {this.state.msg}
                <br />
                {this.state.reverseMsg}
            </div>
        )
    }
}
