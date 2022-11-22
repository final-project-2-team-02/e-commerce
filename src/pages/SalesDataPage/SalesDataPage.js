import React from "react";
import { useSelector } from "react-redux";
import { usdCurrency } from "../../utils/formatter";
import "./salesDataPage.css";

export const SalesDataPage = () => {
  const { product } = useSelector((state) => state.ecom);

  return (
    <div className="recap-container">
      <table>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity Sales</th>
            <th>Revenue Per/Item</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, id) =>
            item.recap > 0 ? (
              <tr key={id}>
                <td>
                  <img src={item.val.image} alt={item.val.title + " img"} />
                </td>
                <td style={{ textAlign: "left", fontWeight: 600 }}>
                  {item.val.title}
                  <br />
                  <span style={{ fontWeight: 500, fontSize: "1rem" }}>
                    {item.val.category}
                  </span>
                </td>
                <td>{usdCurrency.format(item.val.price)}</td>
                <td>{item.recap}</td>
                <td style={{ fontWeight: 600 }}>
                  {usdCurrency.format(item.recap * item.val.price)}
                </td>
              </tr>
            ) : null
          )}
          <tr style={{ fontWeight: 600 }}>
            <td colSpan={3}>Total</td>
            <td>Total Sales Item</td>
            <td>Total Revenue ($)</td>
          </tr>
          <tr style={{ fontWeight: 600 }}>
            <td colSpan={3}></td>
            <td>{product.reduce((acc, item) => (acc += item.recap), 0)}</td>
            <td>
              {usdCurrency.format(
                product.reduce(
                  (acc, item) => (acc += item.recap * item.val.price),
                  0
                )
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
