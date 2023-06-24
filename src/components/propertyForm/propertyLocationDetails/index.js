import React from "react";
import "./index.css";

function PropertyLocationDetails(props) {
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
        <h2 style={{ marginTop: "0.5vh" }} className="heading">
          Where is your property located?
        </h2>
      </div>
      <div>
        <p className="para">
          An accurate location helps you connect with right buyers
        </p>
      </div>
      <div style={{ margin: "5vh", marginTop: "-2vh" }}>
        <div className="input-group mb-3">
          state
          <input
            type="text"
            //   class="form-control"
            placeholder="Type here"
            aria-label="state"
            aria-describedby="basic-addon1"
            style={{ marginTop: "4vh", marginLeft: "-6vh", padding: "1vh" }}
          />
        </div>
        <div className="input-group mb-3" style={{ marginTop: "-0.5vh" }}>
          City
          <input
            type="text"
            //   class="form-control"
            placeholder="Type here"
            aria-label="City"
            aria-describedby="basic-addon1"
            style={{ marginTop: "4vh", marginLeft: "-5vh", padding: "1vh" }}
          />
        </div>
        <div className="input-group mb-3" style={{ marginTop: "-0.5vh" }}>
          Apartment/Society
          <input
            type="text"
            //   class="form-control"
            placeholder="Type here"
            aria-label="Apartment/Society"
            style={{ marginTop: "4vh", marginLeft: "-22vh", padding: "1vh" }}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3" style={{ marginTop: "-0.5vh" }}>
          Locality
          <input
            type="text"
            //   class="form-control"
            placeholder="Type here"
            aria-label="Locality"
            aria-describedby="basic-addon1"
            style={{ marginTop: "4vh", marginLeft: "-9vh", padding: "1vh" }}
          />
        </div>
        <div className="input-group mb-3" style={{ marginTop: "-0.5vh" }}>
          House.no(optional)
          <input
            type="text"
            //   class="form-control"
            placeholder="Type here"
            aria-label=" House.no"
            aria-describedby="basic-addon1"
            style={{ marginTop: "4vh", marginLeft: "-23vh", padding: "1vh" }}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="button"
          onClick={() => props.updateFormPage("increase")}
          style={{ marginTop: "-1vh" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default PropertyLocationDetails;
