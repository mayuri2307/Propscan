import React from "react";
import ProgressStepper from "./ProgressStepper";
import LoggedInHeader from "../header/LoggedInHeader";
import OwnerDashboard from "./OwnerDashboard";

function PropertyOwner(props) {
  return (
    <div>
      <LoggedInHeader></LoggedInHeader>
      <div>
        <div class="row">
          <div
            class="col"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              mixBlendMode: "darken",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
          >
            <ProgressStepper></ProgressStepper>
          </div>
          <div class="col-10">
            <OwnerDashboard
              updateFormPage={props.updateFormPage}
            ></OwnerDashboard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyOwner;
