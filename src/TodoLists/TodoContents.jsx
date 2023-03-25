import React, { Component } from 'react'

export default class TodoContents extends Component {
    render() {
        return (
            <ul className='todo-content'>
                {
                    this.props.todos.length === 0
                    &&
                    <li>暂无待办事项</li>
                }
                {
                    this.props.todos.map((todo, index) => {
                        return (
                            <li key={index}>
                                <span>{todo.content}</span>
                                <div className='btns'>
                                
                                    <button disabled ={todo.done? true:false} onClick={()=>{this.props.disabledChange(index)}}>点击完成</button>
                                    <button onClick={
                                        () => {
                                            this.props.delTodo(index)
                                        }
                                    }>删除</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
