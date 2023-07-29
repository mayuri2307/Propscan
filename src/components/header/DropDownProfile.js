import React, { useState } from "react";
import "./DropDownProfile.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function DropDownProfile() {
  const [Edit, setEdit] = useState(false);
  const [city, setCity] = useState("Faridabad");
  const [state, setState] = useState("Haryana");
  const [country, setCountry] = useState("India");
  const [zipCode, setZipCode] = useState("121001");
  const [phone, setphone] = useState("+91-9012345681");
  const [email, setemail] = useState("xyz@gmail.com");

  return (
    <div className="flex flex-col dropDownProfile">
      <div>
        <button className="btn button4" onClick={() => setEdit(true)}>
          Edit
        </button>
      </div>
      <Stack style={{ marginLeft: "20vh", marginTop: "5vh" }}>
        <Avatar src="/broken-image.jpg" />
        <p style={{ marginLeft: "-5vh" }} className="para4">
          USER PROFILE
        </p>
      </Stack>
      <hr
        style={{
          width: "309px",
          height: "1px",
          backgroundColor: "#0D2855",
          marginLeft: "2vh",
        }}
      />

      <div class="container">
        <div class="row">
          <div class="col para8">
            <p>City</p>
            <p>State</p>
            <p>Country</p>
            <p>Zip Code</p>
            <p>Phone</p>
            <p>Email</p>
          </div>
          {Edit === false ? (
            <div class="col para9">
              <p>Bathinda</p>
              <p>Punjab</p>
              <p>India</p>
              <p>151001</p>
              <p>+91-9825647892</p>
              <p>humarauser@gmail.com</p>
            </div>
          ) : (
            <div class="col para9" style={{ marginTop: "-1vh" }}>
              <input
                type="text"
                className="border-0"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                className="border-0"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <input
                type="text"
                className="border-0"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <input
                type="text"
                className="border-0"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
              <input
                type="text"
                className="border-0"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
              <input
                type="email"
                className="border-0"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <button className="button5">Submit</button>
      </div>
    </div>
  );
}

export default DropDownProfile;
