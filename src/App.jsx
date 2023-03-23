import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state={
            msg: 'hello, what are you doing?'
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.clickBtn}>changeMsg</button>
                <br />
                {this.state.msg}
            </div>
        )
    }
    clickBtn=()=>{
        console.log(this);
        this.setState({
            msg: 'msg is changed three hours ago'
        })
    }
}
