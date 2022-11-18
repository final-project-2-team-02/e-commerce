import React from 'react'
import { useSelector } from 'react-redux'
import { List } from '../component/admin/list/list'
import { useDispatch } from 'react-redux'
import { Listnya } from '../component/content/list/list'
import { addRecap } from '../redux/ecom'
import gambar from '../data/undraw_add_notes_re_ln36.svg'

export const Cart = () => {
    const dispach = useDispatch()
    const { product } = useSelector((state) => state.persistedReducer.ecom)

    const kamu = product.filter((nilai) => {
        return nilai.cart > 0
    })
    const chek = () => {
        dispach(addRecap())
    }
    return (
        <>
            {kamu.length === 0
                ?
                <div className='kosong'><img src={gambar} alt='kamu' /></div>
                :
                <>
                    {product.map((data, ind) => {
                        if (data.cart > 0) {
                            return <Listnya key={ind} data={data} />
                        }
                    })}
                    <div onClick={chek}>Checkout</div>
                </>}

        </>
    )
}
