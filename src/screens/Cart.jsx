import React, { useState, useEffect } from "react";
import Axios from "axios";
//components
import { Header } from "./components/Header";
import { CartItems } from "./components/CartItems";
import { Footer } from "./components/Footer";

export const Cart = () => {
  const [cartData, setCartData] = useState([{}]);

  useEffect(() => {
    const getCarts = async () => {
      const res = await fetch("http://localhost:5000/carts/");
      const data = await res.json();
      setCartData(data);
    };

    getCarts();
  }, []);

  // filter carts on delete
  const filterCart = (id) => {
    setCartData((carts) => carts.filter((cart) => cart._id !== id));
  };

  return (
    <section>
      <div className="cart">
        <Header />
        {/* HERO SECTION */}
        <div className="d-flex justify-content-center align-items-center">
          <div className="m-5 p-5 text-center hero-section">
            <h1>
              Your <span style={{ color: "var(--main-btn)" }}>Cart</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="cart-section">
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
          <CartItems cartData={cartData} filterCart={filterCart} />

          <button className="btn hero-btn btn-lg btn-block mt-5">
            Checkout
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
};
