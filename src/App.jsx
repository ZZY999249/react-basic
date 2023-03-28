import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import NotFound from './pages/NotFound'
import authRoutes from './routes'
import { isLogin } from './utils'


export default function App() {
    const location = useLocation()
    useEffect(() => { }, [location])


    return (
        <>
            <Link to='/home'>首页</Link>
            <Link to='/news'>新闻页</Link>
            <Link to='/about'>关于我们页</Link>
            <Routes>
                {
                    authRoutes.map(route => {
                        return (
                            <Route key={route.path} path={route.path}
                            element={
                                route.needLogin
                                ?
                                (isLogin()?<route.element/>:<Navigate to='/login' state = {{from: route.path}}/>)
                                :
                                <route.element/>
                            } />
                        )
                    })
                }
                <Route path='/about' element={<About />} />
                <Route path='/' element={<Navigate to={'/home'} replace />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}
