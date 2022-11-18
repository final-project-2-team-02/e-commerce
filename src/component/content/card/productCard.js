import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/ecom";

export const ProductCard = ({ data }) => {
  const dispach = useDispatch();
  const navi = useNavigate();
  const check = () => {
    if (localStorage.getItem("token")) {
      navi(`/${data.val.title}`);
    } else {
      navi("/login");
    }
  };
  const cart = () => {
    if (localStorage.getItem("token")) {
      dispach(addCart(data.val.id));
    } else {
      navi("/login");
    }
  };

  return (
    <div className="card">
      <img alt="kamu" className="pict" src={data.val.image} />
      <div className="title">
        <p>{data.val.title}</p>
      </div>
      <div className="rate">
        <img
          alt="kamu"
          src="https://img.icons8.com/ios-filled/50/FAB005/christmas-star.png"
        />
        <p>
          {data.val.rating.rate} | {data.val.rating.count}
        </p>
      </div>
      <div className="button item">
        <Link to={`/${data.val.title}`}>
          <div className="price">$ {data.val.price}</div>
        </Link>
        <div className="cart" onClick={cart}>
          <img
            alt="kamu"
            src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
          />
        </div>
      </div>
    </div>
  );
};
