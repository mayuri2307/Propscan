import React, { useEffect, useState } from "react";
import PropertyOwnerFormPage1 from "./propertyBasicDetails/index";
import PropertyOwnerFormPage2 from "./propertyLocationDetails/index";
import PropertyOwnerFormPage3 from "./propertyPropertyProfile/index";
import PropertyOwnerFormPage4 from "./propertyPhotos/index";
import PropertyOwnerFormPage5 from "./PropertyPricing/index";
import axios from "axios";
import { propscan_base_url } from "../utils/Route";

function Index() {
  const [listing_type, setListing_Type] = useState();
  const [property_sub_type, setProperty_sub_Type] = useState();
  const [property_type, setProperty_Type] = useState();
  const [city, setCity] = useState();
  const [locality, setLocality] = useState();
  const [locality_society, setLocality_Society] = useState();
  const [house_number, setHouse_Number] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [balconies, setBalconies] = useState();
  const [other_rooms, setOther_Rooms] = useState();
  const [furnishing_type, setFurnishing_Type] = useState();
  const [availability_status, setAvailability_Status] = useState();
  const [age_of_property, setAge_Of_Property] = useState();
  const [type, setType] = useState();

  const data_type_1 = {
    user: 1,
    is_listed: true,
    status: "Listed",
    contacted: false,
    listing_type: listing_type,
    property_sub_type: property_sub_type,
    property_type: property_type,
    city: city,
    locality: locality,
    locality_society: locality_society,
    sub_locality: "Sub-Locality Name",
    flat_number: "101",
    house_number: house_number,
    floor_number: "1",
    bhk_type: "2BHK",
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    balconies: balconies,
    other_rooms: other_rooms,
    furnishing_type: furnishing_type,
    parking_available: true,
    covered_parking: true,
    total_floors: 10,
    availability_status: availability_status,
    age_of_property: age_of_property,
    images_link: "http://example.com/images/property.jpg",
    ownership_type: "freehold",
    expected_price: 5000000,
    price_per_sq_ft: 5000.0,
    price_type: "all_inclusive_price",
    maintenance_amount: 2000,
    expected_rental: 20000,
    booking_amount: 10000,
    annual_dues_payable: 2000,
    membership_charge: 1000,
    unique_description: "This is a 2BHK flat located in a prime locality...",
    brokerage: true,
    brokerage_type: "fixed",
    brokerage_amount: 50000,
    negotiable: true,
    maintenance_staff: true,
    water_storage: true,
    rain_water_harvesting: false,
    vaastu_compliant: true,
    solar_panels: false,
    overlooking_pool: false,
    overlooking_park: true,
    overlooking_club: false,
    overlooking_main_road: true,
    gated_society: true,
    corner_property: false,
    property_facing_direction: "north",
    location_advantages: "Located near a school and a shopping mall...",
  };
  const data_type_2 = {
    user: 1,
    status: "Listed",
    listing_type: listing_type,
    property_type:property_type,
    property_sub_type: property_sub_type,
    city: city,
    locality:locality,
    locality_society: locality_society,
    sub_locality: "Sublocality123",
    flat_number: "12A",
    bhk: 2,
    super_built_up_area: 1200.5,
    built_up_area: 1100.25,
    carpet_area: 1000.0,
    no_of_bedrooms: bedrooms,
    no_of_bathrooms: bathrooms,
    balconies: balconies,
    other_rooms: other_rooms,
    furnishing:furnishing_type,
    parking: true,
    covered_parking: true,
    total_floors: 20,
    floor_number: 10,
    availability_status: availability_status,
    age_of_property: age_of_property,
    images_links: "http://example.com/images/property123.jpg",
    ownership: "freehold",
    expected_price: 1000000.0,
    price_per_sq_ft: 5000.0,
    all_inclusive_price: true,
    tax_and_govt_charges_excluded: false,
    price_negotiable: true,
    maintenance_amount: 2000.0,
    expected_rental: 20000.0,
    booking_amount: 10000.0,
    annual_dues_payable: 500.0,
    membership_charge: 1500.0,
    unique_description: "Beautiful apartment in the heart of the city.",
    brokerage: true,
    brokerage_type: "fixed",
    brokerage_amount: 2000,
    negotiable: true,
    maintenance_staff: true,
    water_storage: true,
    rain_water_harvesting: true,
    vaastu_compliant: true,
    solar_panels: false,
    overlooking_pool: false,
    overlooking_park: true,
    overlooking_club: false,
    overlooking_main_road: true,
    gated_society: true,
    corner_property: false,
    property_facing_direction: "north",
    location_advantages: "Near to the park, gym and shopping center.",
  };
  const data_type_3 = {
    user: 1,
    status: "Listed",
    listing_type: "sell",
    property_type: property_type,
    property_sub_type:property_sub_type,
    city: city,
    locality: locality,
    locality_society: locality_society,
    sub_locality: "Sublocality456",
    plot_number: "45B",
    plot_area: 5000.0,
    length: 100,
    breadth: 50,
    boundary_wall: true,
    number_of_open_sides: 2,
    any_construction_done: false,
    no_of_sheds_constructed: null,
    no_of_rooms_constructed: null,
    no_of_washrooms_constructed: null,
    number_of_floors_allowed_for_construction: 3,
    possession_expected_date: "2023-12-01",
    images_link: "http://example.com/images/property456.jpg",
    ownership: "leasehold",
    property_approving_authority: "rcuda",
    expected_price: 2000000.0,
    price_per_sq_ft: 400.0,
    all_inclusive_price: true,
    tax_and_govt_charges_excluded: false,
    price_negotiable: true,
    maintenance_amount: 1000.0,
    expected_rental: null,
    booking_amount: 10000.0,
    annual_dues_payable: 200.0,
    membership_charge: 1500.0,
    unique_description: "Spacious commercial plot in a prime location.",
    brokerage: false,
    brokerage_type: null,
    brokerage_amount: null,
    negotiable: null,
    maintenance_staff: true,
    water_storage: true,
    rain_water_harvesting: false,
    vaastu_compliant: true,
    solar_panels: true,
    overlooking_pool: false,
    overlooking_park: false,
    overlooking_club: false,
    overlooking_main_road: true,
    gated_society: true,
    corner_property: true,
    property_facing_direction: "south",
    location_advantages: "Close to the main road and shopping center.",
  };

  const handleSubmit = () => {
    if (type === 1) {
      axios
        .post(`${propscan_base_url}/property/create/type1`, {
          data_type_1,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else if (type === 2) {
      axios
        .post(`${propscan_base_url}/property/create/type2`, {
          data_type_2,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`${propscan_base_url}/property/create/type3`, {
          data_type_3,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

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
          setType={setType}
        />
      )}
      {formPageNum === 2 && (
        <PropertyOwnerFormPage2
          updateFormPage={updateFormPage}
          formPageNum={formPageNum}
          city={city}
          setCity={setCity}
          locality={locality}
          setLocality={setLocality}
          house_number={house_number}
          setHouse_Number={setHouse_Number}
          locality_society={locality_society}
          setLocality_Society={setLocality_Society}
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
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default Index;
