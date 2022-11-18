import React from 'react'
import { useSelector } from 'react-redux'
import gambar from '../data/undraw_add_notes_re_ln36.svg'

export const Recap = () => {
    const { product } = useSelector((state) => state.persistedReducer.ecom)
    const kamu = product.filter((nilai) => {
        return nilai.recap > 0
    })
    return (
        // <div>{product.map((data) => {
        //     if (data.recap > 0) {
        //         <div>{JSON.stringify(data)}</div>
        //     }
        //     else {
        //         console.log('kosong');
        //     }
        // })}</div>
        <>
            {/* {product.map((data) => {
                if (kamu.length === 0) {
                    console.log('kosong');
                    <div className='kosong'><img src={gambar} alt='kamu' /></div>
                } else {

                    JSON.stringify(product)
                }
            })} */}
            {kamu.length === 0
                ?
                <div className='kosong'><img src={gambar} alt='kamu' /></div>
                :
                JSON.stringify(product)
            }
        </>
    )
}
