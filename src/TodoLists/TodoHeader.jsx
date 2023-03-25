import React, { Component } from 'react'

export default class TodoHeader extends Component {
    render() {
        return (
            <div className='todo-header'>
                <input type="text" value={this.props.inputText} onChange={
                    (e)=>{
                        this.props.changeInput(e.target.value)
                    }
                } />
                <button onClick={this.props.addTodo}>addTodo</button>
            </div>
        )
    }
}

