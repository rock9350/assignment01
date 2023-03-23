import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./formData"

export default configureStore({
    reducer:{
        arr: authSlice
    }
})