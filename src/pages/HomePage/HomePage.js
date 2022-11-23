import React, { useEffect } from "react";
import { ProductCard } from "../../component/content/card/productCard";
import { Catalog } from "../../component/content/catalog/catalog";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarket } from "../../redux/ecom";
import { Banner } from "../../component/content/banner/banner";
import { fetchUser } from "../../redux/userredux";

export const HomePage = () => {
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
          {product.map((item, ind) =>
            item.jumlah > 0 ? <ProductCard data={item} key={ind} /> : null
          )}
        </>
      )}
    </div>
  );
};
