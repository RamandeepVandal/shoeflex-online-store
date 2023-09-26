import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// images
import NikeClip from "../assets/nike-clip.png";
import DesignClip from "../assets/design-clip.png";
import JordanImg from "../assets/jordans-item.png";

export const Homepage = () => {
  const [product, setProduct] = useState({
    name: "Jordan 1s - High",
    color: "1 Colour",
    price: 160,
    imgUrl: JordanImg,
  });

  // navigation
  const navigate = useNavigate();
  const toSneakers = () => navigate("/sneakers");
  const toDesigner = () => navigate("/designer");
  const toProduct = (data) => navigate("/product", { state: { data } });

  return (
    <section className="homepage">
      {/* HERO SECTION */}
      <div className="hero">
        <Header />
        <div className="d-flex justify-content-center align-items-center">
          <div className="p-5 m-5 hero-section">
            <p style={{ color: "var(--main-btn)" }}>Jordan 1s - High</p>
            <h1 className="display-1">ShoeFlex</h1>
            <p className="fs-3">
              <span>REINVENTING</span> RUNNING EXPERIENCE.
            </p>
            <button className="btn hero-btn" onClick={() => toProduct(product)}>
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="services">
        <div className="d-flex justify-content-evenly align-items-center m-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 col-lg-4">
                <div className="card services-card d-flex flex-row align-items-center text-center">
                  <div className="ms-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="3em"
                      className="mb-3"
                      viewBox="0 0 640 512"
                    >
                      <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                    </svg>
                    <h3>FREE SHIPPING</h3>
                    <p>
                      When you spend $50.00 minimum before taxes on all online
                      orders.
                    </p>
                    <a href="#">DETAILS</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-10 col-lg-4">
                <div className="card services-card d-flex flex-row align-items-center text-center">
                  <div className="ms-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="3em"
                      className="mb-3"
                      viewBox="0 0 512 512"
                    >
                      <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                    </svg>
                    <h3>PRICE MATCHING</h3>
                    <p>
                      Present a qualifying competitor's ad and we'll gladly
                      price match!
                    </p>
                    <a href="#">DETAILS</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-10 col-lg-4">
                <div className="card services-card d-flex flex-row align-items-center text-center">
                  <div className="ms-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="3em"
                      className="mb-3"
                      viewBox="0 0 576 512"
                    >
                      <path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z" />
                    </svg>
                    <h3>STORE PICK UP</h3>
                    <p>
                      Buy online, and then pick up your order in store or
                      curbside.
                    </p>
                    <a href="#">DETAILS</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SPONSORS SECTION */}
      <div className="sponsors d-flex flex-column justify-content-center align-items-center">
        <div className="m-5">
          <h1 className="text-center display-4 mb-3">FEATURED ON</h1>
          <div className="card sponsor-card mt-2 p-5 d-flex flex-column flex-md-column flex-lg-row justify-content-center align-items-center">
            <div>
              <svg
                className="m-2"
                viewBox="0 0 184 25"
                height="2.5em"
                aria-hidden="true"
              >
                <path d="M14.57,2.57C14.57,.55,12.65-.06,11.04,.01V.19c.96,.07,1.7,.46,1.7,1.11,0,.45-.32,1.01-1.28,1.01-.76,0-2.02-.45-3.2-.84-1.3-.45-2.54-.87-3.57-.87-2.02,0-3.55,1.5-3.55,3.36,0,1.5,1.16,2.02,1.63,2.21l.03-.07c-.3-.2-.49-.42-.49-1.06,0-.54,.39-1.26,1.43-1.26,.94,0,2.17,.42,3.8,.88,1.4,.39,2.91,.76,3.75,.87v3.28l-1.58,1.3,1.58,1.36v4.49c-.81,.46-1.75,.61-2.56,.61-1.5,0-2.88-.42-4.02-1.68l4.26-2.07V5.73l-5.2,2.32c.54-1.38,1.55-2.41,2.66-3.08l-.03-.08C3.31,5.73,.5,8.56,.5,12.06c0,4.19,3.35,7.3,7.22,7.3,4.19,0,6.65-3.28,6.61-6.75h-.08c-.61,1.33-1.63,2.59-2.78,3.25v-4.38l1.65-1.33-1.65-1.33v-3.28c1.53,0,3.11-1.01,3.11-2.96M5.8,14.13l-1.21,.61c-.74-.96-1.23-2.32-1.23-4.07,0-.72,.08-1.7,.32-2.39l2.14-.96-.03,6.8h0Zm19.47-5.76l-.81,.64-2.47-2.2-2.86,2.21V.48l-3.89,2.69c.45,.15,.99,.39,.99,1.43v11.81l-1.33,1.01,.12,.12,.67-.46,2.32,2.12,3.11-2.07-.1-.15-.79,.52-1.08-1.08v-7.12l.74-.54,1.7,1.48v6.19c0,3.92-.87,4.73-2.63,5.37v.1c2.93,.12,5.57-.87,5.57-5.89v-6.75l.88-.72-.12-.15h0Zm5.22,10.8l4.51-3.62-.12-.17-2.36,1.87-2.71-2.14v-1.33l4.68-3.3-2.36-3.67-5.2,2.86v6.8l-1.01,.79,.12,.15,.96-.76,3.5,2.54h-.01Zm-.69-5.67v-5.15l2.27,3.55-2.27,1.6ZM53.65,1.61c0-.32-.08-.59-.2-.96h-.07c-.32,.87-.67,1.33-1.68,1.33-.88,0-1.58-.54-1.95-.94,0,.03-2.96,3.42-2.96,3.42l.15,.12,.84-.96c.64,.49,1.21,1.06,2.63,1.08V13.34l-6.06-10.5c-.47-.79-1.28-1.97-2.66-1.97-1.63,0-2.86,1.4-2.66,3.77h.1c.12-.59,.47-1.33,1.18-1.33,.57,0,1.03,.54,1.3,1.03v3.38c-1.87,0-2.93,.87-2.93,2.34,0,.61,.45,1.94,1.72,2.17v-.07c-.17-.17-.34-.32-.34-.67,0-.57,.42-.88,1.18-.88,.12,0,.3,.03,.37,.05v4.38c-2.2,.03-3.89,1.23-3.89,3.31s1.7,2.88,3.47,2.78v-.07c-1.11-.12-1.68-.69-1.68-1.5,0-.88,.64-1.36,1.45-1.36s1.43,.52,1.95,1.11l2.96-3.33-.12-.12-.76,.87c-1.14-1.01-1.87-1.48-3.18-1.68V4.67l8.36,14.57h.45V4.72c1.6-.1,3.03-1.3,3.03-3.11m2.81,17.54l4.51-3.62-.12-.17-2.36,1.87-2.71-2.14v-1.33l4.68-3.3-2.36-3.67-5.2,2.86v6.8l-1.01,.79,.12,.15,.96-.76,3.5,2.54h0Zm-.69-5.67v-5.15l2.27,3.55-2.27,1.6Zm21.22-5.52l-.69,.52-1.97-1.68-2.29,2.07,.94,.88v7.72l-2.34-1.6v-6.26l.81-.57-2.41-2.24-2.24,2.07,.94,.88v7.46l-.15,.1-2.2-1.6v-6.13c0-1.43-.72-1.85-1.63-2.41-.76-.47-1.16-.91-1.16-1.63,0-.79,.69-1.11,.91-1.23-.79-.03-2.98,.76-3.03,2.76-.03,1.03,.47,1.48,.99,1.97,.52,.49,1.01,.96,1.01,1.83v6.01l-1.06,.84,.12,.12,1.01-.79,2.63,2.14,2.51-1.75,2.76,1.75,5.42-3.2v-6.95l1.21-.94-.1-.15h0Zm18.15-5.84l-1.03,.94-2.32-2.02-3.13,2.51V1.19h-.19V18.12c-.34-.05-1.06-.25-1.85-.37V3.58c0-1.03-.74-2.47-2.59-2.47s-3.01,1.56-3.01,2.91h.08c.1-.61,.52-1.16,1.13-1.16s1.18,.39,1.18,1.78v4.04c-1.75,.07-2.81,1.16-2.81,2.34,0,.67,.42,1.92,1.75,1.97v-.1c-.45-.19-.54-.42-.54-.67,0-.59,.57-.79,1.36-.79h.19v6.51c-1.5,.52-2.2,1.53-2.2,2.78,0,1.72,1.38,3.05,3.4,3.05,1.43,0,2.44-.25,3.75-.54,1.06-.22,2.21-.47,2.83-.47,.79,0,1.14,.35,1.14,.91,0,.72-.27,1.08-.69,1.21v.1c1.7-.32,2.69-1.3,2.69-2.83s-1.5-2.54-3.18-2.54c-.87,0-2.44,.27-3.72,.57-1.43,.32-2.66,.47-3.11,.47-.72,0-1.6-.32-1.6-1.28,0-.87,.72-1.56,2.49-1.56,.96,0,1.9,.15,3.08,.42,1.26,.27,2.12,.64,3.2,.64,1.5,0,2.71-.54,2.71-2.74V3.29l1.11-1.01-.12-.15h0Zm-4.24,6.78c-.27,.3-.59,.54-1.11,.54-.57,0-.87-.3-1.14-.54V3.81l.74-.59,1.5,1.28v4.41h0Zm0,2.41c-.25-.25-.57-.47-1.11-.47s-.91,.27-1.14,.47v-2.17c.22,.19,.59,.49,1.14,.49s.87-.25,1.11-.49v2.17Zm0,5.1c0,.84-.42,1.78-1.5,1.78-.17,0-.57-.03-.74-.05v-6.58c.25-.22,.57-.52,1.14-.52,.52,0,.81,.25,1.11,.52v4.86h0Zm8.78,2.74l5.03-3.13v-6.85l-3.25-2.39-5.03,2.88v6.78l-.99,.79,.1,.15,.81-.67,3.33,2.44h0Zm-.37-3.55v-7.3l2.51,1.87v7.3l-2.51-1.87Zm15.01-8.65c-.39,.27-.74,.42-1.11,.42-.39,0-.88-.25-1.14-.57,0,.03-1.87,2.02-1.87,2.02l-1.87-2.02-3.05,2.12,.1,.17,.81-.54,1.11,1.21v6.63l-1.33,1.01,.12,.12,.67-.46,2.49,2.12,3.15-2.09-.1-.15-.81,.49-1.28-1.16v-7.28c.52,.57,1.11,1.06,1.82,1.06,1.28,0,2.14-1.53,2.29-3.11m11.88,9.81l-.94,.59-5.2-7.76,.27-.37c.57,.34,1.08,.81,2.17,.81s2.47-1.14,2.59-3.23c-.27,.37-.81,.81-1.7,.81-.64,0-1.28-.42-1.67-.81l-3.55,5.22,4.71,7.17,3.42-2.27-.1-.17h0Zm-6.31,.19l-.79,.52-1.08-1.08V.48l-3.89,2.69c.45,.15,.99,.39,.99,1.43v11.81l-1.33,1.01,.12,.12,.67-.46,2.32,2.12,3.11-2.07-.1-.15h0Zm22.89-14.39c0-2.02-1.92-2.63-3.53-2.56V.19c.96,.07,1.7,.46,1.7,1.11,0,.45-.32,1.01-1.28,1.01-.76,0-2.02-.45-3.2-.84-1.3-.45-2.54-.87-3.57-.87-2.02,0-3.55,1.5-3.55,3.35,0,1.5,1.16,2.02,1.63,2.21l.03-.07c-.3-.2-.49-.42-.49-1.06,0-.54,.39-1.26,1.43-1.26,.94,0,2.17,.42,3.8,.88,1.4,.39,2.91,.76,3.75,.87v3.28l-1.58,1.3,1.58,1.36v4.49c-.81,.46-1.75,.61-2.56,.61-1.5,0-2.89-.42-4.02-1.68l4.26-2.07V5.73l-5.2,2.32c.54-1.38,1.55-2.41,2.66-3.08l-.03-.08c-3.08,.84-5.89,3.67-5.89,7.17,0,4.19,3.35,7.3,7.22,7.3,4.19,0,6.65-3.28,6.61-6.75h-.07c-.61,1.33-1.63,2.59-2.78,3.25v-4.38l1.65-1.33-1.65-1.33v-3.28c1.53,0,3.11-1.01,3.11-2.96m-8.78,11.56l-1.21,.61c-.74-.96-1.23-2.32-1.23-4.07,0-.72,.07-1.7,.32-2.39l2.14-.96-.03,6.8h0Zm11.93-12.31l-2.17,1.82,1.85,2.09,2.17-1.82-1.85-2.09Zm3.3,15.15l-.79,.52-1.08-1.08v-7.17l.91-.72-.12-.15-.76,.59-1.8-2.14-2.96,2.07,.1,.17,.74-.49,.99,1.23v6.61l-1.33,1.01,.12,.12,.67-.46,2.32,2.12,3.11-2.07-.1-.15h0Zm16.63-.1l-.74,.49-1.16-1.11v-7.03l.94-.72-.12-.15-.84,.64-2.47-2.2-2.78,2.17-2.44-2.17-2.74,2.14-1.85-2.14-2.96,2.07,.1,.17,.74-.49,1.06,1.21v6.61l-.81,.81,2.36,2,2.29-2.07-.94-.88v-7.04l.61-.45,1.7,1.48v6.16l-.79,.81,2.39,2,2.24-2.07-.94-.88v-7.04l.59-.47,1.72,1.5v6.06l-.69,.72,2.41,2.2,3.18-2.17-.1-.15h.02Zm8.6-1.5l-2.36,1.87-2.71-2.14v-1.33l4.68-3.3-2.36-3.67-5.2,2.86v6.93l3.57,2.59,4.51-3.62-.12-.17h0Zm-5.08-1.88v-5.15l2.27,3.55-2.27,1.6Zm14.12-.97l-2-1.53c1.33-1.16,1.8-2.63,1.8-3.69,0-.15-.03-.42-.05-.67h-.08c-.19,.54-.72,1.01-1.53,1.01s-1.26-.45-1.75-.99l-4.58,2.54v3.72l1.75,1.38c-1.75,1.55-2.09,2.51-2.09,3.4s.52,1.67,1.41,2.02l.07-.12c-.22-.19-.42-.32-.42-.79,0-.34,.35-.88,1.14-.88,1.01,0,1.63,.69,1.95,1.06,0-.03,4.38-2.69,4.38-2.69v-3.77h0Zm-1.03-3.05c-.69,1.23-2.21,2.44-3.11,3.13l-1.11-.94v-3.62c.45,.99,1.36,1.82,2.54,1.82,.69,0,1.14-.12,1.67-.39m-1.9,8.13c-.52-1.16-1.63-2-2.86-2-.3,0-1.21-.03-2,.46,.47-.79,1.87-2.21,3.65-3.28l1.21,1.01v3.8Z"></path>
              </svg>
            </div>
            <div>
              <svg
                className="m-2"
                viewBox="0 0 98 32"
                height="2.5em"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path d="M3 2.36h23.67v5.4h-.43l.05-3.46h-9.35v24.36h2.7v.8H10.4v-.8h2.5V4.3H3.45v3.46H3v-5.4zM27.8 2.36h9.3v.75h-2.65v25.56h2.64v.8h-9.3v-.8h2.7V3.1h-2.7v-.74zM45.3 2.3h1.78l8.7 20.9 8.64-20.9h1.73L71 28.66h2.44v.8h-9.6v-.8h2.47l-3-16.85-7.68 17.67h-1.8l-7.6-17.66-3.2 16.86h2.33l-.05.8h-7.07l.05-.8h2.16L45.3 2.3zM74.25 2.36h20.47l.05 5.35h-.37l-.17-3.3-13.4-.15v10.7h11.4l.27-2.5h.5c-.12 2.28-.12 4.5 0 6.76h-.5l-.27-2.58h-11.4V27.7h13.9l.04-3.68h.38v5.45h-20.9v-.76l2.7-.04V3.16l-2.7-.05v-.74z"></path>
              </svg>
            </div>
            <div>
              <svg
                className="m-2"
                viewBox="0 0 80 32"
                height="2.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M74.1138 19.7927H79.5993C78.9095 28.1443 67.359 28.2109 66.3494 21.5882V25.9005H58.3848V21.5415C57.6902 25.8035 55.2516 26.3913 54.1828 26.3883C53.2862 26.3851 51.0886 25.6482 50.2765 23.4015L50.3544 25.8475C50.3708 27.3661 51.3408 28.3272 52.3712 28.4655V31.997L43.0779 32L43.0773 28.4655C43.8578 28.4438 45.1087 27.6781 45.122 25.9737V19.5737C44.8368 21.1827 43.6448 26.386 37.9291 26.386C32.265 26.386 30.9839 20.8912 30.7411 20.0854C29.6831 26.0724 25.7021 26.4023 23.9539 26.3803C20.8139 26.3402 18.9348 24.18 18.8881 24.1324C16.9992 22.2143 16.6357 19.309 16.7118 16.1764C16.7118 15.5461 16.8734 14.3205 16.9299 13.7187C14.8982 15.9015 13.0149 15.6297 10.7798 15.7126L8.90161 15.7094V19.2882C8.89983 20.7282 9.42872 21.5896 11.0362 21.6012V25.9062H0V21.6914C1.6075 21.6795 2.15751 20.7404 2.15572 19.3004V6.53707C2.15602 6.23247 2.08106 4.2585 0.00654421 4.24303V0H11.9158C14.1602 0 15.7564 0.68387 16.8305 1.52986C18.8173 3.09452 19.2135 5.7836 19.3747 7.77482C22.4092 5.13572 29.5983 4.54674 30.8018 12.4459C32.1011 6.42731 36.5366 5.97159 37.5754 5.96743C39.4396 5.96059 42.6239 7.08708 43.6573 10.1319V6.37793H50.1813V8.79334C50.6617 6.97048 52.2713 5.97962 53.9032 5.9701C55.4768 5.96059 58.6998 7.70819 59.527 14.3613V5.50219C59.5196 4.22488 58.7388 3.56541 57.4611 3.57195L57.457 0.0389678H65.0489V14.3672C65.7411 8.01963 69.283 5.98944 72.2647 5.98914C75.2923 5.98855 77.4385 7.67725 78.5383 9.83684C79.9465 12.6003 79.8459 15.5214 79.7611 17.4138L70.5237 17.4162C70.491 17.7788 70.5252 18.3883 70.5534 18.9491C70.6317 20.5206 71.1484 21.9427 72.379 21.9362C73.3808 21.9415 73.9091 20.9897 74.1138 19.7927ZM24.1279 21.9362C25.1295 21.9416 25.6584 21.0007 25.8627 19.8031L30.6742 19.801C30.4306 18.6004 30.4017 18.3479 30.3753 17.4147L22.2729 17.4162C22.2396 17.7788 22.2747 18.3883 22.3027 18.9491C22.3806 20.5206 22.8973 21.9427 24.1279 21.9362ZM35.9158 16.2124C35.9158 19.3964 36.4881 21.9594 37.9249 21.9787C39.4006 21.9978 39.934 19.3964 39.934 16.2124C39.934 13.0274 39.3619 10.4663 37.9249 10.446C36.5271 10.4264 35.9158 13.0274 35.9158 16.2124ZM24.0946 10.3327C22.864 10.3262 22.3083 11.8316 22.2304 13.4031C22.2036 13.9362 22.1941 13.9603 22.2304 14.3577H25.8812C25.9175 13.9603 25.9076 13.9362 25.8812 13.4031C25.8029 11.8316 25.3252 10.3262 24.0946 10.3327ZM72.3448 10.449C71.1139 10.4425 70.5969 11.8316 70.5189 13.4031C70.4928 13.9362 70.4829 13.9603 70.5189 14.3577H74.17C74.2063 13.9603 74.1965 13.9362 74.17 13.4031C74.0921 11.8316 73.5751 10.4425 72.3448 10.449ZM50.5273 19.1103C50.5273 20.7118 50.9214 21.9285 52.0443 21.9285C53.2987 21.9285 54.048 20.2279 54.048 16.2299C54.048 11.8403 53.3713 10.3339 52.1919 10.2821C51.0502 10.2322 50.4675 11.2028 50.5273 13.2053V19.1103ZM8.92006 10.8887H10.4678C11.8688 10.8497 12.3576 10.0049 12.3576 7.86198C12.3576 5.91299 11.6734 4.90042 10.4678 4.90042H8.92006V10.8887Z"></path>
              </svg>
            </div>
            <div>
              <svg className="m-2" height="2.5em" viewBox="29 28 271 43">
                <path d="m126.2 69c-4.8 0-6-8.2-6-16.1 0-8 1.3-16.3 6-16.3 4.8 0 6 8.2 6 16.3s-1.2 16.1-6 16.1m0-33.5c-6.5 0-11.3 7.6-11.3 17.4 0 9.7 4.8 17.2 11.3 17.2s11.4-7.6 11.4-17.3c0-9.8-4.9-17.3-11.4-17.3m85.1 16.7c-0.3 0-1.3 0.1-1.4-0.1v-13.4c0-1.3 0.4-1.8 1.7-1.8 2.5 0 4 2.7 4 7.5 0 5.5-1.7 7.8-4.3 7.8m11.1 15.1l-3.2-7.2-3.4-7.3 0.7-0.3c2.1-1.3 4.1-3.3 4.1-7.8 0-5.8-3.5-8.6-7.3-8.6h-5.8-4.9v0.9h1.1c1 0 1.3 0.5 1.3 2.5v26.8c0 2-0.3 2.5-1.3 2.5h-1.1v0.9h9.1v-0.9h-0.6c-1 0-1.3-0.5-1.3-2.5v-12.5c0-0.4 0.1-0.5 0.4-0.5 1 0 1.6 0.7 2.1 2 2.9 6.8 4.6 10.9 5.1 12.2 0 0 0.7 2.1 2.8 2.1 1.8 0.1 4.5 0.1 4.5 0.1v-0.9c-0.6-0.1-1.9-0.5-2.3-1.5m-29.3 1.4c-1.2 0-2.4 0-3-0.1-0.7 0-0.9-1.2-0.9-2v-13.4h1.3c2.8 0 3.8 2.6 4 6.2h0.7v-6.4c0-3.4 0.1-6.7 0.1-7h-0.7c0 2.6-1.1 6.1-4 6.1h-1.3v-14.9c0-0.2 0.1-0.3 0.4-0.3h2.1c3.7 0 5.1 2.5 7.2 7.3h0.9c-0.4-2.2-0.8-5.5-1.2-8 0-0.1-0.1-0.2-0.3-0.2-1.7 0.1-6.6 0.1-11.2 0.1h-5-3.5-3.8v0.8h1.1c1.1 0 1.8 1.2 1.2 3.7-1.4 5.6-4.9 19.3-4.9 19.3s-3.8-15.6-5-20.6c-0.4-1.8-0.3-2.4 0.7-2.4h0.9v-0.9h-4.5-4.8-3.4-3.9v0.9c1.9 0 3 0.6 3 3.9v18.4c0 5.9-1.2 9.7-4.9 9.7-3.1 0-4.4-2.9-4.4-7.8v-21.7c0-2 0.3-2.5 1.3-2.5h0.8v-0.9h-4.5-4.8v0.9h1.1c1 0 1.3 0.5 1.3 2.5v21.6c0 4.7 2.6 9.1 8.3 9.1 5.8 0 7-5.1 7-11v-18.4c0-3.2 1-3.9 3.1-3.9h1.2c0.8 0 1.1 0.7 1.7 3 1.3 5.3 6.9 27.9 7.5 30.2h0.6c0.6-2.3 5.9-22.9 7.4-28.7 1-3.8 2.4-4.6 3.9-4.6h1.1c1 0 1.3 0.5 1.3 2.5v26.8c0 2-0.3 2.5-1.3 2.5h-1v0.9h16.7c0.2 0 0.3 0.1 0.3 0 0.7-2.8 1.2-7 1.8-9.4h-0.9c-2 5.6-3.6 8.7-6.8 8.7m99-32.8v0.9c1.9 0 3 1.5 3 4.8v16.2c-1.7-3.2-10.1-19.1-11.4-21.6-0.1-0.2-0.1-0.3-0.3-0.3h-3.1-3.1-3.5-3.9v0.9c1.9 0 3 0.6 3 3.9v18.4c0 5.9-1.2 9.7-4.9 9.7-3.1 0-4.4-2.9-4.4-7.8v-21.7c0-2 0.3-2.5 1.3-2.5h0.8v-0.9h-4.5-4.8v0.9h1.1c1 0 1.3 0.5 1.3 2.5v21.7c0 4.7 2.6 9.1 8.3 9.1 5.8 0 7-5.1 7-11v-18.4c0-3.2 1-3.9 3.1-3.9 1 0 1.5 0.4 2.1 1.4 0.4 0.7 0.9 1.8 1.4 2.7v23.5c0 3.2-1.1 4.2-2.2 4.2h-0.9v0.9h3.4 4v-0.9h-1c-1.3 0-2.1-1.3-2.1-4.7v-20.5c5.4 10.4 8 15.6 13.8 26.7h0.8c0-2-0.1-27.3-0.1-28.5 0-3.2 1.2-4.8 3.4-4.8v-0.9h-3.8-3.8zm-182.4 1.5c-2.7-2.2-5.3-1.9-5.3-1.9-5.5 0-11.5 6-11.5 17.4 0 8.4 3.8 17.2 11.2 17.2 3.7 0 6.6-2.4 8.5-4.4v-7.3h-0.7c-1.4 6.4-2.6 10.6-7.5 10.6-3.5 0-6.1-4.4-6.1-16.1 0-10.9 2.1-16.3 6.1-16.3 5.3 0 6.2 5.1 7.3 9.5h0.8v-10.3h-0.9c-0.1 3.6-1.9 1.6-1.9 1.6m139.4 9.6c-0.9-0.8-4.2-3.8-5.4-4.8-2-1.7-2.7-2.9-3.4-5.5-0.3-1.1-0.3-7.1 4.8-7.1 2.9 0 5.4 3.4 7.1 9.7h0.8c-0.3-5.3-0.3-5.4-0.6-10.7h-0.8l-0.1 0.6c0 0.3-0.2 1.5-0.8 1.5-0.2 0-0.5 0-1-0.4-1.5-1.2-3.4-2-5.1-2-4.1 0-8.8 3.5-8.5 11.2 0.1 2.9 1.5 5.3 3.4 7.5 2.4 2.6 5.2 5 7.2 7s2.8 3.7 3.1 6.2c0.4 3-0.4 8.6-4.4 8.6-4.2 0-7.2-4.2-8.9-12l-0.8 0.1c0 0.7 0.3 10.7 0.3 12.8h0.8c0.5-2.5 1-3.1 2.4-1.8 1.4 1.2 3.1 2.3 6.2 2.3 5.8 0 9.1-5.1 9.1-11.1 0-5.9-2.8-9.8-5.4-12.1m-207.4 23.1h1c0.7-2.8 7-27.5 8.8-34.4 1.2-4.6 2.6-5.6 4.5-5.6v-1h-4.3-4.2v1h1.4c1.3 0 2.2 1.5 1.5 4.4-1.7 6.7-5.8 23-5.8 23s-4.6-18.6-6.1-24.5c-0.5-2.1-0.4-2.9 0.8-2.9h1v-1h-5.5s-4.8 0-5.5 0v1h1.5c1 0 1.3 0.9 2 3.6 1.6 6.4 8.3 33.6 8.9 36.4m16.2-26.4l3 11.1h-5.5l2.5-11.1zm-9.7 25v0.9h7.2v-0.9c-2.1 0-2.9-1.8-2.3-4.5 1-4.2 1.8-7.8 1.8-8.2h6.3c1.2 4.4 1.2 4.9 2.7 10.1 0.4 1.4 0.3 2.6-0.8 2.6h-1v0.9h15.4v-0.9h-1c-1.3 0-2.1-1.3-2.1-4.7v-20.6c5.4 10.4 8.2 15.6 14 26.7h0.6c0-2-0.1-27.3-0.1-28.5 0-3.2 1.2-4.8 3.3-4.8v-0.8h-3.8-3.9v0.9c1.9 0 3 1.5 3 4.8v16.2c-1.7-3.2-10.1-19.1-11.4-21.6 0.1-0.2 0.1-0.3-0.1-0.3h-3.1-3.1v0.9c1 0 1.5 0.4 2.1 1.4 0.4 0.7 0.9 1.8 1.4 2.7v23.5c0 3-0.8 4-1.9 4.2h-0.1c-1-0.1-1.7-0.8-2-1.7-3.5-12.5-5.4-17.8-9.2-31.5h-1.1c-0.5 2-6.9 28-7.3 29.9-0.7 2.6-1.9 3.3-3.5 3.3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* PROMO SECTION */}
      <div className="promo">
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
          <h1 className="display-3">Top Picks</h1>
          <div className="d-flex flex-row mt-3">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-12 col-sm-12 col-lg-6">
                  <div className="card promo-card p-3 mt-2">
                    <img
                      className="img-fluid card-img-top"
                      src={NikeClip}
                      alt="shoe"
                    />
                    <div className="p-3 text-center">
                      <h3 className="fs-1">Sneakers</h3>
                      <p className="fs-3">
                        <span>REINVENTING</span> RUNNING EXPERIENCE
                      </p>
                      <button
                        className="btn hero-btn fs-4"
                        onClick={toSneakers}
                      >
                        Browse Sneakers
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-sm-12 col-lg-6">
                  <div className="card promo-card p-3 mt-2">
                    <img
                      className="img-fluid card-img-top"
                      src={DesignClip}
                      alt="shoe"
                    />
                    <div className="p-3 text-center">
                      <h3 className="fs-1">Designer</h3>
                      <p className="fs-3">
                        <span>DESIGNED</span> WITH PERFECTION
                      </p>
                      <button
                        className="btn hero-btn fs-4"
                        onClick={toDesigner}
                      >
                        Browse Designer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <Footer />
    </section>
  );
};
