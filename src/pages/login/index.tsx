import React from 'react'
import { useRouter } from '../../hooks/useRouter'
import './login.style.scss'

export type LoginFormData = {
    username: string
    password: string
    remember?: boolean
}

const Login = () => {
    return <div className="login-container">Login</div>
}

export default Login
