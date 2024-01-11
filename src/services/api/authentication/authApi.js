import axios from 'axios';
import { loginUserSuccessful } from '../../../store/actions';

export const login = async (formData, dispatch) => {
  try {
    // Make the API call using Axios
    const response = await axios.post(
      'http://localhost:8086/v1/auth/login',
      {
        email: formData.username,
        password: formData.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.status === 200) {
      localStorage.setItem('token', response.data.tokens.token);
      dispatch(loginUserSuccessful(response.data));
    } else {
      // Handle errors or display error message
      console.log('Invalid credentials. Please try again.');
    }
  } catch {
    console.log('Error in API call:');
    // throw error;
  }
}


export const logout = async (token) => {
  try {
    const response = await axios.post(
      'http://localhost:8086/v1/auth/logout',
      {
        token: token
      })
    if (response.status === 200) {
      localStorage.removeItem('token');
    } else {
      console.log("Sending wrong token value!");
    }
  } catch {
    console.log("Logout Failed!");
  }
}

