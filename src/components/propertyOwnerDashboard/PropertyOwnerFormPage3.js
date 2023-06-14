import React from "react";
// import React from "react";
import ProgressStepper from "./ProgressStepper";
import "./progressStepper.css";
import LoggedInHeader from "../header/LoggedInHeader";
import OwnerDashborad3 from "./OwnerDashboard3";

function PropertyOwnerFormPage3(props) {
  return (
    <div>
      <LoggedInHeader></LoggedInHeader>
      <div>
        <div class="row">
          <div
            class="col"
            style={{
              borderRight: "1px solid rgba(0, 0, 0, 0.1)",
              mixBlendMode: "darken",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
          >
            <ProgressStepper></ProgressStepper>
          </div>
          <div class="col-10">
            <OwnerDashborad3 updateFormPage={props.updateFormPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyOwnerFormPage3;
