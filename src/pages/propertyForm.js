import React, { useState } from "react";
import PropertyOwnerFormPage1 from "../components/propertyForm";
import PropertyOwnerFormPage2 from "../components/propertyForm/PropertyOwnerFormPage2";
import PropertyOwnerFormPage3 from "../components/propertyForm/PropertyOwnerFormPage3";
import PropertyOwnerFormPage4 from "../components/propertyForm/PropertyOwnerFormPage4";
import PropertyOwnerFormPage5 from "../components/propertyForm/PropertyOwnerFormPage5";

function PropertyFormDetails() {
  const [formPageNum, setformPageNum] = useState(1);
  const updateFormPage = (actionType) => {
    if (actionType === "increase") {
      setformPageNum(formPageNum + 1);
    } else setformPageNum(formPageNum - 1);
  };
  return (
    <>
      {formPageNum === 1 && (
        <PropertyOwnerFormPage1 updateFormPage={updateFormPage}  formPageNum={formPageNum}/>
      )}
      {formPageNum === 2 && (
        <PropertyOwnerFormPage2 updateFormPage={updateFormPage} formPageNum={formPageNum} />
      )}
      {formPageNum === 3 && (
        <PropertyOwnerFormPage3 updateFormPage={updateFormPage} formPageNum={formPageNum} />
      )}
      {formPageNum === 4 && (
        <PropertyOwnerFormPage4 updateFormPage={updateFormPage} formPageNum={formPageNum} />
      )}
      {formPageNum === 5 && (
        <PropertyOwnerFormPage5 updateFormPage={updateFormPage} formPageNum={formPageNum}/>
      )}
    </>
  );
}

export default PropertyFormDetails;
