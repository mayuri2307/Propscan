import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./dashboard.css";

function OwnerDashborad(props) {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ margin: "3vh" }}>
        <div className="container-fluid ">
          <a
            className="navbar-brand a_style"
            href=""
            style={{ marginRight: "15vh" }}
          >
            Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active a_style"
                aria-current="page"
                href="/"
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
          </div>
        </div>
      </nav>
      <div>
        <h2 className="heading">Welcome back Brijlal,Fill out basic details</h2>
      </div>
      <div>
        <p className="p">I'm looking to </p>
      </div>
      <Stack direction="row" spacing={1} className="chip">
        <Chip
          label="Sell"
          onClick={() => setSelected("Sell")}
          variant={selected === "Sell" ? "default" : "outlined"}
          component="a"
          href="#basic-chip"
          style={{
            color: "#0D2855",
            border: "1px solid #0D2855",
            borderRadius: "30px",
            backgroundColor: selected === "Sell" ? "#E8F9FD" : "white",
          }}
          clickable
        />
        <Chip
          label="Rent / Lease"
          onClick={() => setSelected("Rent / Lease")}
          variant={selected === "Rent / Lease" ? "default" : "outlined"}
          component="a"
          href="#basic-chip"
          style={{
            color: "#0D2855",
            border: "1px solid #0D2855",
            borderRadius: "30px",
            backgroundColor: selected === "Rent / Lease" ? "#E8F9FD" : "white",
          }}
          clickable
        />
        <Chip
          label="PG"
          onClick={() => setSelected("PG")}
          variant={selected === "PG" ? "default" : "outlined"}
          component="a"
          href="#basic-chip"
          style={{
            color: "#0D2855",
            border: "1px solid #0D2855",
            borderRadius: "30px",
            backgroundColor: selected === "PG" ? "#E8F9FD" : "white",
          }}
          clickable
        />
      </Stack>

      <p className="p1">What kind of property do you have? </p>
      <div className="radio">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            class="form-check-label"
            for="flexRadioDefault1"
            style={{ color: "#0D2855" }}
          >
            Residential
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Commercial
          </label>
        </div>
      </div>

      <div style={{ marginTop: "-11vh" }}>
        <Stack direction="row" spacing={1} className="chip">
          <Chip
            label="Flat / Apartment"
            onClick={() => setSelected("Flat / Apartment")}
            variant={selected === "Flat / Apartment" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              // gap: "8px",
              backgroundColor:
                selected === "Flat / Apartment" ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <Chip
            label="Independent House / villa"
            onClick={() => setSelected("Independent House / villa")}
            variant={
              selected === "Independent House / villa" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                selected === "Independent House / villa" ? "#E8F9FD" : "white",
            }}
            clickable
          />
        </Stack>

        <Stack direction="row" cell spacing={1} className="chip1">
          <Chip
            label="Independent / Builder Floor"
            onClick={() => setSelected("Independent / Builder Floor")}
            variant={
              selected === "Independent / Builder Floor"
                ? "default"
                : "outlined"
            }
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                selected === "Independent / Builder Floor"
                  ? "#E8F9FD"
                  : "white",
            }}
            clickable
          />
          <Chip
            label="Plot / Land"
            onClick={() => setSelected("Plot / Land")}
            variant={selected === "Plot / Land" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor: selected === "Plot / Land" ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <Chip
            label="1 RK / Studio Apartment"
            onClick={() => setSelected("1 RK / Studio Apartment")}
            variant={
              selected === "1 RK / Studio Apartment" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                selected === "1 RK / Studio Apartment" ? "#E8F9FD" : "white",
            }}
            clickable
          />
        </Stack>
        <Stack direction="row" cell spacing={1} className="chip2">
          <Chip
            label="Service Apartment"
            onClick={() => setSelected("Service Apartment")}
            variant={selected === "Service Apartment" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                selected === "Service Apartment" ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <Chip
            label="Farmhouse"
            onClick={() => setSelected("Farmhouse")}
            variant={selected === "Farmhouse" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor: selected === "Farmhouse" ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <Chip
            label="Other"
            onClick={() => setSelected("Other")}
            variant={selected === "Other" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor: selected === "Other" ? "#E8F9FD" : "white",
            }}
            clickable
          />
        </Stack>
      </div>
      <div>
        <button
          type="submit"
          className="button"
          onClick={() => props.updateFormPage("increase")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default OwnerDashborad;
