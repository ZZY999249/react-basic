import React from "react";

// 参数就是被修饰 普通组件
const withTpl = (Decorator) => {
    // 返回新的组件 
    return props => {
        return (
            <>
                <h3>公共头部</h3>
                <Decorator {...props} d='zheshisongnide' />
                {/* 普通组件劫持高阶组件 内部使用 */}
                <h3>公共尾部</h3>
            </>
        )
    }
}


export default withTpl
