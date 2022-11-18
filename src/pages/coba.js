import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../component/header/header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../style/style.css'

export const Tampil = () => {
    const navi = useNavigate()
    // const { user } = useSelector((state) => state.persistedReducer.user)
    // const kamu = user.find((nama) => localStorage.getItem('token') === nama.val.username)
    // console.log('kamu' + JSON.stringify(kamu));
    console.log(localStorage.getItem('token'));
    const pindah = () => {
        navi('/admin')
    }
    useEffect(() => {
        if (localStorage.getItem('token') === "iniadmin") {
            pindah()
        }
    })
    if (localStorage.getItem('token') === "iniadmin") {
        // pindah()
        return <>kamu admin</>
    } else {

        return (
            <>
                <Header />
                <Outlet />
            </>
        )
    }
}
