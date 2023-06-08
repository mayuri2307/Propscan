import React from "react";
import "./owner.css";

export default function Owner1() {
  return (
    <div class="container">
      <div>
        <p className="p">Personal Information</p>
      </div>
      <div>
        <div>
          <div>
            <div
              class="input-group mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                class="input-group-text icon_style"
                style={{
                  backgroundColor: "white",
                  border: " 1px solid #0D2855",
                  borderRadius: "30px 0px 0px 30px",
                  padding:"0.9vh"
                }}
              >
                <img src="images/name_icon.png" />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Full Name"
                aria-label="Full Name"
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              class="input-group mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                class="input-group-text icon_style"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #0D2855",
                  borderRadius: "30px 0px 0px 30px",
                  padding: "1vh",

                }}
              >
                <img src="images/smartphone_icon.png" />
              </span>
              <input
                type="tel"
                class="form-control"
                placeholder="+91  Mobile Number"
                aria-label="phone"
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              class="input-group mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                class="input-group-text icon_style"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #0D2855",
                  borderRadius: "30px 0px 0px 30px",
                  padding: "1.4vh",
                }}
              >
                <img src="images/email_icon.png" />
              </span>
              <input
                type="email"
                class="form-control"
                placeholder="Email Id"
                aria-label="email"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="form-check "
        style={{ marginLeft: "4vh", marginTop: "-1.5vh" }}
      >
        <input
          className="form-check-input checkout"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label text" for="flexCheckDefault">
          Add additional information now
        </label>
      </div>
      <div style={{ textAlign: "center", marginBottom: "0.6vh" }}>
        <button className="btn1" type="submit">
          CONFIRM
        </button>
      </div>
    </div>
  );
}
