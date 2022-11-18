import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Headermin = () => {
    const navi = useNavigate()
    const logot = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        navi('/')
    }
    return (
        <div className="header">
            <h3>Tokopakedi</h3>
            <ul>
                <li onClick={() => navi('/admin/recap')}>Recap</li>
                <li>User</li>
                <li onClick={logot}>Logout</li>
            </ul>
        </div>
    )
}
