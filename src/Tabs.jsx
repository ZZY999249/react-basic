import React, { Component } from 'react'
import './style/Tabs.css'

export default class Tabs extends Component {
    state = {
        activeIndex: 0,
        tabs: {
            title: ['标题1', '标题2', '标题3', '标题4'],
            content: ['内容1', '内容2', '内容3', '内容4']
        }
    }
    render() {
        return (
            <div>
                {this.state.tabs.title.map((title, index) => (
                    <button onClick={() => {
                        this.switchTab(index)
                    }} className={
                        index === this.state.activeIndex ? 'active' : ''
                    } key={index}>
                        {title}
                    </button>
                ))}
                {
                    this.state.tabs.content.map((content, index) => (
                        <div key={index}>
                            {
                                this.state.activeIndex === index
                                &&
                                <div className='content'>
                                    {content}
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
    switchTab = index =>{
        this.setState({
            activeIndex: index
        })
    }
}
