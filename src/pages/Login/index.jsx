import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Login() {
    const location = useLocation()
    const navigate = useNavigate()
    const userLogin = () => {
        setInterval(() => {
            const token = '1234-5678-9012-3456-7890'
            localStorage.setItem('token', token)
            if (location.state) {
                navigate('/about')
            } else {
                navigate('/home')
            }
        }, 1000)
    }
    return (
        <div>
            <h4>登录页</h4>
            <button onClick={userLogin}>点击登录</button>
        </div>
    )
}
