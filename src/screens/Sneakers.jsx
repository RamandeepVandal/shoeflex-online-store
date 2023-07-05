import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// component
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// product images
import airForce1Mid from "../assets/air-force-1-mid.png";
import airHuar from "../assets/air-huarache.png";
import airMax95 from "../assets/air-max-95.png";
import airMax270 from "../assets/air-max-270.png";
import cosmicUnity from "../assets/cosmic-unity-2.png";
import dunkLow from "../assets/dunk-low.png";
import revo6 from "../assets/revolution-6.png";
import pegasus40 from "../assets/pegasus_40.png";
import zoomFly from "../assets/zoom-fly-5.png";

export const Sneakers = () => {
  const [product, setProduct] = useState([
    {
      name: "Nike Air Force 1 Mid",
      color: "1 Colour",
      price: 160,
      imgUrl: airForce1Mid,
    },
    {
      name: "Nike Air Huarache",
      color: "1 Colour",
      price: 165,
      imgUrl: airHuar,
    },
    {
      name: "Nike Air Max 95",
      color: "1 Colour",
      price: 230,
      imgUrl: airMax95,
    },
    {
      name: "Nike Air Max 270",
      color: "1 Colour",
      price: 210,
      imgUrl: airMax270,
    },
    {
      name: "Nike Cosmic Unity 2",
      color: "1 Colour",
      price: 210,
      imgUrl: cosmicUnity,
    },
    {
      name: "Nike Dunk Low",
      color: "1 Colour",
      price: 190,
      imgUrl: dunkLow,
    },
    {
      name: "Nike Revolution 6",
      color: "1 Colour",
      price: 95,
      imgUrl: revo6,
    },
    {
      name: "Nike Pegasus 40",
      color: "1 Colour",
      price: 170,
      imgUrl: pegasus40,
    },
    {
      name: "Nike Zoom Fly 5",
      color: "1 Colour",
      price: 210,
      imgUrl: zoomFly,
    },
  ]);

  // navigate
  const navigate = useNavigate();
  const toProduct = (data) => navigate('/product', { state: { data } });

  return (
    <section>
      <div className="products-hero">
        <Header />
        {/* HERO SECTION */}
        <div className="d-flex justify-content-center align-items-center">
          <div className="m-5 p-5 text-center hero-section">
            <p>SHOP ALL NEW ARRIVALS</p>
            <h1>
              Trainers <span style={{ color: "var(--main-btn)" }}>&</span> Shoes
            </h1>
          </div>
        </div>
      </div>

      <div className="products p-5">
        <div className="container">
          <div className="row">
            {product.map((val) => {
              return (
                <div className="col-12 col-sm-12 col-md-10 col-lg-4">
                  <div className="card promo-card p-3 mt-2 product-card" onClick={() => toProduct(val)}>
                    <img
                      className="img-fluid card-img-top"
                      src={val.imgUrl}
                      alt="shoe"
                    />
                    <div className="product-card-txt">
                      <p className="fs-3 product-card-head">{val.name}</p>
                      <p className="fs-5 product-card-sub">{val.color}</p>
                      <p className="fs-4 product-card-head">${val.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};