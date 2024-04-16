// store.js
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './features/auth/userReducer';



export default configureStore({
  reducer: {
    user: userReducer
  },
});

//host
export const server = "https://ecomappserver.onrender.com/api/v1";