import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

import Searchbar from "../searchbar";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <img
            style={{ width: "60px", height: "auto" }}
            src="images/logo.png"
          />
          <img
            style={{ width: "90px", height: "auto" }}
            src="images/propscan.png"
          />
          <span className="header-com">.com</span>
        </div>
        <div className="header-items">
          <span className="px-5">
            Sell{" "}
            <img
              src="images/img_checkmark.svg"
              style={{ paddingBottom: "2px" }}
            />
          </span>
          <span className="px-5">
            Buy{" "}
            <img
              src="images/img_checkmark.svg"
              style={{ paddingBottom: "2px" }}
            />
          </span>
          <span className="px-5">About Us</span>
          <span className="px-5">Contact Us</span>

          <button onClick={() => navigate("/login")} className="btn-white">
            Log In/Sign Up
          </button>
        </div>
      </div>
      <div className="header-main-txt">
        <span>Buy.</span>
        <br />
        <span>Sell.</span>
        <br />
        <span>Rent.</span>
      </div>
      <div>
        <Searchbar />
      </div>
    </div>
  );
}
