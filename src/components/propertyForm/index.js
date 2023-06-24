import React from "react";
import ProgressStepper from "../propertyForm/progressStepper/index";
import LoggedInHeader from "../header/LoggedInHeader";
import PropertyBasciDetails from "./propertyBasicDetails/index";

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
            <ProgressStepper
              formPageNum={props.formPageNum}
            ></ProgressStepper>
          </div>
          <div class="col-10">
            <PropertyBasciDetails
              updateFormPage={props.updateFormPage}
            ></PropertyBasciDetails>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyOwner;
