import React from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import NotFound from './pages/NotFound'

export default function App() {
    return (
        <>
            <NavLink to='/home'>首页</NavLink>
            <NavLink to='/news'>新闻页</NavLink>
            <NavLink to='/home'>关于我们页</NavLink>
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/news' element={<News/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/' element={<Navigate to={'/home'} replace/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </>
    )
}
