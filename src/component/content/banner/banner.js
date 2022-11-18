import React from "react";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="siar">
        <h1>
          Harga Murah <br />
          Dengan kualitas Terbaik
        </h1>
        <p>Temukan kebutuhanmu disini</p>
      </div>
      <img
        id="satu"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <img
        id="dua"
        src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        alt=""
      />
      <img
        id="tiga"
        src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
        alt=""
      />
      <div className="hiasan"></div>
    </div>
  );
};
