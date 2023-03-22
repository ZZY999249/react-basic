import styled, { keyframes } from "styled-components"

// 编译成 div 且具有 下面的样式
const Box1 = styled.div`
    width: 100px;
    height: 100px;
    background: red;
`
// 组件嵌套内容
const Box2 = styled.div`
    width: 100px;
    height: 100px;
    background: pink;
    p{
        color: blue;
    }
    span{
        color: yellow;
        &:hover{
        color: green;
        }
    }
`
// 继承
const Box3 = styled(Box1)`
    border: 10px solid #00accd;
`
// 使用props
const Box4 = styled.div`
    width: 100px;
    height: 100px;
    background: ${props => props.bgc || 'blue'};
`
// 定义关键帧
const move = keyframes`
    0% {
        transform: rotate(75deg)
    }
    100% {
        transform: rotate(-75deg)
    }
`
// 使用动画
const Box5 = styled.div`
    width: 10px;
    height: 100px;
    background: red;
    margin: 20px 100px;
    transform-origin: center bottom;
    animation: ${move} 500ms infinite alternate linear;
`

export {
    Box1,
    Box2,
    Box3,
    Box4,
    Box5
}