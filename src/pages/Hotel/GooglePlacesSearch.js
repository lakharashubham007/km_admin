// GooglePlacesSearch.js

import React, { useState, useEffect } from "react";

const GooglePlacesSearch = ({ onSelectLocation }) => {
  const [query, setQuery] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [locationDetails, setLocationDetails] = useState({
    country: "",
    state: "",
    city: "",
    zipcode: "",
    lat: "",
    long: "",
  });

  useEffect(() => {
    // Load the Google Maps Places API script dynamically
    const googlePlacesScript = document.createElement("script");
    googlePlacesScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA3BYK_Siw8ebziSskitaA5YMjbvcO6n4U&libraries=places`;
    googlePlacesScript.async = true;
    window.document.body.appendChild(googlePlacesScript);

    googlePlacesScript.addEventListener("load", () => {
      console.log("Google Places API script loaded");
    });

    return () => {
      googlePlacesScript.removeEventListener("load", () => {});
      window.document.body.removeChild(googlePlacesScript);
    };
  }, []);

  useEffect(() => {
    if (selectedPlace) {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      service.getDetails(
        { placeId: selectedPlace.place_id },
        (placeDetails, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            const addressComponents = placeDetails.address_components;
            const geometry = placeDetails.geometry.location;

            setLocationDetails({
              country: getAddressComponent("country", addressComponents),
              state: getAddressComponent(
                "administrative_area_level_1",
                addressComponents
              ),
              city: getAddressComponent("locality", addressComponents),
              zipcode: getAddressComponent("postal_code", addressComponents),
              lat: geometry.lat(),
              long: geometry.lng(),
            });

            // Pass locationDetails to parent component
            onSelectLocation(locationDetails);
          }
        }
      );
    }
  }, [selectedPlace, onSelectLocation]);

  const getAddressComponent = (type, components) => {
    const component = components.find((comp) => comp.types.includes(type));
    return component ? component.long_name : "";
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    if (event.target.value) {
      getPlacePredictions(event.target.value);
    } else {
      setPredictions([]);
    }
  };

  const getPlacePredictions = (input) => {
    if (window.google) {
      const service = new window.google.maps.places.AutocompleteService();
      service.getPlacePredictions({ input }, (predictions, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPredictions(predictions);
        }
      });
    }
  };

  const handleSelectPrediction = (prediction) => {
    setQuery(prediction.description);
    setSelectedPlace(prediction);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a place..."
        value={query}
        onChange={handleChange}
      />
      <ul>
        {predictions.map((prediction) => (
          <li
            key={prediction.place_id}
            onClick={() => handleSelectPrediction(prediction)}
          >
            {prediction.description}
          </li>
        ))}
      </ul>
      {locationDetails.country && (
        <div>
          {/* Optional: Display selected location details */}
          <p>Country: {locationDetails.country}</p>
          <p>State: {locationDetails.state}</p>
          <p>City: {locationDetails.city}</p>
          <p>Zipcode: {locationDetails.zipcode}</p>
          <p>Latitude: {locationDetails.lat}</p>
          <p>Longitude: {locationDetails.long}</p>
        </div>
      )}
    </div>
  );
};

export default GooglePlacesSearch;
