import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart, minCart } from "../../../redux/ecom";

export const Listnya = ({ data }) => {
  const dispach = useDispatch();
  const [cart, setCart] = useState(data.cart);

  return (
    <div className="content-cart">
      <div className="kiri">
        <img className="pict" src={data.val.image} alt="" />
      </div>
      <div className="kanan">
        <h3>{data.val.title}</h3>

        <div className="isi">
          <div className="left">Stok</div>
          <div className="righ">
            <p>{data.jumlah}</p>
          </div>
        </div>
        <div className="isi">
          <h4>$ {data.val.price * cart}</h4>
          <div className="righ">
            <div
              className="btn"
              onClick={() => {
                if (cart > 0) {
                  dispach(minCart(data.val.id));
                  setCart(cart - 1);
                }
              }}
            >
              -
            </div>
            <p>{cart}</p>
            <div
              className="btn"
              onClick={() => {
                dispach(addCart(data.val.id));
                setCart(cart + 1);
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
