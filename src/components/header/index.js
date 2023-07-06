import React from "react";

import "./header.css";

import Searchbar from "../searchbar";

export default function Header() {
  const toggleMenu = () => {
    const menu = document.getElementsByClassName("header-menu")[0];
    const body = document.body;
    if (menu.style.height === "0vh" || menu.style.height === "") {
      menu.style.height = "100vh";
      body.style.height = "100vh";
      body.style.overflow = "hidden";
    } else {
      menu.style.height = "0vh";
      body.style.height = "100%";
      body.style.overflow = "";
    }
  };
  return (
    <div style={{ position: "relative" }}>
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
            <span className="px-4 px-lg-5">
              Sell{" "}
              <img
                src="images/img_checkmark.svg"
                style={{ paddingBottom: "2px" }}
              />
            </span>
            <span className="px-4 px-lg-5">
              Buy{" "}
              <img
                src="images/img_checkmark.svg"
                style={{ paddingBottom: "2px" }}
              />
            </span>
            <span className="px-4 px-lg-5">About Us</span>
            <span className="px-4 px-lg-5">Contact Us</span>
            <a href="/login">
              <button className="btn-white">Log In/Sign Up</button>
            </a>
          </div>
          <div className="header-menu-icon" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="header-menu">
            <div className="px-3 px-lg-5 pb-2 pt-4">
              <span style={{backgroundColor:"#E8F9FD", borderRadius:"38px", padding:"8px 20px", fontSize:"14px"}}>Log In/Sign Up</span>
              <div className="header-menu-icon float-end" onClick={toggleMenu}>
                <div style={{backgroundColor: "#0D2855"}}></div>
                <div style={{backgroundColor: "#0D2855"}}></div>
                <div style={{backgroundColor: "#0D2855"}}></div>
              </div>
            </div>
            <div>
              <hr/>
              <p>
                Sell{" "} <img
                  src="images/img_checkmark.svg"
                  style={{ paddingBottom: "2px", filter: "invert(34%) sepia(10%) saturate(6025%) hue-rotate(177deg) brightness(28%) contrast(99%)" }}
                />
              </p>
              <hr/>
              <p>
                Buy{" "} <img
                  src="images/img_checkmark.svg"
                  style={{ paddingBottom: "2px", filter: "invert(34%) sepia(10%) saturate(6025%) hue-rotate(177deg) brightness(28%) contrast(99%)" }}
                />
              </p>
              <hr/>
              <p>About Us</p>
              <hr/>
              <p>Contact Us</p>
              <hr/>
            </div>
          </div>
        </div>
        <div className="header-main-txt">
          <span>Buy.</span>
          <br />
          <span>Sell.</span>
          <br />
          <span>Rent.</span>
        </div>
      </div>
      <div>
        <Searchbar />
      </div>
    </div>
  );
}
