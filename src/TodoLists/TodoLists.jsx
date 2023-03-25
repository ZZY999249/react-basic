import React, { Component } from 'react'
import TodoContents from './TodoContents'
import TodoHeader from './TodoHeader'
import '../TodoLists/Todo.scss'

export default class TodoLists extends Component {
    state = {
        todos: [
            {
                content: '待办事项1',
                done: false
            },
            {
                content: '待办事项2',
                done: false
            },
            {
                content: '待办事项3',
                done: false
            },
            {
                content: '待办事项4',
                done: false
            },
        ],
        inputText: ''
    }
    render() {
        return (
            <div className='todo-container'>
                <TodoHeader
                    inputText={this.state.inputText}
                    changeInput={this.changeInput}
                    addTodo={this.addTodo}
                />
                <TodoContents
                    todos={this.state.todos}
                    delTodo={this.delTodo}
                    disabledChange={this.disabledChange}
                />
            </div>
        )
    }
    changeInput = (value) => {
        this.setState({
            inputText: value
        })
    }
    addTodo = () => {
        if (this.state.inputText.trim() === '') {
            return false
        }
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    content: this.state.inputText,
                    done: false
                }
            ],
            inputText: ''
        })
    }
    delTodo = index => {
        const todos = [...this.state.todos]
        todos.splice(index, 1)
        this.setState({
            todos
        })
    }
    disabledChange = index => {
        const todosss = [...this.state.todos]
        console.log(todosss[index].done);
        todosss[index].done = true
        this.setState({
            todos: [
                ...todosss,
            ],
        })
    }
}
