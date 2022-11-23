import React from "react";
import { ProductCard } from "../../component/content/card/productCard";
import { useGetCategory } from "./useGetCategory";

export default function MenClothPage() {
  const { productCategory } = useGetCategory("men's clothing");

  return (
    <div className="content">
      {productCategory.map((item, id) => (
        <ProductCard data={item} key={id} />
      ))}
    </div>
  );
}
