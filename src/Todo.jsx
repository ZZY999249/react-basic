import React, { Component, createRef } from 'react'
import axios from 'axios'
import * as echarts from 'echarts'
import './style/style.css'

export default class Todo extends Component {
    constructor() {
        super()
        this.state = {
            cates: [],
            chart: null,
            timer: null
        }
        this.chartRef = createRef()
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.cates.map(cate => (
                            <li key={cate.id}>
                                <img src={cate.icon} alt="" />
                                <h6>{cate.name}</h6>
                            </li>
                        ))
                    }
                </ul>
                <div ref={this.chartRef} className='charts'></div>
            </div>
        )
    }
    fetchCates() {
        axios.get("https://api.it120.cc/conner/cms/category/list").then(res => {
            if (res.data.code === 0) {
                this.setState({
                    cates: res.data.data
                })
            }
        })
    }
    initCharts() {
        const chart = echarts.init(this.chartRef.current);
        // setOption 绘制图表
        const options = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        }
        chart.setOption(options)
        this.setState({
            chart
        })
    }
    componentDidMount() {
        this.fetchCates()

        this.initCharts()

        window.onscroll = () => {
            console.log('页面滚动了');
        }
        const timer = setInterval(() => {
            console.log('定时器');
        }, 1000)
        this.setState({
            timer
        })
    }
    componentWillUnmount(){
        console.log('组件将要卸载');
        window.onscroll = null
        clearInterval(this.state.timer)
    }


}
