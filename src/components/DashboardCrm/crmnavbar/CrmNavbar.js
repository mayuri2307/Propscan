import React from "react";
import "./CrmNavbar.css";

function CrmNavbar() {
  return (
    <nav
      className="navbar-expand"
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        width: "250px",
        height: "650px",
        padding: "3.5vh",
        marginTop: "-11vh",
        marginLeft: "-2vh",
      }}
    >
      <div className="container">
        <a className="nav-link a_style1" href="/">
          Overview
        </a>
        <a className="nav-link active a_style1" href="/">
          Listed
        </a>
        <a href="/" className="nav-link active a_style1">
          Enquiry Received
        </a>
        <a href="/" className="nav-link active a_style1">
          Qualified
        </a>
        <a href="/" className="nav-link active a_style1">
          Call Scheduled
        </a>
        <a href="/" className="nav-link active a_style1">
          On-Site Meeting Scheduled
        </a>
        <a href="/" className="nav-link active a_style1">
          Quotation Sent
        </a>
        <a href="/" className="nav-link active a_style1">
          Negotiation
        </a>
        <a href="/" className="nav-link active a_style1">
          Sold
        </a>
        <a href="/" className="nav-link active a_style1">
          Unlisted
        </a>
        <a href="/" className="nav-link active a_style1">
          Archived
        </a>
      </div>
    </nav>
  );
}

export default CrmNavbar;
