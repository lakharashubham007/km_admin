// import React, { useState } from "react";
// import { Row, Col, Label, Input, Form } from "reactstrap";
// // import AddressInput from "../../components/Form/FormComponents/AddressInput";
// import { TextInput  } from "../../components/Form/FormComponents";
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from "react-places-autocomplete";

// const LocationFrom = () => {
//   const [formData, setFormData] = useState({
//     country: "",
//     state: "",
//     address: "",
//     city: "",
//     zipcode: "",
//   });

//   const handleInputChange = (event, field) => {
//     const { value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [field]: value }));
//   };

//   const handleAddressSelect = async (address) => {
//     try {
//       const results = await geocodeByAddress(address);
//       const latLng = await getLatLng(results[0]);

//       setFormData((prevData) => ({
//         ...prevData,
//         address,
//         country: "", // Set the country based on the results if needed
//         state: "",   // Set the state based on the results if needed
//         city: "",    // Set the city based on the results if needed
//         zipcode: "", // Set the zipcode based on the results if needed
//         // You can also set other location-related data based on the results
//       }));
//     } catch (error) {
//       console.error("Error selecting address", error);
//     }
//   };

//   return (
//     <Form>
//       <Row>
//         <Col lg="12">
//           {/* Google Maps Autocomplete */}
//           <Label>Address</Label>
//           <PlacesAutocomplete
//             value={formData.address}
//             onChange={(value) => handleInputChange({ target: { value } }, "address")}
//             onSelect={handleAddressSelect}
//           >
//             {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//               <div>
//                 <Input
//                   {...getInputProps({
//                     placeholder: "Type address...",
//                     className: "form-control",
//                   })}
//                 />
//                 <div>
//                   {loading ? <div>Loading...</div> : null}
//                   {suggestions.map((suggestion) => (
//                     <div {...getSuggestionItemProps(suggestion)}>
//                       {suggestion.description}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </PlacesAutocomplete>
//         </Col>
//       </Row>

//       <Row>
//         <Col lg="6">
//           {/* Country */}
//           <TextInput
//             label="Country"
//             id="country-input"
//             value={formData.country}
//             onChange={(e) => handleInputChange(e, "country")}
//             placeholder="Enter Country"
//           />
//         </Col>

//         <Col lg="6">
//           {/* State */}
//           <TextInput
//             label="State"
//             id="state-input"
//             value={formData.state}
//             onChange={(e) => handleInputChange(e, "state")}
//             placeholder="Enter State"
//           />
//         </Col>
//       </Row>

//       <Row>
//         <Col lg="6">
//           {/* City */}
//           <TextInput
//             label="City"
//             id="title-input"
//             value={formData.city}
//             onChange={(e) => handleInputChange(e, "city")}
//             placeholder="Enter City Name"
//           />
//         </Col>

//         <Col lg="6">
//           {/* Zipcode */}
//           <TextInput
//             label="Zipcode"
//             id="zipcode-input"
//             value={formData.zipcode}
//             onChange={(e) => handleInputChange(e, "zipcode")}
//             placeholder="Enter Zipcode"
//           />
//         </Col>
//       </Row>
//     </Form>
//   );
// };

// export default LocationFrom;
