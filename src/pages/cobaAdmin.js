import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Headermin } from '../component/header/header.admin'
import { useDispatch } from 'react-redux'
import { fetchMarket } from '../redux/ecom'
import { fetchUser } from '../redux/userredux'
import '../style/admin.css'

export const CobaAdmin = () => {
    const dispach = useDispatch()
    const urlProduct = 'https://fakestoreapi.com/products';
    const urlUser = 'https://fakestoreapi.com/users';
    const fetching = () => {
        dispach(fetchMarket(urlProduct))
        dispach(fetchUser(urlUser))
    }
    // const auth = () => {
    //     if (localStorage.getItem('token')) {
    //         dispach(loginredux(localStorage.getItem('token')))
    //         // dispach(login(JSON.parse(localStorage.getItem('token'))))
    //         // console.log(user.find((datanya) => datanya === localStorage.getItem('token')))
    //     }
    // }
    useEffect(() => {
        fetching()
        // auth()
        // console.log(userLogin);
    }, [urlProduct, urlUser])
    return (
        <section className='view-admin'>
            <Headermin />
            <Outlet />
        </section>
    )
}
