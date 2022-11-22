import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { minJumlah, addJumlah } from "../../../redux/ecom";

export const List = ({ data }) => {
  const dispach = useDispatch();
  const [quantity, setQuantity] = useState(data.jumlah);
  return (
    <div className="content-admin">
      <div className="kiri">
        <img className="pict" src={data.val.image} alt="" />
      </div>
      <div className="kanan">
        <h3>{data.val.title}</h3>
        <div className="rate">
          <img
            alt="kamu"
            src="https://img.icons8.com/ios-filled/50/FAB005/christmas-star.png"
          />
          <p>
            {data.val.rating.rate} | sold {data.val.rating.count}
          </p>
        </div>
        <h4>$ {data.val.price}</h4>
        <div className="isi">
          <div className="left">Category</div>
          <div className="righ">
            <p>{data.val.category}</p>
          </div>
        </div>
        <div className="isi">
          <div className="left">Stok</div>
          <div className="righ">
            <div
              className="btn"
              onClick={() => {
                dispach(minJumlah(data.val.id));
                setQuantity(quantity - 1);
              }}
            >
              -
            </div>
            <p>{quantity}</p>
            <div
              className="btn"
              onClick={() => {
                dispach(addJumlah(data.val.id));
                setQuantity(quantity + 1);
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
