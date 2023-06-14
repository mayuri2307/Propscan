import React, { useState } from "react";
import "./dashboard3.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import AddIcon from "@mui/icons-material/Add";

function OwnerDashboard3(props) {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <button
        onClick={() => props.updateFormPage("decrease")}
        type="button"
        className=" butto2"
      >
        Back
      </button>
      <div>
        <h2 className="heading">Tell us about your property</h2>
        <p className="para2 ">Add Room Details</p>
      </div>
      <div>
        <p className="para3">No.of Bedrooms</p>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip3">
          <Chip
            label="1"
            onClick={() => setSelected("1")}
            variant={selected === "1" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              marginLeft: "4.5vh",
              backgroundColor: selected === "1" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="2"
            onClick={() => setSelected("2")}
            variant={selected === "2" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: selected === "2" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="3"
            onClick={() => setSelected("3")}
            variant={selected === "3" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: selected === "3" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="4"
            onClick={() => setSelected("4")}
            variant={selected === "4" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: selected === "4" ? "#E8F9FD" : "white",
            }}
          />
        </Stack>
      </div>
      <div className="icon">
        <AddIcon />
        Add Other
      </div>
      <div>
        <p className="para3">No.of Bathrooms</p>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip3">
          <Chip
            label="1"
            onClick={() => setSelected("1")}
            variant={selected === "1" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              marginLeft: "4.5vh",
              backgroundColor: selected === "1" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="2"
            onClick={() => setSelected("2")}
            variant={selected === "2" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: selected === "2" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="3"
            onClick={() => setSelected("3")}
            variant={selected === "3" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: selected === "3" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="4"
            onClick={() => setSelected("4")}
            variant={selected === "4" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: selected === "4" ? "#E8F9FD" : "white",
            }}
          />
        </Stack>
      </div>
      <div className="icon">
        <AddIcon />
        Add Other
      </div>

      <div>
        <p className="para3">No.of Balconies</p>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip3">
          <Chip
            label="1"
            onClick={() => setSelected("1")}
            variant={selected === "1" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              marginLeft: "4.5vh",
              backgroundColor: selected === "1" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="2"
            onClick={() => setSelected("2")}
            variant={selected === "2" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: selected === "2" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="3"
            onClick={() => setSelected("3")}
            variant={selected === "3" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: selected === "3" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="More than 3"
            onClick={() => setSelected("More than 3")}
            variant={selected === "More than 3" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: selected === "More than 3" ? "#E8F9FD" : "white",
            }}
          />
        </Stack>
      </div>
      <div className="icon">
        <AddIcon />
        Add Other
      </div>
      <div>
        <p className="para4">Add Area Details</p>
        <p className="para5">Atleast one area type is mandatory</p>
      </div>
      <div className="input-group mb-3 ">
        <select name="feets" id="feets" style={{ padding: "0", margin: "0" }}>
          <option value="sq.ft">sq.ft</option>
          <option value="sq.yards">sq.yards</option>
          <option value="sq.m.">sq.m.</option>
          <option value="arces">arces</option>
          <option value="marla">marla</option>
          <option value="censt">censt</option>
        </select>
        <input type="text" placeholder="Carpet Area" aria-label="Carpet Area" />
      </div>
      <div style={{ display: "flex" }}>
        <div className="icon1">
          <AddIcon />
          Add Built-up Area
        </div>
        <div className="icon1">
          <AddIcon />
          Add Super Built-up Area
        </div>
      </div>
      <div>
        <p className="para6">Other rooms(optional)</p>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip3">
          <Chip
            label="+ Pooja Room"
            onClick={() => setSelected("+ Pooja Room")}
            variant={selected === "+ Pooja Room" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                selected === "+ Pooja Room" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="+ Study Room"
            onClick={() => setSelected("+ Study Room")}
            variant={selected === "+ Study Room" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                selected === "+ Study Room" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="+ Servant Room"
            onClick={() => setSelected("+ Servant Room")}
            variant={selected === "+ Servant Room" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                selected === "+ Servant Room" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="+ Store Room"
            onClick={() => setSelected("+ Store Room")}
            variant={selected === "+ Store Room" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                selected === "+ Store Room" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
        </Stack>
      </div>
      <div>
        <p className="para6">Furnishing(optional)</p>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip3">
          <Chip
            label="+ Pooja Room"
            onClick={() => setSelected("+ Pooja Room")}
            variant={selected === "+ Pooja Room" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                selected === "+ Pooja Room" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="+ Study Room"
            onClick={() => setSelected("+ Study Room")}
            variant={selected === "+ Study Room" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                selected === "+ Study Room" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="+ Servant Room"
            onClick={() => setSelected("+ Servant Room")}
            variant={selected === "+ Servant Room" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                selected === "+ Servant Room" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
        </Stack>
      </div>

      <div>
        <p className="para6" style={{ marginTop: "7vh" }}>
          Floor Details
        </p>
        <p className="para7">Total no of floors and your floor details</p>
      </div>
      <div className="d-flex flex-row">
        <div style={{ margin: "5vh", marginTop: "2vh" }}>
          <div className="input-group mb-3">
            Total Floors
            <input
              type="text"
              //   class="form-control"
              placeholder="Type here"
              aria-label="state"
              aria-describedby="basic-addon1"
              style={{ marginTop: "4vh", marginLeft: "-12vh", padding: "1vh" }}
            />
          </div>
        </div>
        <div style={{ margin: "5vh", marginTop: "2vh" }}>
          <div className="input-group mb-3">
            Property on Floor
            <input
              type="text"
              //   class="form-control"
              placeholder="Type here"
              aria-label="state"
              aria-describedby="basic-addon1"
              style={{ marginTop: "4vh", marginLeft: "-18vh", padding: "1vh" }}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="para6" style={{ marginTop: "1vh" }}>
          Availability Status
        </p>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip3">
          <Chip
            label="Ready to move"
            onClick={() => setSelected("Ready to move")}
            variant={selected === "Ready to move" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                selected === "Ready to move" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="Under Construction"
            onClick={() => setSelected("Under Construction")}
            variant={selected === "Under Construction" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                selected === "Under Construction" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
        </Stack>
      </div>
      <div>
        <p className="para6" style={{ marginTop: "8vh" }}>
          Age of Property
        </p>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip3">
          <Chip
            label="0-1 Years"
            onClick={() => setSelected("0-1 Years")}
            variant={selected === "0-1 Years" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor: selected === "0-1 Years" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="1-5 Years"
            onClick={() => setSelected("1-5 Years")}
            variant={selected === "1-5 Years" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor: selected === "1-5 Years" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="5-10 Years"
            onClick={() => setSelected("5-10 Years")}
            variant={selected === "5-10 Years" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor: selected === "5-10 Years" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="10+ Years"
            onClick={() => setSelected("10+ Years")}
            variant={selected === "10+ Years" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor: selected === "10+ Years" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
        </Stack>
      </div>
      <div>
        <button
          type="submit"
          className="button"
          onClick={() => props.updateFormPage("increase")}
          style={{ marginTop: "8vh", marginLeft:"2vh" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default OwnerDashboard3;