import React, { Component } from 'react'

export default class Todo extends Component {
    state = {
        msg: '初始值',
        isChecked: true
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" defaultValue={this.state.msg} />
                    <br />
                    {this.state.msg}
                    <hr />
                    <input type="checkbox" defaultValue={this.state.isChecked} />
                    {
                        this.state.isChecked ? '真' : '假'
                    }

                    <hr />

                    双向绑定

                    <input type="text" value={this.state.msg} onChange={this.inputChange} />
                    <br />
                    {this.state.msg}

                    <hr />
                    <input type="checkbox" value={this.state.isChecked} onChange={this.handleChecked} />
                    {
                        this.handleChecked ? '真' : '假'
                    }
                </div>
            </div>
        )
    }
    inputChange =(e)=>{
        console.log(e.target.value);
        this.setState({
            msg: e.target.value
        })
    }
    handleChecked =(e)=>{
        this.setState({
            isChecked: e.target.checked
        })
    }

}
