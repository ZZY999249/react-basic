import React, { Component } from 'react'

export default class TodoItem extends Component {
    // shouldComponentUpdate(nextProps, nextState){

    //   //   nextProps 如果 更新后最新的props  this.props是更新前的props
    //   //   nextState 如果 更新后 最新的state  this.state.更新前的state

    //   //   返回 布尔值
    //   //     默认是 true 祖先组件更新 永远更新
    //   //     false 永远不更新
    //   // 原理：
    //   //   比较新老 props和 新老 state 如果有不同 则return true
    //   //   否则 return false 


    //  return nextProps.item !== this.props.item
    // };
    render() {
        console.log('子组件render了');
        return (

            <div>
                <h5>{this.props.item}</h5>
                <button onClick={
                    ()=>{
                        this.props.changeItem(this.props.index)
                    }
                }>修改自身的值</button>
            </div>
        )
    }
}
