import React from "react";
import "../propertyForm/propertyBasicDetails/index.css";

function DashBoardNavbar() {
  return (
    <nav className="navbar navbar-expand-lg property-dashboard">
      <div className="container-fluid ">
        <a
          className="nav-link a_style"
          href="/properties-dashboard/home"
          style={{
            backgroundColor:
              window.location.pathname === "/properties-dashboard/home"
                ? "#E8F9FD"
                : "",
          }}
        >
          Dashboard
        </a>
        <a
          className="nav-link active a_style"
          href="/properties-dashboard/listings"
        >
          My Listings
        </a>
        <a className="nav-link active a_style" href="/">
          CRM
        </a>
        <a className="nav-link active a_style" href="/">
          CMA
        </a>
        <a className="nav-link active a_style" href="# ">
          Meeting Scheduler
        </a>
        <a className="nav-link active a_style" href="/">
          Analytics
        </a>
      </div>
    </nav>
  );
}

export default DashBoardNavbar;
