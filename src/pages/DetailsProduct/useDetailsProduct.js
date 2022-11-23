import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { inputCart } from "../../redux/ecom";

export const useDetailsProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.ecom);
  const { id } = useParams();

  const productSelected = product.find((pro) => pro.val.title === id);

  const [value, setValue] = React.useState(productSelected.cart);

  const min = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const add = () => {
    if (productSelected.jumlah > value) {
      setValue(value + 1);
    }
  };

  const cart = () => {
    if (localStorage.getItem("token")) {
      dispatch(inputCart({ value, id: productSelected.val.id }));
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return { id, value, add, min, cart, productSelected };
};
