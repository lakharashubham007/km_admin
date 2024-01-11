
import axios from "axios";

export const getAllFacilityList = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "http://localhost:8086/v1/ht/admin/auth/get-facilities",      
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating  facility :", error);
    throw error;
  }
};

export const facilityCreateApi = async (formData) => {
  // const token = localStorage.getItem('token');

  console.log("formData", formData);
  
  try {
    const token = localStorage.getItem("token");    
    const response = await axios.post(
      "http://localhost:8086/v1/facility/create-facility",
      {
      facilityName: formData.facilityName,
      image: "formData.file",
    },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
    }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating  facility :", error);
    throw error;
  }
};

export const facilityUpdateApi = async (formData, id) => {
  console.log("formData", formData);
  try {
    const token = localStorage.getItem('token');

    const response = await axios.patch(
      `http://localhost:8086/v1/ht/admin/auth/update-facility/${id}`,
      {
        facilityName: formData.facilityName,
        image:" formData.file", // Assuming formData.file contains the image data
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error updating facility:', error);
    throw error;
  }
};

 
