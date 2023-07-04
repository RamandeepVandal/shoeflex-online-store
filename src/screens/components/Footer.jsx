import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex justify-content-evenly align-items-center">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-evenly align-items-center footer-container">
              <div className="col-12 col-md-12 col-lg-6">
                <div className="card m-5 p-5 footer-card text-center">
                  <h1 className="fs-1">Comfort in every step.</h1>
                  <p className="fs-4">
                    Mixing comfort with latest fashion.
                  </p>
                  <button className="btn hero-btn">Browse</button>
                </div>
              </div>

              <div className="col-12 col-md-12 col-lg-6">
                <div className="card m-5 p-5 footer-card">
                  <div className="d-flex justify-content-evenly align-items-center mb-5 social-links-footer">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <a href="#" className="fs-5">
                        FAQs
                      </a>
                      <a href="#" className="fs-5">
                        Careers
                      </a>
                      <a href="#" className="fs-5">
                        Blog
                      </a>
                      <a href="#" className="fs-5">
                        Contact
                      </a>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <a href="#" className="fs-5">
                        Instagram
                      </a>
                      <a href="#" className="fs-5">
                        Facebook
                      </a>
                      <a href="#" className="fs-5">
                        Twitter
                      </a>
                      <a href="#" className="fs-5">
                        Linkedin
                      </a>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-5 social-links-footer">
                    <div className="d-flex align-items-center justify-content-between">
                      <a href="#" className="me-3 fs-6">
                        Terms of Use
                      </a>
                      <a href="#" className="ms-3 fs-6">
                        Privacy Policy
                      </a>
                    </div>
                    <div>
                      <p className="fs-6 mt-3">
                        © 2023 With Otter Inc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
