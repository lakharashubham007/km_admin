import axios from "axios";

export const fetchHotelsDropdownListApi = async () => {
  try {
    // const token = localStorage.getItem("token").replace(/^"(.*)"$/, "$1");
    const response = await axios.get(
      "http://localhost:8086/v1/ht/hotels/get-hotels",
      {
        headers: {
          "Content-Type": "application/json",
        //   Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating  facility :", error);
    throw error;
  }
};