import React, { Component } from 'react'
import './style/reset.css'
import './style/main.css'
import './style/ccc.scss'
import styles from './style/App.module.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className={styles.c}>css modules</div>

                <div className='box1' style={{width: 100,height: 100,backgroundColor: 'pink'}}></div>

                <div className='box2'></div>

                <div className='box3'></div>

                <div className='box4'></div>

            </div>
        )
    }
    }
