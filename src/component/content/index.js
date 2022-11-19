import React, { useEffect } from "react";
import { ProductCard } from "./card/productCard";
import { Catalog } from "./catalog/catalog";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarket } from "../../redux/ecom";
import { Banner } from "./banner/banner";
import { fetchUser } from "../../redux/userredux";

export const Content = () => {
  const dispach = useDispatch();
  const { product } = useSelector((state) => state.ecom);
  const { loading } = useSelector((state) => state.ecom);

  const urlProduct = "https://fakestoreapi.com/products";
  const urlUser = "https://fakestoreapi.com/users";
  const fetching = () => {
    dispach(fetchMarket(urlProduct));
    dispach(fetchUser(urlUser));
  };

  useEffect(() => {
    fetching();
    // eslint-disable-next-line
  }, [urlProduct, urlUser]);

  return (
    <div className="content">
      {loading === true ? (
        <p>Loading</p>
      ) : (
        <>
          <Banner />
          <Catalog />
          {product.map((val, ind) => (
            <ProductCard data={val} key={ind} />
          ))}
        </>
      )}
    </div>
  );
};
