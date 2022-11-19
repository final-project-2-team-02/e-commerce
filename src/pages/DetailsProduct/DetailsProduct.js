import React from "react";
import { useDetailsProduct } from "./useDetailsProduct";

export const DetailsProduct = () => {
  const { id, value, add, cart, min, productSelected } = useDetailsProduct();

  return (
    <>
      <div className="content2">
        <div className="kiri">
          <img className="pict" src={productSelected.val.image} alt="" />
        </div>
        <div className="kanan">
          <h3>{id}</h3>
          <div className="rate">
            <img
              alt="kamu"
              src="https://img.icons8.com/ios-filled/50/FAB005/christmas-star.png"
            />
            <p>
              {productSelected.val.rating.rate} | sold{" "}
              {productSelected.val.rating.count}
            </p>
          </div>
          <h4>$ {productSelected.val.price}</h4>
          <div className="isi">
            <div className="left">category</div>
            <div className="righ">
              <p>{productSelected.val.category}</p>
            </div>
          </div>
          <div className="isi">
            <div className="left">Stok</div>
            <div className="righ">
              <p>{productSelected.jumlah}</p>
            </div>
          </div>
          <div className="isi">
            <div className="left">quantity</div>
            <div className="righ">
              <div className="btn" onClick={min}>
                -
              </div>
              <p>{value}</p>
              <div className="btn" onClick={add}>
                +
              </div>
            </div>
          </div>

          <div className="fungsi">
            <div className="keranjang" onClick={cart}>
              Masukkan Keranjang
            </div>
            <div className="belanja">Belanja Sekarang</div>
          </div>
        </div>
      </div>
      <div className="content3">
        <div className="des">
          <h1>Description</h1>
        </div>
        <div className="detail">
          <p>{productSelected.val.description}</p>
        </div>
      </div>
    </>
  );
};
