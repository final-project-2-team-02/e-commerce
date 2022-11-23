import React from "react";
import { useDispatch } from "react-redux";
import { addCart, minCart } from "../../../redux/ecom";
import { usdCurrency } from "../../../utils/formatter";

export const Listnya = ({ data }) => {
  const dispach = useDispatch();

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
          <h4>{usdCurrency.format(data.val.price * data.cart)}</h4>
          <div className="righ">
            <div
              className="btn"
              onClick={() => {
                if (data.cart > 0) {
                  dispach(minCart(data.val.id));
                }
              }}
            >
              -
            </div>
            <p>{data.cart}</p>
            <div
              className="btn"
              onClick={() => {
                dispach(addCart(data.val.id));
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
