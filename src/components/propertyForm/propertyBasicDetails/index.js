import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./index.css";
import DashBoardNavbar from "../DashboardNavbar";

function PropertyBasicDetails(props) {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <div
        style={{
          margin: "0 5vw",
        }}
      >
        <DashBoardNavbar />
      </div>
      <div>
        <h2 className="heading">
          Welcome back Brijlal, Fill out basic details
        </h2>
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
            style={{
              color: "#0D2855",
            }}
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
      <div
        style={{
          marginTop: "-11vh",
        }}
      >
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
          onClick={
            () => props.updateFormPage("increase")
            // () => props.handlePageChange("increase"))
          }
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default PropertyBasicDetails;
