import React, { useState } from "react";
import PropertyOwnerFormPage1 from "../components/propertyOwnerDashboard";
import PropertyOwnerFormPage2 from "../components/propertyOwnerDashboard/PropertyOwnerFormPage2";
import PropertyOwnerFormPage3 from "../components/propertyOwnerDashboard/PropertyOwnerFormPage3";

function PropertyOwnerDashboard() {
  const [formPageNum, setformPageNum] = useState(1);
  const updateFormPage = (actionType) => {
    if (actionType === "increase") {
      setformPageNum(formPageNum + 1);
    } else setformPageNum(formPageNum - 1);
  };
  return (
    <>
      {formPageNum === 1 && (
        <PropertyOwnerFormPage1 updateFormPage={updateFormPage} />
      )}
      {formPageNum === 2 && (
        <PropertyOwnerFormPage2 updateFormPage={updateFormPage} />
      )}
      {formPageNum === 3 && (
        <PropertyOwnerFormPage3 updateFormPage={updateFormPage} />
      )}
    </>
  );
}

export default PropertyOwnerDashboard;
