import React, { Component } from 'react'
import './style/reset.css'
import './style/main.css'
import './style/ccc.scss'
import styles from './style/App.module.css'
import { Box1,Box2,Box3,Box4,Box5 } from "./style/style";


export default class App extends Component {
    render() {
        return (
            <div>
                <div className={styles.c}>css modules</div>

                <Box1 />
                <Box2 />
                <Box3 />
                <Box4 />
                <Box5 />
                
                {/* <div className='box1' style={{width: 100,height: 100,backgroundColor: 'pink'}}></div>

                <div className='box2'></div>

                <div className='box3'></div>

                <div className='box4'></div> */}

            </div>
        )
    }
    }
