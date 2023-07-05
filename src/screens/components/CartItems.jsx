import React from "react";
import { CartItem } from "./CartItem";

export const CartItems = ({ cartData, filterCart }) => {
  return (
    <>
      {cartData.map((cart, key) => {
        return (
          <div className="container">
            <div className="row">
              <CartItem key={key} cart={cart} filterCart={filterCart} />
            </div>
          </div>
        );
      })}
    </>
  );
};
