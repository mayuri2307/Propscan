import React, { useState } from "react";
import "./PropertyPricing.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";

function PropertyPricing(props) {
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
        <p className="para_text">Add pricing and details...</p>
      </div>
      <div style={{ display: "flex" }}>
        <p className="para_text3">Ownership</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-question-circle"
          viewBox="0 0 16 16"
          style={{ marginLeft: "-76.5vh", marginTop: "7.5vh" }}
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
        </svg>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip4">
          <Chip
            label="Freehold"
            onClick={() => setSelected("Freehold")}
            variant={selected === "Freehold" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-2vh",
              marginLeft: "4.5vh",
              backgroundColor: selected === "Freehold" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="Leasehold"
            onClick={() => setSelected("Leasehold")}
            variant={selected === "Leasehold" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-2vh",
              backgroundColor: selected === "Leasehold" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="Co-operative society"
            onClick={() => setSelected("Co-operative society")}
            variant={
              selected === "Co-operative society" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-2vh",
              backgroundColor:
                selected === "Co-operative society" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="Power of Attorney"
            onClick={() => setSelected("Power of Attorney")}
            variant={selected === "Power of Attorney" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-2vh",
              backgroundColor:
                selected === "Power of Attorney" ? "#E8F9FD" : "white",
            }}
          />
        </Stack>
      </div>
      <div>
        <p style={{ marginTop: "6vh" }} className="para_text3">
          Price Details
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <p className="para_text4">Expected Price</p>
          <input
            // size="15"
            type="text"
            placeholder="Rs. | Expected Price"
            style={{ padding: "1vh", marginLeft: "4vh" }}
          />
        </div>
        <div>
          <p className="para_text4">Price per sq.ft</p>
          <input
            // size="15"
            type="text"
            placeholder="Rs. | Expected Price"
            style={{ padding: "1vh", marginLeft: "4vh" }}
          />
        </div>
      </div>
      <div style={{ marginLeft: "5vh" }}>
        <input
          type="checkbox"
          id="All inclusive price"
          name="All inclusive price"
        />

        <label
          className="para_text5"
          htmlForfor="All inclusive price"
          style={{ marginLeft: "1vh", width: "10%" }}
        >
          All inclusive price
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-question-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
        </svg>
        <input
          type="checkbox"
          id="Tax and Govt. changes excludes"
          name="Tax and Govt. changes excludes"
          style={{ marginLeft: "3vh" }}
        />

        <label
          className="para_text5"
          htmlForfor="Tax and Govt. changes excludes"
          style={{ marginLeft: "1vh", width: "18%" }}
        >
          Tax and Govt. changes excludes
        </label>
        <input
          type="checkbox"
          id="All inclusive price"
          name="All inclusive price"
        />

        <label
          className="para_text5"
          htmlForfor="All inclusive price"
          style={{ marginLeft: "1vh", width: "10%" }}
        >
          Price Negotiable
        </label>
      </div>
      <div className="icon2">
        <AddIcon />
        Add more pricing details
      </div>
      <div>
        <p className="para_text6">What makes your property unique</p>
        <p className="para_text7">
          Adding description will increase your listing visibility
        </p>
        <textarea
          name="text"
          id="text"
          cols="80"
          rows="10"
          style={{ marginLeft: "5vh" }}
          placeholder="Share some details about your propery like spacious rooms,well maintained facilites.."
        />
        <p style={{ marginTop: "1vh" }} className="para_text3">
          Minimum 30 character required
        </p>
      </div>
    </div>
  );
}

export default PropertyPricing;
