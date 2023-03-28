import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function News() {
    return (
        <div>
            新闻页
            <hr />
            <Link to='/news/native'>国内本地新闻</Link>
            <Link to='/news/abroad'>国外新闻</Link>
            {/* 子路由组件的出口，在这里定义 子路由组件就在哪里渲染 */}
            <Outlet />
        </div>

    )
}
