import React, { useState, useEffect } from 'react'

export default function Todo() {
    const [arr, setArr] = useState([1, 2, 3, 4])
    const addArr = () => {
        setArr([...arr, arr.length + 1])
    }

    const [num, setNum] = useState(10)
    // useEffect如果只接收一个回调参数，默认 组件初始化渲染完成后触发， 且每一次更新完成后触发
    /* 
        不能在这里发送异步请求，可能造成 死循环， 异步请求完成，后 一般调用 useState 返回函数，接收
        返回数据， 函数调用 视图刷新， ...........
    */
    /* useEffect(() => {
        console.log(document.querySelector('#oul').children);
        console.log('useEffect触发了');
        
    }) */

    /*
        类似于vue中 watch  useEffect 第二个参数 是数组 更新阶段触发的依赖
    */
    /*  useEffect(() => {
        console.log(arr);
     }, [arr]) */

    // 初始化完成的钩子 只在 componentDidMount之后触发 更新不触发

    // useEffect(() => {
    //   console.log('我只在初始化完成触发');
    // }, [])

    // 模拟卸载前的钩子
    useEffect(() => {
        console.log('初始化完成后触发');
        return () => {
            // 只在组件 销毁前触发  模拟 componentWillUnmount
            console.log('卸载前触发');
        }
    }, [])
    return (
        <div>
            <button onClick={addArr}>新增li</button>
            <ul id='oul'>
                {
                    arr.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
            <hr />
            {num}
            <button onClick={
                ()=>{
                    setNum(num + 1)
                }
            }>+</button>
        </div>
    )
}
