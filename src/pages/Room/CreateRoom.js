import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Container } from "reactstrap";
import GenralForm from "../../components/Form/GenricForm/GenralForm";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHotelDropdownOptions,
  getCategories,
  getDeals,
  getFacilityList,
} from "../../store/actions";

const CreateRoom = () => {
  const dispatch = useDispatch();
  const [
    hotelDropdownOptions,
    categories,
    facilitiesDropdownOptions,
    DealsDropdownOptions,
  ] = useSelector((state) => [
    state.Room.hotelDropdownOptions.hotels,
    state.RoomCategory.category,
    state.Facility.facilities,
    state.Deals.deals,
  ]);

  const [formData, setFormData] = useState({
    hotel: "",
    category: "",
    facilities: [],
    gallary: "",
    thumbnail: "",
  });
  console.log(formData);

  const handleFormChange = (fieldName, value) => {
    console.log(fieldName, value);
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  useEffect(() => {
    dispatch(fetchHotelDropdownOptions());
    dispatch(getCategories());
    dispatch(getFacilityList());
    dispatch(getDeals());
  }, []);

  const [ 
    hotelsListOption,
    roomCategoryOptions, 
    facilitiesOptions,
    dealsOptions
  ] = [
    hotelDropdownOptions?.map((hotel) => ({
      value: hotel.name,
      label: hotel.name,
    })),
    categories?.map((category) => ({
      value: category.category,
      label: category.category,
    })),
    facilitiesDropdownOptions?.map((facilities) => ({
      value: facilities.facilityName,
      label: facilities.facilityName,
    })),
    DealsDropdownOptions?.map((deals) => ({
      value: deals.name,
      label: deals.name,
    })),
  ];

  const formFields = {
    backbutton: "/rooms",
    form: [
      {
        fieldName: "hotel",
        label: "Hotel",
        type: "select",
        errorMessage: "Please Select Hotel",
        value: formData.hotel,
        options: hotelsListOption,
      },
      {
        fieldName: "category",
        label: "Room Category",
        type: "select",
        errorMessage: "Select Room Category Name",
        value: formData.category,
        placeholder: "Select Room Category Name eg: Delux,SuperDelux...",
        options: roomCategoryOptions,
      },
      {
        fieldName: "facilities",
        label: "Facilities",
        type: "select",
        errorMessage: "Select Facilities For Room",
        value: formData.facilities,
        placeholder: "Select Facilities For Room eg: TV,AC,WiFi...",
        isMulti: true,
        options: facilitiesOptions,
      },
      {
        fieldName: "deals",
        label: "Deals",
        type: "select",
        errorMessage: "Select Deals For Room",
        // value: formData.facilities,
        placeholder: "Select Deals For Room",
        isMulti: true,
        options: dealsOptions,
      },
      {
        fieldName: "thumbnail",
        label: "Thumbnail",
        type: "file",
        errorMessage: "Select File",
        value: formData.thumbnail,
        placeholder: "Select Image...",
        imageViewer: true, // Enable image viewer for this field
      },
      {
        fieldName: "gallary",
        label: "Gallary",
        type: "file",
        errorMessage: "Select File",
        placeholder: "Select Image...",
        value: formData.gallary,
        multiple: true,
        imageViewer: true, // Enable image viewer for this field
      },
    ],
  };

  const handleSubmit = () => {};
  return (
    <div className="page-content">
      <Container fluid={true}>
        <Card>
          <CardBody>
            <GenralForm formFields={formFields} onChange={handleFormChange} />
            <Button color="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default CreateRoom;

//helping code for set options in dropdown by singel function

// const hotelsListOption = hotelDropdownOptions?.map((hotel) => ({
//   value: hotel.name,
//   label: hotel.name,
// }));

// const roomCategoryOptions = categories?.map((category) => ({
//   value: category.category,
//   label: category.category,
// }));
