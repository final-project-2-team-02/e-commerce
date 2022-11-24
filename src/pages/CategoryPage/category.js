import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../component/content/card/productCard';

export const Category = () => {
    const { product } = useSelector((state) => state.ecom);
    const { id } = useParams();
    const category = product.filter((data)=>data.val.category === id)
    console.log(id);
    // console.log(category);
  return (
    <>
        {category.map((data, index)=>{
            console.log(data);
            <>{JSON.stringify(data.val)}</>
        })}
    </>
  )
}
