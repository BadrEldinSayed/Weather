import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container mb-5 ">
        <div className="row ">
          <div className="col-md-7 col-sm-12">
            <input
              type="email"
              className="w-100 mt-5"
              placeholder="Enter your email to subscribe..."
            />

          </div>
          <div className="social-icons col-md-5 col-sm-12">
            <div className="icon mx-2">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="icon mx-2">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="icon mx-2">
              <i className="fa-brands fa-google-plus-g"></i>
            </div>
            <div className="icon mx-2">
              <i className="fa-brands fa-pinterest"></i>
            </div>
          </div>
        </div>
        <p className="footer-par">
              Copyright 2014 Company name. Designed by Themezy. All rights
              reserved
            </p>
      </div>
    </footer>
  );
}
