import axios from 'axios';
import { setSidebarMenus } from '../../../store/actions';


const getSidebarMenus = async (token,dispatch) => {
  

  try {
    const response = await axios.get("http://localhost:8086/v1/api/admin/auth/sidebar-menus", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    // dispatch(setSidebarMenus(response.data));
    return response.data;
  } catch (error) {
    console.error("Error fetching sidebar menus:", error);
    throw error;
  }
};

export default getSidebarMenus;
