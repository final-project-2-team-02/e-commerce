import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/ecom";

export const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = () => {
    if (localStorage.getItem("token")) {
      dispatch(addCart(data.val.id));
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="card">
      <img className="pict" src={data.val.image} alt={data.val.title} />
      <div className="title">
        <p>{data.val.title}</p>
      </div>
      <div className="rate">
        <img
          src="https://img.icons8.com/ios-filled/50/FAB005/christmas-star.png"
          alt="star icon"
        />
        <p>
          {data.val.rating.rate} | {data.val.rating.count}
        </p>
      </div>
      <div className="button item">
        <Link to={`product/${data.val.id}`}>
          <div className="price">$ {data.val.price}</div>
        </Link>
        <div className="cart" onClick={cart}>
          <img
            src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
            alt="cart icon"
          />
        </div>
      </div>
    </div>
  );
};
