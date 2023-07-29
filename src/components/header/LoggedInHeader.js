import React, { useState } from "react";
import "./header.css";
import "./header.css";
import DropDownProfile from "./DropDownProfile";
import Searchbar from "../searchbar";
import getFontData from "../../utils/getFontData";

export default function LoggedInHeader() {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div className="logged-in-header px-4">
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <img
          style={{ width: "60px", height: "auto" }}
          src="/images/logo.png"
          alt="not found"
        />
        <img
          style={{ width: "90px", height: "auto" }}
          src="/images/propscan.png"
          alt="not found"
        />
        <span className="header-com">.com</span>
      </div>

      <div style={{ flexGrow: 2 }}>
        <Searchbar defaultClass="" />
      </div>
      <div>
        <span style={getFontData("12px", "500", { color: "#FFF" })}>
          BRIJLAL CHARSI
        </span>

        <img
          src="/images/profile.svg"
          onClick={() => setOpenProfile((prev) => !prev)}
          alt="not found"
          style={{
            marginLeft: "12px",
            padding: "8px",
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
          }}
        />
        {openProfile && <DropDownProfile></DropDownProfile>}
      </div>
    </div>
  );
}
