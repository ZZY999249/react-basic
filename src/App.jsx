import React, { Component } from 'react'
import './style/reset.css'
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="box" onClick={this.clickBox}>
                    <div className="box2" onClick={this.clickBox2}>
                        <div className="box3" onClick={this.clickBox3}></div>
                    </div>
                </div>
            </div>
        )
    }
    clickBox = (e) => {
        e.stopPropagation()
        console.log(1);
    }
    clickBox2 = (e) => {
        e.stopPropagation()
        console.log(2);
    }
    clickBox3 = (e) => {
        e.stopPropagation()
        console.log(3);
    }
}
