import React from "react";
import { ProductCard } from "../../component/content/card/productCard";
import { useGetCategory } from "./useGetCategory";

export default function WomensClothPage() {
  const { productCategory } = useGetCategory("women's clothing");

  return (
    <div className="content">
      {productCategory.map((item, id) => (
        <ProductCard data={item} key={id} />
      ))}
    </div>
  );
}
