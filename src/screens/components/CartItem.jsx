import React from "react";
import Axios from "axios";

export const CartItem = ({ cart, filterCart }) => {
  // delete cart
  const deleteCart = async (id) => {
    try {
      await Axios.delete(`http://localhost:5000/carts/${id}`);
      // filter drama
      await filterCart(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-lg-12 col-12 col-sm-12">
      <div className="card d-flex promo-card flex-row align-items-center justify-content-evenly p-3 mt-2">
        <img
          src={cart?.imgPath}
          alt="shoe"
          className=" w-25 h-25 img-fluid card-img-top"
        />

        <div className="cart-text">
          <p className="fs-3 product-card-head">{cart?.name}</p>
          <p className="fs-4 product-card-sub">${cart?.price}</p>
          <button className="btn btn-danger btn-lg btn-block" onClick={() => deleteCart(cart?._id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};
