import React, { useEffect } from "react";
import "./owner.css";
import axios from "axios";


export default function Owner1() {
  // let Api = "https://prop-scan.vercel.app/accounts/login_user/";

  useEffect(() => {
    axios
      .post("https://prop-scan.vercel.app/accounts/login_user/", {
        phone_number: "+918588036332",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div>
        <p className="paragraph1">Personal Information</p>
      </div>
      <div style={{ marginTop: "-1.5vh" }}>
        <div>
          <div>
            <div
              className="input-group mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                className="input-group-text icon_style"
                style={{
                  backgroundColor: "white",
                  border: " 1px solid #0D2855",
                  borderRadius: "30px 0px 0px 30px",
                  padding: "0.7vh",
                  marginTop: "0.1vh",
                }}
              >
                <img src="images/name_icon.png" alt="Not found!" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                aria-label="Full Name"
                style={{ marginTop: "1vh" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              className="input-group mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                className="input-group-text icon_style"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #0D2855",
                  borderRadius: "30px 0px 0px 30px",
                  padding: "0.8vh",
                  marginTop: "-2vh",
                }}
              >
                <img src="images/smartphone_icon.png" alt="Not found!" />
              </span>
              <input
                type="tel"
                className="form-control"
                placeholder="+91Mobile Number"
                aria-label="phone"
                style={{ marginTop: "-1vh", borderRadius: "0px 30px 30px 0px" }}
              />
              <div>
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{
                    borderRadius: "20px",
                    fontSize: "8px",
                    marginLeft: "-8vh",
                    marginTop: "-2vh",
                  }}
                >
                  Verify
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5>Enter Otp here :</h5>
                        <div>
                          <input
                            style={{
                              padding: "1vh",
                              marginLeft: "-42vh",
                            
                            }}
                            type="text"
                            placeholder="Enter Otp"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          close
                        </button>
                        <button type="button" className="btn btn-primary">
                          confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              className="input-group mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                className="input-group-text icon_style"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #0D2855",
                  borderRadius: "30px 0px 0px 30px",
                  padding: "1.2vh",
                  marginTop: "-2vh",
                }}
              >
                <img src="images/email_icon.png" alt="Not found!" />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Email Id"
                aria-label="email"
                style={{ marginTop: "-1vh" }}
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
      </div>
      <div style={{ marginTop: "-4.5vh", marginLeft: "6.5vh" }}>
        <label className="lable">Add additional information now</label>
      </div>
      <div
        style={{ textAlign: "center", marginBottom: "0.6vh", marginTop: "2vh" }}
      >
        <button className="btn1" type="submit">
          CONFIRM
        </button>
      </div>
    </div>
  );
}
