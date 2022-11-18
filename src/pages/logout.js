import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { logout } from '../redux/loginredux'
import { useDispatch, useSelector } from 'react-redux'
import { tambah } from '../redux/userredux'
import { resetCart } from '../redux/ecom'

export const Logout = () => {
    const dispach = useDispatch()
    const { product } = useSelector((state) => state.persistedReducer.ecom)

    const { user } = useSelector((state) => state.persistedReducer.user)
    // const { userLogin } = useSelector((state) => state.persistedReducer.data)
    const { val } = user.find((val) => val.val.username === localStorage.getItem('token'))
    const navi = useNavigate()
    const log = () => {
        const inilist = []
        product.map((data) => {
            inilist.push(data.cart)
        })
        console.log(inilist);
        // dispach(logout())
        dispach(tambah(inilist))
        dispach(resetCart())
        localStorage.removeItem('token')
        navi('/')

    }
    const menu = () => {
        // dispach(logout())
        // localStorage.removeItem('token')
        navi('/')

    }
    return (
        <section className='bungkus'>
            <div className='ingfo'>
                <div className='bulat'></div>
                <div className='nama'>{val.username}</div>
                <div className='email'>{val.email}</div>
                <div onClick={menu} className='menu' >Back to menu</div>
                <div onClick={log} className='logout' >Logout</div>

            </div>
        </section>
    )
}
