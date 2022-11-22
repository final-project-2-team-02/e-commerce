import React from "react";
import { useSelector } from "react-redux";
import { List } from "../../component/admin/list/list";

export const AdminDashboard = () => {
  const { product } = useSelector((state) => state.ecom);
  return (
    <>
      {product.map((value, ind) => (
        <List key={ind} data={value} />
      ))}
    </>
  );
};
