import React from "react";
import Axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
// components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Product = () => {
  //location
  const location = useLocation();

  // navigate
  const navigate = useNavigate();
  const toCart = () => navigate('/cart');

  // add data to database
  const addCart = async() => {
    try {
      await Axios.post('http://localhost:5000/carts/', {
        name: location?.state?.data?.name,
        price: location?.state?.data?.price,
        imgPath: location?.state?.data?.imgUrl
      });

      toCart();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <section>
      <div className="product-page">
        <Header />

        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-1 product-page-title">Your <span className="product-page-title-accent">Product</span></h1>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <img src={location?.state?.data?.imgUrl} alt="shoe" />
            <div className="product-item ">
              <h1 className="fs-3">{location?.state?.data?.name}</h1>
              <p className="fs-5">{location?.state?.data?.color}</p>
              <h1 className="fs-4">${location?.state?.data?.price}</h1>
              <button className="btn btn-block btn-lg hero-btn mt-2" onClick={addCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};
