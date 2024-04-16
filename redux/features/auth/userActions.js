// auth.js
import axios from "axios";
import { server } from "../../store";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

    console.log("Server URL login:", server); // Log server URL to check its value

    const { data } = await axios.post(
      `${server}/user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response Data:", data); // Log response data for debugging

    dispatch({
      type: "logingSuccess",
      payload: data,
    });
    await AsyncStorage.setItem("@auth", data?.token);
  } catch (error) {
    dispatch({
      type: "loginFail",
      payload: error.response.data.message,
    });
  }
};

//register action
export const register=(formData) => async (dispatch) => {
  try {
    dispatch({
      type: "registerRequest",
    });
    //hitting register
    const { data } = await axios.post(`${server}/user/register`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
    type:"registerSuccess",
    payload:data.message,
    })
  } catch (error) {
    console.log(error);
    dispatch({
      type: "registerFail",
      payload: error.response.data.message,
    });
  }
};
//get user data action
export const getUserData = () => async (dispatch) => {
  try {
    dispatch({
      type: "getUserDataRequest",
    });

    console.log("Server URL get data:", server); // Log server URL to check its value

    const { data } = await axios.post(`${server}/user/profile`);

    console.log("Response Data:", data); // Log response data for debugging

    dispatch({
      type: "getUserDataSuccess",
      payload: data?.user,
    });
  } catch (error) {
    dispatch({
      type: "getUserDataFail",
      payload: error.response.data.message,
    });
  }
};
//logout action
export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });

    console.log("Server URL logout:", server); // Log server URL to check its value

    const { data } = await axios.get(`${server}/user/logout`);

    console.log("Response Data:", data); // Log response data for debugging

    dispatch({
      type: "logoutSuccess",
      payload: data?.message,
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};
