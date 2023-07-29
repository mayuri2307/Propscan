import React from "react";
// import "./CrmNavbar.css";

function CmaNavbar() {
  return (
    <nav
      className="navbar-expand"
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        width: "250px",
        height: "950px",
        padding: "3.5vh",
        marginTop: "-11vh",
        marginLeft: "-2vh",
      }}
    >
      <div className="container">
        <a
          className="nav-link a_style1"
          href="/properties-dashboard/cma/activelisting"
          style={{
            backgroundColor:
              window.location.pathname ===
              "/properties-dashboard/cma/activelisting"
                ? "#E8F9FD"
                : "",
          }}
        >
          Active Listings
        </a>
        <a
          style={{
            backgroundColor:
              window.location.pathname ===
              "/properties-dashboard/cma/pendinglisting"
                ? "#E8F9FD"
                : "",
          }}
          className="nav-link active a_style1"
          href="/properties-dashboard/cma/pendinglisting"
        >
          Pending Listings
        </a>
        <a
          href="/properties-dashboard/cma/soldpricelisting"
          style={{
            backgroundColor:
              window.location.pathname ===
              "/properties-dashboard/cma/soldpricelisting"
                ? "#E8F9FD"
                : "",
          }}
          className="nav-link active a_style1"
        >
          Sold Price Listings
        </a>
        <a
          href="/properties-dashboard/cma/marketlisting"
          style={{
            backgroundColor:
              window.location.pathname ===
              "/properties-dashboard/cma/marketlisting"
                ? "#E8F9FD"
                : "",
          }}
          className="nav-link active a_style1"
        >
          Cancelled/Off Market Listings
        </a>
      </div>
    </nav>
  );
}

export default CmaNavbar;
