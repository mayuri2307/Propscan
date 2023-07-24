import React from "react";
import "./header.css";
import {Link} from "react-router-dom";
import {SelectBox} from "../selectbox"

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
            <Link to="/"  style={{ textDecoration: 'none' }}>
              <img
                style={{ width: "60px", height: "auto" }}
                src="images/logo.png"
                alt="img"
              />
              <img
                style={{ width: "90px", height: "auto" }}
                src="images/propscan.png"
                alt="img"
              />
              <span className="header-com">.com</span>
            </Link>
          </div>
          <div className="header-items">
            <span className="px-4 px-lg-5">
              {/* Sell{" "}
              <img
                src="images/img_checkmark.svg"
                alt="not found"
                style={{ paddingBottom: "2px" }}
                alt="img"
              /> */}
              <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[9%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group105"
            />
            </span>
            <span className="px-4 px-lg-5">
              Buy{" "}
              <img
                src="images/img_checkmark.svg"
                style={{ paddingBottom: "2px" }}
                alt="img"
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
            <a href="/login" style={{textDecoration:"none", color:"inherit"}}><span style={{backgroundColor:"#E8F9FD", borderRadius:"38px", padding:"8px 20px", fontSize:"14px"}}>Log In/Sign Up</span></a>
              <div className="header-menu-icon float-end" onClick={toggleMenu}>
                <div style={{backgroundColor: "#0D2855"}}></div>
                <div style={{backgroundColor: "#0D2855"}}></div>
                <div style={{backgroundColor: "#0D2855"}}></div>
              </div>
            </div>
            <div className="pt-3">
              <hr/>
              <p>
                Sell{" "} <img
                  src="images/img_checkmark.svg"
                  style={{ paddingBottom: "2px", filter: "invert(34%) sepia(10%) saturate(6025%) hue-rotate(177deg) brightness(28%) contrast(99%)" }}
                  alt="img"
                />
              </p>
              <hr/>
              <p>
                Buy{" "} <img
                  src="images/img_checkmark.svg"
                  style={{ paddingBottom: "2px", filter: "invert(34%) sepia(10%) saturate(6025%) hue-rotate(177deg) brightness(28%) contrast(99%)" }}
                  alt="img"
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
