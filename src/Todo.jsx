import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class Todo extends Component {
    state = {
        arr: [1, 2, 3, 4, 5],
        inputMsg: ''
    }
    render() {
        console.log('父组件render了');
        return (
            <div>
                <input type="text" value={this.state.inputMsg} onChange={
                    (e) => {
                        this.setState({
                            inputMsg: e.target.value
                        })
                    }
                } />
                {this.state.inputMsg}
                {
                    this.state.arr.map((item, index) => (
                        <TodoItem key={index} index={index} item={item} changeItem={this.changeItem} />
                    ))
                }
            </div>
        )
    }
    changeItem = (index) => {
        const arr = [...this.state.arr]
        arr[index] = '值改变了changeItem'
        this.setState({ arr })
    }
}
