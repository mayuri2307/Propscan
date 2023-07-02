import React, { useState } from "react";
import PropertyOwnerFormPage1 from "./propertyBasicDetails/index";
import PropertyOwnerFormPage2 from "./propertyLocationDetails/index";
import PropertyOwnerFormPage3 from "./propertyPropertyProfile/index";
import PropertyOwnerFormPage4 from "./propertyPhotos/index";
import PropertyOwnerFormPage5 from "./PropertyPricing/index";

function Index() {
  const [listing_type, setListing_Type] = useState();
  const [property_sub_type, setProperty_sub_Type] = useState();
  const [property_type, setProperty_Type] = useState();
  const [city, setCity] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [balconies, setBalconies] = useState();
  const [other_rooms, setOther_Rooms] = useState();
  const [furnishing_type, setFurnishing_Type] = useState();
  const [availability_status, setAvailability_Status] = useState();
  const [age_of_property, setAge_Of_Property] = useState();

  const [formPageNum, setformPageNum] = useState(1);
  const updateFormPage = (actionType) => {
    if (actionType === "increase") {
      setformPageNum(formPageNum + 1);
    } else setformPageNum(formPageNum - 1);
  };
  return (
    <>
      {formPageNum === 1 && (
        <PropertyOwnerFormPage1
          updateFormPage={updateFormPage}
          formPageNum={formPageNum}
          setListing_Type={setListing_Type}
          listing_type={listing_type}
          property_sub_type={property_sub_type}
          setProperty_sub_Type={setProperty_sub_Type}
          property_type={property_type}
          setProperty_Type={setProperty_Type}
        />
      )}
      {formPageNum === 2 && (
        <PropertyOwnerFormPage2
          updateFormPage={updateFormPage}
          formPageNum={formPageNum}
          city={city}
          setCity={setCity}
        />
      )}
      {formPageNum === 3 && (
        <PropertyOwnerFormPage3
          updateFormPage={updateFormPage}
          formPageNum={formPageNum}
          bedrooms={bedrooms}
          setBedrooms={setBedrooms}
          bathrooms={bathrooms}
          setBathrooms={setBathrooms}
          balconies={balconies}
          setBalconies={setBalconies}
          other_rooms={other_rooms}
          setOther_Rooms={setOther_Rooms}
          furnishing_type={furnishing_type}
          setFurnishing_Type={setFurnishing_Type}
          availability_status={availability_status}
          setAvailability_Status={setAvailability_Status}
          age_of_property={age_of_property}
          setAge_Of_Property={setAge_Of_Property}
        />
      )}
      {formPageNum === 4 && (
        <PropertyOwnerFormPage4
          updateFormPage={updateFormPage}
          formPageNum={formPageNum}
        />
      )}
      {formPageNum === 5 && (
        <PropertyOwnerFormPage5
          updateFormPage={updateFormPage}
          formPageNum={formPageNum}
        />
      )}
    </>
  );
}

export default Index;
