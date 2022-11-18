import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Listnya } from "../component/content/list/list";
import { addRecap } from "../redux/ecom";

export const Cart = () => {
  const dispach = useDispatch();
  const { product } = useSelector((state) => state.persistedReducer.ecom);

  const kamu = product.filter((nilai) => {
    return nilai.cart > 0;
  });
  const chek = () => {
    dispach(addRecap());
  };
  return (
    <div>
      {kamu.length === 0 ? (
        <p>Kosong</p>
      ) : (
        <>
          {product.map((data, ind) =>
            data.cart > 0 ? <Listnya key={ind} data={data} /> : null
          )}
          <div style={{ width: "100%", padding: "1rem 3rem" }}>
            <div
              onClick={chek}
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
