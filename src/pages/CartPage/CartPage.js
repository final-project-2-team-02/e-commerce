import React from "react";
import { Listnya } from "../../component/content/list/list";
import { useCartPage } from "./useCartPage";

export const CartPage = () => {
  const { productCartItem, product, check } = useCartPage();

  return (
    <div>
      {productCartItem.length === 0 ? (
        <p>Kosong</p>
      ) : (
        <>
          {product.map((data, ind) =>
            data.cart > 0 ? <Listnya key={ind} data={data} /> : null
          )}
          <div
            style={{
              width: "100%",
              padding: "1rem 3rem",
              marginBottom: "5rem",
            }}
          >
            <div
              onClick={check}
              style={{
                float: "right",
                backgroundColor: "#b6f719",
                padding: "0.7rem 1.5rem",
                fontWeight: "bold",
                borderRadius: "5px",
              }}
            >
              Checkout
            </div>
          </div>
        </>
      )}
    </div>
  );
};
